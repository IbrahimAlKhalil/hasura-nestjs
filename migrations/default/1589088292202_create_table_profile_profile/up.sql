create table profile.profile
(
    id            serial primary key references public."user" ("id"),
    date_of_birth date                 default null,
    gender        text        not null,
    created_at    timestamptz not null default now(),
    updated_at    timestamptz not null default now(),

    foreign key (gender) references profile.gender (value) on update restrict on delete restrict
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
create trigger set_profile_person_updated_at
    before update
    on profile.profile
    for each row
execute procedure profile.set_current_timestamp_updated_at();
comment on trigger set_profile_person_updated_at on profile.profile
    is 'trigger to set value of column updated_at to current timestamp on row update';
