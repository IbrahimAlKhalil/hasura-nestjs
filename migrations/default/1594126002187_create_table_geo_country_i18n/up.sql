create table geo.country_i18n
(
    id         smallserial not null,
    country_id integer     not null,
    lang       smallint    not null,
    name       text        not null,
    primary key (id),
    foreign key (country_id) references geo.country (id) on update cascade on delete cascade,
    foreign key (lang) references misc.language (id) on update cascade on delete restrict,
    unique (country_id, lang)
);

/**** search functionality ****/

create index on geo.country_i18n
    using gin ((name) gin_trgm_ops);

create or replace function public.search_geo_country(search text, pointer integer, lang integer)
    returns setof geo.country as
$$
select a.*
from geo.country a
         join geo.country_i18n i18n on a.id = i18n.country_id
where a.id > pointer
  and i18n.lang = $3
  and search <% (i18n.name)
order by similarity(search, (i18n.name)) desc
limit 200;
$$ language sql stable;
