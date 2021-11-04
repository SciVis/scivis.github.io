---
layout: exjobb
title: Advanced Fieldline Rendering for Temporal Datasets
name: Advanced Fieldline Rendering for Temporal Datasets
contact: [ "alebo68" ]
place: Community Coordinated Modeling Center, Goddard Space Flight Center, Greenbelt, Maryland (placed in Norrköping until travelling is possible and safe)
people: 2
project: OpenSpace
---

Fieldlines are an often-used visualization technique for complex vector fields, particularly in 3D where other visualization techniques fail to represent the underlying structure of a magnetic field. When visualizing fieldlines across multiple timesteps, it is very difficult to maintain a visual continuity between timesteps as fieldlines jump around between timesteps.  This can be partly solved by fixing seed points, however this a) leads to the problem our collaborating expert calls a "bad hair day" in which the endpoint of the fieldlines are still free and can move drastically between timesteps and b) important features might be missed as the optimal placement for seed points between timesteps might change. The improved fieldline visualization should appear to evolve and flow smoothly (like hair flowing in the wind) instead of jumping between timesteps.

This project explores how to improve upon the look of existing fieldline rendering when applied to time varying 3D vector fields produced by simulations. In this case, simulations of the Earth's magnetic field, the magnetosphere.  This is a continuation of the excellent work by Chris Paulusson on a previous OpenSpace project. The previous project dealt with creating new magnetic fieldline seed points from flowlines in the simulation, in order to interpolate in time for a single simulation volume timestep.

This project has two main goals:
1) Create visualization techniques to improve the look-and-feel of the fieldline rendering. This should consist of developing methods to interpolate fieldlines between different simulation volume timesteps and maintain a physically correct visualization, and the ability to seed fieldlines in complex fields interactively in order to improve exploration of these complex fields.
   
2) Creating a seamless field line visualization in cases where there are magnetic topology changes, for example due to reconnection.  The magnetic topology information for each simulation timestep will be provided.

## Useful links
https://ccmc.gsfc.nasa.gov/
https://youtu.be/rDDjcxBP6ag
