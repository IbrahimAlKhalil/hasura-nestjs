create table "suspension"."reason_i18n"
(
    "id"          smallserial not null,
    "reason_id"   smallint    not null,
    "lang"        smallint    not null,
    "name"        text        not null,
    "description" text        not null,
    primary key ("id"),
    foreign key ("reason_id") references "suspension"."reason" ("id") on update cascade on delete cascade,
    foreign key ("lang") references "misc"."language" ("id") on update cascade on delete cascade,
    unique ("reason_id", "lang")
);
