---
layout: page
permalink: /publications/
title: publications
description: Conference paper and technical reports.
nav: true
nav_order: 3
---

<style>
  .pc-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; overflow: hidden; }
  .pc-badge { display: inline-block; font-size: .72rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: .15rem .55rem; border-radius: 999px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .pc-tag { display: inline-block; font-size: .8rem; padding: .15rem .6rem; margin: 0 .3rem .3rem 0; border-radius: 999px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); }
  .pc-btns { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }
  .pc-btn { display: inline-flex; align-items: center; gap: .4rem; padding: .45rem .9rem; border-radius: 8px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color) !important; text-decoration: none !important; font-size: .88rem; font-weight: 600; background: transparent; cursor: pointer; }
  .pc-btn.primary { background: var(--global-theme-color); color: var(--global-bg-color) !important; }
  .pc-h { margin: 2rem 0 .8rem; }
  .pub-feat { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr); }
  .pub-feat img { width: 100%; height: 100%; min-height: 240px; object-fit: cover; display: block; }
  .pub-body { padding: 1.1rem 1.3rem 1.2rem; }
  .pub-title { font-size: 1.2rem; font-weight: 700; line-height: 1.35; margin: .6rem 0 .4rem; }
  .pub-auth { font-size: .92rem; opacity: .9; margin: 0 0 .2rem; }
  .pub-venue { font-size: .88rem; opacity: .75; margin: 0 0 .6rem; font-style: italic; }
  .pub-abs { font-size: .95rem; line-height: 1.55; margin: 0; }
  .pub-bib { display: none; margin-top: .8rem; font-family: "Roboto Mono", ui-monospace, monospace; font-size: .75rem; white-space: pre-wrap; background: rgba(128,128,128,.1); border-radius: 8px; padding: .7rem .8rem; }
  .pub-bib.open { display: block; }
  .rep-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.1rem; }
  .rep-card img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .rep-card .pub-body { padding: .9rem 1rem 1rem; }
  .rep-card .pub-title { font-size: 1.02rem; }
  @media (max-width: 760px) { .pub-feat, .rep-grid { grid-template-columns: minmax(0, 1fr); } .pub-feat img { min-height: 0; height: 200px; } }

  /* ---- Page title and section headings matched to Projects/CV/Contact ---- */
  .post > .post-header { display: none !important; }
  .pg-title { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: -0.02em; margin: 1rem 0 .3rem; }
  .pg-lead { opacity: .85; margin: 0 0 1.2rem; max-width: 46rem; line-height: 1.6; }
  .sec-h { display: flex; align-items: center; gap: .6rem; color: var(--global-theme-color) !important; font-size: 1.45rem; font-weight: 700; padding-bottom: .4rem; border-bottom: 2px solid var(--global-theme-color); margin: 2.2rem 0 1rem !important; }
  .sec-h i { font-size: .8em; }
  @media (min-width: 761px) { .pub-feat.pub-has-cover { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1.4fr); } }
  .pub-feat .pub-cover { object-fit: contain; background: #0d0e12; }
  @media (max-width: 760px) { .pub-feat .pub-cover { height: auto; aspect-ratio: 4 / 3; } }
  .pub-authors { margin: .9rem 0 0; padding-top: .8rem; border-top: 1px solid rgba(128,128,128,.25); }
  .pub-authors p { margin: 0 0 .3rem; font-size: .9rem; line-height: 1.5; }
  .pub-authors .pt-k { font-size: .75rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--global-theme-color); margin-bottom: .25rem; }
