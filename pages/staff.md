---
layout: page
title: "Staff"
meta_title: "List of staff"
permalink: "/staff/"
---

{% for staff in site.staff %}
* [{{ staff.name }}]({{ site.url }}{{ site.baseurl }}{{ staff.url }})
{% endfor %}


{% comment %}

Alexander Bock (alebo68@liu.se)
Alexei Abrikossov (aleab47@liu.se)
Anders Ynnerman (andyn27@liu.se)
Daniel Jönsson (danjo37@liu.se)
Emma Broman (emmbr26@liu.se)
Emma Nilsson (emmni91@liu.se)
Farhan Rasheed (farra01@liu.se)
Ingrid Hotz (ingho32@liu.se)
Jochen Jankowai (jocja84@liu.se)
Malin Ejdbo (malej60@liu.se)
Martin Falk (marfa45@liu.se)
Mathieu Linares (matli20@liu.se)
Peter Steneteg (petst55@liu.se)
Rickard Englund (ricen76@liu.se)
Robin Skånberg (robsk21@liu.se)
Signe Sidwall Thygesen (sigsi52@liu.se)
Talha Bin Masood (talma90@liu.se)
Wito Engelke (witen91@liu.se)

Mark Dieckmann (mardi06@liu.se)
Claes Lundström (clalu03@liu.se)
Aida Nordman (aidvi05@liu.se)

{% endcomment %}
