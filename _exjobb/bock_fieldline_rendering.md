---
layout: exjobb
title: Advanced Fieldline Rendering for Temporal Datasets
name: Advanced Fieldline Rendering for Temporal Datasets
contact: [ "alebo68" ]
place: NASA Goddard Space Flight Center, Community Coordinated Modeling Center, Maryland (**remote**)
people: 2
project: OpenSpace
---

Fieldlines are an often-used visualization technique for complex vector fields, particularly in 3D where other visualization techniques fail to represent the underlying structure of a magnetic field. When visualizing fieldlines across multiple timesteps, it is very difficult to maintain a visual continuity between timesteps as fieldlines jump around between timesteps.  This can be partly solved by fixing seed points, however this a) leads to the problem our collaborating expert calls a "bad hair day" in which the endpoint of the fieldlines are still free and can move drastically between timesteps and b) important features might be missed as the optimal placement for seed points between timesteps might change. The improved fieldline visualization should appear to evolve and flow smoothly (like hair flowing in the wind) instead of jumping between timesteps.

The goal of this project is to improve on existing fieldline rendering to improve their look when applied to temporal 3D vector fields (in this case Earth's magnetic field) from MHD simulations.  This is a continuation of the excellent work by Chris Paulusson on a previous OpenSpace master’s project. This project shall deal with improving the selection of time-varying seed points for Earth's magnetic field, for which models exist that predict how the magnetic field moves over time.  We are also interested in visualization techniques to improve the look-and-feel of the fieldline rendering, which can consist of developing methods to interpolate fieldlines between different timesteps and maintain a physically correct visualization, and the ability to seed fieldlines in complex fields interactively in order to improve exploration of these complex fields.  One current approach is to track field line footpoint motion between timesteps to generate the best seed points for the next timestep.  A challenge to overcome is creating a seamless field line visualization when there are magnetic topology changes, for example due to reconnection.

## Useful links
https://ccmc.gsfc.nasa.gov/
https://youtu.be/rDDjcxBP6ag

