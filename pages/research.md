---
layout: page
title: "Research Activities"
header:
  image_fullwidth: header_unsplash_12.jpg
permalink: "/research/"
---

{% for item in site.research %}
* [{{ item.title }}]({{ site.url }}{{ site.baseurl }}{{ item.url }})
{% endfor %}

{% for item in site.projects %}
* [{{ item.title }}]({{ site.url }}{{ site.baseurl }}{{ item.url }})
{% endfor %}
