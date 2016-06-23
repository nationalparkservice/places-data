CREATE OR REPLACE VIEW "places_parks_v2" AS
SELECT
  "parks_v2"."unit_id" AS "unit_id",
  "parks_v2"."unit_code" AS "unit_code",
  (
  	SELECT array_to_string(array_agg("alt_unit_code"),',')
  	FROM "alt_unit_codes_v2"
  	WHERE "alt_unit_codes_v2"."unit_id" = "parks_v2"."unit_id"
  ) AS "alt_unit_codes",
  "parks_v2"."unit_name_short" || ' ' || "parks_v2"."unit_desig_abbr" AS "display_name",
  "parks_v2"."unit_name_long" || ' ' || "parks_v2"."unit_desig_full" AS "full_name",
  "parks_v2"."unit_desig_full" AS "designation",
  "parks_v2"."nps_official" AS "nps_official",
  "parks_v2"."unit_state" AS "state",
  "parks_v2"."unit_region" AS "region",
  "parks_v2"."subunit_of" AS "subunit_of",
  ST_X("parks_label_v2"."the_geom") AS "label_lat",
  ST_Y("parks_label_v2"."the_geom") AS "label_lng",
  "parks_poly_v2"."min_zoom_poly" AS "min_zoom_poly",
  "parks_label_v2"."min_zoom_label" AS "min_zoom_label",
  "parks_poly_v2"."the_geom" AS "the_geom"
FROM
  "parks_v2"
    LEFT OUTER JOIN
  	  "parks_label_v2" ON "parks_v2"."unit_id" = "parks_label_v2"."unit_id"
  	LEFT OUTER JOIN
  	  "parks_poly_v2" ON "parks_v2"."unit_id" = "parks_poly_v2"."unit_id";
