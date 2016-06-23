CREATE TABLE parks
(
  unit_id smallint NOT NULL,
  unit_name_short text,
  unit_name_long text,
  unit_desig_abbr text,
  unit_desig_full text,
  unit_code text,
  unit_area numeric,
  unit_visitors numeric,
  unit_rank smallint,
  unit_urban smallint,
  unit_simplification text,
  ldir text,
  min_zoom_poly smallint,
  min_zoom_border smallint,
  min_zoom_tint_band smallint,
  min_zoom_label_short smallint,
  min_zoom_label_long smallint,
  min_zoom_label_center smallint,
  --geom_poly geometry,
  geom_point geometry,
  --geom_line geometry,
  date_created date,
  last_updated date,
  data_source text,
  nps_official boolean,
  CONSTRAINT parks_pkey PRIMARY KEY (unit_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE parks
  OWNER TO postgres;
  
INSERT INTO parks
SELECT
  unit_id ::smallint,
  unit_name_short ::text,
  unit_name_long ::text,
  unit_desig_abbr ::text,
  unit_desig_full ::text,
  unit_code ::text,
  unit_area ::numeric,
  unit_visitors ::numeric,
  unit_rank ::smallint,
  unit_urban ::smallint,
  unit_simplification ::text,
  ldir ::text,
  min_zoom_poly ::smallint,
  min_zoom_border ::smallint,
  min_zoom_tint_band:: smallint,
  min_zoom_label_short ::smallint,
  min_zoom_label_long ::smallint,
  min_zoom_label_center ::smallint,
  --geom_poly geometry,
  geom_point ::geometry,
  --geom_line geometry,
  date_created ::date,
  last_updated::date,
  data_source::text
  --nps_official::boolean
FROM boundaries

CREATE INDEX parks_geom_point_idx ON parks USING GIST (geom_point);
CREATE INDEX parks_unit_id_idx ON parks (unit_id);
