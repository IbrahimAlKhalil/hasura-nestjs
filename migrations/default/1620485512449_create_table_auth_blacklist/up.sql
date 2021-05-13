create table "auth"."blacklist"
(
    "id" integer primary key references "auth"."access_token" ("id") on update cascade on delete cascade
);