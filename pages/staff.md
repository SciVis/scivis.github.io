---
layout: page
title: "Staff"
meta_title: "List of staff"
permalink: "/staff/"
---

{% for staff in site.staff %}
* [{{ staff.name }}]({{ site.url }}{{ site.baseurl }}{{ staff.url }})
{% endfor %}