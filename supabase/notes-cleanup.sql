-- Notes wall cleanup (Nov 2026).
-- A note that hasn't been approved within 24 hours counts as rejected and is deleted for good.
-- Runs once an hour, so a rejected note is gone between 24 and 25 hours after it was sent.
-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run.

create extension if not exists pg_cron;

-- replace the job if it already exists
select cron.unschedule(jobid) from cron.job where jobname = 'delete-unapproved-notes';

select cron.schedule(
  'delete-unapproved-notes',
  '0 * * * *',
  $$ delete from public.notes where approved = false and created_at < now() - interval '24 hours' $$
);

-- To check it's set up:  select * from cron.job;
-- To turn it off:        select cron.unschedule('delete-unapproved-notes');
