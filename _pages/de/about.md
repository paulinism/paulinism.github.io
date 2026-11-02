---
layout: about
title: about
permalink: /de/
lang: de
subtitle: Studentin der Mechatronik & Elektrotechnik · <a href='mailto:pruizservin27@gmail.com'>pruizservin27@gmail.com</a> · <a href='https://www.linkedin.com/in/pruizservin27/?locale=de-DE'>LinkedIn</a>

profile:
  align: right
  image: Bewerbungsbild.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>📍 Zittau, Sachsen</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items — off: these were only the theme's demo content
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # no blog posts yet, so this panel has nothing real to show
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  /* Featured projects: same card look as the Projects page */
  #featured-projects + div { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 1.2rem !important; }
  #featured-projects + div > a { border: 1px solid rgba(128,128,128,.3) !important; border-radius: 12px !important; color: inherit !important; transition: transform .15s ease, border-color .15s ease; }
  #featured-projects + div > a:hover { transform: translateY(-3px); border-color: var(--global-theme-color) !important; }
  #featured-projects + div > a img { aspect-ratio: 16 / 9 !important; }
  #featured-projects + div > a h3 { font-size: 1.05rem !important; line-height: 1.3; }
  #featured-projects + div > a:hover h3 { color: var(--global-theme-color); }
  #featured-projects + div > a p { font-size: .86rem !important; line-height: 1.5; }
  @media (max-width: 860px) { #featured-projects + div { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
  @media (max-width: 560px) { #featured-projects + div { grid-template-columns: minmax(0, 1fr) !important; } }
  /* Bottom social block: small theme-colored icons in one row */
  .social { text-align: center; }
  .social .contact-icons { display: flex !important; justify-content: center; align-items: center; gap: 1.1rem; flex-wrap: nowrap; font-size: 1.5rem !important; }
  .social .contact-icons a, .social .contact-icons i { color: var(--global-theme-color) !important; font-size: 1.5rem !important; }
  .social .contact-icons a i::before { color: var(--global-theme-color) !important; }
  .social .contact-icons a:hover i { opacity: .75; }
  .social .contact-note { font-size: .9rem; opacity: .8; }

  .ab-hook { font-size: 1.2rem; font-weight: 600; line-height: 1.45; margin: 0.25rem 0 1rem; }
  .ab-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; margin: 1.25rem 0 1.5rem; }
  .ab-stat { border: 1px solid rgba(128,128,128,.3); border-radius: 10px; padding: 0.7rem 0.8rem; }
  .ab-stat .ab-big { display: block; font-weight: 700; font-size: 1.05rem; color: var(--global-theme-color); }
  .ab-stat .ab-small { display: block; font-size: 0.82rem; line-height: 1.35; opacity: .85; margin-top: .2rem; }
  .ab-areas { margin: 0.5rem 0 1.25rem; }
  .ab-area { margin: 0 0 .6rem; }
  .ab-area strong { display: block; font-size: .95rem; margin-bottom: .25rem; }
  .ab-tag { display: inline-block; font-size: .8rem; padding: .15rem .55rem; margin: 0 .3rem .3rem 0; border-radius: 999px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); }
  .ab-cta { border-left: 3px solid var(--global-theme-color); padding: .5rem .9rem; margin: 1.25rem 0 .75rem; }
  .ab-btns { display: flex; flex-wrap: wrap; gap: .5rem; margin: .5rem 0 1.5rem; }
  .ab-btn { display: inline-block; padding: .4rem .9rem; border-radius: 8px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color) !important; text-decoration: none !important; font-size: .9rem; font-weight: 600; }
  .ab-btn.primary { background: var(--global-theme-color); color: var(--global-bg-color) !important; }

  .post > .post-header, .post article > .profile { display: none !important; }
  #navbar .navbar-brand { display: none !important; }
  @media (min-width: 1200px) { .container { max-width: 1140px; } }
  .hero { display: grid; grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr); gap: 2.5rem; align-items: start; margin: 1.5rem 0 1rem; }
  .hero-name { font-size: clamp(2.6rem, 6vw, 4.6rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; margin: 0 0 .6rem; }
  .hero-role { font-size: clamp(1.1rem, 2vw, 1.35rem); opacity: .85; margin: 0 0 1.2rem; }
  .hero-photo img { width: 100%; border-radius: 12px; border: 1px solid rgba(128,128,128,.3); box-shadow: 0 10px 30px rgba(0,0,0,.25); display: block; }
  .hero-loc { font-family: "Roboto Mono", ui-monospace, monospace; font-size: .88rem; opacity: .85; margin: .8rem 0 .5rem; text-align: center; }
  .hero-icons { display: flex; flex-wrap: nowrap; justify-content: center; gap: 1.1rem; font-size: 1.6rem; }
  .hero-icons a { color: var(--global-theme-color) !important; text-decoration: none !important; }
  .hero-icons a:hover { opacity: .75; }
  .ab-cv { position: relative; }
  .ab-cv > summary { list-style: none; cursor: pointer; }
  .ab-cv > summary::-webkit-details-marker { display: none; }
  .ab-cv > summary::after { content: " ▾"; font-size: .8rem; }
  .ab-cv-menu { position: absolute; z-index: 20; top: calc(100% + 6px); left: 0; min-width: 100%; border: 1px solid var(--global-theme-color); border-radius: 8px; background: var(--global-bg-color); overflow: hidden; }
  .ab-cv-menu a { display: block; padding: .45rem .9rem; color: inherit !important; text-decoration: none !important; white-space: nowrap; font-size: .9rem; }
  .ab-cv-menu a:hover { background: rgba(128,128,128,.12); }
  @media (max-width: 860px) { .hero-name { font-size: clamp(1.9rem, 9.4vw, 3.6rem); } .hero { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; } .hero-photo { order: -1; max-width: 300px; margin: 0 auto; } }
  .ab-bottom { display: grid; grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr); gap: 2.5rem; align-items: center; margin-bottom: 1.5rem; }
  .ab-bottom .ab-cta { margin: 0; padding: 1rem 1.1rem; font-size: 1.05rem; line-height: 1.5; border: 1px solid rgba(128,128,128,.3); border-left: 4px solid var(--global-theme-color); border-radius: 10px; }
  @media (max-width: 860px) { .ab-bottom { grid-template-columns: minmax(0, 1fr); gap: 0; } .ab-bottom .ab-cta { margin: 1.25rem 0 .75rem; } }

  /* ---- Home: photo highlights ---- */
  .hm-h { font-size: 1.45rem; font-weight: 700; margin: 2.2rem 0 .35rem; }
  .hm-sub { opacity: .8; margin: 0 0 1rem; font-size: .95rem; }
  .hm-gallery { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: 170px; gap: .75rem; margin-bottom: 2rem; }
  .hm-tile { position: relative; margin: 0; overflow: hidden; border-radius: 12px; border: 1px solid rgba(128,128,128,.3); }
  .hm-tile img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .35s ease; }
  .hm-tile:hover img { transform: scale(1.04); }
  .hm-tile figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 1.4rem .7rem .55rem; font-size: .8rem; line-height: 1.3; color: #fff; background: linear-gradient(transparent, rgba(0,0,0,.78)); }
  .hm-tile figcaption strong { display: block; font-size: .86rem; color: #fff; }
  .hm-big { grid-column: span 2; grid-row: span 2; }
  .hm-wide { grid-column: span 2; }
  @media (max-width: 860px) { .hm-gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 150px; } }
  @media (max-width: 480px) { .hm-gallery { grid-auto-rows: 125px; } .hm-tile figcaption { font-size: .72rem; } }
