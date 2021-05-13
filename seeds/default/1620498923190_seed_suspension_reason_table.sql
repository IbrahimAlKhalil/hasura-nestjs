set check_function_bodies = false;
insert into suspension.reason (id, internal, created_at, updated_at)
values (1, false, default, default)
on conflict do nothing;
insert into suspension.reason (id, internal, created_at, updated_at)
values (2, false, default, default)
on conflict do nothing;
insert into suspension.reason (id, internal, created_at, updated_at)
values (3, false, default, default)
on conflict do nothing;
insert into suspension.reason (id, internal, created_at, updated_at)
values (4, true, default, default)
on conflict do nothing;
insert into suspension.reason (id, internal, created_at, updated_at)
values (5, true, default, default)
on conflict do nothing;
select pg_catalog.setval('suspension.reason_id_seq', 5, true);
