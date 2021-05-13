set check_function_bodies = false;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (1, 1, 1, 'Reason 1', 'Reason 1 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (2, 1, 2, 'Reason 1', 'Reason 1 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (3, 2, 2, 'Reason 2', 'Reason 2 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (4, 2, 1, 'Reason 2', 'Reason 2 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (5, 3, 1, 'Reason 3', 'Reason 3 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (6, 3, 2, 'Reason 3', 'Reason 3 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (7, 4, 2, 'Reason 4', 'Reason 4 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (8, 4, 1, 'Reason 4', 'Reason 4 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (9, 5, 1, 'Reason 5', 'Reason 5 Description')
on conflict do nothing;
insert into suspension.reason_i18n (id, reason_id, lang, name, description)
values (11, 5, 2, 'Reason 5', 'Reason 5 Description')
on conflict do nothing;
select pg_catalog.setval('suspension.reason_i18n_id_seq', 11, true);
