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
  .pc-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; overflow: hidden; }
  .pc-badge { display: inline-block; font-size: .72rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: .15rem .55rem; border-radius: 999px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .pc-tag { display: inline-block; font-size: .8rem; padding: .15rem .6rem; margin: 0 .3rem .3rem 0; border-radius: 999px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); }
  .pc-btns { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }
  .pc-btn { display: inline-flex; align-items: center; gap: .4rem; padding: .45rem .9rem; border-radius: 8px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color) !important; text-decoration: none !important; font-size: .88rem; font-weight: 600; background: transparent; cursor: pointer; }
  .pc-btn.primary { background: var(--global-theme-color); color: var(--global-bg-color) !important; }
  .pc-h { margin: 2rem 0 .8rem; }
  .post > .post-header { display: none !important; }
  .pg-title { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: -0.02em; margin: 1rem 0 .3rem; }
  .pg-lead { opacity: .85; margin: 0 0 1.2rem; max-width: 46rem; line-height: 1.6; }
  .cv-h { color: var(--global-theme-color); display: flex; align-items: center; gap: .6rem; padding-bottom: .4rem; border-bottom: 2px solid var(--global-theme-color); margin: 2.2rem 0 1rem; }
  .cv-h i { font-size: .8em; }
  .pj-feat { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); text-decoration: none !important; color: inherit !important; transition: transform .15s ease, border-color .15s ease; }
  .pj-feat img { width: 100%; height: 100%; min-height: 280px; object-fit: cover; display: block; }
  .pj-feat .pj-body { padding: 1.4rem 1.5rem; display: flex; flex-direction: column; gap: .6rem; }
  .pj-feat .pj-title { font-size: 1.55rem; }
  .pj-badges { display: flex; flex-wrap: wrap; gap: .4rem; }
  .pj-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; }
  .pj-card { display: flex; flex-direction: column; text-decoration: none !important; color: inherit !important; transition: transform .15s ease, border-color .15s ease; }
  .pj-card img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
  .pj-card .pj-body { padding: 1rem 1.1rem 1.1rem; display: flex; flex-direction: column; gap: .5rem; flex: 1; }
  .pj-card:hover, .pj-feat:hover { transform: translateY(-3px); border-color: var(--global-theme-color); }
  .pj-title { font-size: 1.15rem; font-weight: 700; margin: 0; line-height: 1.3; }
  .pj-card:hover .pj-title, .pj-feat:hover .pj-title { color: var(--global-theme-color); }
  .pj-txt { margin: 0; font-size: .92rem; line-height: 1.55; opacity: .88; }
  .pj-tags { margin-top: auto; }
  .pj-more { color: var(--global-theme-color); font-weight: 600; font-size: .9rem; }
  .pc-badge { align-self: flex-start; }
  @media (max-width: 760px) { .pj-feat, .pj-grid { grid-template-columns: minmax(0, 1fr); } .pj-feat img { min-height: 0; aspect-ratio: 16 / 9; } }
</style>
<p class="pg-title">Projects</p>
<p class="pg-lead">Hardware, firmware, control and automation work — from a racing-team telemetry system to cleanroom fabrication, robots and digital twins. Each card opens a full technical write-up with CAD, prototypes and results.</p>
<h2 class="cv-h" id="extracurricular"><i class="fa-solid fa-flag-checkered"></i> Extracurricular &amp; research</h2>
<div class="pj-feat-wrap">
<a class="pc-card pj-feat" href="{{ '/projects/ecovolt-telemetry/' | relative_url }}">
  <img src="{{ '/assets/img/ecovolt-telemetry.jpg' | relative_url }}" alt="Telemetry &amp; Energy-Optimization Platform">
  <div class="pj-body">
    <div class="pj-badges"><span class="pc-badge">Featured</span><span class="pc-badge">1st 2025 · 2nd 2026 Data &amp; Telemetry Award</span><span class="pc-badge">IEEE paper submitted</span></div>
    <h3 class="pj-title">Telemetry &amp; Energy-Optimization Platform</h3>
    <p class="pj-txt"><strong>PCB lead &amp; firmware</strong> — three generations of telemetry for a Shell Eco-marathon car — 1st (2025) and 2nd (2026) Data &amp; Telemetry Award</p>
    <div class="pj-tags"><span class="pc-tag">Altium</span><span class="pc-tag">ESP32</span><span class="pc-tag">C++</span><span class="pc-tag">CAN</span><span class="pc-tag">MQTT</span><span class="pc-tag">Python</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