</style>
<p class="pg-title">Publications</p>
<p class="pg-lead">Conference paper and technical reports from racing, robotics and automation projects.</p>
<h2 class="pc-h sec-h"><i class="fa-solid fa-newspaper"></i> Conference paper</h2>
<div class="pc-card pub-feat pub-has-cover">
  <img class="pub-cover" data-zoomable src="{{ 'assets/img/paper-cover.jpg' | relative_url }}" width="1600" height="1200" alt="Paper cover: the three authors in EcoVolt CCM team shirts in front of the Run Intelligence telemetry dashboard">
  <div class="pub-body">
    <span class="pc-badge">IEEE SAIBOT 2026 · Accepted</span>
    <p class="pub-title">Real-Time Telemetry and Computational Intelligence Pipeline for Energy-Efficient Driving of an Electric Eco-Marathon Vehicle</p>
    <p class="pub-auth"><strong>P. L. Ruíz-Servín</strong>, J. D. González-Fernández, A. Flores-Mendoza, J. Izquierdo-Reyes</p>
    <p class="pub-venue">IEEE Latin American School on Computational Intelligence and Robotics (SAIBOT), 2026 — first author</p>
    <p class="pub-abs">Three generations of telemetry hardware for an electric Shell Eco-marathon prototype — current, voltage, GPS and motor data over CAN, logged to SD and streamed live — and a data pipeline that compares driving strategies, including a simulator bench test where constant throttle beat pulse-and-glide by 14 %.</p>
    <div class="pub-authors">
      <p class="pt-k">On the cover</p>
      <p>From left: <strong>José Diego González-Fernández</strong>, <strong>Paulina L. Ruíz-Servín</strong> and <strong>Aarón Flores-Mendoza</strong>. Faculty advisor: Dr. Javier Izquierdo-Reyes.</p>
    </div>
    <div class="pc-btns">
      <a class="pc-btn primary" href="{{ '/projects/ecovolt-telemetry/' | relative_url }}">Related project</a>
      <button class="pc-btn" type="button" onclick="this.closest('.pub-body').querySelector('.pub-bib').classList.toggle('open')">BibTeX</button>
    </div>
<pre class="pub-bib">@inproceedings{ruizservin2026saibot,
  title     = {Real-Time Telemetry and Computational Intelligence Pipeline
               for Energy-Efficient Driving of an Electric Eco-Marathon Vehicle},
  author    = {Ru{\'\i}z-Serv{\'\i}n, Paulina Lilian and Gonz{\'a}lez-Fern{\'a}ndez, Jos{\'e} Diego
               and Flores-Mendoza, Aar{\'o}n and Izquierdo-Reyes, Javier},
  booktitle = {IEEE Latin American School on Computational Intelligence and Robotics (SAIBOT)},
  year      = {2026},
  note      = {Accepted}
}</pre>
  </div>
</div>
<h2 class="pc-h sec-h"><i class="fa-solid fa-file-lines"></i> Technical reports</h2>
<div class="rep-grid">
  <div class="pc-card rep-card">
    <img data-zoomable src="{{ 'assets/img/mit-cover-wafer.jpg' | relative_url }}" alt="Processed wafer at MIT.nano">
    <div class="pub-body">
      <span class="pc-badge">MIT.nano · Oct 2025</span>
      <p class="pub-title">Micro/Nanofabrication Processing Technology</p>
      <p class="pub-abs">Co-authored report on an n-type silicon solar cell (PCE 15.87 %), MEMS cantilevers and a microfluidic diffusion mixer, under Dr. Javier Izquierdo Reyes and Dr. Arnoldo Salazar Soto.</p>
      <div class="pc-btns"><a class="pc-btn" href="{{ '/projects/mit-nano-fabrication/' | relative_url }}">See the project</a></div>
    </div>
  </div>
  <div class="pc-card rep-card">
    <img data-zoomable src="{{ 'assets/img/tel-altair.png' | relative_url }}" alt="Altair AI Studio model comparison" style="object-fit: contain; background: #fff;">
    <div class="pub-body">
      <span class="pc-badge">Altair Contest 2025 · Honorable Mention</span>
      <p class="pub-title">AI-Driven Data Analysis for Vehicle Energy Efficiency</p>
      <p class="pub-abs">With José Diego González Fernández: eight regression models compared in Altair AI Studio on race data; vehicle speed identified as the strongest driver of efficiency.</p>
      <div class="pc-btns"><a class="pc-btn" href="https://web.altair.com/global-student-contest-2025" target="_blank" rel="noopener">Contest page</a></div>
    </div>
  </div>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/achievements/' | relative_url }}">← Previous: Achievements</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/repositories/' | relative_url }}">Next: Repositories →</a>
</div>
