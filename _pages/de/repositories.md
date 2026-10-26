---
layout: page
permalink: /de/repositories/
lang: de
title: repositorien
description: Ausgewählte Repositorien.
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
</style>
<div class="repo-grid">
  <div class="pc-card repo-card">
    <img src="{{ 'assets/img/ecovolt-track.jpg' | relative_url }}" alt="Prototyp von EcoVolt CCM auf der Strecke" style="object-position: center 80%">
    <div class="repo-body">
      <span class="pc-badge">Embedded-Firmware</span>
      <p class="repo-name"><i class="fa-brands fa-github"></i> Ecovolt_telemetry_final</p>
      <p class="repo-desc">Telemetrie-Firmware des Elektro-Prototyps von EcoVolt CCM — 1. (2025) und 2. Platz (2026) beim Data &amp; Telemetry Award.</p>
      <div><span class="pc-tag">C++</span><span class="pc-tag">ESP32</span><span class="pc-tag">CAN</span><span class="pc-tag">SPI · I²C · UART</span><span class="pc-tag">MQTT</span></div>
      <ul>
        <li>CAN-Verbindung zum eigenen Motorcontroller</li>
        <li>Erfassung von IMU, GPS, Strom und Spannung mit Speicherung auf SD</li>
        <li>Live-Daten per MQTT an das Box-Dashboard</li>
      </ul>
      <div class="pc-btns">
        <a class="pc-btn primary" href="https://github.com/paulinism/Ecovolt_telemetry_final" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code ansehen</a>
        <a class="pc-btn" href="{{ '/de/projects/ecovolt-telemetry/' | relative_url }}">Projektseite</a>
      </div>
    </div>
  </div>
  <div class="pc-card repo-card">
    <img src="{{ 'assets/img/scara-bench.jpg' | relative_url }}" alt="SCARA-Roboter im Versuchsaufbau mit Markern für die Bildverarbeitung">
    <div class="repo-body">
      <span class="pc-badge">Bildverarbeitung</span>
      <p class="repo-name"><i class="fa-brands fa-github"></i> ScaraCV</p>
      <p class="repo-desc">Bildverarbeitungspipeline eines SCARA-Roboters mit 4 Freiheitsgraden, der 5 von 6 Teilen selbstständig sortiert hat.</p>
      <div><span class="pc-tag">Python</span><span class="pc-tag">OpenCV</span><span class="pc-tag">YOLOv11n</span><span class="pc-tag">MQTT</span><span class="pc-tag">Jupyter</span></div>
      <ul>
        <li>ArUco-Homografie von Pixeln in Robotermillimeter</li>
        <li>Automatische Vorannotation des YOLO-Datensatzes (mAP@0,5 = 0,72)</li>
        <li>Pick-and-Place-Anwendung, die Zielpositionen an den ESP32 sendet</li>
      </ul>
      <div class="pc-btns">
        <a class="pc-btn primary" href="https://github.com/paulinism/ScaraCV" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code ansehen</a>
        <a class="pc-btn" href="{{ '/de/projects/scara-robot/' | relative_url }}">Projektseite</a>
      </div>
    </div>
  </div>
</div>
<div class="pc-btns" style="justify-content:center; margin-top:1.5rem;"><a class="pc-btn" href="https://github.com/paulinism" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Alle Repositorien auf GitHub</a></div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/publications/' | relative_url }}">← Zurück: Publikationen</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/cv/' | relative_url }}">Weiter: Lebenslauf →</a>
</div>