</div>
<div class="pj-grid" style="margin-top:1.2rem">
<a class="pc-card pj-card" href="{{ '/projects/ecovolt-inventory/' | relative_url }}">
  <img src="{{ '/assets/img/inv-cover-composite.jpg' | relative_url }}" alt="Automated PPE &amp; Inventory Management System" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Solo project</span>
    <h3 class="pj-title">Automated PPE &amp; Inventory Management System</h3>
    <p class="pj-txt">QR tracking for Shell Eco-marathon paddock ops — customs-ready Excel export, under 80 ms QR reading, web dashboard with loan management</p>
    <div class="pj-tags"><span class="pc-tag">Python</span><span class="pc-tag">OpenCV</span><span class="pc-tag">QR</span><span class="pc-tag">Web dashboard</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/projects/mit-nano-fabrication/' | relative_url }}">
  <img src="{{ '/assets/img/mit-cover-wafer.jpg' | relative_url }}" alt="Semiconductor Microfabrication — MIT.nano" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">MIT.nano cleanroom intensive</span>
    <h3 class="pj-title">Semiconductor Microfabrication — MIT.nano</h3>
    <p class="pj-txt">Solar cell PCE 15.87 % (Voc 0.60 V), functional MEMS cantilevers and microfluidic mixer — one week, Class 100/1K/10K</p>
    <div class="pj-tags"><span class="pc-tag">Photolithography</span><span class="pc-tag">PECVD/PVD</span><span class="pc-tag">Etching</span><span class="pc-tag">MEMS</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
</div>
<h2 class="cv-h" id="academic"><i class="fa-solid fa-graduation-cap"></i> Academic projects</h2>
<div class="pj-grid">
<a class="pc-card pj-card" href="{{ '/projects/orza-digital-twin/' | relative_url }}">
  <img src="{{ '/assets/img/orza.png' | relative_url }}" alt="Digital Twin of a Flexible CNC Manufacturing Cell" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Industry challenge with ORZA Tech</span>
    <h3 class="pj-title">Digital Twin of a Flexible CNC Manufacturing Cell</h3>
    <p class="pj-txt">Virtual CNC cell commissioned 100 % in software (S7-1500 PLC programming in TIA Portal, UR5 VRC, CAM and G-code, Cognex vision, SCADA/KPIs)</p>
    <div class="pj-tags"><span class="pc-tag">TIA Portal</span><span class="pc-tag">S7-1500</span><span class="pc-tag">Process Simulate</span><span class="pc-tag">UR5</span><span class="pc-tag">Cognex</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/projects/scara-robot/' | relative_url }}">
  <img src="{{ '/assets/img/scara.jpg.jpg' | relative_url }}" alt="Vision-Guided SCARA Pick-and-Place Robot (4 DoF)" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Firmware &amp; electronics lead</span>
    <h3 class="pj-title">Vision-Guided SCARA Pick-and-Place Robot (4 DoF)</h3>
    <p class="pj-txt">4-DOF SCARA with YOLOv11n vision (mAP 0.72), 5/6 picks at ~14 s/cycle, custom Altium PCB</p>
    <div class="pj-tags"><span class="pc-tag">ESP32</span><span class="pc-tag">Altium</span><span class="pc-tag">YOLOv11n</span><span class="pc-tag">OpenCV</span><span class="pc-tag">MQTT</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/projects/endress-viscosity/' | relative_url }}">
  <img src="{{ '/assets/img/viscosity.jpg' | relative_url }}" alt="Automated Viscosity Measurement System" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">PCB &amp; embedded lead with Endress+Hauser</span>
    <h3 class="pj-title">Automated Viscosity Measurement System</h3>
    <p class="pj-txt">400× gain signal chain separating 252 cP from 1676 cP; three Altium boards, two manufactured by JLCPCB</p>
    <div class="pj-tags"><span class="pc-tag">Altium</span><span class="pc-tag">Op-amps</span><span class="pc-tag">ESP32</span><span class="pc-tag">LabVIEW</span><span class="pc-tag">OpenPLC</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/projects/agv-platform/' | relative_url }}">
  <img src="{{ '/assets/img/agv-cover-pair.jpg' | relative_url }}" alt="Scissor Lift &amp; AGV — Automated Material Handling Platform" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Mechanical design &amp; electronics lead</span>
    <h3 class="pj-title">Scissor Lift &amp; AGV — Automated Material Handling Platform</h3>
    <p class="pj-txt">Scissor lift (load-tested &gt;100 kg, 40 × 30 × 76 cm) with custom load-cell PCB (no HX711) and machined aluminum parts</p>
    <div class="pj-tags"><span class="pc-tag">SolidWorks</span><span class="pc-tag">NX</span><span class="pc-tag">Machining</span><span class="pc-tag">MIG welding</span><span class="pc-tag">Load cell</span></div>
    <span class="pj-more">Read the project →</span>
  </div>
</a>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/' | relative_url }}">← Previous: About</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/achievements/' | relative_url }}">Next: Achievements →</a>
</div>
