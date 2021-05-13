create table sms.template
(
    id         smallserial not null,
    name       text        not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    primary key (id)
);
create or replace function sms.set_current_timestamp_updated_at()
    returns trigger as
$$
declare
    _new record;
begin
    _new := new;
    _new.updated_at = now();
    return _new;
end;
$$ language plpgsql;
create trigger set_sms_template_updated_at
    before update
    on sms.template
    for each row
execute procedure sms.set_current_timestamp_updated_at();
comment on trigger set_sms_template_updated_at on sms.template
    is 'trigger to set value of column updated_at to current timestamp on row update';
