create table "access_control"."role_user"
(
    "id"         serial      not null,
    "user_id"    integer     not null,
    "role_id"    integer     not null,
    "created_at" timestamptz not null default now(),
    primary key ("id"),
    foreign key ("role_id") references "access_control"."role" ("id") on update cascade on delete cascade,
    foreign key ("user_id") references "public"."user" ("id") on update cascade on delete cascade,
    unique ("user_id", "role_id")
);
