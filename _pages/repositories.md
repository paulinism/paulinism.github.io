---
layout: page
permalink: /repositories/
title: repositories
description: Selected repositories.
nav: true
nav_order: 4
---

## GitHub Repositories

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.5rem; margin-bottom:1.5rem; align-items:stretch;">
  <div style="display:flex; flex-direction:column;">
    <a href="https://github.com/paulinism/Telemetry_Ecovolt" target="_blank">
      <img src="{{ 'assets/img/ecovolt-track.jpg' | relative_url }}" alt="EcoVolt CCM prototype vehicle on the track" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; display:block;">
    </a>
    <div style="margin-top:0.75rem; min-height:90px;">
      {% include repository/repo.liquid repository="paulinism/Telemetry_Ecovolt" %}
    </div>
  </div>
  <div style="display:flex; flex-direction:column;">
    <a href="https://github.com/paulinism/ScaraCV" target="_blank">
      <img src="{{ 'assets/img/scara-bench.jpg' | relative_url }}" alt="SCARA robot bench setup with vision markers" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; display:block;">
    </a>
    <div style="margin-top:0.75rem; min-height:90px;">
      {% include repository/repo.liquid repository="paulinism/ScaraCV" %}
    </div>
  </div>
</div>
