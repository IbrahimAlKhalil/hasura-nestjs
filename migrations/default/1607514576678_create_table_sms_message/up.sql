create table sms.message
(
    id         serial      not null,
    user_id    integer,
    text       text        not null,
    status     text        not null,
    created_at timestamptz not null default now(),
    primary key (id),
    foreign key (user_id) references public."user" (id) on update cascade on delete set null,
    foreign key (status) references sms.message_status (value) on update cascade on delete restrict
);
