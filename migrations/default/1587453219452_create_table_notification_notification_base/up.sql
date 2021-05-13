create table notification.base
(
    id         smallserial not null,
    picture    text,
    link       text        null,
    link_type  text        null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    primary key (id),
    foreign key (link_type) references notification.link_type (value) on update restrict on delete restrict
);
create or replace function notification.set_current_timestamp_updated_at()
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
create trigger set_notification_base_updated_at
    before update
    on notification.base
    for each row
execute procedure notification.set_current_timestamp_updated_at();
comment on trigger set_notification_base_updated_at on notification.base
    is 'trigger to set value of column updated_at to current timestamp on row update';
