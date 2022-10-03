---
layout: exjobb
title: Visualization and Analysis of Earth's Magnetic Field
name: Visualization and Analysis of Earth's Magnetic Field
contact: ["emmbr26" , "talma90"]
place:  NASA Goddard Space Flight Center, Greenbelt, Maryland
people: 2
project: OpenSpace
published: true
---

This is a project that will be carried out by 2 students as a master thesis project. This opportunity will be carried out within the software OpenSpace for the Community Coordinated Modeling Center (CCMC) team at NASA Goddard Space Flight Center.

##### Background

The magnetic field of the Earth (the magnetosphere) changes constantly due to its interaction with the Sun's magnetic field. Analysis of Earth's magnetic field is of vital importance as it protects life on Earth as well as our satellite assets in space from dangerous solar and galactic radiation. Simulation of our magnetosphere can be done in various ways with different simulation models. These models all base their simulation inputs on solar wind observations at the L1 Lagrange point between the Sun and the Earth.

The solar wind and magnetic field of the Sun extends throughout the solar system and beyond.  This is called the heliosphere.  At the Earth, when the Sun's magnetic field interacts with the Earth's magnetosphere, magnetic reconnection occurs. The Sun's interplanetary magnetic field lines reconnect with Earth's field lines and the lines travel around Earth in a cycle called the Dungey cycle. The Dungey cycle is arguably one of the most fundamental concepts in magnetospheric physics. Yet, visualizing it beyond simple cartoons has eluded scientists because it requires incorporating both plasma motion, which is often turbulent, and time-dependent magnetic fields in the visualization.

##### The project
The goal of this project is to visualize the Dungey cycle. Techniques to render field lines in motion and their reconnection in the interaction between Earth's magnetic field and the interplanetary magnetic field are partially already in place in OpenSpace. 
A remaining challenge is to make it easier to visualize another dataset by pipelining the steps of the visualization process. Also, another potentially larger challenge is to make this process generalized to support different space weather models and potentially their different irregular grids.

The visualization of reconnection requires knowing about the reconnection sites or critical points in the field. A previous project has worked on finding these points to use as seed points for field line tracing by analyzing the magnetic field. This project will be about investigating what the best way is to pipeline the data, the analysis tools and the rendering techniques, as well as implementing it, to make it as easy as possible for a user to visualize an arbitrary dataset in primarily OpenSpace. The implementation should include: finalizing visualization of reconnection of field lines, adding a tool to extract surfaces from the volume and to find critical points close to the surface of Earth. 

Finding critical points could be a stand alone software that analyzes the field, creates and supplies seed points or pre-traced field lines to other software, like OpenSpace.
OpenSpace is developed using C++ but for a stand alone software we are open for suggestions and ideas.

##### Useful links
- [Read about the CCMC team at NASA](https://ccmc.gsfc.nasa.gov/) 
- [Read about the OpenSpace software](https://www.openspaceproject.com/) 
- [Read about magnetosphere on some slides](https://ccmc.gsfc.nasa.gov/RoR_WWW/SWREDI/training-for-engineers/Zheng_Mag_2014Winter.pdf)
- Short animations showing and describing interaction between the Sun's and Earth's magnetic fields:
    - [Substorms](https://svs.gsfc.nasa.gov/20097)
    - [Simulation of Earth's magnetic field in interaction with (solar) interplanetar magnetic field (IMF)](https://commons.wikimedia.org/wiki/File:Animati3.gif)
    - [Dungey reconnection cycle](https://www.youtube.com/watch?v=NU3VU9aw6Mk)
- Longer shows about magnetosphere and space weather:
    - [Astronomy Live: Sun-Earth Connection](https://youtu.be/rDDjcxBP6ag)
    - [Mysteries of Geospace Storms - Dr. Slava Merkin](https://www.youtube.com/watch?v=qxWP13sXPXg&list=PLlEZu4V2NIdnZdBYfSPJv4zfZoF9Me4dN&index=2)
- Some interactive web visualizations showing boundaries and more: 
    - [Example 1](https://ccmc.gsfc.nasa.gov/RoR_WWW/GM/SWMF/2020/Patricia_Reiff_050520_1/RECONX_Glocer_VIS/d__var_1_e20171204-061110-000_reggrid.tec_Visualizer.html)
    - [Example 2](https://ccmc.gsfc.nasa.gov/RoR_WWW/GM/SWMF/2017/Patricia_Reiff_061317_1/RECONX_Glocer_VIS/3d__var_1_e20170102-010500-000.out_Visualizer.html)


## Application
Please send an email indicating your interest for this or other thesis works to [emma.broman@liu.se](mailto:emma.broman@liu.se) including your CV and a Ladok transcript of courses until EOD **15th of October, 2022**. If you are already a pair wanting to work on the thesis together or you are interested in multiple thesis works, a single email will suffice. 

Applications are accepted on a rolling basis.
