create table geo.district
(
    id          smallserial not null,
    division_id smallint    not null,
    primary key (id),
    foreign key (division_id) references geo.division (id) on update cascade on delete cascade
);

create index on geo.district (division_id);
