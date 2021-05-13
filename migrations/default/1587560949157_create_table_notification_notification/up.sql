create table notification.notification
(
    id         serial      not null,
    base_id    integer     not null,
    user_id    integer     not null,
    "from"     integer,
    picture    text,
    vars       jsonb,
    read       boolean     not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    primary key (id, created_at),
    foreign key (base_id) references notification.base (id) on update cascade on delete cascade,
    foreign key (user_id) references public."user" (id) on update cascade on delete cascade,
    foreign key ("from") references public."user" (id) on update cascade on delete set null
);

create index on notification.notification (user_id);

select create_hypertable(
               relation := 'notification.notification',
               time_column_name := 'created_at',
               chunk_time_interval := interval '1 month'
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
create trigger set_notification_item_updated_at
    before update
    on notification.notification
    for each row
execute procedure notification.set_current_timestamp_updated_at();
comment on trigger set_notification_item_updated_at on notification.notification
    is 'trigger to set value of column updated_at to current timestamp on row update';
