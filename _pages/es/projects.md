---
layout: page
title: proyectos
permalink: /es/projects/
lang: es
description: Proyectos académicos y trabajo práctico de ingeniería, además de experiencia profesional y de laboratorio.
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
<p class="pg-title">Proyectos</p>
<p class="pg-lead">Trabajo en hardware, firmware, control y automatización — desde el sistema de telemetría de un equipo de competencia hasta fabricación en cuarto limpio, robots y gemelos digitales. Cada tarjeta abre una descripción técnica completa con CAD, prototipos y resultados.</p>
<h2 class="cv-h" id="extracurricular"><i class="fa-solid fa-flag-checkered"></i> Extracurriculares e investigación</h2>
<div class="pj-feat-wrap">
<a class="pc-card pj-feat" href="{{ '/es/projects/ecovolt-telemetry/' | relative_url }}">
  <img src="{{ '/assets/img/ecovolt-telemetry.jpg' | relative_url }}" alt="Plataforma de telemetría y optimización energética">
  <div class="pj-body">
    <div class="pj-badges"><span class="pc-badge">Destacado</span><span class="pc-badge">1.er lugar 2025 · 2.º lugar 2026 Data &amp; Telemetry Award</span><span class="pc-badge">Artículo IEEE aceptado</span></div>
    <h3 class="pj-title">Plataforma de telemetría y optimización energética</h3>
    <p class="pj-txt"><strong>Líder de PCB y firmware</strong> — tres generaciones de telemetría para un auto de Shell Eco-marathon — 1.er (2025) y 2.º (2026) lugar en el Data &amp; Telemetry Award</p>
    <div class="pj-tags"><span class="pc-tag">Altium</span><span class="pc-tag">ESP32</span><span class="pc-tag">C/C++</span><span class="pc-tag">CAN</span><span class="pc-tag">MQTT</span><span class="pc-tag">Python</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
</div>
<div class="pj-grid" style="margin-top:1.2rem">
<a class="pc-card pj-card" href="{{ '/es/projects/ecovolt-inventory/' | relative_url }}">
  <img src="{{ '/assets/img/inv-cover-composite.jpg' | relative_url }}" alt="Sistema automatizado de inventario y equipo de protección personal" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Proyecto individual</span>
    <h3 class="pj-title">Sistema automatizado de inventario y equipo de protección personal</h3>
    <p class="pj-txt">Seguimiento con códigos QR para la logística del paddock en Shell Eco-marathon — exportación a Excel lista para aduanas, lectura de QR en menos de 80 ms y dashboard web con control de préstamos</p>
    <div class="pj-tags"><span class="pc-tag">Python</span><span class="pc-tag">OpenCV</span><span class="pc-tag">QR</span><span class="pc-tag">Dashboard web</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/es/projects/mit-nano-fabrication/' | relative_url }}">
  <img src="{{ '/assets/img/mit-cover-wafer.jpg' | relative_url }}" alt="Microfabricación de semiconductores — MIT.nano" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Curso intensivo en el cuarto limpio de MIT.nano</span>
    <h3 class="pj-title">Microfabricación de semiconductores — MIT.nano</h3>
    <p class="pj-txt">Celda solar con PCE de 15.87 % (Voc 0.60 V), cantilevers MEMS funcionales y mezclador microfluídico — una semana, Clase 100/1K/10K</p>
    <div class="pj-tags"><span class="pc-tag">Fotolitografía</span><span class="pc-tag">PECVD/PVD</span><span class="pc-tag">Grabado</span><span class="pc-tag">MEMS</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
</div>
<h2 class="cv-h" id="academic"><i class="fa-solid fa-graduation-cap"></i> Proyectos académicos</h2>
<div class="pj-grid">
<a class="pc-card pj-card" href="{{ '/es/projects/orza-digital-twin/' | relative_url }}">
  <img src="{{ '/assets/img/orza.png' | relative_url }}" alt="Gemelo digital de una celda flexible de manufactura CNC" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Reto industrial con ORZA Tech</span>
    <h3 class="pj-title">Gemelo digital de una celda flexible de manufactura CNC</h3>
    <p class="pj-txt">Celda CNC virtual puesta en marcha 100 % en software (programación de PLC S7-1500 en TIA Portal, UR5 VRC, CAM y código G, visión Cognex, SCADA/KPIs)</p>
    <div class="pj-tags"><span class="pc-tag">TIA Portal</span><span class="pc-tag">S7-1500</span><span class="pc-tag">WinCC</span><span class="pc-tag">Process Simulate</span><span class="pc-tag">UR5</span><span class="pc-tag">Cognex</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/es/projects/scara-robot/' | relative_url }}">
  <img src="{{ '/assets/img/scara.jpg.jpg' | relative_url }}" alt="Robot SCARA pick-and-place guiado por visión (4 GDL)" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Líder de firmware y electrónica</span>
    <h3 class="pj-title">Robot SCARA pick-and-place guiado por visión (4 GDL)</h3>
    <p class="pj-txt">SCARA de 4 GDL con visión YOLOv11n (mAP 0.72), 5 de 6 piezas a ~14 s por ciclo, PCB propio en Altium</p>
    <div class="pj-tags"><span class="pc-tag">ESP32</span><span class="pc-tag">Altium</span><span class="pc-tag">Python</span><span class="pc-tag">YOLOv11n</span><span class="pc-tag">OpenCV</span><span class="pc-tag">MQTT</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/es/projects/endress-viscosity/' | relative_url }}">
  <img src="{{ '/assets/img/viscosity.jpg' | relative_url }}" alt="Sistema automatizado de medición de viscosidad" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Líder de PCB y embebidos con Endress+Hauser</span>
    <h3 class="pj-title">Sistema automatizado de medición de viscosidad</h3>
    <p class="pj-txt">Cadena de señal con ganancia de 400× que distingue 252 cP de 1676 cP; tres placas en Altium, dos fabricadas por JLCPCB</p>
    <div class="pj-tags"><span class="pc-tag">Altium</span><span class="pc-tag">Amp. operacionales</span><span class="pc-tag">ESP32</span><span class="pc-tag">LabVIEW</span><span class="pc-tag">OpenPLC</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/es/projects/agv-platform/' | relative_url }}">
  <img src="{{ '/assets/img/agv-cover-pair.jpg' | relative_url }}" alt="Mesa de tijera y AGV — plataforma automatizada de manejo de materiales" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Líder de diseño mecánico y electrónica</span>
    <h3 class="pj-title">Mesa de tijera y AGV — plataforma automatizada de manejo de materiales</h3>
    <p class="pj-txt">Mesa de tijera (probada con &gt;100 kg, 40 × 30 × 76 cm) con PCB propio para celda de carga (sin HX711) y piezas de aluminio maquinadas</p>
    <div class="pj-tags"><span class="pc-tag">SolidWorks</span><span class="pc-tag">NX</span><span class="pc-tag">Maquinado</span><span class="pc-tag">Soldadura MIG</span><span class="pc-tag">Celda de carga</span></div>
    <span class="pj-more">Ver el proyecto →</span>
  </div>
</a>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/' | relative_url }}">← Anterior: Sobre mí</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/achievements/' | relative_url }}">Siguiente: Logros →</a>
</div>
