create table misc.language
(
    id   smallserial not null,
    code text        not null,
    name text        not null,
    primary key (id),
    unique (code)
);
