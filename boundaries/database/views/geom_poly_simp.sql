-- Materialized View: geom_poly_simp

-- DROP MATERIALIZED VIEW geom_poly_simp;

CREATE MATERIALIZED VIEW geom_poly_simp AS 
 SELECT boundaries.unit_id,
    boundaries.unit_code,
    boundaries.geom_poly,
    st_simplify(boundaries.geom_poly, zres(0::double precision)) AS geom_poly_0,
    st_simplify(boundaries.geom_poly, zres(1::double precision)) AS geom_poly_1,
    st_simplify(boundaries.geom_poly, zres(2::double precision)) AS geom_poly_2,
    st_simplify(boundaries.geom_poly, zres(3::double precision)) AS geom_poly_3,
    st_simplify(boundaries.geom_poly, zres(4::double precision)) AS geom_poly_4,
    st_simplify(boundaries.geom_poly, zres(5::double precision)) AS geom_poly_5,
    st_simplify(boundaries.geom_poly, zres(6::double precision)) AS geom_poly_6,
    st_simplify(boundaries.geom_poly, zres(7::double precision)) AS geom_poly_7,
    st_simplify(boundaries.geom_poly, zres(8::double precision)) AS geom_poly_8,
    st_simplify(boundaries.geom_poly, zres(9::double precision)) AS geom_poly_9,
    st_simplify(boundaries.geom_poly, zres(10::double precision)) AS geom_poly_10,
    st_simplify(boundaries.geom_poly, zres(11::double precision)) AS geom_poly_11,
    st_simplify(boundaries.geom_poly, zres(12::double precision)) AS geom_poly_12,
    st_simplify(boundaries.geom_poly, zres(13::double precision)) AS geom_poly_13,
    st_simplify(boundaries.geom_poly, zres(14::double precision)) AS geom_poly_14
   FROM boundaries
  WHERE boundaries.geom_poly IS NOT NULL
WITH DATA;

ALTER TABLE geom_poly_simp
  OWNER TO postgres;

