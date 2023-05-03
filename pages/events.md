---
layout: page
title: "Events"
meta_title: "List of Events @ SciVis Group"
permalink: "/events/"
---

{% for event in site.events %}
* [{{ event.name }}]({{ site.url }}{{ site.baseurl }}{{ event.url }})
{% endfor %}