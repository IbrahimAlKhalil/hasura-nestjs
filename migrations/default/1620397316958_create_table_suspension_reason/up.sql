create table "suspension"."reason"
(
    "id"         smallserial not null,
    "internal"   boolean     not null default true,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz not null default now(),
    primary key ("id")
);
create or replace function "suspension"."set_current_timestamp_updated_at"()
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
create trigger "set_suspension_reason_updated_at"
    before update
    on "suspension"."reason"
    for each row
execute procedure "suspension"."set_current_timestamp_updated_at"();
comment on trigger "set_suspension_reason_updated_at" on "suspension"."reason"
    is 'trigger to set value of column "updated_at" to current timestamp on row update';
