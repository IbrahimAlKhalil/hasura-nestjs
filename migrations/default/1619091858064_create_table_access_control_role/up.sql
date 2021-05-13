create table "access_control"."role"
(
    "id"         serial      not null,
    "name"       text        not null,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz not null default now(),
    primary key ("id")
);
create or replace function "access_control"."set_current_timestamp_updated_at"()
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
create trigger "set_access_control_role_updated_at"
    before update
    on "access_control"."role"
    for each row
execute procedure "access_control"."set_current_timestamp_updated_at"();
comment on trigger "set_access_control_role_updated_at" on "access_control"."role"
    is 'trigger to set value of column "updated_at" to current timestamp on row update';
