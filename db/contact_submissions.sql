-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  body text not null
);

alter table public.contact_submissions enable row level security;

-- Public form uses the service role key only on the server (Next.js route).
-- Anon users never get that key; RLS blocks direct client access without policies.

comment on table public.contact_submissions is 'Contact form rows from website POST /api/contact';
