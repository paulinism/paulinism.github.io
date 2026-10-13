---
layout: page
permalink: /repositories/
title: repositories
description: Selected repositories.
nav: true
nav_order: 4
---

<style>
  .repo-photo { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 8px; display: block; }
  /* Desktop: photo takes the same box as the GitHub repo card below it (400×140 card, inside the card's 0.5rem padding) */
  @media (min-width: 768px) {
    .repo-photo-link { display: block; padding: 0 0.5rem; }
    .repo-photo { aspect-ratio: 400 / 140; border-radius: 4.5px; }
  }
</style>

## GitHub Repositories

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.5rem; margin-bottom:1.5rem; align-items:stretch;">
  <div style="display:flex; flex-direction:column;">
    <a class="repo-photo-link" href="https://github.com/paulinism/Ecovolt_telemetry_final" target="_blank">
      <img src="{{ 'assets/img/ecovolt-track.jpg' | relative_url }}" alt="EcoVolt CCM prototype vehicle on the track" class="repo-photo" style="object-position: center 80%">
    </a>
    <div style="margin-top:0.75rem; min-height:90px;">
      {% include repository/repo.liquid repository="paulinism/Ecovolt_telemetry_final" %}
    </div>
  </div>
  <div style="display:flex; flex-direction:column;">
    <a class="repo-photo-link" href="https://github.com/paulinism/ScaraCV" target="_blank">
      <img src="{{ 'assets/img/scara-bench.jpg' | relative_url }}" alt="SCARA robot bench setup with vision markers" class="repo-photo">
    </a>
    <div style="margin-top:0.75rem; min-height:90px;">
      {% include repository/repo.liquid repository="paulinism/ScaraCV" %}
    </div>
  </div>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/publications/' | relative_url }}">← Previous: Publications</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/cv/' | relative_url }}">Next: CV →</a>
</div>
