create table notification.base_i18n
(
    id          smallserial not null,
    base_id     smallint    not null,
    lang        smallint    not null,
    title       text        not null,
    description text        not null,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now(),
    primary key (id),
    foreign key (lang) references misc.language (id) on update cascade on delete cascade,
    foreign key (base_id) references notification.base (id) on update cascade on delete cascade,

    unique (base_id, lang)
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
create trigger set_notification_base_i18n_updated_at
    before update
    on notification.base_i18n
    for each row
execute procedure notification.set_current_timestamp_updated_at();
comment on trigger set_notification_base_i18n_updated_at on notification.base_i18n
    is 'trigger to set value of column updated_at to current timestamp on row update';
