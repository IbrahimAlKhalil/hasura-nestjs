create table "suspension"."state_reason"
(
    "id"        serial   not null,
    "reason_id" smallint not null,
    "state_id"  integer  not null,
    primary key ("id"),
    foreign key ("state_id") references "suspension"."state" ("id") on update cascade on delete cascade,
    foreign key ("reason_id") references "suspension"."reason" ("id") on update cascade on delete cascade,
    unique ("reason_id", "state_id")
);
