-- Materialized View: geom_line_simp

-- DROP MATERIALIZED VIEW geom_line_simp;

CREATE MATERIALIZED VIEW geom_line_simp AS 
 SELECT boundaries.unit_id,
    boundaries.unit_code,
    boundaries.geom_line,
    st_simplify(boundaries.geom_line, zres(0::double precision)) AS geom_line_0,
    st_simplify(boundaries.geom_line, zres(1::double precision)) AS geom_line_1,
    st_simplify(boundaries.geom_line, zres(2::double precision)) AS geom_line_2,
    st_simplify(boundaries.geom_line, zres(3::double precision)) AS geom_line_3,
    st_simplify(boundaries.geom_line, zres(4::double precision)) AS geom_line_4,
    st_simplify(boundaries.geom_line, zres(5::double precision)) AS geom_line_5,
    st_simplify(boundaries.geom_line, zres(6::double precision)) AS geom_line_6,
    st_simplify(boundaries.geom_line, zres(7::double precision)) AS geom_line_7,
    st_simplify(boundaries.geom_line, zres(8::double precision)) AS geom_line_8,
    st_simplify(boundaries.geom_line, zres(9::double precision)) AS geom_line_9,
    st_simplify(boundaries.geom_line, zres(10::double precision)) AS geom_line_10,
    st_simplify(boundaries.geom_line, zres(11::double precision)) AS geom_line_11,
    st_simplify(boundaries.geom_line, zres(12::double precision)) AS geom_line_12,
    st_simplify(boundaries.geom_line, zres(13::double precision)) AS geom_line_13,
    st_simplify(boundaries.geom_line, zres(14::double precision)) AS geom_line_14
   FROM boundaries
  WHERE boundaries.geom_line IS NOT NULL
WITH DATA;

ALTER TABLE geom_line_simp
  OWNER TO postgres;

