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

# How is Torque JS designed to be used? #

The Torque JavaScript library will let you create a Torque map layer that can be added to
a Leaflet or Google Maps base layer on your own web page. 

The layer is defined with the user name of a CartoDB account to use, the name of the table to 
visualize from the CartoDB account, the user password (if the table is private), and some special
CartoCSS that defines aspects of the animation.

Here's an [example](http://cartodb.github.io/torque/examples/navy_leaflet) from the Torque project
GitHub Pages. The [source](https://github.com/CartoDB/torque/blob/master/examples/navy_leaflet.html)
is under the project's `examples` directory.

![Navy demo GIF](img/navy.gif "Navy demo time lapse")
