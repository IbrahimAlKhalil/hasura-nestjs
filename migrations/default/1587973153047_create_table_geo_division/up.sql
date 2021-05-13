create table geo.division
(
    id       smallserial not null,
    state_id smallint    not null,
    primary key (id),
    foreign key (state_id) references geo.state (id) on update cascade on delete cascade
);

create index on geo.division (state_id);