</style>

<section class="hero">
  <div>
    <h1 class="hero-name">Paulina L. Ruíz Servín</h1>
    <p class="hero-role">Studentin der Mechatronik &amp; Elektrotechnik</p>
    <p class="ab-hook">Ich mache aus technischen Konzepten funktionierende Systeme — von Platine und Firmware bis zu Regelung, Automatisierung und Test.</p>
    <p>Mechatronik-Studentin im deutsch-mexikanischen DHIK-Doppelabschluss (<em>Tec de Monterrey</em> · <em>Hochschule Zittau/Görlitz</em>), wohnhaft in Sachsen. Ich habe das 30-köpfige Team <a href="https://www.instagram.com/ecovoltccm/">EcoVolt CCM</a> beim Shell Eco-marathon geleitet, seine Telemetrie aufgebaut, in den <a href="https://global.mit.edu/news-stories/nanolab-workshop-builds-student-skills-and-strengthens-international-ties/">Reinräumen von MIT.nano</a> Bauelemente gefertigt und kamerageführte Roboter sowie digitale Zwillinge entwickelt.</p>
<div class="ab-stats">
  <div class="ab-stat"><span class="ab-big">🏆 1. &amp; 2. Platz</span><span class="ab-small">Data &amp; Telemetry Award, Shell Eco-marathon 2025 / 2026</span></div>
  <div class="ab-stat"><span class="ab-big">👥 Teamkapitänin</span><span class="ab-small">EcoVolt CCM (2025–26): Leitung von 30 Mitgliedern, Fahrzeug mit ca. 200 km/kWh bei ca. 28 km/h; Telemetrie-Platinen und CAN-Firmware entwickelt</span></div>
  <div class="ab-stat"><span class="ab-big">🔬 MIT.nano</span><span class="ab-small">Halbleiterfertigung im Reinraum</span></div>
  <div class="ab-stat"><span class="ab-big">📄 IEEE-Paper</span><span class="ab-small">Erstautorin, SAIBOT 2026</span></div>
