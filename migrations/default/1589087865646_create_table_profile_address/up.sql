create table profile.address
(
    id              serial      not null,
    user_id         integer     not null,
    address_type    text        not null,
    sub_district_id integer     not null,
    address_line    text,
    created_at      timestamptz not null default now(),
    updated_at      timestamptz not null default now(),
    primary key (id),
    foreign key (sub_district_id) references geo.sub_district (id) on update restrict on delete restrict,
    foreign key (user_id) references public."user" (id) on update cascade on delete cascade,
    foreign key (address_type) references profile.address_type (value) on update restrict on delete restrict,
    unique (user_id, address_type)
);

create or replace function profile.set_current_timestamp_updated_at()
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
create trigger set_profile_address_updated_at
    before update
    on profile.address
    for each row
execute procedure profile.set_current_timestamp_updated_at();
comment on trigger set_profile_address_updated_at on profile.address
    is 'trigger to set value of column updated_at to current timestamp on row update';
