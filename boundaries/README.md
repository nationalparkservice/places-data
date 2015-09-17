# Places Boundaries

<img src="img/boundaries-example.png" alt="NPS Boundaries Example" width="100%">

National Park boundaries are rendered into Park Tiles from our own NPMap boundaries database, `places_boundaries`, hosted on internal NPS servers. The geometries for park boundaries come from either the Land Resources Division Database (a.k.a. "Lands"), or directly from the parks themselves if they can provide a more authoritative/politically-appropriate version of their boundary. We store these geometries in our `places_boundaries` database and attach a number of cartographic attributes to help us render boundaries appropriately in our multi-scale Park Tiles basemaps. Thus, the display of park boundaries is controlled by NPMap cartographers, but the actual path of these geometries can only come from parks, regions, or the national Lands database.

## Simplification for multi-scale cartography

Displaying park boundaries in a digital basemap requires careful planning about how each park is displayed and labeled at different zoom levels.

### Geometries

Displaying every detail of a park's boundary can be wasteful at small zoom levels (z0) where these details cannot even be seen by the map user. At the smallest zoom levels, all park boundaries are displayed using a simplified representation: either a **point** or a **line**. While the vast majority of parks are simplified to points, a handful of parks with linear shapes (National Rivers, Parkways, etc.) are simplified into lines. Our database keeps track of which parks are simplified as lines vs. points and stores these simplified geometries.

### Labels

If the map is zoomed out to the full extent (z0), labeling every park would result in a jumbled mess of text, especially in areas like Washington D.C. where many DOI properties lie within a very small area. However, as the map user zooms in on a particular area, more space becomes available for labeling parks. We label parks in an abbreviated version at small scales and a full version at larger scales. For each park NPMap determines the point at which its abbreviated label should appear, and at what point its full label should appear.

### Minimum zoom levels

Each park is displayed in different treatments at different zoom levels. The way we determine at which zoom level a particular treatment should occur is with a minimum zoom value. For example: Rocky Mountain National Park is displayed as a point at zoom level 4 (z4), then as a polygon at z5. Thus the minimum zoom level for its polygon representation is 5. Likewise, at z9 is shows its abbreviated label but at z10 it switches to its full label. Thus the minimum zoom value for its full label is 10. We can use the same logic to determine when parks are labeled, and how park borders are displayed (they become more prominent at larger zoom levels).

With well over 400 properties under NPS management, manually setting all of the minimum zoom values for each park would be awful. Instead, we use a series of SQL scripts applied across all parks to make logical decisions about how and when they should be displayed and labeled. Some of the fields in our database exist purely for the sake of these scripts. However, by exposing the minimum zoom values that result from these scripts, we can manually fine tune these values for parks where our NPS-wide logic wasn't the best solution.

Why not handle this minimum zoom logic in our CartoCSS? Our CartoCSS styles are restricted by file size to keep the tile rendering fast. By hard-coding the minimum zoom logic into our data source, we can write much simpler CartoCSS that says what a park should look like whenever its unique min zoom is triggered. This way, our CartoCSS doesn't have to sort through the logic of *why* certain parks show up before others – all of that logic is determined before the data source is published.

### PostGIS Table: `boundaries`

Our `places-boundaries` database holds a master table, `boundaries`, from which our boundaries data source is published. The `boundaries` table stores the following fields:

- `cartodb_id`  
Description: mandatory.

- `unit_name_short`    
Description: The simplest version of a park name (without designation). Example: Shenandoah, Grand Canyon, Crater Lake.

- `unit_name_long`   
Description: The longer version of a park name (without designation). In most cases, this is the same as the short name, but there are a few strange cases.

- `unit_desig_short`    
Description: The abbreviated designation for a park, capitalized. Example: NP, NHS, NRA

- `unit_desig_long`   
Description: The fully spelled-out designation for a park. National Park, National Historic Site, National Recreation Area.

- `unit_code`    
Description: The parks four-letter code, lowercase. Example: romo, yell, blri.

- `unit_area`   
Description: The area of the park that could be used for determining initial min zoom setting in a short SQL script run over newly entered park boundaries.    
```SQL
Insert SQL here
```

- `unit_visitors`  
Description: The average number of visitors a park receives per year that could be used for determining initial min zoom setting in a short SQL script run over newly entered park boundaries.
```SQL
Insert SQL here
```

- `unit_rank`  
Description: A rank of relative cartographic prominence of parks that impacts labeling decisions. 1-5 with 1 being the highest ranking and 5 the lowest. (Perhaps unnecessary thanks to min_zoom_label. Maybe more to help us make decisions.)  
```SQL
Insert SQL here
```

- `unit_urban`  
Description: Either true or false. To help determine if a different set of rules should be applied for labeling and styling other features within the park.

- `unit_simplification`  
Description: Either "point" or "line". Should the simplified representation of this park be a point or a polygon?

- `ldir`  
Description: The label direction. Examples: N, S, E, W, NE, SE, SW, NW.  
```SQL
Insert SQL here
```

