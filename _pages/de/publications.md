---
layout: page
permalink: /de/publications/
lang: de
title: publikationen
description: Konferenzbeitrag und technische Berichte.
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
</style>
<h2 class="pc-h">Konferenzbeitrag</h2>
<div class="pc-card pub-feat">
  <img data-zoomable src="{{ 'assets/img/ecovolt-telemetry.jpg' | relative_url }}" alt="Telemetrie-Platine und Dashboard von EcoVolt CCM">
  <div class="pub-body">
    <span class="pc-badge">IEEE SAIBOT 2026 · Eingereicht</span>
    <p class="pub-title">Real-Time Telemetry and Computational Intelligence Pipeline for Energy-Efficient Driving of an Electric Eco-Marathon Vehicle</p>
    <p class="pub-auth"><strong>P. L. Ruíz-Servín</strong>, J. D. González-Fernández, A. Flores-Mendoza, J. Izquierdo-Reyes</p>
    <p class="pub-venue">IEEE Latin American School on Computational Intelligence and Robotics (SAIBOT), 2026 — Erstautorin</p>
    <p class="pub-abs">Drei Generationen Telemetrie-Hardware für einen elektrischen Shell-Eco-marathon-Prototyp — Strom, Spannung, GPS und Motordaten über CAN, auf SD gespeichert und live übertragen — sowie eine Datenpipeline, die Fahrstrategien vergleicht, einschließlich eines Simulator-Prüfstandstests, bei dem konstantes Gasgeben Pulse-and-Glide um 14 % übertraf.</p>
    <div class="pc-btns">
      <a class="pc-btn primary" href="{{ '/de/projects/ecovolt-telemetry/' | relative_url }}">Zugehöriges Projekt</a>
      <button class="pc-btn" type="button" onclick="this.closest('.pub-body').querySelector('.pub-bib').classList.toggle('open')">BibTeX</button>
    </div>
<pre class="pub-bib">@inproceedings{ruizservin2026saibot,
  title     = {Real-Time Telemetry and Computational Intelligence Pipeline
               for Energy-Efficient Driving of an Electric Eco-Marathon Vehicle},
  author    = {Ru{\'\i}z-Serv{\'\i}n, Paulina Lilian and Gonz{\'a}lez-Fern{\'a}ndez, Jos{\'e} Diego
               and Flores-Mendoza, Aar{\'o}n and Izquierdo-Reyes, Javier},
  booktitle = {IEEE Latin American School on Computational Intelligence and Robotics (SAIBOT)},
  year      = {2026},
  note      = {Submitted}
}</pre>
  </div>
</div>
<h2 class="pc-h">Technische Berichte</h2>
<div class="rep-grid">
  <div class="pc-card rep-card">
    <img data-zoomable src="{{ 'assets/img/mit-cover-wafer.jpg' | relative_url }}" alt="Prozessierter Wafer bei MIT.nano">
    <div class="pub-body">
      <span class="pc-badge">MIT.nano · Okt. 2025</span>
      <p class="pub-title">Micro/Nanofabrication Processing Technology</p>
      <p class="pub-abs">Gemeinsam verfasster Bericht über eine n-Typ-Silizium-Solarzelle (Wirkungsgrad 15,87 %), MEMS-Biegebalken und einen mikrofluidischen Diffusionsmischer, betreut von Dr. Javier Izquierdo Reyes und Dr. Arnoldo Salazar Soto.</p>
      <div class="pc-btns"><a class="pc-btn" href="{{ '/de/projects/mit-nano-fabrication/' | relative_url }}">Zum Projekt</a></div>
    </div>
  </div>
  <div class="pc-card rep-card">
    <img data-zoomable src="{{ 'assets/img/tel-altair.png' | relative_url }}" alt="Modellvergleich in Altair AI Studio" style="object-fit: contain; background: #fff;">
    <div class="pub-body">
      <span class="pc-badge">Altair Contest 2025 · Honorable Mention</span>
      <p class="pub-title">AI-Driven Data Analysis for Vehicle Energy Efficiency</p>
      <p class="pub-abs">Mit José Diego González Fernández: acht Regressionsmodelle in Altair AI Studio an Renndaten verglichen; die Fahrzeuggeschwindigkeit als stärkster Einflussfaktor auf die Effizienz identifiziert.</p>
      <div class="pc-btns"><a class="pc-btn" href="https://web.altair.com/global-student-contest-2025" target="_blank" rel="noopener">Wettbewerbsseite</a></div>
    </div>
  </div>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/achievements/' | relative_url }}">← Zurück: Auszeichnungen</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/repositories/' | relative_url }}">Weiter: Repositorien →</a>
</div>
