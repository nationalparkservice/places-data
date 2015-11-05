CREATE TABLE parks_poly
(
  unit_id smallint NOT NULL,
  unit_code text,
  geom_poly geometry,
  CONSTRAINT parks_poly_pkey PRIMARY KEY (unit_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE parks_poly
  OWNER TO postgres;

INSERT INTO parks_poly
SELECT
  unit_id ::smallint,
  unit_code ::text,
  geom_poly ::geometry
FROM boundaries

CREATE INDEX parks_poly_geom_poly_idx ON parks_poly USING GIST (geom_poly);
