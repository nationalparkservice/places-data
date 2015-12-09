# Parks Database Structure
Let's use this document to sort out the schema for our `parks` database (formerly known as `boundaries`).

### Tables
- `parks` - the core table for our park data.  
  - `unit_id` - NPMap primary key
  - `unit_code` - 4 digit park unit code
  - `unit_name` - park unit name without designation
  - `unit_desig_abbr` - unit designation code (where valid)
  - `unit_desig_full` - unit designation spelled out (where valid)
  - `unit_state` - state (or states) in which the unit resides
  - `unit_region` - park region of which the unit is a part
  - `unit_blurb` - a little blurb about the park
  - `unit_climate` - a little blurb about the climate at the park
  - `unit_address` - address of main park office
  - `unit_phone` - phone number of main park office
  - `unit_url` - full url for the park unit's home page
  - `unit_area` - correctly-calulated area of the park unit
  - `unit_visitors` - visitor count, updated annually (where available)
  - `subunit_of` - 3 digit park unit code of which this park is a member (ex: 'goga')
  - `lon_point` - longitude in decimal degrees of `geom_point`
  - `lat_point` - latitude in decimal degrees of `geom_point`
  - `geom_point` - point geometry for centroid of park unit
  - `date_created_point` - date
  - `last_updated_point` - date
  - `data_source_point` - lands, regional GIS, park, or NPMap-generated (from polygon)


- `parks_poly` - a separate table to store park unit polygon geometries
  - `unit_id` - NPMap primary key
  - `unit_code` - 4 digit park unit code (updated by trigger from `parks_unit`)
  - `geom_poly` - polygon geometry for park unit (important!)
  - `date_created_poly` - date
  - `last_updated_poly` - date
  - `data_source_poly` - lands, regional GIS, or park


- `parks_line` - a separate table to store park unit simplified line geometries
  - `unit_id` - NPMap primary key
  - `unit_code` - 4 digit park unit code (updated by trigger from `parks_unit`)
  - `geom_line` - line geometry for park unit
  - `date_created_line` - date
  - `last_updated_line` - date
  - `data_source_line` - lands, regional GIS, park, or NPMap-generated (from polygon)


- `parks_carto` - a separate table to store attributes needed by cartography
  - `unit_id` - NPMap primary key
  - `unit_code` - 4 digit park unit code (updated by trigger from `parks_unit`)
  - `unit_urban` - boolean field to note if a park is unit_urban
  - `unit_simp` - text field of simplification type ('point' or 'line') for PT
  - `min_zoom_simp` - minimum zoom level at which the simplified geometry is shown in PT
  - `min_zoom_poly` - minimum zoom level at which the polygon geometry is shown in PT
  - `min_zoom_border` - minimum zoom level at which the polygon border is shown in PT
  - `min_zoom_tint_band` - minimum zoom level at which the polygon tint band is added in PT
  - `min_zoom_label` - minimum zoom level at which the label is displayed in PT
  - `max_zoom_label` - maximum zoom level at which the label is displayed in PT
  - `min_zoom_label_long` - minimum zoom level at which the longer name is used
  - `min_zoom_label_center` - minimum zoom level at which the label is centered over the polygon
  - `geom_point_carto` - a separate point geometry for PT. `parks.geom_point` should be an authoritative centroid, so this will allow us to move a labeling point for cartography without loosing the true centroid, which could be useful for other applications.)
  - `date_created_point_carto` - date
  - `last_updated_point_carto` - date
  - `data_source_point_carto` - lands, regional GIS, park, or NPMap (custom placement)


### Views

- `cartodb` - a materialized view to push to our cartodb table: `parks`
  - `unit_code` - 4 digit unit code, used in many places as the lookup for a park  
    - `parks.unit_code`
  - `state` - state (or states) in which the park resides
    - `parks.unit_state`
  - `region` - NPS region code in which the park is administered
    - `parks.unit_region`
  - `designation` - park designation, fully spelled out  
    - `parks.unit_desig_full`
  - `display_name` - park name with abbreviated unit code.  
    - concatenate `parks.unit_name + ' ' + parks.unit_desig_abbr`
  - `full_name` - park name with fully spelled out designation.
    - concatenate `parks.unit_name + ' ' + parks.unit_desig_full`
  - `blurb` - a little blurb about the park
    - `parks.unit_blurb`
  - `climate` - a little blurb about the climate of the park
    - `parks.unit_climate`
  - `address` - address of main office
    - `parks.unit_address`
  - `phone` - phone number of main office
    - `parks.unit_phone`
  - `url` - full url (including http://) of park's main page
    - `parks.unit_url`
  - `area` - area of park polygon, generated on import with proper projections (What units? Maybe acres would be best. If so, we could rename to `area_acres`)
  - `visitors` - number of park visitors in the most recent year available (or average)
    - `parks.unit_visitors`
  - `scalerank` - Ranking to determine which parks should take priority at smaller scales. Just min_zoom_label with a more generic name. Values can be 0-22 and correspond directly to zoom levels.
  - `subunit_of` - unit code of any unit that serves as a parent unit of this park.
    - `parks.subunit_of`
  - `longitude` - longitude in decimal degrees of the park's weighted centroid
    - `parks.lon_point`
  - `latitude` - latitude in decimal degrees of the park's weighted centroid
    - `parks.lat_point`
  - `the_geom` - polygon geometry for the park
    - `parks_poly.geom_poly`
  - `geom_source` - the source of our polygon geometry
    - `parks_poly.data_source_poly`


- `...` - whatever other views Jim needs to pull off the vector tile rendering to Mapbox
