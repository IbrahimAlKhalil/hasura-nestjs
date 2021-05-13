create table geo.state_i18n
(
    id       smallserial not null,
    state_id integer     not null,
    lang     smallint    not null,
    name     text        not null,
    primary key (id),
    foreign key (state_id) references geo.state (id) on update cascade on delete cascade,
    foreign key (lang) references misc.language (id) on update cascade on delete restrict,
    unique (state_id, lang)
);

/**** search functionality ****/

create index on geo.state_i18n
    using gin ((name) gin_trgm_ops);

create or replace function public.search_geo_state(search text, pointer integer, lang integer)
    returns setof geo.state as
$$
select a.*
from geo.state a
         join geo.state_i18n i18n on a.id = i18n.state_id
where a.id > pointer
  and i18n.lang = $3
  and search <% (i18n.name)
order by similarity(search, (i18n.name)) desc
limit 50;
$$ language sql stable;
