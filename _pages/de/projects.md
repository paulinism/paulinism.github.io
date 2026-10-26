---
layout: page
title: projekte
permalink: /de/projects/
lang: de
description: Studienprojekte und praktische Ingenieursarbeit sowie Erfahrung im Labor.
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
<p class="pg-title">Projekte</p>
<p class="pg-lead">Arbeiten in Hardware, Firmware, Regelung und Automatisierung — vom Telemetriesystem eines Rennteams über Reinraumfertigung bis zu Robotern und digitalen Zwillingen. Jede Karte öffnet eine vollständige technische Beschreibung mit CAD, Prototypen und Ergebnissen.</p>
<h2 class="cv-h" id="extracurricular"><i class="fa-solid fa-flag-checkered"></i> Außerhalb des Studiums &amp; Forschung</h2>
<a class="pc-card pj-feat" href="{{ '/de/projects/ecovolt-telemetry/' | relative_url }}">
  <img src="{{ '/assets/img/ecovolt-telemetry.jpg' | relative_url }}" alt="Plattform für Telemetrie &amp; Energieoptimierung">
  <div class="pj-body">
    <div class="pj-badges"><span class="pc-badge">Highlight</span><span class="pc-badge">1. Platz 2025 · 2. Platz 2026 Data &amp; Telemetry Award</span><span class="pc-badge">IEEE-Paper eingereicht</span></div>
    <h3 class="pj-title">Plattform für Telemetrie &amp; Energieoptimierung</h3>
    <p class="pj-txt"><strong>Platinenverantwortung &amp; Firmware</strong> — drei Generationen Telemetrie für ein Shell-Eco-marathon-Fahrzeug — 1. (2025) und 2. Platz (2026) beim Data &amp; Telemetry Award</p>
    <div class="pj-tags"><span class="pc-tag">Altium</span><span class="pc-tag">ESP32</span><span class="pc-tag">C++</span><span class="pc-tag">CAN</span><span class="pc-tag">MQTT</span><span class="pc-tag">Python</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
<div class="pj-grid" style="margin-top:1.2rem">
<a class="pc-card pj-card" href="{{ '/de/projects/ecovolt-inventory/' | relative_url }}">
  <img src="{{ '/assets/img/inv-cover-composite.jpg' | relative_url }}" alt="Automatisiertes Inventarsystem für Schutzausrüstung &amp; Werkzeug" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Konzept &amp; Python-Pilot</span>
    <h3 class="pj-title">Automatisiertes Inventarsystem für Schutzausrüstung &amp; Werkzeug</h3>
    <p class="pj-txt">QR-Tracking für den Paddock-Betrieb beim Shell Eco-marathon — zollfertiger Excel-Export, QR-Erkennung unter 80 ms, Web-Dashboard mit Ausleihverwaltung</p>
    <div class="pj-tags"><span class="pc-tag">Python</span><span class="pc-tag">OpenCV</span><span class="pc-tag">QR</span><span class="pc-tag">Web-Dashboard</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/de/projects/mit-nano-fabrication/' | relative_url }}">
  <img src="{{ '/assets/img/mit-cover-wafer.jpg' | relative_url }}" alt="Halbleiter-Mikrofertigung — MIT.nano" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Reinraum-Intensivkurs bei MIT.nano</span>
    <h3 class="pj-title">Halbleiter-Mikrofertigung — MIT.nano</h3>
    <p class="pj-txt">Solarzelle mit Wirkungsgrad 15,87 % (Voc 0,60 V), funktionsfähige MEMS-Biegebalken und Mikrofluidikmischer — eine Woche, Klasse 100/1K/10K</p>
    <div class="pj-tags"><span class="pc-tag">Photolithography</span><span class="pc-tag">PECVD/PVD</span><span class="pc-tag">Ätzen</span><span class="pc-tag">MEMS</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
