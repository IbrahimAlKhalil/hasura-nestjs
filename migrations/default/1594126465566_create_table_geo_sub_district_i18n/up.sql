create table geo.sub_district_i18n
(
    id              smallserial not null,
    sub_district_id integer     not null,
    lang            smallint    not null,
    name            text        not null,
    primary key (id),
    foreign key (sub_district_id) references geo.sub_district (id) on update cascade on delete cascade,
    foreign key (lang) references misc.language (id) on update cascade on delete restrict,
    unique (sub_district_id, lang)
);

/**** search functionality ****/

create index on geo.sub_district_i18n
    using gin ((name) gin_trgm_ops);

create or replace function public.search_geo_sub_district(search text, pointer integer, lang integer)
    returns setof geo.sub_district as
$$
select a.*
from geo.sub_district a
         join geo.sub_district_i18n i18n on a.id = i18n.sub_district_id
where a.id > pointer
  and i18n.lang = $3
  and search <% (i18n.name)
order by similarity(search, (i18n.name)) desc
limit 100;
$$ language sql stable;
