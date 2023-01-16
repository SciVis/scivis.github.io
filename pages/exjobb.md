---
layout: page
title: "Exjobb"
meta_title: "Master theses"
permalink: "/exjobb/"
---
<div class="row">
We also welcome you to contact us if you have other ideas or interests, so we can have a discussion about what you would like to study and the topics we are researching in order to tailor a thesis project for you. For more information please contact <a href="mailto:ingrid.hotz@liu.se">Ingrid Hotz</a>.
</div>

{%- assign exjobb_projects = site.exjobb | group_by:"project" | sort: "name" -%}
{%- assign exjobb_finished = site.exjobb | where: "state", "finished" | group_by:"project" | sort: "name" -%}
  <div class="row" style="margin-top: 2rem;">
    <div class="column medium-7"><i>Title</i></div>
    <div class="column medium-4"><i>Location</i></div>
    <div class="column medium-1"><i>Students</i></div>
  </div>
{%- for project in exjobb_projects -%}
    <h3>{{project.name}}</h3>
    {%- for item in project.items -%}
        {%- if item.state != "finished" -%}
        <div class="row">
            <div class="column medium-7">
              <a href="{{site.url}}{{site.baseurl}}{{item.url}}">{{item.name}}</a>
              {% if item.state == "ongoing" %}
              <span style="color: gray;">  (ongoing)</span>
              {% elsif item.state == "closed" %} 
              <span style="color: gray;">  (application closed)</span>
              {% endif %}
            </div>
            <div class="column medium-4">{{item.place}}</div>
            <div class="column medium-1">{{item.people}}</div>
        </div>
        {%- endif -%}
    {%- endfor -%}
{%- endfor -%}

{%- unless exjobb_finished == empty -%}
  <h2>Finished Projects</h2>
  {%- for project in exjobb_finished -%}
    <h3>{{project.name}}</h3>
    {%- for item in project.items -%}
    <div class="row">
        <div class="column medium-7">
          <a href="{{site.url}}{{site.baseurl}}{{item.url}}">{{item.name}}</a>
          <span style="color: gray;">  (finished)</span>
        </div>
        <div class="column medium-4">{{item.place}}</div>
        <div class="column medium-1">{{item.people}}</div>
    </div>
    {%- endfor -%}
  {%- endfor -%}
{%- endunless %}
