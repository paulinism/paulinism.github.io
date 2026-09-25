---
layout: page
title: projects
permalink: /projects/
description: Academic and hands-on engineering work, plus professional/lab experience.
nav: true
nav_order: 1
display_categories: [work, fun]
horizontal: false
---

## Extracurricular projects
<style>
/* Force 4:3 crop on the academic project grid's cards (theme-rendered via projects.liquid).
   Bootstrap's card image class is normally card-img-top; scoped to .projects so it can't
   affect anything outside this page. */
.projects img.card-img-top,
.projects .card-img-top {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
  height: auto;
}

/* Match the academic grid's hover animation on the hand-built
   "Professional & lab experience" cards above it. */
.experience-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.experience-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; margin-top:1.5rem;">
{% assign experience_projects = site.projects | where: "hide_from_grid", true | sort: "importance" %}
{% for project in experience_projects %}
  <a href="{{ project.url | relative_url }}" class="experience-card" style="display:block; border:1px solid currentColor; border-radius:8px; overflow:hidden; text-decoration:none;">
    {% if project.img %}
    <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" style="width:100%; aspect-ratio:4/3; object-fit:cover; display:block;">
    {% endif %}
    <div style="padding:1rem;">
      <h3 style="font-weight:bold; margin:0 0 0.5rem 0;">{{ project.title }}</h3>
      <p style="font-size:0.9rem; opacity:0.8; margin:0;">{{ project.description }}</p>
    </div>
  </a>
{% endfor %}
</div>

## Academic projects

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories, excluding the ones already shown above under "Professional & lab experience" -->

{% assign sorted_projects = site.projects | where_exp: "p", "p.hide_from_grid != true" | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
