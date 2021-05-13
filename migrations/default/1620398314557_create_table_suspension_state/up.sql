create table "suspension"."state"
(
    "id"         serial,
    "user_id"    integer     not null,
    "type"       text        not null,
    "till"       timestamptz,
    "created_at" timestamptz not null default now(),

    primary key ("id"),

    foreign key ("user_id") references "public"."user" (id) on update cascade on delete cascade,
    foreign key ("type") references "suspension"."type" ("value") on update restrict on delete restrict,

    unique ("user_id", "type")
);
