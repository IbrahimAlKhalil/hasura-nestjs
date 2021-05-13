create table "auth"."third_party_user_id"
(
    "id"             serial   not null,
    "third_party_id" smallint not null,
    "user_id"        integer  not null,
    "value"          text     not null,
    primary key ("id"),
    foreign key ("user_id") references "public"."user" ("id") on update cascade on delete cascade,
    foreign key ("third_party_id") references "auth"."third_party" ("id") on update cascade on delete cascade,
    unique ("third_party_id", "value")
);
