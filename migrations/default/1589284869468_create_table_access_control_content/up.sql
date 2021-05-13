create table access_control.content
(
    id          smallserial not null,
    entity      text        not null,
    lang        smallint    not null,
    name        text        not null,
    description text,
    primary key (id),
    foreign key (lang) references misc.language (id) on update cascade on delete cascade,
    foreign key (entity) references access_control.entity (value) on update cascade on delete cascade,
    unique (entity, lang)
);