</div>

    <div class="ab-btns">
      <a class="ab-btn primary" href="/de/projects/">Projekte ansehen</a>
      <details class="ab-cv">
        <summary class="ab-btn">Lebenslauf herunterladen</summary>
        <div class="ab-cv-menu">
          <a href="/assets/pdf/CV_Paulina_DE.pdf?v=20261026" target="_blank" rel="noopener">Deutsch (PDF)</a>
          <a href="/assets/pdf/CV_Paulina_EN.pdf?v=20261026" target="_blank" rel="noopener">English (PDF)</a>
        </div>
      </details>
      <a class="ab-btn" href="/de/contact/">Kontakt</a>
    </div>

  </div>
  <div class="hero-photo">
    <img src="/assets/img/Bewerbungsbild.jpg" alt="Paulina Ruíz Servín">
    <p class="hero-loc">📍 Zittau, Sachsen</p>
    <div class="hero-icons">
      <a href="mailto:pruizservin27@gmail.com" title="E-Mail" aria-label="E-Mail"><i class="fa-solid fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/pruizservin27/?locale=de-DE" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/paulinism" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
      <a href="https://wa.me/4915233878708" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  </div>
</section>

<h2 class="hm-h" id="skills">Kenntnisse</h2>
<p class="hm-sub">Woran ich arbeite — und mit welchen Werkzeugen.</p>
<div class="sk-grid">
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-microchip"></i></span><h3>Embedded Systems &amp; Firmware</h3><p>ESP32-Firmware in C/C++ für Telemetrie und Roboter: Bustreiber, Datenaufzeichnung und Funkverbindungen.</p><div><span class="ab-tag">ESP32</span><span class="ab-tag">C/C++</span><span class="ab-tag">CAN</span><span class="ab-tag">SPI · I2C · UART</span><span class="ab-tag">MQTT</span><span class="ab-tag">PlatformIO</span><span class="ab-tag">Git</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-bolt"></i></span><h3>Platinenentwurf &amp; Elektronik</h3><p>Vom Schaltplan bis zur Inbetriebnahme in Altium: Messketten, Strommessung, Mehrlagenplatinen und SMD/THT-Bestückung.</p><div><span class="ab-tag">Altium Designer</span><span class="ab-tag">Multisim</span><span class="ab-tag">OPV-Schaltungen</span><span class="ab-tag">INA240</span><span class="ab-tag">Löten</span><span class="ab-tag">Laborgeräte</span><span class="ab-tag">LabVIEW</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-sliders"></i></span><h3>Regelung &amp; Simulation</h3><p>Modellbasierte Entwicklung: Übertragungsfunktionen, PID-Regelkreise und Model-/Hardware-in-the-Loop-Tests.</p><div><span class="ab-tag">MATLAB</span><span class="ab-tag">Simulink</span><span class="ab-tag">Simscape</span><span class="ab-tag">PID</span><span class="ab-tag">Nichtlineare Regelung</span><span class="ab-tag">MiL / HiL</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-industry"></i></span><h3>Industrielle Automatisierung</h3><p>SPS-Ablaufketten, HMI/SCADA und virtuelle Inbetriebnahme eines digitalen Zwillings mit Cobots.</p><div><span class="ab-tag">TIA Portal</span><span class="ab-tag">S7-1500</span><span class="ab-tag">WinCC</span><span class="ab-tag">PLCSIM Adv.</span><span class="ab-tag">Process Simulate</span><span class="ab-tag">UR-Cobots</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-eye"></i></span><h3>Bildverarbeitung &amp; Daten</h3><p>Bildverarbeitung in Python, Objekterkennung, industrielle Prüfung und Datenanalyse.</p><div><span class="ab-tag">Python</span><span class="ab-tag">OpenCV</span><span class="ab-tag">YOLOv11</span><span class="ab-tag">Cognex In-Sight</span><span class="ab-tag">NumPy</span><span class="ab-tag">Altair AI Studio</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-gears"></i></span><h3>Konstruktion &amp; Fertigung</h3><p>CAD-Baugruppen, Bewegungs- und Festigkeitsanalysen, CAM und praktische Fertigung bis zum Reinraum.</p><div><span class="ab-tag">SolidWorks (CSWA)</span><span class="ab-tag">Siemens NX</span><span class="ab-tag">CAM</span><span class="ab-tag">3D-Druck</span><span class="ab-tag">Drehen · Fräsen</span><span class="ab-tag">Reinraum</span></div></div>
</div>
<div class="ab-cta"><strong>Verfügbar ab Februar/März 2027</strong> für ein Praktikum in Embedded Systems, Hardware oder industrieller Automatisierung.</div>