</div>
<h2 class="cv-h" id="academic"><i class="fa-solid fa-graduation-cap"></i> Studienprojekte</h2>
<div class="pj-grid">
<a class="pc-card pj-card" href="{{ '/de/projects/orza-digital-twin/' | relative_url }}">
  <img src="{{ '/assets/img/orza.png' | relative_url }}" alt="Digitaler Zwilling einer flexiblen CNC-Fertigungszelle" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Industrie-Challenge mit ORZA Tech</span>
    <h3 class="pj-title">Digitaler Zwilling einer flexiblen CNC-Fertigungszelle</h3>
    <p class="pj-txt">Virtuelle CNC-Zelle zu 100 % in Software in Betrieb genommen (SPS-Programmierung S7-1500 in TIA Portal, UR5 VRC, CAM und G-Code, Cognex-Bildverarbeitung, SCADA/KPIs)</p>
    <div class="pj-tags"><span class="pc-tag">TIA Portal</span><span class="pc-tag">S7-1500</span><span class="pc-tag">Process Simulate</span><span class="pc-tag">UR5</span><span class="pc-tag">Cognex</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/de/projects/scara-robot/' | relative_url }}">
  <img src="{{ '/assets/img/scara.jpg.jpg' | relative_url }}" alt="Kamerageführter SCARA-Roboter für Pick-and-Place (4 DoF)" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Firmware &amp; Elektronik</span>
    <h3 class="pj-title">Kamerageführter SCARA-Roboter für Pick-and-Place (4 DoF)</h3>
    <p class="pj-txt">4-DOF-SCARA mit YOLOv11n-Bildverarbeitung (mAP 0,72), 5 von 6 Teilen bei ~14 s pro Zyklus, eigene Altium-Platine</p>
    <div class="pj-tags"><span class="pc-tag">ESP32</span><span class="pc-tag">Altium</span><span class="pc-tag">YOLOv11n</span><span class="pc-tag">OpenCV</span><span class="pc-tag">MQTT</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/de/projects/endress-viscosity/' | relative_url }}">
  <img src="{{ '/assets/img/viscosity.jpg' | relative_url }}" alt="Automatisiertes Viskositätsmesssystem" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Platinen &amp; Embedded mit Endress+Hauser</span>
    <h3 class="pj-title">Automatisiertes Viskositätsmesssystem</h3>
    <p class="pj-txt">Signalkette mit 400-facher Verstärkung trennt 252 cP von 1676 cP; drei Altium-Platinen, zwei davon von JLCPCB gefertigt</p>
    <div class="pj-tags"><span class="pc-tag">Altium</span><span class="pc-tag">OPV</span><span class="pc-tag">ESP32</span><span class="pc-tag">LabVIEW</span><span class="pc-tag">OpenPLC</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
<a class="pc-card pj-card" href="{{ '/de/projects/agv-platform/' | relative_url }}">
  <img src="{{ '/assets/img/agv-cover-pair.jpg' | relative_url }}" alt="Scherenhubtisch &amp; AGV — automatisierte Plattform für den Materialtransport" loading="lazy">
  <div class="pj-body">
    <span class="pc-badge">Konstruktion &amp; Elektronik</span>
    <h3 class="pj-title">Scherenhubtisch &amp; AGV — automatisierte Plattform für den Materialtransport</h3>
    <p class="pj-txt">Scherenhubtisch (über 100 kg belastet, 40 × 30 × 76 cm) mit eigener Wägezellen-Platine (ohne HX711) und gedrehten/gefrästen Aluminiumteilen</p>
    <div class="pj-tags"><span class="pc-tag">SolidWorks</span><span class="pc-tag">NX</span><span class="pc-tag">Zerspanung</span><span class="pc-tag">MIG-Schweißen</span><span class="pc-tag">Wägezelle</span></div>
    <span class="pj-more">Zum Projekt →</span>
  </div>
</a>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/' | relative_url }}">← Zurück: Über mich</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/achievements/' | relative_url }}">Weiter: Auszeichnungen →</a>
</div>
