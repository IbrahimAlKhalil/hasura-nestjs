create table "chat"."message_file"
(
    "id"         serial not null,
    "message_id" int    not null,
    "path"       text   not null,
    primary key ("id"),
    foreign key ("message_id") references "chat"."message" ("id") on update cascade on delete cascade
);

create index on chat.message_file (message_id);