## Ausgewählte Projekte

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; margin-top:1.5rem;">
{% assign featured = site.pages | where: "de_project", true | where: "featured", true | sort: "importance" %}
{% for project in featured %}
  <a href="{{ project.url | relative_url }}" style="display:block; border:1px solid currentColor; border-radius:8px; overflow:hidden; text-decoration:none;">
    {% if project.img %}
    <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" style="width:100%; aspect-ratio:4/3; object-fit:cover; display:block;">
    {% endif %}
    <div style="padding:1rem;">
      <h3 style="font-weight:bold; margin:0 0 0.5rem 0;">{{ project.title }}</h3>
      <p style="font-size:0.9rem; opacity:0.8; margin:0;">{{ project.description }}</p>
    </div>
  </a>
{% endfor %}
</div>

[Alle Projekte ansehen →](/de/projects/)

<h2 class="hm-h" id="highlights">Auf der Strecke, im Labor, auf der Bühne</h2>
<p class="hm-sub">Einige Momente hinter den Projekten — Wettbewerbe, Reinraumarbeit und die Hardware selbst.</p>
<div class="hm-gallery">
  <figure class="hm-tile hm-big"><img src="/assets/img/home/track.jpg" alt="Prototyp von EcoVolt CCM auf der Strecke" loading="lazy"><figcaption><strong>Prototyp EcoVolt CCM</strong>Energieeffizientes E-Fahrzeug, ca. 200 km/kWh bei ca. 28 km/h</figcaption></figure>
  <figure class="hm-tile"><img src="/assets/img/home/award-2025.jpg" alt="Data and Telemetry Award 2025" loading="lazy"><figcaption><strong>1. Platz 2025</strong>Data &amp; Telemetry Award</figcaption></figure>
  <figure class="hm-tile"><img src="/assets/img/home/mit-cleanroom.jpg" alt="Reinraum MIT.nano" loading="lazy"><figcaption><strong>MIT.nano</strong>Mikrofertigung im Reinraum</figcaption></figure>
  <figure class="hm-tile hm-wide"><img src="/assets/img/home/award-us26.jpg" alt="Shell Eco-marathon United States 2026" loading="lazy"><figcaption><strong>Shell Eco-marathon US 2026</strong>Vehicle Design Award &amp; 2. Platz Data &amp; Telemetry</figcaption></figure>
</div>

