---
layout: page-fullwidth
name: "Norrköping Summer School on \"Topological Data Analysis in Visualization: Theory, Applications, Software\""
title: "Topological Data Analysis in Visualization: Theory, Applications, Software"
meta_title: "Norrköping Summer School"
# subheadline: "Wufoo-powered contact forms"
teaser: "Summer School, Aug 21-25, 2023"
header:
  image_fullwidth: summer_school_header.png
  title: ""

# sidebar: right
# comments: true
breadcrumb: true
show_meta: true
meta_description:
permalink:
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: false
---

<div class="row">
<div class="medium-3 medium-push-9 columns" markdown="1">
<div class="panel radius" markdown="1">
Contents
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->

<div class="medium-9 medium-pull-3 columns" markdown="1">

Topological Data Analysis (TDA) has become an established framework for the extraction and analysis of hidden structural features in complex data with applications to a wide variety of scientific domains including quantum chemistry, astrophysics, fluid dynamics, combustion, material sciences, biology, and data science. The genericity, efficiency, and robustness of topological methods have made them particularly well suited for the multi-scale, interactive analysis and visualization of the structural information of data.

With the aim to broaden the participants' knowledge in TDA, its application to visual data analysis, and exposure to available software tools, we are organizing a summer school at Norrköping, Sweden during Aug 21-25, 2023. The primary target group of this summer school is Ph.D. students, post docs, and master's students working in this field. For the program, we plan to have lectures by invited speakers in the morning, a short session of presentations from participants after lunch, and hands-on sessions with different software packages (including TTK, Paraview, Inviwo) in the afternoon. 
 
The registration is free of cost, but the participants will need to arrange and pay for travel and accommodation themselves. Note that we have limited number of seats available. 

