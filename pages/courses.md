---
layout: page
title: "Courses"
meta_title: "List of Courses"
permalink: "/courses/"
---

{% for course in site.courses %}
* [{{ course.name }}]({{ site.url }}{{ site.baseurl }}{{ course.url }})
{% endfor %}