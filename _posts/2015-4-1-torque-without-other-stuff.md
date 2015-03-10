---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 1000
  y: 2000

---

# So How Do I Use Torque Without the Other Stuff? #

Torque only really needs the Windshaft tiler and SQL API CartoDB projects to work.
The Torque and Windshaft projects can be used without modification.

The SQL API will need to be set up to operate without user credentials from the CartoDB web app.
I'll share a fork of the project I've configured to work as a stand-alone SQL API.

Note that redis is a dependency of both Windshaft and the SQL API; it's used for caching.

The database is the one other component we'll need.
