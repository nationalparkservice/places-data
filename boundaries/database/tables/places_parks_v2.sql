CREATE OR REPLACE VIEW "places_parks_v2" AS
 SELECT parks_v2.unit_id,
    parks_v2.unit_code,
    ( SELECT array_to_string(array_agg(alt_unit_codes_v2.alt_unit_code), ','::text) AS array_to_string
           FROM alt_unit_codes_v2
          WHERE (alt_unit_codes_v2.unit_id = parks_v2.unit_id)) AS alt_unit_codes,
    parks_v2.unit_name_short AS display_name,
    parks_v2.unit_name_long AS full_name,
    parks_v2.unit_desig_full AS designation,
    parks_v2.nps_official,
    parks_v2.unit_state AS state,
    parks_v2.unit_region AS region,
    parks_v2.subunit_of,
    st_y(parks_label_v2.the_geom) AS label_lat,
    st_x(parks_label_v2.the_geom) AS label_lng,
    parks_poly_v2.min_zoom_poly,
    parks_label_v2.min_zoom_label,
    parks_poly_v2.the_geom
   FROM ((parks_v2
     LEFT JOIN parks_label_v2 ON ((parks_v2.unit_id = parks_label_v2.unit_id)))
     LEFT JOIN parks_poly_v2 ON ((parks_v2.unit_id = parks_poly_v2.unit_id)));
