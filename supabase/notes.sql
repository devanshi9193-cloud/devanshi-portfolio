-- Notes wall for the Playground page (Nov 2026).
-- Visitors can send a note and can read only approved notes. Nothing else.
-- Devanshi approves a note by ticking "approved" in the Supabase Table Editor.

create table if not exists public.notes (
  id          bigint generated always as identity primary key,
  text        text not null check (char_length(btrim(text)) between 1 and 240),
  name        text check (name is null or char_length(name) <= 40),
  approved    boolean not null default false,
  created_at  timestamptz not null default now()
);

alter table public.notes enable row level security;

-- Visitors (the public "anon" role) may only read approved notes ...
drop policy if exists "Read approved notes" on public.notes;
create policy "Read approved notes" on public.notes
  for select to anon using (approved = true);

-- ... and may only add new, unapproved notes.
drop policy if exists "Send a note for review" on public.notes;
create policy "Send a note for review" on public.notes
  for insert to anon with check (approved = false);

-- Column limits: visitors can never set "approved", the id or the date, and can't update or delete.
revoke all on public.notes from anon, authenticated;
grant select (text, name, created_at) on public.notes to anon;
grant insert (text, name) on public.notes to anon;
