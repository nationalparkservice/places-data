-- BEFORE RUNNING THIS, CREATE THE DATABASE ADD THE AUDIT TRIGGER:
  -- CREATE DATABASE places_parks;
-- Audit Trigger
  -- Directions here: https://wiki.postgresql.org/wiki/Audit_trigger_91plus
  -- SQL Here: https://raw.githubusercontent.com/2ndQuadrant/audit-trigger/master/audit.sql

-- -----------------------------------------------------
-- FUNCTION "_update_updated_at"
-- -----------------------------------------------------
-- http://docs.cartodb.com/tips-and-tricks/data-types/
CREATE OR REPLACE FUNCTION _update_updated_at()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW.updated_at := now();
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql VOLATILE;

-- -----------------------------------------------------
-- FUNCTION ZRes
-- -----------------------------------------------------
-- https://raw.githubusercontent.com/mapbox/postgis-vt-util/master/src/ZRes.sql
CREATE OR REPLACE FUNCTION ZRes2 (FLOAT)
    RETURNS FLOAT
    LANGUAGE sql
    IMMUTABLE
    RETURNS null on null INPUT
AS $func$
  SELECT (40075016.6855785/(256*2^$1));
$func$;

-- -----------------------------------------------------
-- Table "parks"
-- -----------------------------------------------------
CREATE TABLE "parks" (
  "unit_id" INT NOT NULL,
  "unit_code" TEXT NOT NULL,
  "subunit_of" INT NULL,
  "unit_name_short" TEXT NULL,
  "unit_name_long" TEXT NULL,
  "unit_desig_abbr" TEXT NULL,
  "unit_desig_full" TEXT NULL,
  "unit_area" TEXT NULL,
  "unit_region" TEXT NULL,
  "unit_state" TEXT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("unit_id"));
CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON "parks" FOR EACH ROW EXECUTE PROCEDURE _update_updated_at();
SELECT audit.audit_table('parks');

-- -----------------------------------------------------
-- Table "alt_unit_codes"
-- -----------------------------------------------------
CREATE TABLE "alt_unit_codes" (
  "unit_code" TEXT NOT NULL,
  "alt_unit_code" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("unit_code", "alt_unit_code"));
CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON "alt_unit_codes" FOR EACH ROW EXECUTE PROCEDURE _update_updated_at();
SELECT audit.audit_table('alt_unit_codes');

-- -----------------------------------------------------
-- Table "parks_poly"
-- -----------------------------------------------------
CREATE TABLE "parks_poly" (
  "unit_id" INT NOT NULL,
  "min_zoom_poly" INT NULL,
  "min_zoom_border" INT NULL,
  "min_zoom_tintband" INT NULL,
  "simp_type" TEXT NULL,
  "pt_render" TINYINT(1) NULL,
  "data_source" TEXT NULL,
  "geom_poly" GEOMETRY NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("unit_id"));
CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON "parks_poly" FOR EACH ROW EXECUTE PROCEDURE _update_updated_at();
SELECT audit.audit_table('parks_poly');

-- -----------------------------------------------------
-- Table "parks_line"
-- -----------------------------------------------------
CREATE TABLE "parks_line" (
  "unit_id" INT NOT NULL,
  "pt_render" TINYINT(1) NULL,
  "geom_line" GEOMETRY NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("unit_id"));
CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON "parks_line" FOR EACH ROW EXECUTE PROCEDURE _update_updated_at();
SELECT audit.audit_table('parks_line');

-- -----------------------------------------------------
-- Table "parks_point"
-- -----------------------------------------------------
CREATE TABLE "parks_point" (
  "unit_id" INT NOT NULL,
  "pt_render" TEXT NULL,
  "geom_point" GEOMETRY NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("unit_id"));
CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON "parks_point" FOR EACH ROW EXECUTE PROCEDURE _update_updated_at();
SELECT audit.audit_table('parks_point');

-- -----------------------------------------------------
-- Table "parks_label"
-- -----------------------------------------------------
CREATE TABLE "parks_label" (
  "label_id" INT NOT NULL,
  "unit_id" INT NOT NULL,
  "label_type" TEXT NULL,
  "label_name_short" TEXT NULL,
  "label_name_long" TEXT NULL,
  "min_zoom_label" TEXT NULL,
  "min_zoom_label_long" TEXT NULL,
  "min_zoom_label_center" TEXT NULL,
  "ldir" TEXT NULL,
  "ldir_enforce" TINYINT(1) NULL,
  "pt_render" TINYINT(1) NULL,
  "geom_label" GEOMETRY NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "label_size" TEXT NULL,
  "label_wrap_width" TEXT NULL,
  PRIMARY KEY ("label_id"));
