---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 5000
  y: 2000

---

# Setting up the SQL API #

Once the SQL API is set up to operate without user credentials from Redis or user and database names
from the subdomain, we're ready to go! Here's [a fork of the SQL API](https://github.com/flibbertigibbet/CartoDB-SQL-API) that has the authentication parts removed.  For permissions, we can rely on using
a database role that has read-only access to just the table with our data for Torque.

The SQL API configuration files live in `config/environments`. Copy `development.js.example` to
`development.js`, and edit:

* `db_base_name`
* `db_user` and `db_pubuser` (can be the same)
* `db_user_pass` and `db_pubuser_pass`
* Remove the `statsd` block; we won't be needing it
* For the `health` check block at the end, change the username to our database user.

To run: `node app.js` from the project top-level directory.
