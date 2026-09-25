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

<style>
/* Force 4:3 crop on the project cards (theme-rendered via projects.liquid).
   Bootstrap's card image class is normally card-img-top; scoped to .projects so it can't
   affect anything outside this page. */
.projects img.card-img-top,
.projects .card-img-top {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
  height: auto;
}

/* The theme's default .category style is too faint against a dark background —
   make the section subtitles stand out using the site's accent color. */
.projects h2.category {
  opacity: 1;
  color: var(--global-theme-color, #a5279a);
  font-weight: 600;
}
</style>

<!-- Both sections below use the theme's own projects.liquid card include, so every
     project — extracurricular or academic — gets identical markup, hover animation,
     and image cropping. -->

<div class="projects">
  <a id="extracurricular" href=".#extracurricular">
    <h2 class="category">Extracurricular projects</h2>
  </a>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% assign experience_projects = site.projects | where: "hide_from_grid", true | sort: "importance" %}
    {% for project in experience_projects %}
      {% include projects.liquid %}
    {% endfor %}
    </div>
  </div>

  <a id="academic" href=".#academic">
    <h2 class="category">Academic projects</h2>
  </a>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% assign sorted_projects = site.projects | where_exp: "p", "p.hide_from_grid != true" | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
    </div>
  </div>
</div>
