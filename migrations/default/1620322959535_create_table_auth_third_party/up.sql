create table "auth"."third_party"
(
    "id"   smallserial not null,
    "name" text        not null,
    primary key ("id"),
    unique ("name")
);
