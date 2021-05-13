create table "access_control"."role_permission"
(
    "id"         serial      not null,
    "role_id"    integer     not null,
    "entity"     text        not null,
    "action"     text        not null,
    "created_at" timestamptz not null default now(),
    primary key ("id"),
    foreign key ("role_id") references "access_control"."role" ("id") on update cascade on delete cascade,
    foreign key ("entity") references "access_control"."entity" ("value") on update restrict on delete restrict,
    foreign key ("action") references "access_control"."action" ("value") on update cascade on delete restrict,
    unique ("role_id", "entity", "action")
);
