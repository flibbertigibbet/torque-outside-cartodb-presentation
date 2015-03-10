---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 2000
  y: 1000

---

# Okay, How Does CartoDB Work? #

CartoDB has several open-source components:

*  The [web site](https://github.com/CartoDB/cartodb) itself, which manages user-name references by
   giving each user a subdomain that is the user name.
*  Each user gets their own PostgreSQL role and database with the PostGIS extensions installed.
   There are a number of triggers installed, as well as extra functions from [this project](https://github.com/CartoDB/cartodb-postgresql).
*  The database gets queried via their JavaScript [SQL API](https://github.com/CartoDB/CartoDB-SQL-API).
   The SQL API authenticates with the database by getting the user account name from the subdomain,
   accepting an API key parameter, and finding current user credentials in Redis storage.
*  Map tiles are served via the JavaScript [Windshaft](https://github.com/CartoDB/Windshaft) library.
   Windshaft works quite well on its own outside of a full CartoDB installation.
