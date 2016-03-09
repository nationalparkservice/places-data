# Places Boundaries

National Park boundaries are rendered into Park Tiles from our own NPMap boundaries database, `places_boundaries`, hosted on internal NPS servers. The geometries for park boundaries come from either the Land Resources Division Database (a.k.a. "Lands"), or directly from the parks themselves if they can provide a preferred version of their boundary. We store these geometries in our `places_boundaries` database and attach a number of cartographic attributes to help us render boundaries appropriately in our multi-scale Park Tiles basemaps. Thus, the display of park boundaries is controlled by NPMap cartographers, but the actual path of these geometries can only come from parks, regions, or the national Lands database.

# Recreating the boundaries
1. Connect to the PostgreSQL database: `places_boundaries` on `10.147.153.191`
2. Run the command `REFRESH MATERIALIZED VIEW geom_line_simp;`
3. Run the command `REFRESH MATERIALIZED VIEW geom_poly_simp;`
4. Navigate a web browser to `http://10.147.153.191:3000/`
5. Click `Styles & Sources` on the bottom left
6. Click `Sources`
7. Click `nps_places_reference`
8. Click `Settings`
9. Click `Export to MBTiles`
10. Click `Redo Export`
    Wait 10 hours
11. SSH into `10.147.153.191`
12. Make sure the mbtiles was created using the command `ll -t -r /home/jmcandrew/.mapbox-studio/cache/`
  You should see a file with Today's date called `export-XXXXXXXX.mbtiles` (Xs represent any hexidecimal value)
13. Back up the mbtiles for future reference with the command `cp /home/jmcandrew/.mapbox-studio/cache/export-XXXXXXXX.mbtiles /home/jmcandrew/dev/mbstudio-backups/nps-places-reference-MON-DAY-YEAR.mbtiles` (export-XXXXXXXX matches the export-XXXXXXXX from the previous step, and fill in today's date for MON, DAY, and YEAR)
14. run the mbtiles upload tool on the new file `node /home/jmcandrew/dev/tm2-automate/upload_new.js /home/jmcandrew/dev/mbstudio-backups/nps-places-reference-MON-DAY-YEAR.mbtiles nps.nps-places-reference`
Wait about 15 minutes
15. Check that everything was uploaded properly to `https://www.mapbox.com/studio/tilesets/`
