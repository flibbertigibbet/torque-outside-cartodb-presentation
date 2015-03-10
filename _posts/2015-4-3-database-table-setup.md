---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 3000
  y: 2000

---

# How Do I Set Up the Database Table? #

Four columns are needed:

*  A unique identifier (used for aggregation functions)
*  A timestamp
*  A PostGIS Point column, named `geom`, in EPSG 4326. (The SQL API has a hard-coded reference to
   the geometry column for the table.  It was `the_geom`, but I renamed it in my fork.)
*  A PostGIS Point column, named `the_geom_webmercator`, in EPSG 3857. (The Torque library has
   this column name hard coded for use in querying Windshaft.) I've found it necessary to fill
   this column by using the CartoDB function `CDB_TransformToWebmercator` instead of using 
   the PostGIS `ST_Transform` function directly.
