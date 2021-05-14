create table "chat"."member"
(
    "id"              serial      not null,
    "conversation_id" integer     not null,
    "created_at"      timestamptz not null default now(),
    primary key ("id", "conversation_id"),
    foreign key ("id") references "public"."user" ("id") on update cascade on delete cascade,
    foreign key ("conversation_id") references "chat"."conversation" ("id") on update cascade on delete cascade
);
