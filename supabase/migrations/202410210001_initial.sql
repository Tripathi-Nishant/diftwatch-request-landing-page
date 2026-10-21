-- supabase/migrations/202410210001_initial.sql
-- Create schema for DriftWatch beta site

create table if not exists public.beta_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now() not null,
  status text check (status in ('pending','reviewing','approved','declined')) default 'pending' not null,
  full_name text not null,
  email text not null,
  role text default 'unspecified',
  organization text,
  country text,
  ml_task text default 'unspecified',
  ml_framework text[],
  model_status text default 'unspecified',
  test_description text default 'Submitted via landing page',
  usefulness text,
  ip_hash text default 'N/A',
  consent boolean default true
);

create index if not exists idx_beta_requests_email on public.beta_requests(email);

create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now() not null,
  status text check (status in ('new','replied')) default 'new' not null,
  name text not null,
  email text not null,
  topic text default 'General Inquiry',
  message text not null,
  ip_hash text default 'N/A',
  consent boolean default true
);

create index if not exists idx_contact_messages_email on public.contact_messages(email);

-- Enable Row Level Security (RLS)
alter table public.beta_requests enable row level security;
alter table public.contact_messages enable row level security;

-- Policies: Allow public anonymous insertion (website form submissions) and service_role
drop policy if exists "allow insert" on public.beta_requests;
drop policy if exists "allow insert" on public.contact_messages;

create policy "allow insert" on public.beta_requests for insert to anon, authenticated, service_role with check (true);
create policy "allow insert" on public.contact_messages for insert to anon, authenticated, service_role with check (true);
