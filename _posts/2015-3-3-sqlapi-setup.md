---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 3000
  y: 1000

---

# Setting up the SQL API #

Once the SQL API is set up to operate without user credentials from Redis or user and database names
from the subdomain, we're ready to go!

Here's [a fork of the SQL API](https://github.com/flibbertigibbet/CartoDB-SQL-API) that has the authentication parts removed.

Instead, the database user, password, and database name are configured directly in the configuration file.
For permissions, we can rely on using a database role that has read-only access to just the tables with Torque data.