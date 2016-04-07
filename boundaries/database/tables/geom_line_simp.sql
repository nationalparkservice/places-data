-- Materialized View: geom_line_simp

--DROP MATERIALIZED VIEW geom_line_simp;

CREATE MATERIALIZED VIEW geom_line_simp AS 
 SELECT parks.unit_id,
    parks.unit_code,
    parks_line.geom_line,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(0::double precision)) AS geom_line_0,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(1::double precision)) AS geom_line_1,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(2::double precision)) AS geom_line_2,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(3::double precision)) AS geom_line_3,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(4::double precision)) AS geom_line_4,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(5::double precision)) AS geom_line_5,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(6::double precision)) AS geom_line_6,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(7::double precision)) AS geom_line_7,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(8::double precision)) AS geom_line_8,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(9::double precision)) AS geom_line_9,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(10::double precision)) AS geom_line_10,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(11::double precision)) AS geom_line_11,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(12::double precision)) AS geom_line_12,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(13::double precision)) AS geom_line_13,
    ST_SimplifyPreserveTopology(parks_line.geom_line, zres(14::double precision)) AS geom_line_14
   FROM parks JOIN parks_line ON parks.unit_id = parks_line.unit_id
  WHERE parks_line.geom_line IS NOT NULL
WITH DATA;

ALTER TABLE geom_line_simp
  OWNER TO postgres;

REFRESH MATERIALIZED VIEW geom_line_simp WITH DATA;

-- DROP INDEX geom_line_simp_gix;
CREATE INDEX geom_line_simp_gix ON geom_line_simp USING GIST (geom_line); 

-- DROP INDEX geom_line_simp_unit_id_idx;
CREATE INDEX geom_line_simp_unit_id_idx ON geom_line_simp(unit_id);
