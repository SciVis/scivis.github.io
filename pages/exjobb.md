---
layout: page
title: "Exjobb"
meta_title: "Master theses"
permalink: "/exjobb/"
---

{%- assign exjobb_projects = site.exjobb | group_by:"project" | sort: "name" -%}
{%- assign exjobb_finished = site.exjobb | where: "finished" | group_by:"project" | sort: "name" -%}
  <div class="row">
    <div class="column medium-7"><i>Title</i></div>
    <div class="column medium-4"><i>Location</i></div>
    <div class="column medium-1"><i>Students</i></div>
  </div>
{%- for project in exjobb_projects -%}
    <h3>{{project.name}}</h3>
    {%- for item in project.items -%}
        {%- if item.finished == false -%}
        <div class="row">
            <div class="column medium-7">
              <a href="{{site.url}}{{site.baseurl}}{{item.url}}">{{item.name}}</a>
              {% if item.ongoing == true %}
              <span style="color: gray;">  (ongoing)</span>
              {% elsif item.applications == false %} 
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
        {%- endif -%}
    {%- endfor -%}
  {%- endfor -%}
{%- endunless %}