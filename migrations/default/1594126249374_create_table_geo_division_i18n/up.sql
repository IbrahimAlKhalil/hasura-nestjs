create table geo.division_i18n
(
    id          smallserial not null,
    division_id integer     not null,
    lang        smallint    not null,
    name        text        not null,
    primary key (id),
    foreign key (division_id) references geo.division (id) on update cascade on delete cascade,
    foreign key (lang) references misc.language (id) on update cascade on delete restrict,
    unique (division_id, lang)
);

/**** search functionality ****/

create index on geo.division_i18n
    using gin ((name) gin_trgm_ops);

create or replace function public.search_geo_division(search text, pointer integer, lang integer)
    returns setof geo.division as
$$
select a.*
from geo.division a
         join geo.division_i18n i18n on a.id = i18n.division_id
where a.id > pointer
  and i18n.lang = $3
  and search <% (i18n.name)
order by similarity(search, (i18n.name)) desc
limit 60;
$$ language sql stable;
