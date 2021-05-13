create table misc.verification
(
    id         serial      not null,
    user_id    integer     not null,
    type       text        not null,
    payload    text,
    token      text        not null,
    key        text                 default public.random_string(64),
    sent_at    timestamptz          default now(),
    sent_count integer              default 1,
    expires_at timestamptz,
    created_at timestamptz not null default now(),
    primary key (id),
    foreign key (user_id) references public.user (id) on update cascade on delete cascade,
    foreign key (type) references misc.verification_type (value) on update restrict on delete restrict,
    unique (user_id, type, payload)
);
