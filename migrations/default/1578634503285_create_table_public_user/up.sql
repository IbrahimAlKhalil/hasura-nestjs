create table "public"."user"
(
    id         serial      not null,
    type       text        not null,
    name       text        not null,
    picture    text,
    username   text,
    email      text,
    mobile     text,
    password   text,
    verified   boolean     not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    primary key (id),
    foreign key (type) references public.user_type (value) on update cascade on delete restrict,
    unique (username),
    unique (email),
    unique (mobile),
    constraint "verify-username" check (username ~*
                                        '^(?=.{5,20}$)(?![_.\-])(?!.*[_.\-]{2})[a-za-z0-9._\-]+(?<![_.\-])$')
);

create or replace function public.set_current_timestamp_updated_at()
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
create trigger set_public_user_updated_at
    before update
    on public."user"
    for each row
execute procedure public.set_current_timestamp_updated_at();
comment on trigger set_public_user_updated_at on public."user"
    is 'trigger to set value of column updated_at to current timestamp on row update';