This event is inspired by [Indo-Swedish joint network project](/indoSwedProject/) and sponsered by [Swedish e-Science Research Centre (SeRC)](https://e-science.se).

<a href="https://e-science.se"><img src="/images/tdasummerschool2023/serc_logo.png" style="height:90px" alt="SeRC"/></a>


## Topics

The tentative list of topics we aim to cover during this summer school include:

- Mathematical foundations: manifolds, Morse functions, complexes, persistent homology, ... 
- Topological analysis of scientific data: scalar, vector, tensor, and multi-field topology 
- Feature-based visualization with topological descriptors: comparison, tracking, uncertainty, ...  
- Visual representations of topological descriptors
- Algorithms in computational topology 
- Applications and case studies 
- Software packages for TDA and visualization

## Invited Speakers
Here is a list of confirmed speakers:
- [Christoph Garth](https://vis.uni-kl.de/team/garth/), *Technische Universität Kaiserslautern*.
- [Jonas Lukasczyk](https://www.jluk.de/), *Technische Universität Kaiserslautern*.
- [Paul Rosen](https://www.sci.utah.edu/people/prosen.html), *SCI Institute, University of Utah*.
- [Martina Scolamiero](https://www.kth.se/profile/scola), *KTH, Stockholm*.
- [Raghavendra Sridharamurthy](https://raghavendrags.github.io/), *SCI Institute, University of Utah*.

## Program

<style>
	.accordion {
	  font-size:110%;
	  cursor: pointer;
	  width: 100%;
	  transition: 0.4s;
	  padding:0 15px;
	}

	.active, .accordion:hover {
	  background-color: #eee;
	}

	.abstractpanel {
	  padding: 0 18px;
	  background-color: white;
	  max-height: 0;
	  overflow: hidden;
	  transition: max-height 0.2s ease-out;
	  line-height:1.3em;
	  margin:5px 0 5px 0px;
	  border:none;
	}

	table tr:nth-child(even) td {
	    background-color:white;
	}
	.lecture {
		border-left:7px solid #93ade6;
	}
	.handson {
		border-left:7px solid #a4de81;
	}
	.studenttalk {
		border-left:7px solid #deab8e;
	}
	.social {
		border-left:7px solid #DFDDED;
	}
	.other {
		border-left:7px solid #D9D9D9;
	}
	.session{
		table-layout:fixed;
	}
	.wide{
	    width: 150px;
	}
	.session .coffee{
	    background-color: #eee;
	    text-align:center;
	}
	.session .time {
		border-bottom:1px solid #CCC;
		font-size:120%;
		font-weight:bold;
		padding:5px 5px;
		vertical-align:top;
		white-space: nowrap;
		text-align:center;
		vertical-align:middle;
	}
	.session .title {
		border-bottom:1px solid #CCC;
		font-size:120%;
		font-weight:bold;
		padding:5px 15px;
	    line-height:1.3em;
	    margin:5px 0 5px 0px;
	}
	.session .papertime {
		font-size:110%;
		padding:6px 15px;
		vertical-align:top;
		white-space: nowrap;
		line-height:1.3em;
		margin:5px 0 5px 0px;
		padding-top:1.2em;
		text-align:center;
	}
	.session .papertitle {
		font-size:120%;
		padding:0 15px;
		cursor: pointer;
	    line-height:1.3em;
	    margin:5px 0 5px 0px;
	}
	.session .othertitle {
		font-size:120%;
		padding:0 15px;
        line-height:1.3em;
	    margin:5px 0 5px 0px;
	}
	</style>

<table class="session" style="width:100%">
    <tr class="title">
        <td> Legend </td>
    </tr>
    <tr> 
        <td class="lecture">Lectures</td>
        <td class="handson">"Hands on" sessions</td>
        <td class="studenttalk">Talks by participants</td>
    </tr>
</table>

Please note:
<ul>
    <li> The venue for the lectures and hands-on sessions is room <a href="https://old.liu.se/NavApp/faces/popup.jsp?object_type=location&object_id=645">KO23</a> located on the second floor and easily accessible from Entrance 14 of <a href="https://old.liu.se/karta/karta?l=en&sc=true&px_id=645&px_type=2">Kopparhammaren 2</a> at <a href="https://liu.se/en/article/campus-norrkoping">Campus Norrköping</a>.
    </li>
    <li> All times are specified in CEST (UTC+2:00).
    </li>
    <li> You can click on individual talk and lectures to expand and view their abstracts.
    </li>
</ul>

### Monday, Aug 21

<table class="session">

	<tr>
		<td class="time">08:45 &#8211; 12:20</td>
		<td class="title">
			Morning session
		</td>
	</tr>
	
	<tr>
	    <td class="papertime">08:45 &#8211; 09:00</td>
	    <td>
		    <div class="othertitle">
			    Welcome address
			    <br/>
			    <div style="font-size:90%"><em>Ingrid Hotz (Linköping University)</em></div>
		    </div>
	    </td>
	</tr>
	
	<tr class="lecture">
	    <td class="papertime">09:00 &#8211; 10:30</td>
	    <td>
		    <div class="papertitle accordion">
			    Mathematical Foundations I - Algebraic Topology Basics 
			    <br/>
			    <div style="font-size:90%"><em>Vijay Natarajan (Indian Institute of Science, Bangalore)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> Topology is the mathematical study of the connectivity of space. This study is often based on topological invariants, which help establish equivalence between spaces or help distinguish between them. This lecture will provide a gentle introduction to topology with a focus on topological invariants that are amenable to computation. After a quick introduction to homoemorphism and manifolds, we will study invariants such as the Euler Characteristic, Betti numbers, and homology groups. Next, we will study two applications to illustrate the use of the invariants — the surface classification theorem and critical point classification via lower link.</p>
			    <p><b>Biography:</b> Vijay Natarajan is a Professor in the Department of Computer Science and Automation at Indian Institute of Science, Bangalore. He received his Ph.D. in computer science from Duke University and holds the B.E. degree in computer science and M.Sc. degree in mathematics from BITS Pilani. His research interests include scientific visualization, computational geometry, and computational topology. In current work, he is developing topological methods for time-varying and multi-field data visualization, and studying applications in biology, material science, and climate science.</p>
		    </div>
	    </td>
    </tr>
    
    <tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
    
    <tr class="lecture">
	    <td class="papertime">10:50 &#8211; 12:20</td>
	    <td>
		    <div class="papertitle accordion">
			    Mathematical Foundations II - Discrete Topology  
			    <br/>
			    <div style="font-size:90%"><em>Martina Scolamiero (KTH Royal Institute of Technology, Stockholm)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> During this lecture we will introduce elements of discrete topology such as simplicial complexes and illustrate how they can be used to give a geometric representation of point cloud data or metric spaces. Persistent homology, a fundamental tool in Topological Data Analysis (TDA) will then be defined. Persistent homology encodes homological properties of a sequence of simplicial complexes, revealing shape characteristics of the data. Several ways have been proposed in TDA to summarise persistent homology in a way which can then be used for data analysis; we will review some of them (persistence diagrams, barcodes, landscapes, stable ranks) with an emphasis on their robustness to perturbations of the data. 
			    </p> 
			    <p><b>Biography:</b> Martina Scolamiero is an Assistant Professor in Mathematics with specialization in Geometry and Mathematical Statistics in Artificial Intelligence. Her research interests are in the areas of applied and computational topology. She works on defining topological invariants that are suitable for data analysis, understanding their statistical properties, and their applicability in machine learning. She is also interested in applications of topological methods to neuroscience and psychiatry.
			    </p>
		    </div>
	    </td>
    </tr>
</table>

<table class="session">

	<tr class="coffee">
		<td class="time">12:30 &#8211; 13:30</td>
		<td style="width:100%;">
		    <div class="othertitle">
			    Lunch at <a href="https://visualiseringscenter.se/restaurang-cafe-c">Visualization center restaurant</a>.
		    </div>
		</td>
	</tr>
	
</table>

<table class="session">

	<tr>
		<td class="time">13:40 &#8211; 17:00</td>
		<td class="title">
			Afternoon session
		</td>
	</tr>
	
	<tr class="handson">
	    <td class="papertime">13:40 &#8211; 15:10</td>
	    <td>
		    <div class="othertitle">
			    Discussion and problem solving session
			    <br/>
			    <div style="font-size:90%"><em>Led by Martina Scolamiero (KTH Royal Institute of Technology, Stockholm) and Vijay Natarajan (Indian Institute of Science, Bangalore)</em></div>
		    </div>
	    </td>
	</tr>
	
	<tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
    
    <tr class="studenttalk">
	    <td class="papertime">15:30 &#8211; 16:00</td>
	    <td>
		    <div class="othertitle">
			    Participants' introduction session
			    <br/>
			    <div style="font-size:90%"><em>Led by Talha Bin Masood (Linköping University)</em></div>
		    </div>
	    </td>
	</tr>
	
    <tr class="studenttalk">
	    <td class="papertime">16:00 &#8211; 16:15</td>
	    <td>
		    <div class="papertitle accordion">
			    Understanding materials using Topological Data Analysis
			    <br/>
			    <div style="font-size:90%"><em>Jan Felix Senge (University of Bremen, Germany)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> Topological Data Analysis provides new approaches for the interpretation of (high dimensional) data exploiting underlying structures and relationships to be used as proxies for understanding qualitative similarities and differences. Suitable vectorization of proxies like the persistence diagram can enhance Machine Learning (ML) algorithms with an intermediate layer improving performance as well as giving (other) interpretations of the data. In this talk, we will briefly highlight some of the design choices and tools of TDA when introducing pipelines for persistent homology to understand the 2-dimensional structure of processed surfaces [1] as well as the 3-dimensional structures of pores [2]. Then we will focus on how different visualizations help practitioners to understand the structure. </p> 
			    <p>
			    <ol>
		            <li> Senge, J.F., Astaraee, A.H., Dlotko, P., Bagherifard, S., Bosbach, W.A., Extending conventional surface roughness ISO parameters using topological data analysis for shot peened surfaces, Scientific Reports, 12, 5538 (2022). 
		            </li>
                    <li> Buccino, F., Aiazzi, I., Casto, A., Liu, B., Sbarra, M.C., Ziarelli, G., Banfi, G., Ver- gani, L.M., The synergy of synchrotron imaging and convolutional neural networks towards the detection of human micro-scale bone architecture and damage, Journal of the Mechanical Behavior of Biomedical Materials, 137 (2023) 
                    </li>
                </ol>
			    </p>
		    </div>
	    </td>
    </tr>


    <tr class="studenttalk">
	    <td class="papertime">16:15 &#8211; 16:30</td>
	    <td>
		    <div class="papertitle accordion">
			    Calculation of exchange interaction and emerging DMI in magnetic material under strain-gradient
			    <br/>
			    <div style="font-size:90%"><em>Mathias Augustin (KTH Royal Institute of Technology, Stockholm)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract: </b>Dzyaloshinskii-Moriya interactions (DMI) are an important component in most topological properties of magnetic materials. The existence of the DMI in a material is closely related to the crystal symmetries and breaking them may allow the emergence of DMI in materials where they are otherwise forbidden. One way to break the crystal symmetry that recently gathered interest is to apply a strain gradient (e.g., curvature) on the material. However, performing first principles calculations on such systems requires a big supercell to account for a realistic strain gradient. This leads to costly, if doable at all, simulations to compute the parameters. Here I will present a method to compute the parameters in these systems by treating the strain-gradient effect as a perturbation, circumventing the need for large supercells.</p>
		    </div>
	    </td>
    </tr>


    <tr class="studenttalk">
	    <td class="papertime">16:30 &#8211; 16:45</td>
	    <td>
		    <div class="papertitle accordion">
			    Displacement-sensitive charge density waves in NbSe<sub>2</sub> bilayers
			    <br/>
			    <div style="font-size:90%"><em>Dhani Nafday (KTH Royal Institute of Technology, Stockholm)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract: </b>We have modelled various periodic lattice distortions associated with charge density waves in bilayer NbSe<sub>2</sub> by means of ab-initio techniques. Our main finding is that in-plane displacement affects the energy hierarchy. Although a natural consequence of the enhanced degrees of freedom in low-dimensional systems, this finding is non-trivial because the direct-space structural details of the inner layers were not explored yet. We propose two independent techniques to observe our predictions, giving simulated scanning tunnelling microscopy (STM) images and diffraction scattering. Neat differences are noticed in the simulated STM images, as well as in the diffraction patterns. </p> 
		    </div>
	    </td>
    </tr>
    
    <tr class="studenttalk">
	    <td class="papertime">16:45 &#8211; 16:55</td>
	    <td>
		    <div class="papertitle accordion">
			    Reconstructing geometry with topological priors
			    <br/>
			    <div style="font-size:90%"><em>Federico Sichetti (University of Genoa, Italy)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract: </b>I will briefly illustrate how TDA techniques can be applied to surface reconstruction, a classical geometry processing problem. </p> 
		    </div>
	    </td>
    </tr>
</table>


### Tuesday, Aug 22

<table class="session">

	<tr>
		<td class="time">09:00 &#8211; 12:20</td>
		<td class="title">
			Morning session
		</td>
	</tr>
	
	<tr class="lecture">
	    <td class="papertime">09:00 &#8211; 10:30</td>
	    <td>
		    <div class="papertitle accordion">
			    Vietoris-Rips, Čech, and alpha complexes  
			    <br/>
			    <div style="font-size:90%"><em>Talha Bin Masood (Linköping University)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> In this lecture, I will discuss practical aspects of how topology is used for understanding the shape of data represented as a point cloud in some space. Some key ideas such as thickening, filtrations, and simplicial complexes will be described. I will then introduce three types of complexes that can be constructed as a result of this thickening, namely, Vietoris-Rips, Čech, and alpha complexes. We will learn about the relationship between them and their advantages and disadvantages. In the end, we will also take up some concrete simple examples of point cloud data and discuss how we can compute it's topological inavriants through persistent homology.</p>
			    <p><b>Biography:</b> Talha Bin Masood is an Assistant Professor at Linköping University in Sweden. He received his Ph.D. in Computer Science from the Indian Institute of Science, Bangalore. After that, he worked as post doctoral researcher at Linköping University from 2018 to 2022. His research interests include scientific visualization, computational geometry, computational topology, and their applications to various scientific domains.</p>
		    </div>
	    </td>
	</tr>
	
    <tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
	
	<tr class="lecture">
	    <td class="papertime">10:50 &#8211; 12:20</td>
	    <td>
		    <div class="papertitle accordion">
			    Scalar Field Topology I: Critical points, merge trees, Reeb graphs, and applications
			    <br/>
			    <div style="font-size:90%"><em>Jonas Lukasczyk (TU Kaiserslautern, Germany)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> Scalar field topology (SFT) deals with scalar functions defined on topological spaces, commonly referred to as scalar fields. Since scalar fields are very common data representations, SFT has successfully been applied in many research areas to characterize features. To this end, SFT provides several data abstractions, such as critical points, contours, merge/contour trees, Reeb graphs, ascending/descending manifolds, Morse-Smale complexes, fibers, and so forth. These abstractions capture the inherent structure of the input data, and due to their generality, they can describe a plethora of semantic features, including pressure minima in climate data, boundaries between mixing fluids in CFD simulations, dark matter halos in cosmology, and bonds in chemistry. This talk introduces these abstractions and demonstrates their application in a variety of research applications. </p>
			    <p><b>Biography:</b> Jonas Lukasczyk is a Staff Scientist at TU Kaiserslautern. He received his Ph.D. degree from the Visual Information Analysis Group, Technische Universitat Kaiserslautern, Germany, where he also studied applied computer science and mathematics. His recent work focuses on topology-based characterization of features and their evolution in large-scale simulations. He is an active contributor to one of the flagship software libraries for topological analysis of scientific data within Visualization domain called Topology Toolkit (TTK).</p>
		    </div>
	    </td>
    </tr>
</table>

<table class="session">

	<tr class="coffee">
		<td class="time">12:30 &#8211; 13:30</td>
		<td style="width:100%;">
		    <div class="othertitle">
			    Lunch at <a href="https://visualiseringscenter.se/restaurang-cafe-c">Visualization center restaurant</a>.
		    </div>
		</td>
	</tr>
	
</table>

<table class="session">

	<tr>
		<td class="time">13:40 &#8211; 17:00</td>
		<td class="title">
			Afternoon session
		</td>
	</tr>
    
    <tr class="handson">
	    <td class="papertime">13:40 &#8211; 15:10</td>
	    <td>
		    <div class="othertitle">
			    Introduction to TDA software libraries: GUDHI, Ripser, etc.  
			    <br/>
			    <div style="font-size:90%"><em>Hands on session led by Talha Bin Masood (Linköping University) and Farhan Rasheed (Linköping University)</em></div>
		    </div>
	    </td>
	</tr>
	
	<tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
    
    <tr class="handson">
	    <td class="papertime">15:30 &#8211; 17:00</td>
	    <td>
		    <div class="othertitle">
			    Introduction to <a href="https://topology-tool-kit.github.io/">Topology Toolkit (TTK)</a>
			    <br/>
			    <div style="font-size:90%"><em>Hands on session led by Jonas Lukasczyk (TU Kaiserslautern, Germany)</em></div>
		    </div>
	    </td>
	</tr>
    
</table>

### Wednesday, Aug 23

<table class="session">

	<tr>
		<td class="time">09:00 &#8211; 12:20</td>
		<td class="title">
			Morning session
		</td>
	</tr>
	
	<tr class="lecture">
	    <td class="papertime">09:00 &#8211; 10:30</td>
	    <td>
		    <div class="papertitle accordion">
			    Scalar Field Topology II: Morse-Smale complexes 
			    <br/>
			    <div style="font-size:90%"><em>Vijay Natarajan (Indian Institute of Science, Bangalore)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> This lecture will continue the discussion on topological descriptors for scalar fields with a focus on the Morse-Smale complex. Ideas from Morse theory of smooth scalar functions can be transported to piecewise-linear functions and applied towards the study of scientific data. The Morse-Smale (MS) complex represents a partition of the domain of a scalar field into regions that exhibit uniform gradient flow behavior. The domain is partitioned into cells, each of which is defined by a pair of critical points of the scalar field. In this lecture, we will introduce the MS complex, study some characteristic properties, and outline an algorithm for computing the complex. The practical utility of the MS complex depends on the existence of methods for topological simplification that help identify and remove noise. Finally, we will describe some applications of the MS complex.</p>
			    <p><b>Biography:</b> Vijay Natarajan is a Professor in the Department of Computer Science and Automation at Indian Institute of Science, Bangalore. He received his Ph.D. in computer science from Duke University and holds the B.E. degree in computer science and M.Sc. degree in mathematics from BITS Pilani. His research interests include scientific visualization, computational geometry, and computational topology. In current work, he is developing topological methods for time-varying and multi-field data visualization, and studying applications in biology, material science, and climate science.</p>
		    </div>
	    </td>
	</tr>
	
    <tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
	
	<tr class="lecture">
	    <td class="papertime">10:50 &#8211; 12:20</td>
	    <td>
		    <div class="papertitle accordion">
			    Parallel and distributed algorithms for topological descriptors
			    <br/>
			    <div style="font-size:90%"><em>Christoph Garth (TU Kaiserslautern, Germany)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b>TBA</p>
			    <p><b>Biography:</b> Christoph Garth is a full professor in the Department of Computer Science at the University of Kaiserslautern, Germany, and leads the Scientific Visualization Lab there. After studying Mathematics and Computer Science at the University of Kaiserslautern and obtaining a Ph.D. in Computer Science in 2007, He was a postdoctoral researcher at the Institute for Data Analysis and Visualization at the University of California, Davis. Since 2011, he has been an assistant professor in Computer Science at the University of Kaiserslautern, and became a full professor in 2017. His research agenda encompasses large-scale data analysis and visualization, in-situ visualization, topology-based methods in visualization, and interdisciplinary applications of visualization. His goal is to develop theoretical insights into relevant and practical visualization techniques. He has helped pioneer Lagrangian techniques in flow visualization and demonstrate their utility in in situ scenarios.</p>
		    </div>
	    </td>
	</tr>
</table>

<table class="session">

	<tr class="coffee">
		<td class="time">12:30 &#8211; 13:30</td>
		<td style="width:100%;">
		    <div class="othertitle">
			    Lunch at <a href="https://visualiseringscenter.se/restaurang-cafe-c">Visualization center restaurant</a>.
		    </div>
		</td>
	</tr>
	
</table>

<table class="session">

	<tr class="coffee">
		<td class="time">14:00 &#8211; 19:00</td>
		<td style="width:100%;">
		    <div class="othertitle">
			    Excursion to <a href="https://visit.soderkoping.se/en/">Söderköping</a> followed by joint dinner
			    <br/>
			    <div style="font-size:90%"><em>More details to be announced...</em></div>
		    </div>
		</td>
	</tr>
	
</table>

### Thursday, Aug 24

<table class="session">

	<tr>
		<td class="time">09:00 &#8211; 12:20</td>
		<td class="title">
			Morning session
		</td>
	</tr>
	
	<tr class="lecture">
	    <td class="papertime">09:00 &#8211; 10:30</td>
	    <td>
		    <div class="papertitle accordion">
			    Vector and tensor field topology 
			    <br/>
			    <div style="font-size:90%"><em>Ingrid Hotz (Linköping University)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b>TBA</p>
			    <p><b>Biography:</b> Ingrid Hotz received her M.S. degree in theoretical Physics from the Ludwig Maximilian University in Munich Germany and the PhD degree from the Computer Science Department at the University of Kaiserslautern, Germany. During 2003-2006 she worked as a postdoctoral researcher at the Institute for Data Analysis and Visualization (IDAV) at the University of California. Then she was the leader of a research group at the Zuse Institute in Berlin Germany during 2006-2013. From 2013 to 2015 she was the head of the scientific visualization group at the German Aerospace Center (DLR). Since 2015 she is a Professor in Scientific Visualization at the Linköping University in Scientific Visualization and has an affiliation with the Center for Medical Image Science and Visualization (CMIV) in Linköping. The main focus of her research lies in the area of data analysis and scientific visualization, ranging from basic research questions to effective solutions to visualization problems in applications including flow analysis, engineering and physics, medical applications, and mechanical engineering ranging from small- to large-scale simulations.</p>
		    </div>
	    </td>
	</tr>
	
    <tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
	
	<tr class="handson">
	    <td class="papertime">10:50 &#8211; 12:20</td>
	    <td>
		    <div class="othertitle">
			    <a href="https://topology-tool-kit.github.io/">TTK</a> session 2: Synergy with <a href="https://inviwo.org/">Inviwo</a>
			    <br/>
			    <div style="font-size:90%"><em>Hands on session led by Jonas Lukasczyk (TU Kaiserslautern, Germany) and Peter Steneteg (Linköping University)</em></div>
		    </div>
	    </td>
	</tr>
</table>

<table class="session">

	<tr class="coffee">
		<td class="time">12:30 &#8211; 13:30</td>
		<td style="width:100%;">
		    <div class="othertitle">
			    Lunch at <a href="https://visualiseringscenter.se/restaurang-cafe-c">Visualization center restaurant</a>.
		    </div>
		</td>
	</tr>
	
</table>

<table class="session">

	<tr>
		<td class="time">13:40 &#8211; 17:00</td>
		<td class="title">
			Afternoon session
		</td>
	</tr>
	
    <tr class="studenttalk">
	    <td class="papertime">13:40 &#8211; 14:00</td>
	    <td>
		    <div class="papertitle accordion">
			    Uncertainty visualization and topological characterization of atmospheric rivers 
			    <br/>
			    <div style="font-size:90%"><em>Fangfei Lan (University of Utah, USA)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> Atmospheric rivers (ARs) are long, narrow regions in the atmosphere that transport water vapor from the Earth's tropics. ARs have been of great interest to climate scientists because they are responsible for a large percentage of precipitation worldwide. In North America, ARs contribute significantly to water supply and flooding risk, especially in the western regions. However, ARs are difficult to characterize due to the lack of a universal definition and their varying shapes and sizes. Many AR detection tools (ARDTs) have been developed for different purposes, producing distinct AR boundaries. In this work, we study the ARs detected by an ensemble of algorithms. We quantify and visualize the uncertainty that arises due to the differences in these methods. We propose an uncertainty visualization framework that captures both the exterior and interior variability of an ensemble of ARs. For the exterior variation, we apply the principles of contour boxplots. For the interior variations, we introduce a topology-based summary of the AR that characterizes its underlying structure independent of its detection method. We visualize the agreements and disagreements among these summaries using a MetroSet-inspired visual encoding. Applying our framework to various representative AR detectors, we visually analyze their variations as part of an ensemble analysis. </p>
		    </div>
	    </td>
    </tr>


    <tr class="studenttalk">
	    <td class="papertime">14:00 &#8211; 14:20</td>
	    <td>
		    <div class="papertitle accordion">
			    Defining merge tree-tailored edit distances for comparative analysis of scalar fields
			    <br/>
			    <div style="font-size:90%"><em>Florian Wetzels (University of Kaiserslautern-Landau, Germany)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract: </b>Merge trees are a powerful abstraction of scalar fields with various applications in topological data analysis. An area of increasing interest is the definition of similarity measures between topological abstractions to speed up the comparison of complex scalar fields. In this talk, we consider different variants of so-called deformation-based edit distances which are based on editing operations tailored specifically to topological/geometrical transformations on merge trees. This stands in contrast to the application of classic tree edit distances not considering that the modified structures adhere to certain properties. We discuss their advantages and disadvantages in terms of complexity and expressiveness as well as possible applications.</p>
		    </div>
	    </td>
    </tr>


    <tr class="studenttalk">
	    <td class="papertime">14:20 &#8211; 14:40</td>
	    <td>
		    <div class="papertitle accordion">
			    Tracking extrema-based features in climate data
			    <br/>
			    <div style="font-size:90%"><em> Emma Nilsson (Linköping University)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract: </b>In visualization applications using scalar field topology, extrema often represent features in the field, where a common task is to track the features over time and analyze their temporal evolution. Moreover, there are many different possibilities for tracking the extrema-based features. The talk focuses on gradient-based tracking of extrema, where the gradient is discrete, and the scalar field function is a piecewise linear function defined on the domain. I will cover hierarchies based on extrema, define correspondence probabilities between the extrema and how to compare different tracking approaches with each other within scalar field feature tracking. A real-world climate dataset will be used to illustrate how the presented techniques work in practice and how they compare to previous approaches. </p> 
		    </div>
	    </td>
    </tr>
    
    <tr class="studenttalk">
	    <td class="papertime">14:40 &#8211; 15:00</td>
	    <td>
		    <div class="papertitle accordion">
			    Multi-scale visual analysis of cycle characteristics in spatially-embedded graphs
			    <br/>
			    <div style="font-size:90%"><em>Farhan Rasheed (Linköping University)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract: </b>We present a visual analysis environment based on a multi-scale partitioning of a 2d domain into regions bounded by cycles in weighted planar embedded graphs. The work has been inspired by an application in granular materials research, where the question of scale plays a fundamental role in the analysis of material properties. We propose an efficient algorithm to extract the hierarchical cycle structure using persistent homology. The core of the algorithm is a filtration on a dual graph exploiting Alexander’s duality. The resulting partitioning is the basis for the derivation of statistical properties that can be explored in a visual environment. We demonstrate the proposed pipeline on a few synthetic and one real-world data set. </p> 
		    </div>
	    </td>
    </tr>
        
    <tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
	
	<tr class="lecture">
	    <td class="papertime">15:30 &#8211; 17:00</td>
	    <td>
		    <div class="papertitle accordion">
			    Topology in InfoVis: Scatterplots, Line Charts, Graphs, and Dimension Reduction 
			    <br/>
			    <div style="font-size:90%"><em> Paul Rosen (SCI Institute, University of Utah, USA)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> Insights from data are highly influenced by the shape perceived in the data. However, two problems exist. First, data are often high dimensional, making their shape difficult to visualize. Second, once visualized, they often suffer from scalability and readability issues, even with modest amounts of data. By applying topology-based descriptors to these problems, approaches can utilize the shape for presenting and interacting with data in ways that are mathematically robust and correspond to human perception and cognition. This talk will discuss the applications of topology-based descriptors, namely persistent homology, contour trees, and mapper, in several commonly used visualization types, including scatterplots, line charts, node-link diagrams, and dimension reduction. </p>
			    <p><b>Biography:</b> Paul Rosen is an Associate Professor in the Kahlert School of Computing and the Scientific Computing and Imaging Institute at the University of Utah. He received his Ph.D. from Purdue University in 2010. Subsequently, he was a Research Assistant Professor at the University of Utah from 2010 to 2015. He was then an Assistant and Associate Professor at the University of South Florida from 2015 to 2022. He has been the co-author of over 80 papers, 6 having received best paper awards or honorable mentions in the areas of computer graphics, data visualization, and topological data analysis. His research interests lie at the intersection of scientific and information visualization, where he utilizes a mix of human-centered design and geometry- and topology-based approaches to improve the efficacy of visualization tools. His research has been supported by the National Institutes of Health, the National Radio Astronomy Observatory, the Defense Intelligence Agency, and National Science Foundation grants, including an NSF CAREER Award in 2019. He is also one of the General Chairs for IEEE VIS 2024, which will be held in Tampa, Florida.</p>
		    </div>
	    </td>
    </tr>
</table>

### Friday, Aug 25

<table class="session">

	<tr>
		<td class="time">9:00 &#8211; 12:20</td>
		<td class="title">
			Morning session
		</td>
	</tr>
	
	<tr class="lecture">
	    <td class="papertime">9:00 &#8211; 10:30</td>
	    <td>
		    <div class="papertitle accordion">
			    Comparative Analysis of Topological Structures for Scientific Data Visualization  
			    <br/>
			    <div style="font-size:90%"><em> Raghavendra G. Sridharamurthy (SCI Institute, University of Utah, USA)</em></div>
		    </div>
		    <div class="abstractpanel">
			    <p><b>Abstract:</b> Many scientific measurements and/or simulations lead to scalar fields which are real valued functions measured over an area, or a volume. They can be static or dynamic i.e., measured across time, or ensembles i.e., dependent on various parameters and initial conditions. Topological structures provide a combinatorial, abstract, and succinct representation of scalar fields with proven methods to simplify these fields. With availability of such structures which capture varying degrees of information, with or without geometric context, comparison becomes one of the key operations in any data analysis pipeline to gain deeper understanding of the scientific phenomena with appropriate focus and context. Such an understanding might not be possible with just analyzing the individual fields or their corresponding topological structures. In this talk we introduce comparative analysis of topological structures, talk about theoretical and practical considerations involved in designing of such comparative methods, differentiate between global and local methods, and finally show use-cases where the comparison forms the foundation of multiple applications like symmetry detection, periodicity detection, temporal summarization, and feature tracking. </p>
			    <p><b>Biography:</b> Raghavendra Sridharamurthy is a postdoctoral researcher at the Scientific Computing and Imaging Institute (SCI), University of Utah. He completed his PhD and master's in computer science from the Indian Institute of Science (IISc), Bengaluru. His research interests include scientific visualization, computational topology, topological data analysis, and their applications. </p>
		    </div>
	    </td>
    </tr>
    
    <tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
    
    <tr class="handson">
	    <td class="papertime">10:50 &#8211; 12:20</td>
	    <td>
		    <div class="othertitle">
			    Hands on session 
			    <br/>
			    <div style="font-size:90%"><em>Work on own projects</em></div>
		    </div>
	    </td>
	</tr>
    
</table>

<table class="session">

	<tr class="coffee">
		<td class="time">12:30 &#8211; 13:30</td>
		<td style="width:100%;">
		    <div class="othertitle">
			    Lunch at <a href="https://visualiseringscenter.se/restaurang-cafe-c">Visualization center restaurant</a>.
		    </div>
		</td>
	</tr>
	
</table>

<table class="session">

	<tr>
		<td class="time">13:40 &#8211; 15:45</td>
		<td class="title">
			Afternoon session
		</td>
	</tr>
    
    <tr class="handson">
	    <td class="papertime">13:40 &#8211; 15:15</td>
	    <td>
		    <div class="othertitle">
			    Hands on session 
			    <br/>
			    <div style="font-size:90%"><em>Work on own projects</em></div>
		    </div>
	    </td>
	</tr>
    
    <tr>
	    <td class="papertime">15:15 &#8211; 15:30</td>
	    <td>
		    <div class="othertitle">
			    Closing remarks 
			    <br/>
			    <div style="font-size:90%"><em>Ingrid Hotz (Linköping University) and Vijay Natarajan (Indian Institute of Science, Bangalore)</em></div>
		    </div>
	    </td>
	</tr>
	
	<tr>
        <td colspan="2" class="coffee"> <div>Coffee break</div></td>
    </tr>
    
</table>
		
<script>
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var abstractpanel = this.nextElementSibling;
		if (abstractpanel.style.maxHeight) {
		  abstractpanel.style.maxHeight = null;
		} else {
		  abstractpanel.style.maxHeight = abstractpanel.scrollHeight + "px";
		}
	  });
	}
</script>

## Registration
Registration for this event is now closed.
  
## Organizers

- [Ingrid Hotz](https://scivis.github.io/staff/ingho32/), *Linköping University*, [ingrid.hotz@liu.se](mailto:ingrid.hotz@liu.se?subject=Summer School:)
- [Talha Bin Masood](https://scivis.github.io/staff/talma90/), *Linköping University*, [talha.bin.masood@liu.se](mailto:talha.bin.masood@liu.se?subject=Summer School:)
- [Vijay Natarajan](https://www.csa.iisc.ac.in/~vijayn/), *Indian Institute of Science, Bangalore*, [vijayn@iisc.ac.in](mailto:vijayn@iisc.ac.in?subject=Summer School:)

<p style="font-size: 1.25em; margin: 1.152em 0 0 0;font-family: 'Volkhov', Georgia, Times, serif;font-weight: normal;padding: 0;line-height: 1.4;font-style: normal;color: #222222;text-rendering: optimizeLegibility;"> Event Coordinator </p>
- [Agne Virsilaite Maras](https://liu.se/en/employee/agnvi93), *Linköping University*, [agne.virsilaite.maras@liu.se](mailto:agne.virsilaite.maras@liu.se?subject=Summer School:)

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->
