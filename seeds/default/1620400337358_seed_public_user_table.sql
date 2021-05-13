set check_function_bodies = false;
insert into public."user" (id, type, name, picture, username, email, mobile, password, verified, created_at, updated_at)
values (1, 'SEEKER', 'Ibrahim Al Khalil', null, 'IbrahimAlKhalil', 'hm.ibrahimalkhalil@gmail.com', '+8801000000000',
        '$2a$10$uWSoTHC25MZ6P7aXBFWoGuv4AvcMcO5BdJLq0Qr6ukoxPmpnt2CZq', true, default, default)
on conflict do nothing;

insert into public."user" (id, type, name, picture, username, email, mobile, password, verified, created_at, updated_at)
values (2, 'EMPLOYER', 'Jamiya Arabiya Madrasa', null, 'JamiyaArabiya', 'jamiyaarabiya@gmail.com', '+88011111111111',
        '$2a$10$x5d6NbDjYuFYKt/1phwwserar/O300zJlvT.JmPUH3IK1WYt5gAVK', true, default, default)
on conflict do nothing;
select pg_catalog.setval('public.user_id_seq', 2, true);