- `min_zoom_poly`  
Description: The minimum zoom at which a park's representation becomes it's full polygon (before this point, each park defaults to it's indicated simplified representation – either point or line). Note: At this point, a park's simplified representation becomes transparent, but remains in the vector tiles for labeling.  
```SQL
Insert SQL here
```

- `min_zoom_border`  
Description: The minimum zoom at which a park's darker green border is added.  
```SQL
Insert SQL here
```

- `min_zoom_tint_band`  
Description: The minimum zoom at which a park's lighter green tint band is added.  
```SQL
Insert SQL here
```

- `min_zoom_label_short`  
Description: The minimum zoom at which a park's label is shown with an abbreviated designation.  
```SQL
Insert SQL here
```

- `min_zoom_label_long`  
Description: The minimum zoom at which a park's label is shown with it's fully spelled-out designation.  
```SQL
Insert SQL here
```

- `min_zoom_label_center`  
Description: The minimum zoom at which a park's label is shown centered over it's point (must always be an equal or larger number than min_zoom_poly)  
```SQL
Insert SQL here
```

- `geom_poly`
Description: The polygon geometry of the park boundary. Every park in our database must have one.

- `geom_point`  
Description: The point representation of the park, also used for labeling. SQL-generated (Point_On_Surface) from the polygon, but can be moved manually.  
**Note**: We know that CartoDB doesn't like us to store multiple geometries in a table. We just wanted to add this to show our interest.  
```SQL
Insert SQL here
```

- `geom_line`  
Description: The line representation of the park, also used for labeling. SQL-generated from the polygon, btu can be adjusted manually.  
**Note**: We know that CartoDB doesn't like us to store multiple geometries in a table. We just wanted to add this to show our interest.  
```SQL
Insert SQL here
```

- `date_created`  
Description: The date this park was added to our master_boundaries table (essentially, when NPMap started keeping track of the boundary).

- `last_updated`  
Description: The date when this park's polygon was last updated.

- `data_source`  
Description: The source for this park's GIS boundary data. Either Lands, Region, or Park. Should apply to the most recent update.

### SQL Snippets

Some SQL snippets we used to create our table:

```sql
CREATE TABLE boundaries (
  unit_id smallint,
  unit_name_short text, -- *
  unit_name_long text, -- *
  unit_desig_abbr text, -- *
  unit_desig_full text, -- *
  unit_code text, -- *
  unit_area numeric,
  unit_visitors numeric,
  unit_rank smallint,
  unit_urban smallint, -- *
  unit_simplification text,
  ldir text, -- *
  min_zoom_poly smallint, -- *
  min_zoom_border smallint, -- *
  min_zoom_tint_band smallint, -- *
  min_zoom_label_short smallint, -- *
  min_zoom_label_long smallint, -- *
  min_zoom_label_center smallint, -- *
  geom_poly geometry,
  geom_point geometry,
  geom_line geometry
  date_created date,
  last_updated date,
  data_source text),
  -- * = needed for styling in Mapbox Studio
);
```

Some SQL used to populate the table from a legacy boundaries table:

```sql
SELECT
       render_park_labels.tm2_key                                          AS "unit_id",
       render_park_labels.short_name                                       AS "unit_name_short",
       render_park_labels.long_name                                        AS "unit_name_long",
       Regexp_replace(label_points.display_name, '.+\s(\w+?)$', '\1', 'g') AS "unit_desig_abbr",
       label_points.designation                                            AS "unit_desig_full",
       Lower(render_park_labels.unit_code)                                 AS "unit_code",
       render_park_labels.area                                             AS "unit_area",
       label_points.visitors                                               AS "unit_visitors",
       0                                                                   AS "unit_rank",
       render_park_labels.urban_area                                       AS "unit_urban",
       CASE
         WHEN render_park_lines.line_geom IS NULL THEN 'point'
         ELSE 'line'
       end                                                                 AS "unit_simplification",
       render_park_labels.ldir                                             AS "ldir",
       render_park_labels.minzoompoly                                      AS "min_zoom_poly",
       label_points.minzoompoly + 5                                        AS "min_zoom_border",
       label_points.minzoompoly + 6                                        AS "min_zoom_tint_band",
       render_park_labels.show_label_zoom                                  AS "min_zoom_label_short",
       label_points.minzoompoly + 5                                        AS "min_zoom_label_long",
       CASE
         WHEN render_park_labels.minzoompoly <= 9 THEN
         render_park_labels.minzoompoly + 3
         ELSE 100
       end                                                                 AS "min_zoom_label_center",
       label_points.poly_geom                                              AS "geom_poly",
       render_park_labels.point_geom                                       AS "geom_point",
       render_park_lines.line_geom                                         AS "geom_line",
       cartodb_parks.created_at                                            AS "date_created",
       cartodb_parks.updated_at                                            AS "last_updated",
       label_points.poly_source                                            AS "data_source"
FROM   render_park_labels
       JOIN label_points
         ON Lower(render_park_labels.unit_code) = Lower(label_points.unit_code)
       JOIN cartodb_parks
         ON Lower(render_park_labels.unit_code) = Lower(cartodb_parks.unit_code)
       FULL OUTER JOIN render_park_lines
                    ON Lower(render_park_labels.unit_code) = Lower(
                       render_park_lines.unit_code);
```

## Boundaries Update Workflow

<img src="img/boundaries-flow-diagram.png" alt="Boundaries Workflow Diagram" width="100%">
