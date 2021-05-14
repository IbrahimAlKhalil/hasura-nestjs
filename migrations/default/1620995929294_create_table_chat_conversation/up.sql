create table "chat"."conversation"
(
    "id"         serial      not null,
    "creator"    integer     not null,
    "name"       text,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz not null default now(),
    primary key ("id"),
    foreign key ("creator") references "public"."user" ("id") on update cascade on delete cascade
);
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
create trigger "set_chat_conversation_updated_at"
    before update
    on "chat"."conversation"
    for each row
execute procedure "chat"."set_current_timestamp_updated_at"();
comment on trigger "set_chat_conversation_updated_at" on "chat"."conversation"
    is 'trigger to set value of column "updated_at" to current timestamp on row update';
