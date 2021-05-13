create table geo.state
(
    id         smallserial not null,
    country_id smallint    not null,
    primary key (id),
    foreign key (country_id) references geo.country (id) on update cascade on delete cascade
);

create index on geo.state (country_id);