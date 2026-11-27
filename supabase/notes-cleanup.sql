-- Notes wall: rejecting notes (Nov 2026).
-- Run this once in Supabase: SQL Editor -> New query -> paste all of it -> Run.
--
-- After this, to reject a note in the Table Editor, either tick its "rejected" box or delete the row.
-- Either way the note is deleted straight away, and the person who sent it stops seeing it
-- ("Waiting for approval") on their own device the next time they open the Notes wall.
-- Notes you haven't decided on yet are kept; nothing is deleted on a timer.

-- 1. A private token for each note (made by the visitor's browser) so the sender's device can ask
--    "is my note still waiting?" without anyone being able to read unapproved notes.
alter table public.notes add column if not exists token uuid;
alter table public.notes add column if not exists rejected boolean not null default false;
grant insert (text, name, token) on public.notes to anon;

-- 2. Ticking "rejected" deletes the note at once.
create or replace function public.delete_rejected_note() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  delete from public.notes where id = new.id;
  return null;
end $$;
drop trigger if exists delete_rejected_note on public.notes;
create trigger delete_rejected_note after update of rejected on public.notes
  for each row when (new.rejected) execute function public.delete_rejected_note();

-- 3. The sender's device sends its tokens and gets back only those notes that still exist.
--    It never sees anyone else's notes or the text of unapproved ones.
create or replace function public.note_status(tokens uuid[])
returns table (token uuid, approved boolean)
language sql stable security definer set search_path = public as $$
  select n.token, n.approved from public.notes n
  where n.token = any(tokens) and not n.rejected
$$;
revoke all on function public.note_status(uuid[]) from public;
grant execute on function public.note_status(uuid[]) to anon;

-- 4. Turn off the earlier 24-hour delete job, if it was ever set up.
do $$ begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule(jobid) from cron.job where jobname = 'delete-unapproved-notes';
  end if;
end $$;
