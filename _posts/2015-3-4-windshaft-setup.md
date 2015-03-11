---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 4000
  y: 2000

---

# Setting up Windshaft #

* Minimal example configuration files are in the project, in `config/environments`.

* [Here](https://gist.github.com/flibbertigibbet/5a971283c1f87aa4f598) is an example configuration
  file for a stand-alone Windshaft configuration that will work for torque.

* The configuration defines the database name, database username and password, and for this,
  we'll define the database table to use.

* To run, put your configuration file in the top-level directory, then start with:
  `node yourconfig.js`.
