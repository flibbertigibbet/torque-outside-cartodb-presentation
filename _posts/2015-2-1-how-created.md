---
layout: default
title: ""
published: true
classes:
 - slide
data:
  x: 1000
  y: 0

---

# How are Torque Visualizations Created? #

*  The simplest way to create a Torque time-lapse animation is to upload the data to a CartoDB account,
   then select the Torque option from the visualization wizard.
   Here's an example of [L.A. rapid buses](https://d9a.cartodb.com/viz/fe9751f0-6ced-11e4-98f3-0e9d821ea90d/public_map).
*  The Torque JavaScript library can also be used to define a Torque map layer that can be added to
   a Leaflet or Google Maps base layer.  The layer is defined with the user name and public table of a 
   CartoDB account to use, and some special CartoCSS that defines aspects of the animation.
   The CartoDB [Torque tutorial page](http://docs.cartodb.com/tutorials/introduction_torque.html) contains an embedded map with a Torque animation.
*  A third option for using Torque, which we will explore today, is to use the library in conjunction 
   with two other CartoDB JavaScript libraries to connect to data that is not uploaded to a CartoDB 
   account, but is rather in our own PostGIS-enabled PostgreSQL database.
