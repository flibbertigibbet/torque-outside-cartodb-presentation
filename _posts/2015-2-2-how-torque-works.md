---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 2000
  y: 0

---

# How Does Torque Work? #

Torque is part of the suite of projects that make up the CartoDB web service.
It's designed to work with the other projects, particularly the Windshaft tiler and SQL API service.

Torque queries the SQL API when initializing to get metadata about the table, such as the time 
period covered and bounding box for the points, then fetches the animation from Windshaft.

The Torque animation is configured using special CartoCSS, defining aspects such as frame count,
animation duration, and the color and size of the markers used at different frame offsets.
![Screenshot](img/torque_cartocss.png "Torque CartoCSS")