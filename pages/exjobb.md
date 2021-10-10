---
layout: page
title: "Exjobb"
meta_title: "Master theses"
permalink: "/exjobb/"
---

{%- assign exjobb_projects = site.exjobb | group_by:"project" | sort: "name" -%}
{%- for project in exjobb_projects -%}
    <h3>{{project.name}}</h3>
    {%- for items in project.items -%}
        <div class="row">
            <div class="column medium-7"><a href="{{site.url}}{{site.baseurl}}{{items.url}}">{{items.name}}</a></div>
            <div class="column medium-4">{{items.place}}</div>
            <div class="column medium-1">{{items.people}}</div>
        </div>
    {%- endfor -%}
{%- endfor -%}
