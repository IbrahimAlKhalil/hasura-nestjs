create table "suspension"."category_reason"
(
    "id"          smallserial not null,
    "category_id" smallint    not null,
    "reason_id"   smallint    not null,
    primary key ("id"),
    foreign key ("reason_id") references "suspension"."reason" ("id") on update cascade on delete cascade,
    foreign key ("category_id") references "suspension"."category" ("id") on update cascade on delete cascade,
    unique ("category_id", "reason_id")
);
