---
layout: page
title: "Staff"
meta_title: "List of staff"
permalink: "/staff/"
---

{% for staff in site.staff %}
<div class="row">
  <a href="{{ site.url }}{{ site.baseurl }}{{ staff.url }}">{{staff.name}}</a>, {{staff.position}}
</div>
{% endfor %}

<h1>Alumni</h1>

{% for staff in site.alumni %}
<div class="row">
  <a href="{{ site.url }}{{ site.baseurl }}{{ staff.url }}">{{staff.name}}</a>, {{staff.position}}
</div>
{% endfor %}


{% comment %}

Anders Ynnerman (andyn27@liu.se)
Ingrid Hotz (ingho32@liu.se)
Emma Nilsson (emmni91@liu.se)
Farhan Rasheed (farra01@liu.se)
Jochen Jankowai (jocja84@liu.se)
Martin Falk (marfa45@liu.se)
Peter Steneteg (petst55@liu.se)
Robin Skånberg (robsk21@liu.se)
Signe Sidwall Thygesen (sigsi52@liu.se)
Talha Bin Masood (talma90@liu.se)

Mark Dieckmann (mardi06@liu.se)
Claes Lundström (clalu03@liu.se)
Aida Nordman (aidvi05@liu.se)

// Previous
Alexander Bock (alebo68@liu.se)
Alexei Abrikossov (aleab47@liu.se)
Daniel Jönsson (danjo37@liu.se)
Emma Broman (emmbr26@liu.se)
Malin Ejdbo (malej60@liu.se)
Mathieu Linares (matli20@liu.se)
Rickard Englund (ricen76@liu.se)
Wito Engelke (witen91@liu.se)

{% endcomment %}