CREATE TRIGGER update_updated_at_trigger BEFORE UPDATE ON "parks_label" FOR EACH ROW EXECUTE PROCEDURE _update_updated_at();
SELECT audit.audit_table('parks_label');

-- -----------------------------------------------------
-- Materialized View: geom_line_simp
-- -----------------------------------------------------
--DROP MATERIALIZED VIEW geom_line_simp;
CREATE MATERIALIZED VIEW "geom_line_simp" AS
 SELECT "parks"."unit_id",
    "parks"."unit_code",
    "parks_line"."geom_line",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(0::double precision)) AS "geom_line_0",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(1::double precision)) AS "geom_line_1",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(2::double precision)) AS "geom_line_2",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(3::double precision)) AS "geom_line_3",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(4::double precision)) AS "geom_line_4",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(5::double precision)) AS "geom_line_5",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(6::double precision)) AS "geom_line_6",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(7::double precision)) AS "geom_line_7",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(8::double precision)) AS "geom_line_8",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(9::double precision)) AS "geom_line_9",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(10::double precision)) AS "geom_line_10",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(11::double precision)) AS "geom_line_11",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(12::double precision)) AS "geom_line_12",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(13::double precision)) AS "geom_line_13",
    ST_SimplifyPreserveTopology("parks_line"."geom_line", zres(14::double precision)) AS "geom_line_14"
   FROM "parks" JOIN "parks_line" ON "parks".unit_id = "parks_line".unit_id
  WHERE "parks_line"."geom_line" IS NOT NULL
WITH DATA;

ALTER TABLE "geom_line_simp"
  OWNER TO postgres;

REFRESH MATERIALIZED VIEW "geom_line_simp" WITH DATA;

-- DROP INDEX geom_line_simp_gix;
CREATE INDEX "geom_line_simp_gix" ON "geom_line_simp" USING GIST ("geom_line"); 

-- DROP INDEX geom_line_simp_unit_id_idx;
CREATE INDEX "geom_line_simp_unit_id_idx" ON geom_line_simp("unit_id");

-- -----------------------------------------------------
-- Materialized View: geom_poly_simp
-- -----------------------------------------------------
-- DROP MATERIALIZED VIEW geom_poly_simp;
CREATE MATERIALIZED VIEW "geom_poly_simp" AS
 SELECT "parks"."unit_id",
    "parks"."unit_code",
    "parks_poly"."geom_poly",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(0::double precision)) AS "geom_poly_0",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(1::double precision)) AS "geom_poly_1",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(2::double precision)) AS "geom_poly_2",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(3::double precision)) AS "geom_poly_3",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(4::double precision)) AS "geom_poly_4",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(5::double precision)) AS "geom_poly_5",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(6::double precision)) AS "geom_poly_6",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(7::double precision)) AS "geom_poly_7",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(8::double precision)) AS "geom_poly_8",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(9::double precision)) AS "geom_poly_9",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(10::double precision)) AS "geom_poly_10",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(11::double precision)) AS "geom_poly_11",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(12::double precision)) AS "geom_poly_12",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(13::double precision)) AS "geom_poly_13",
    ST_SimplifyPreserveTopology("parks_poly"."geom_poly", zres(14::double precision)) AS "geom_poly_14"
   FROM "parks" JOIN "parks_poly" ON "parks"."unit_id" = "parks_poly"."unit_id"
  WHERE "parks_poly"."geom_poly" IS NOT NULL
WITH DATA;


ALTER TABLE "geom_poly_simp"
  OWNER TO postgres;

REFRESH MATERIALIZED VIEW "geom_poly_simp" WITH DATA;

--DROP INDEX geom_poly_simp_gix;
CREATE INDEX "geom_poly_simp_gix" ON "geom_poly_simp" USING GIST ("geom_poly"); 

--DROP INDEX geom_poly_simp_unit_id_idx;
CREATE INDEX "geom_poly_simp_unit_id_idx" ON "geom_poly_simp"("unit_id");
