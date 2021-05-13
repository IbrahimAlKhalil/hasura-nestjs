create table "access_control"."user_permission"
(
    "id"         serial      not null,
    "user_id"    integer     not null,
    "entity"     text        not null,
    "action"     text        not null,
    "created_at" timestamptz not null default now(),
    primary key ("id"),
    foreign key ("user_id") references "public"."user" ("id") on update cascade on delete cascade,
    foreign key ("entity") references "access_control"."entity" ("value") on update cascade on delete restrict,
    foreign key ("action") references "access_control"."action" ("value") on update cascade on delete restrict,
    unique ("user_id", "entity", "action")
);
