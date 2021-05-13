create table chat.message
(
    "id"          serial      not null,
    "sender_id"   integer     not null,
    "receiver_id" integer     not null,
    "value"       text        not null,
    "created_at"  timestamptz not null default now(),
    "updated_at"  timestamptz not null default now(),
    primary key ("id"),

    foreign key ("sender_id") references "public"."user" ("id") on update cascade on delete cascade,
    foreign key ("receiver_id") references "public"."user" ("id") on update cascade on delete cascade
);

create index on chat.message (sender_id, receiver_id);

create or replace function "chat"."set_current_timestamp_updated_at"()
    returns trigger as
$$
declare
    _new record;
begin
    _new := NEW;
    _new."updated_at" = now();
    return _new;
end;
$$ language plpgsql;
create trigger "set_chat_message_updated_at"
    before update
    on "chat"."message"
    for each row
execute procedure "chat"."set_current_timestamp_updated_at"();
comment on trigger "set_chat_message_updated_at" on "chat"."message"
    is 'trigger to set value of column "updated_at" to current timestamp on row update';
