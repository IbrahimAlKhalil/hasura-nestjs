create table auth.access_token
(
    id         serial      not null,
    user_id    integer     not null,
    ip_address text        not null,
    user_agent text,
    personal   boolean     not null default false,
    expires_at timestamptz not null,
    created_at timestamptz not null default now(),
    primary key (id),
    foreign key (user_id) references public."user" (id) on update cascade on delete cascade
);

create index on auth.access_token (user_id);
