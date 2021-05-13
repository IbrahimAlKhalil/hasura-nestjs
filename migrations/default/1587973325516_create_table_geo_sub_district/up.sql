create table geo.sub_district
(
    id          smallserial not null,
    district_id smallint    not null,
    primary key (id),
    foreign key (district_id) references geo.district (id) on update cascade on delete cascade
);

create index on geo.sub_district (district_id);
