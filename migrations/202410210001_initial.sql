-- migrations/202410210001_initial.sql
-- Create tables for beta requests and contact messages
create table if not exists public.beta_requests (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  organization text,
  created_at timestamp with time zone default now()
);

create table if not exists public.contact_messages (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);
