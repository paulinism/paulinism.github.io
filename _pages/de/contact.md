---
layout: page
permalink: /de/contact/
lang: de
title: kontakt
description: Auf der Suche nach einem Pflichtpraktikum und einer Abschlussarbeit.
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
  .ct-grid { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.7fr); gap: 2rem; align-items: start; }
  .ct-photo img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; object-position: center 22%; border-radius: 12px; border: 1px solid rgba(128,128,128,.3); display: block; }
  .ct-btns { display: flex; flex-direction: column; gap: .5rem; margin-top: .9rem; }
  .ct-btns .pc-btn { justify-content: center; }
  .ct-avail { border: 1px solid rgba(128,128,128,.3); border-left: 4px solid var(--global-theme-color); border-radius: 12px; padding: 1.1rem 1.2rem; }
  .ct-avail p { margin: 0 0 .7rem; line-height: 1.6; }
  .ct-when { color: var(--global-theme-color); font-weight: 700; }
  .ct-cards { border-top: 1px solid rgba(128,128,128,.25); }
  .ct-c { display: flex; align-items: center; gap: 1.1rem; padding: .4rem 0; border-bottom: 1px solid rgba(128,128,128,.25); color: inherit !important; text-decoration: none !important; }
  .ct-ico { flex: 0 0 auto; width: 2rem; height: 2rem; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--global-theme-color); color: var(--global-bg-color); font-size: .9rem; transition: transform .15s ease; }
  .ct-c:hover .ct-ico { transform: scale(1.08); }
  .ct-c:hover .ct-val { color: var(--global-theme-color); }
  .ct-lbl { display: block; font-family: "Roboto Mono", ui-monospace, monospace; font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; opacity: .6; }
  .ct-val { display: block; font-family: "Roboto Mono", ui-monospace, monospace; font-size: .98rem; word-break: break-word; }
  .ct-grid .cv-h { font-size: 1.2rem; margin: 1.1rem 0 .6rem; padding-bottom: .3rem; }
  .ct-note { margin-top: 1rem; font-size: .92rem; opacity: .8; }
  @media (max-width: 760px) { .ct-grid, .ct-cards { grid-template-columns: minmax(0, 1fr); } .ct-photo { max-width: 280px; margin: 0 auto; } }
</style>
<p class="pg-title">Kontakt</p>
<p class="pg-lead">Offen für Praktika und Bachelorarbeiten in Deutschland. Am besten erreichen Sie mich per E-Mail.</p>
<div class="ct-grid">
  <div class="ct-photo">
    <img src="{{ '/assets/img/paulina-contact.jpg' | relative_url }}" alt="Paulina Lilian Ruíz Servín">
    <div class="ct-btns">
      <a class="pc-btn" href="https://maps.google.com/?q=Zittau,+Germany" target="_blank" rel="noopener"><i class="fa-solid fa-location-dot"></i> Zittau, Sachsen · umzugsbereit</a>
      <a class="pc-btn primary" href="{{ '/assets/pdf/CV_Paulina_DE.pdf' | relative_url }}?v=20261026" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> Lebenslauf (Deutsch)</a>
      <a class="pc-btn" href="{{ '/assets/pdf/CV_Paulina_EN.pdf' | relative_url }}?v=20261026" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> CV (English)</a>
    </div>
  </div>
  <div>
    <h2 class="cv-h" style="margin-top:0"><i class="fa-solid fa-calendar-check"></i> Verfügbarkeit</h2>
    <div class="ct-avail">
      <p>Ich suche ein <strong>Pflichtpraktikum oder freiwilliges Praktikum</strong> in Deutschland ab <span class="ct-when">Februar/März 2027</span>, in den Bereichen:</p>
      <div><span class="pc-tag">Embedded Systems &amp; PCB Design</span><span class="pc-tag">Industrielle Automatisierung &amp; virtuelle Inbetriebnahme</span><span class="pc-tag">Bildverarbeitung</span><span class="pc-tag">Modellbasierte Regelung &amp; Simulation</span><span class="pc-tag">Halbleiter- &amp; Fahrzeugsysteme</span></div>
    </div>
    <h2 class="cv-h"><i class="fa-solid fa-paper-plane"></i> Kontakt aufnehmen</h2>
    <div class="ct-cards">
  <a class="ct-c" href="mailto:pruizservin27@gmail.com"><span class="ct-ico"><i class="fa-solid fa-envelope"></i></span><span><span class="ct-lbl">E-Mail</span><span class="ct-val">pruizservin27@gmail.com</span></span></a>
  <a class="ct-c" href="tel:+4915233878708"><span class="ct-ico"><i class="fa-solid fa-phone"></i></span><span><span class="ct-lbl">Telefon (Deutschland)</span><span class="ct-val">+49 1523 3878708</span></span></a>
  <a class="ct-c" href="https://www.linkedin.com/in/pruizservin27/" target="_blank" rel="noopener"><span class="ct-ico"><i class="fa-brands fa-linkedin-in"></i></span><span><span class="ct-lbl">LinkedIn</span><span class="ct-val">linkedin.com/in/pruizservin27</span></span></a>
  <a class="ct-c" href="https://github.com/paulinism" target="_blank" rel="noopener"><span class="ct-ico"><i class="fa-brands fa-github"></i></span><span><span class="ct-lbl">GitHub</span><span class="ct-val">github.com/paulinism</span></span></a>
    </div>
  </div>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/cv/' | relative_url }}">← Zurück: Lebenslauf</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/' | relative_url }}">← Zurück zu Über mich</a>
</div>
