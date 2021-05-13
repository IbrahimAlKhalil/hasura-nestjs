create table access_control.log
(
    "user_id"    integer     not null,
    "entity"     text        not null,
    "action"     text        not null,
    "entity_id"  text        not null,
    "old"        json,
    "new"        json,
    "ip"         inet        not null,
    "user_agent" text        not null,
    "created_at" timestamptz not null default now(),

    foreign key ("entity") references "access_control"."entity" ("value") on update cascade on delete cascade,
    foreign key ("action") references "access_control"."action" ("value") on update cascade on delete cascade,
    foreign key ("user_id") references "public"."user" ("id") on update cascade on delete cascade
);

create index on access_control.log (user_id);

select create_hypertable(
               relation := 'access_control.log',
               time_column_name := 'created_at',
               chunk_time_interval := interval '1 month'
           );

select add_retention_policy(
               relation := 'access_control.log',
               drop_after := interval '1 year'
           );