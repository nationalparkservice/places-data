# Parks Database

## Mapbox Tile Rendering: `nps_places_reference`
An outline of how boundaries should render in our Mapbox tiles.

`nps_places_reference` layers:
- `nps_places_reference_polygons` park polygon boundaries
- `nps_places_reference_points` label points for parks
- `nps_places_reference_lines` simplified lines for parks that should show as a line at small scale

### `nps_places_reference_polygons`

This source includes park polygons, rendered into tiles only when zoom >= `min_zoom_poly`.

**Tile attributes:**

- `unit_id` _number_
- `unit_code` _string_
- `unit_name` _string_
  - from `unit_name_long`
- `show_border` _boolean_
  - logic: `IF zoom >= parks_poly.min_zoom_border THEN true, ELSE false`
- `show_tint_band` _boolean_
  - `IF zoom >= parks_poly.min_zoom_tintband THEN true, ELSE false`

### `nps_places_reference_points`

This source includes label points from the `parks_label` table.

**Tile attributes:**

- `label_id` _number_
- `unit_code` _string_
- `label_name_short` _string_
- `label_name_long` _string_
- `show_point` _boolean_
  - logic: `IF zoom < park_poly.min_zoom_poly AND park_poly.label_type != `site` THEN true, ELSE false
- `show_label` _boolean_
  - logic: `IF zoom >= park_label.min_zoom_label AND park_label.min_zoom_label <= park_label.max_zoom_label THEN true, ELSE false`
- `label_long` _boolean_
  - logic: `IF zoom >= park_label.min_zoom_label_long THEN true, ELSE false`
- `label_center` _boolean_
  - logic: `IF zoom >= park_label.min_zoom_label_center THEN true, ELSE false`
- `ldir` _string_
- `ldir_enforce` _boolean_
- `label_wrap_width` _number_
- `label_small` _boolean_

### `nps_places_reference_lines`

This source includes simplified lines representing park boundaries from the `parks_line` table.

**Tile attributes:**

- `unit_id` _string_
- `unit_code` _string_
- `label_name_short` _string_
- `label_name_long` _string_
- `show_line` _boolean_
- `show_label` _boolean_
- `label_long` _boolean_
