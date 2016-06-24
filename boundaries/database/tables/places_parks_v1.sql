CREATE OR REPLACE VIEW "places_parks_v1" AS
 SELECT parks_v2.cartodb_id,
    parks_poly_v2.the_geom,
    parks_v2.unit_area AS area,
    parks_v2.unit_desig_full AS designation,
    parks_v2.unit_name_short AS display_name,
    parks_v2.unit_name_long AS full_name,
    st_y(parks_point_v2.the_geom) AS latitude,
    st_x(parks_point_v2.the_geom) AS longitude,
    parks_poly_v2.min_zoom_poly AS minzoompoly,
    parks_v2.unit_region AS region,
    parks_v2.unit_region AS state,
    parks_v2.subunit_of,
    parks_v2.unit_code,
    parks_v2.unit_id,
    NULL::unknown AS url,
    parks_v2.created_at,
        CASE
            WHEN (parks_v2.updated_at > parks_poly_v2.updated_at) THEN parks_v2.updated_at
            ELSE parks_poly_v2.updated_at
        END AS updated_at
   FROM ((parks_v2
     JOIN parks_poly_v2 ON ((parks_v2.unit_id = parks_poly_v2.unit_id)))
     JOIN parks_point_v2 ON ((parks_v2.unit_id = parks_point_v2.unit_id)));
