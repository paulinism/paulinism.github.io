---
layout: page
permalink: /es/repositories/
lang: es
title: repositorios
description: Repositorios seleccionados.
---

<style>
  .pc-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; overflow: hidden; }
  .pc-badge { display: inline-block; font-size: .72rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: .15rem .55rem; border-radius: 999px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .pc-tag { display: inline-block; font-size: .8rem; padding: .15rem .6rem; margin: 0 .3rem .3rem 0; border-radius: 999px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); }
  .pc-btns { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }
  .pc-btn { display: inline-flex; align-items: center; gap: .4rem; padding: .45rem .9rem; border-radius: 8px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color) !important; text-decoration: none !important; font-size: .88rem; font-weight: 600; background: transparent; cursor: pointer; }
  .pc-btn.primary { background: var(--global-theme-color); color: var(--global-bg-color) !important; }
  .pc-h { margin: 2rem 0 .8rem; }
  .repo-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; }
  .repo-card img { width: 100%; height: 220px; object-fit: cover; display: block; }
  .repo-body { padding: 1rem 1.1rem 1.1rem; }
  .repo-name { font-family: "Roboto Mono", ui-monospace, monospace; font-size: 1.02rem; font-weight: 700; margin: .5rem 0 .2rem; }
  .repo-desc { font-size: .95rem; margin: 0 0 .6rem; }
  .repo-body ul { margin: .2rem 0 .4rem; padding-left: 1.1rem; font-size: .9rem; }
  .repo-body li { margin-bottom: .15rem; }
  @media (max-width: 760px) { .repo-grid { grid-template-columns: minmax(0, 1fr); } }

  /* ---- Page title and section headings matched to Projects/CV/Contact ---- */
  .post > .post-header { display: none !important; }
  .pg-title { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: -0.02em; margin: 1rem 0 .3rem; }
  .pg-lead { opacity: .85; margin: 0 0 1.2rem; max-width: 46rem; line-height: 1.6; }
  .sec-h { display: flex; align-items: center; gap: .6rem; color: var(--global-theme-color) !important; font-size: 1.45rem; font-weight: 700; padding-bottom: .4rem; border-bottom: 2px solid var(--global-theme-color); margin: 2.2rem 0 1rem !important; }
  .sec-h i { font-size: .8em; }
</style>
<p class="pg-title">Repositorios</p>
<p class="pg-lead">Código seleccionado de mis proyectos — firmware embebido, visión por computadora y automatización.</p>
<div class="repo-grid">
  <div class="pc-card repo-card">
    <img src="{{ 'assets/img/ecovolt-track.jpg' | relative_url }}" alt="Prototipo EcoVolt CCM en la pista" style="object-position: center 80%">
    <div class="repo-body">
      <span class="pc-badge">Firmware embebido</span>
      <p class="repo-name"><i class="fa-brands fa-github"></i> Ecovolt_telemetry_final</p>
      <p class="repo-desc">Firmware de telemetría del prototipo eléctrico EcoVolt CCM — 1.er (2025) y 2.º (2026) lugar en el Data &amp; Telemetry Award.</p>
      <div><span class="pc-tag">C++</span><span class="pc-tag">ESP32</span><span class="pc-tag">CAN</span><span class="pc-tag">SPI · I²C · UART</span><span class="pc-tag">MQTT</span></div>
      <ul>
        <li>Enlace CAN con el controlador de motor propio del equipo</li>
        <li>Adquisición de IMU, GPS, corriente y voltaje con registro en tarjeta SD</li>
        <li>Datos en vivo al dashboard de pits por MQTT</li>
      </ul>
      <div class="pc-btns">
        <a class="pc-btn primary" href="https://github.com/paulinism/Ecovolt_telemetry_final" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Ver código</a>
        <a class="pc-btn" href="{{ '/es/projects/ecovolt-telemetry/' | relative_url }}">Página del proyecto</a>
      </div>
    </div>
  </div>
  <div class="pc-card repo-card">
    <img src="{{ 'assets/img/scara-bench.jpg' | relative_url }}" alt="Banco de pruebas del robot SCARA con marcadores de visión">
    <div class="repo-body">
      <span class="pc-badge">Visión por computadora</span>
      <p class="repo-name"><i class="fa-brands fa-github"></i> ScaraCV</p>
      <p class="repo-desc">Pipeline de visión de un robot SCARA de 4 GDL que clasificó 5 de 6 piezas de forma autónoma.</p>
      <div><span class="pc-tag">Python</span><span class="pc-tag">OpenCV</span><span class="pc-tag">YOLOv11n</span><span class="pc-tag">MQTT</span><span class="pc-tag">Jupyter</span></div>
      <ul>
        <li>Homografía con ArUco de píxeles a milímetros del robot</li>
        <li>Preanotación automática del dataset de YOLO (mAP@0.5 = 0.72)</li>
        <li>Aplicación de pick-and-place que publica los objetivos al ESP32</li>
      </ul>
      <div class="pc-btns">
        <a class="pc-btn primary" href="https://github.com/paulinism/ScaraCV" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Ver código</a>
        <a class="pc-btn" href="{{ '/es/projects/scara-robot/' | relative_url }}">Página del proyecto</a>
      </div>
    </div>
  </div>
</div>
<div class="pc-btns" style="justify-content:center; margin-top:1.5rem;"><a class="pc-btn" href="https://github.com/paulinism" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Todos los repositorios en GitHub</a></div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/publications/' | relative_url }}">← Anterior: Publicaciones</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/cv/' | relative_url }}">Siguiente: CV →</a>
</div>
