create extension if not exists pgcrypto;

create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  email text not null,
  phone text,
  brokerage text,
  city text not null,
  state text not null,
  average_home_price text not null,
  target_buyer_type text[] not null default '{}',
  target_price_range text not null,
  target_areas text not null,
  current_acquisition_methods text[] not null default '{}',
  current_monthly_buyer_volume text not null,
  currently_running_ads text not null check (currently_running_ads in ('Yes','No')),
  monthly_ad_budget text not null,
  marketing_consent boolean not null default false,
  status text not null default 'new' check (status in ('new','audit prepared','audit sent','call booked','converted','closed/lost')),
  notes text
);

alter table public.audit_requests enable row level security;

-- Intentionally no anon/authenticated INSERT or SELECT policy.
-- The website writes only through its server-side API using the service-role key.
-- This prevents public browser clients from reading or directly writing audit leads.

create index if not exists audit_requests_created_at_idx on public.audit_requests (created_at desc);
create index if not exists audit_requests_status_idx on public.audit_requests (status);
create index if not exists audit_requests_email_idx on public.audit_requests (lower(email));
