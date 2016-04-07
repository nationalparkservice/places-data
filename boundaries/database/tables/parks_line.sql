CREATE TABLE parks_line
(
  unit_id smallint NOT NULL,
  unit_code text,
  geom_line geometry,
  CONSTRAINT parks_line_pkey PRIMARY KEY (unit_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE parks_line
  OWNER TO postgres;

INSERT INTO parks_line
SELECT
  unit_id ::smallint,
  unit_code ::text,
  geom_line ::geometry
FROM boundaries

CREATE INDEX parks_line_geom_line_idx ON parks_line USING GIST (geom_line); 
