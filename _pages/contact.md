---
layout: page
permalink: /contact/
title: contact
description: Currently looking for a Pflichtpraktikum & Abschlussarbeit position.
nav: true
nav_order: 6
---

<style>
  .post > .post-header { display: none !important; }
  .ct-kicker { font-family: "Roboto Mono", ui-monospace, monospace; font-size: .85rem; letter-spacing: .2em; text-transform: uppercase; opacity: .7; margin: 1rem 0 .4rem; }
  .ct-title { font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; margin: 0 0 2rem; }
  .ct-grid { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.6fr); gap: 2.5rem; align-items: start; }
  .ct-photo img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; object-position: center 22%; border-radius: 12px; border: 1px solid rgba(128,128,128,.3); box-shadow: 0 10px 30px rgba(0,0,0,.25); display: block; }
  .ct-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; }
  .ct-card-head { display: flex; align-items: center; gap: .45rem; padding: .7rem 1rem; border-bottom: 1px solid rgba(128,128,128,.25); font-family: "Roboto Mono", ui-monospace, monospace; font-size: .8rem; letter-spacing: .15em; text-transform: uppercase; opacity: .85; }
  .ct-dot { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
  .ct-card-body { padding: 1rem 1.1rem 1.1rem; }
  .ct-card-body p { margin: 0 0 .8rem; line-height: 1.6; }
  .ct-tags { display: flex; flex-wrap: wrap; gap: .45rem; margin: .3rem 0 .2rem; }
  .ct-tag { font-size: .85rem; padding: .2rem .7rem; border-radius: 999px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); }
  .ct-when { color: var(--global-theme-color); font-weight: 700; }
  .ct-list { border-top: 1px solid rgba(128,128,128,.25); }
  .ct-row { display: flex; align-items: center; gap: 1.1rem; padding: .85rem 0; border-bottom: 1px solid rgba(128,128,128,.25); color: inherit !important; text-decoration: none !important; }
  .ct-row:hover .ct-ico { border-color: var(--global-theme-color); }
  .ct-row:hover .ct-txt { color: var(--global-theme-color); }
  .ct-ico { flex: 0 0 auto; width: 2.9rem; height: 2.9rem; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(128,128,128,.4); border-radius: 8px; font-size: 1.2rem; color: var(--global-theme-color); background: rgba(128,128,128,.06); }
  .ct-txt { font-family: "Roboto Mono", ui-monospace, monospace; font-size: .98rem; word-break: break-word; }
  .ct-lbl { display: block; font-family: inherit; font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; opacity: .6; }
  .ct-btns { display: flex; flex-direction: column; gap: .55rem; margin-top: 1rem; }
  .ct-btn { display: flex; align-items: center; justify-content: center; gap: .5rem; padding: .6rem .9rem; border-radius: 8px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color) !important; text-decoration: none !important; font-weight: 600; font-size: .92rem; }
  .ct-btn:hover { background: var(--global-theme-color); color: var(--global-bg-color) !important; }
  @media (max-width: 760px) { .ct-grid { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; } .ct-photo { max-width: 280px; margin: 0 auto; } }
</style>

<p class="ct-kicker">// Open to opportunities</p>
<h1 class="ct-title">Let's connect</h1>

<div class="ct-grid">
  <div class="ct-photo">
    <img src="{{ 'assets/img/paulina-contact.jpg' | relative_url }}" alt="Paulina Lilian Ruíz Servín">
    <div class="ct-btns">
      <a class="ct-btn" href="https://maps.google.com/?q=Zittau,+Germany" target="_blank" rel="noopener"><i class="fa-solid fa-location-dot"></i> Zittau, Saxony · open to relocate</a>
      <a class="ct-btn" href="{{ '/assets/pdf/CV_Paulina_EN.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> CV (English)</a>
      <a class="ct-btn" href="{{ '/assets/pdf/CV_Paulina_DE.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> Lebenslauf (Deutsch)</a>
    </div>
  </div>
  <div>
    <div class="ct-card">
      <div class="ct-card-head"><span class="ct-dot" style="background:#e5534b"></span><span class="ct-dot" style="background:#d4a24c"></span><span class="ct-dot" style="background:#57ab5a"></span>&nbsp;// Status — available</div>
      <div class="ct-card-body">
        <p><strong>Looking for a Pflichtpraktikum (mandatory internship) or freiwilliges Praktikum in Germany</strong>, starting <span class="ct-when">February/March 2027</span>, in:</p>
        <div class="ct-tags">
          <span class="ct-tag">Embedded Systems &amp; PCB Design</span>
          <span class="ct-tag">Industrial Automation &amp; Virtual Commissioning</span>
          <span class="ct-tag">Computer Vision</span>
          <span class="ct-tag">Model-Based Control &amp; Simulation</span>
          <span class="ct-tag">Semiconductor &amp; Automotive Systems</span>
        </div>
      </div>
    </div>

    <div class="ct-list">
      <a class="ct-row" href="mailto:pruizservin27@gmail.com"><span class="ct-ico"><i class="fa-solid fa-envelope"></i></span><span class="ct-txt"><span class="ct-lbl">Email</span>pruizservin27@gmail.com</span></a>
      <a class="ct-row" href="tel:+4915233878708"><span class="ct-ico"><i class="fa-solid fa-phone"></i></span><span class="ct-txt"><span class="ct-lbl">Phone (Germany)</span>+49 1523 3878708</span></a>
      <a class="ct-row" href="https://www.linkedin.com/in/pruizservin27/" target="_blank" rel="noopener"><span class="ct-ico"><i class="fa-brands fa-linkedin-in"></i></span><span class="ct-txt"><span class="ct-lbl">LinkedIn</span>linkedin.com/in/pruizservin27</span></a>
      <a class="ct-row" href="https://github.com/paulinism" target="_blank" rel="noopener"><span class="ct-ico"><i class="fa-brands fa-github"></i></span><span class="ct-txt"><span class="ct-lbl">GitHub</span>github.com/paulinism</span></a>
    </div>

  </div>
</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/cv/' | relative_url }}">← Previous: CV</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/' | relative_url }}">← Back to about</a>
</div>
