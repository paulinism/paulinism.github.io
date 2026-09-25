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

**Escudería EcoVolt CCM** (Shell Eco-marathon) — Team Captain & Electronics Lead. Led a 30-person engineering team, developed the vehicle's telemetry and energy-optimization system (PCB design, ESP32 firmware, HiL simulation), and built an automated PPE/inventory tracking system for paddock operations.

**MIT.nano Lab** — Visiting Student, semiconductor fabrication intensive (MIT, Cambridge, USA).
- Hands-on device fabrication (semiconductors, solar cells, microfluidics) via thin-film deposition (PECVD/PVD) and chemical etching
- Photolithography and characterization in cleanrooms (Class 100, 1K, 10K), under strict safety protocols

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; margin-top:1.5rem;">
{% assign experience_projects = site.projects | where: "hide_from_grid", true | sort: "importance" %}
{% for project in experience_projects %}
  <a href="{{ project.url | relative_url }}" style="display:block; border:1px solid currentColor; border-radius:8px; overflow:hidden; text-decoration:none;">
    {% if project.img %}
    <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" style="width:100%; height:150px; object-fit:cover; display:block;">
    {% endif %}
    <div style="padding:1rem;">
      <h3 style="font-weight:bold; margin:0 0 0.5rem 0;">{{ project.title }}</h3>
      <p style="font-size:0.9rem; opacity:0.8; margin:0;">{{ project.description }}</p>
    </div>
  </a>
{% endfor %}
</div>

## Achievements & participations

**Shell Eco-marathon** — Team Captain & Electronics Lead, Escudería EcoVolt CCM (2023–2026)
- 🥇 Winner, Data & Telemetry Award (sponsored by Schmid Elektronik) — Americas 2025
- 🥈 Runner-Up, Data & Telemetry Award (sponsored by Schmid Elektronik) — United States 2026
- 🥇 Winner, Vehicle Design Award, Prototype category (sponsored by Qatar Museums) — United States 2026
- Competed: Americas 2025, Brazil 2025, Brazil 2026, United States 2026

**Altair Global Student Contest 2025** — Honorable Mention
Co-authored *"AI-Driven Data Analysis for Vehicle Energy Efficiency"* with José Diego González Fernández (ITESM México), using Altair AI Studio on Shell Eco-marathon performance data to identify the strongest drivers of vehicle energy efficiency.

**MIT.nano Lab, MIT** — *Micro/Nanofabrication Processing Technology* (October 2025)
Co-authored a technical report on n-type silicon solar cell fabrication, MEMS cantilever fabrication, and microfluidic diffusion mixer fabrication, with Ricardo Gálvez Vergara, under Dr. Javier Izquierdo Reyes and Dr. Arnoldo Salazar Soto (Tecnológico de Monterrey / MIT).

**Certifications**
- Process Simulate Standalone Associate (Siemens)
- Educational Robotics Training – Core (Universal Robots)
- Certified SolidWorks Associate – CSWA (Dassault Systèmes)
- MATLAB, Simulink and Simscape Onramp (MathWorks)
- Educational PCB Basic Design (Altium Designer)

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
