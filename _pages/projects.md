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

## Professional & lab experience

**Escudería EcoVolt CCM** (Shell Eco-marathon) — Team Captain & Electronics Lead. Led a 30-person engineering team, developed the vehicle's telemetry and energy-optimization system (PCB design, ESP32 firmware, HiL simulation). See the full write-up: [Telemetry & Energy-Optimization Platform](/projects/ecovolt-telemetry/).

**MIT.nano Lab** — Visiting Student, semiconductor fabrication intensive (MIT, Cambridge, USA).
- Hands-on device fabrication (semiconductors, solar cells, microfluidics) via thin-film deposition (PECVD/PVD) and chemical etching
- Photolithography and characterization in cleanrooms (Class 100, 1K, 10K), under strict safety protocols

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

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

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
