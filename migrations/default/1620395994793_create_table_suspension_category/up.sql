create table "suspension"."category"
(
    "id"         smallserial not null,
    "name"       text,
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
create trigger "set_suspension_category_updated_at"
    before update
    on "suspension"."category"
    for each row
execute procedure "suspension"."set_current_timestamp_updated_at"();
comment on trigger "set_suspension_category_updated_at" on "suspension"."category"
    is 'trigger to set value of column "updated_at" to current timestamp on row update';
