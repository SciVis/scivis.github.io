---
layout: page-fullwidth
name: "ELLIIT Visualization Infrastructure Support"
title: "ELLIIT Visualization Infrastructure Support"
meta_title: "ELLIIT Visualization Infrastructure Support"
teaser: "Access to Visualization Infrastructure, Software, and Competence"
header:
  image_fullwidth: header_elliit.jpg
  title: ''

breadcrumb: true
permalink: "research/infrastructure/"

widget1:
  title: "ELLIIT"
  url: 'https://elliit.se'
  image: elliit-logo-blue.png
  text: 'ELLIIT is a strategic research environment in information technology and mobile communications, funded by the Swedish government in 2010.'
widget2:
  title: "Inviwo"
  url: 'https://www.inviwo.org'
  image: inviwo-logo-512px.png
  text: 'Inviwo is a software framework for the rapid prototyping visualizations. It is written in C++, exploits modern graphics hardware, and is available under BSD license, which permits free use in any setup - also commercially.'

homepage: false
---

<div class="row">
<div class="medium-4 medium-push-8 columns" markdown="1">
<div class="panel radius" markdown="1">
<h4>Contents</h4>
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->

<div class="medium-8 medium-pull-4 columns" markdown="1">

Being able to interactively explore one's data is becoming increasingly important. Advanced data analysis and in particular visual data analysis environments are therefore needed. However, quite often these needs do not require research in visualization itself but rather the deployment of existing methods and techniques.

This infrastructure project therefore provides visualization consultancy as well as software development. Its main goals are to
- provide ELLIIT researchers with access to the state-of-the-art software and hardware infrastructure available at the [Visualization Center C](https://visualiseringscenter.se/) and the connected research units at [Linköping University](https://liu.se)
- assist ELLIIT researchers in developing applications in software packages like Inviwo ([inviwo.org](https://inviwo.org))

This project is funded by [ELLIIT](https://elliit.se).

<span class='noborder'>[<img title='ELLIIT' width='250px' src='/images/elliit-logo-blue.png'>](https://elliit.se)</span>

## Contact

<p style="margin-bottom:0.6em;"></p>
<div class="row b60">
    <ul class="medium-block-grid-3">
        <li class="staff"><div class="card staff-tile">
            <a href="/staff/marfa45">
                <div class="card-section">
                    <img src='/images/staff/employee_image_marfa45.jpeg'>
                    <h4>Martin Falk</h4>
                    <p><b>Visualization Consultant, Software Development</b></p> 
                    <p>Dept. of Science and Technology, Linköping University</p>
                </div>
            </a>
        </div>
        </li>
        <li class="staff"><div class="card staff-tile">
            <a href="/staff/ingho32">
                <div class="card-section">
                    <img src='/images/staff/employee_image_ingho32.jpeg'>
                    <h4>Ingrid Hotz</h4>
                    <p><b>Visualization Consultant, Project Lead</b></p> 
                    <p>Dept. of Science and Technology, Linköping University</p>
                </div>
            </a>
        </div>
        </li>
    </ul>
</div>

## Showcases and Ongoing Collaborations
- **Usable digital twins in healthcare**
  PI Gunnar Cedersund, LiU ([more information](https://elliit.se/project/usable-digital-twins-in-healthcare/))


## Links

<div class="row t60">
    {% if page.widget1.image or page.widget1.video or page.widget1.title %}
        {% include _frontpage-widget.html widget=page.widget1 %}
    {% endif %}

    {% if page.widget2.image or page.widget2.video or page.widget2.title %}
        {% include _frontpage-widget.html widget=page.widget2 %}
    {% endif %}

    {% if page.widget3.image or page.widget3.video or page.widget3.title %}
        {% include _frontpage-widget.html widget=page.widget3 %}
    {% endif %}
</div>

{% comment %}
# Publications
{% include publications id='elliitinfra' %}

{% endcomment %}

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->
