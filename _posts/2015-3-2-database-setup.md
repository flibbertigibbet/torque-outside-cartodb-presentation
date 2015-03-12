---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 2000
  y: 2000

---

# How Do I Set Up the Database? #

*  PostGIS-enables Postgres database

* There are a number of CartoDB functions in [this project](https://github.com/CartoDB/cartodb-postgresql)
  that Torque and the SQL API will expect to be defined.  (The triggers are unnecessary.)
  The scripts may be found [here](https://github.com/CartoDB/cartodb-postgresql/tree/master/scripts-available)
  in the `scripts-available` directory.  In particular, `CDB_QueryStatements.sql` and `CDB_QueryTables.sql`
  are needed.

*  Allow local database connections via password authentication. Edit `pg_hba.conf` and change:
   ```
   local   all             all                                     peer
   ```
   to:
   ```
   local   all             all                                     md5
   ```
