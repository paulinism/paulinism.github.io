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
  .hm-gallery { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: 170px; gap: .75rem; }
  .hm-tile { position: relative; margin: 0; overflow: hidden; border-radius: 12px; border: 1px solid rgba(128,128,128,.3); }
  .hm-tile img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .35s ease; }
  .hm-tile:hover img { transform: scale(1.04); }
  .hm-tile figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 1.4rem .7rem .55rem; font-size: .8rem; line-height: 1.3; color: #fff; background: linear-gradient(transparent, rgba(0,0,0,.78)); }
  .hm-tile figcaption strong { display: block; font-size: .86rem; color: #fff; }
  .hm-big { grid-column: span 2; grid-row: span 2; }
  .hm-wide { grid-column: span 2; }
  @media (max-width: 860px) { .hm-gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 150px; } }
  @media (max-width: 480px) { .hm-gallery { grid-auto-rows: 125px; } .hm-tile figcaption { font-size: .72rem; } }
  /* ---- Home: experience timeline ---- */
  .hm-tl { position: relative; margin: .5rem 0 1.5rem; padding-left: 1.6rem; }
  .hm-tl::before { content: ""; position: absolute; left: .45rem; top: .4rem; bottom: .4rem; width: 2px; background: rgba(128,128,128,.35); }
  .hm-item { position: relative; display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 1rem; align-items: start; border: 1px solid rgba(128,128,128,.3); border-radius: 12px; padding: .85rem; margin-bottom: .9rem; }
  .hm-item::before { content: ""; position: absolute; left: -1.5rem; top: 1.1rem; width: .8rem; height: .8rem; border-radius: 50%; background: var(--global-theme-color); box-shadow: 0 0 0 3px var(--global-bg-color); }
  .hm-item img { width: 112px; height: 112px; object-fit: cover; border-radius: 10px; display: block; }
  .hm-when { font-family: "Roboto Mono", ui-monospace, monospace; font-size: .8rem; color: var(--global-theme-color); font-weight: 600; }
  .hm-role { font-weight: 700; font-size: 1.02rem; margin: .1rem 0 0; }
  .hm-org { font-size: .88rem; opacity: .8; margin: 0 0 .35rem; }
  .hm-item ul { margin: 0; padding-left: 1.1rem; font-size: .88rem; line-height: 1.45; }
  .hm-item ul li { margin: 0 0 .15rem; }
  .hm-item a.hm-more { font-size: .85rem; font-weight: 600; }
  @media (max-width: 560px) { .hm-item { grid-template-columns: 72px minmax(0, 1fr); gap: .7rem; padding: .7rem; } .hm-item img { width: 72px; height: 72px; } }

  /* ---- Home: skills cards ---- */
  .sk-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .9rem; margin: .4rem 0 1.2rem; }
  .sk-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; padding: .9rem 1rem; transition: border-color .15s ease, transform .15s ease; }
  .sk-card:hover { border-color: var(--global-theme-color); transform: translateY(-2px); }
  .sk-ico { display: inline-flex; align-items: center; justify-content: center; width: 2.2rem; height: 2.2rem; border-radius: 8px; background: rgba(128,128,128,.12); color: var(--global-theme-color); font-size: 1.05rem; margin-bottom: .45rem; }
  .sk-card h3 { font-size: 1rem; font-weight: 700; margin: 0 0 .3rem; }
  .sk-card p { font-size: .85rem; line-height: 1.45; opacity: .85; margin: 0 0 .5rem; }
  @media (max-width: 860px) { .sk-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 560px) { .sk-grid { grid-template-columns: minmax(0, 1fr); } }
  /* ---- Home: tech stack logos ---- */
  .ts-group { margin: 0 0 1.1rem; }
  .ts-group h3 { font-size: .95rem; font-weight: 700; margin: 0 0 .55rem; opacity: .9; }
  .ts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: .6rem; }
  .ts-item { display: flex; flex-direction: column; align-items: center; gap: .4rem; border: 1px solid rgba(128,128,128,.3); border-radius: 10px; padding: .7rem .4rem .55rem; text-align: center; transition: border-color .15s ease, transform .15s ease; }
  .ts-item:hover { border-color: var(--global-theme-color); transform: translateY(-2px); }
  .ts-logo { display: flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 10px; background: #fff; padding: 7px; box-sizing: border-box; }
  .ts-logo img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .ts-logo i { font-size: 1.35rem; color: var(--global-theme-color); }
  .ts-logo.ts-fa { background: rgba(128,128,128,.12); }
  .ts-item span { font-size: .76rem; line-height: 1.2; }
  @media (max-width: 480px) { .ts-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
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
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-sliders"></i></span><h3>Regelung &amp; Simulation</h3><p>Modellbasierte Entwicklung: Übertragungsfunktionen, PID-Regelkreise und Model-/Hardware-in-the-Loop-Tests.</p><div><span class="ab-tag">MATLAB</span><span class="ab-tag">Simulink</span><span class="ab-tag">Simscape</span><span class="ab-tag">PID</span><span class="ab-tag">MiL / HiL</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-industry"></i></span><h3>Industrielle Automatisierung</h3><p>SPS-Ablaufketten, HMI/SCADA und virtuelle Inbetriebnahme eines digitalen Zwillings mit Cobots.</p><div><span class="ab-tag">TIA Portal</span><span class="ab-tag">S7-1500</span><span class="ab-tag">WinCC</span><span class="ab-tag">PLCSIM Adv.</span><span class="ab-tag">Process Simulate</span><span class="ab-tag">UR-Cobots</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-eye"></i></span><h3>Bildverarbeitung &amp; Daten</h3><p>Bildverarbeitung in Python, Objekterkennung, industrielle Prüfung und Datenanalyse.</p><div><span class="ab-tag">Python</span><span class="ab-tag">OpenCV</span><span class="ab-tag">YOLOv11</span><span class="ab-tag">Cognex In-Sight</span><span class="ab-tag">NumPy · Pandas</span><span class="ab-tag">Altair AI Studio</span></div></div>
  <div class="sk-card"><span class="sk-ico"><i class="fa-solid fa-gears"></i></span><h3>Konstruktion &amp; Fertigung</h3><p>CAD-Baugruppen, Bewegungs- und Festigkeitsanalysen, CAM und praktische Fertigung bis zum Reinraum.</p><div><span class="ab-tag">SolidWorks (CSWA)</span><span class="ab-tag">Siemens NX</span><span class="ab-tag">CAM</span><span class="ab-tag">3D-Druck</span><span class="ab-tag">Drehen · Fräsen</span><span class="ab-tag">Reinraum</span></div></div>
</div>
<div class="ab-cta"><strong>Verfügbar ab Februar/März 2027</strong> für ein Praktikum in Embedded Systems, Hardware oder industrieller Automatisierung.</div>

<h2 class="hm-h" id="tech-stack">Tech-Stack</h2>
<p class="hm-sub">Software und Sprachen, die ich in Projekten, Wettbewerben und im Studium eingesetzt habe.</p>
<div class="ts-group"><h3>Konstruktion &amp; Simulation</h3><div class="ts-grid">
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/solidworks.svg" alt="SolidWorks" loading="lazy"></div><span>SolidWorks</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/siemens.svg" alt="Siemens NX" loading="lazy"></div><span>Siemens NX</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/fusion.svg" alt="Fusion CAM" loading="lazy"></div><span>Fusion CAM</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/ansys.svg" alt="Ansys" loading="lazy"></div><span>Ansys</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/matlab.svg" alt="MATLAB" loading="lazy"></div><span>MATLAB</span></div>
  <div class="ts-item"><div class="ts-logo ts-fa"><i class="fa-solid fa-diagram-project"></i></div><span>Simulink</span></div>
  <div class="ts-item"><div class="ts-logo ts-fa"><i class="fa-solid fa-microchip"></i></div><span>Altium Designer</span></div>
  <div class="ts-item"><div class="ts-logo ts-fa"><i class="fa-solid fa-wave-square"></i></div><span>Multisim</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/labview.svg" alt="LabVIEW" loading="lazy"></div><span>LabVIEW</span></div>
</div></div>
<div class="ts-group"><h3>Automatisierung &amp; Robotik</h3><div class="ts-grid">
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/siemens.svg" alt="TIA Portal" loading="lazy"></div><span>TIA Portal</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/siemens.svg" alt="Process Simulate" loading="lazy"></div><span>Process Simulate</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/rockwell.svg" alt="Rockwell Studio 5000" loading="lazy"></div><span>Rockwell Studio 5000</span></div>
  <div class="ts-item"><div class="ts-logo ts-fa"><i class="fa-solid fa-robot"></i></div><span>Universal Robots</span></div>
  <div class="ts-item"><div class="ts-logo ts-fa"><i class="fa-solid fa-camera"></i></div><span>Cognex In-Sight</span></div>
</div></div>
<div class="ts-group"><h3>Programmierung &amp; Daten</h3><div class="ts-grid">
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/python.svg" alt="Python" loading="lazy"></div><span>Python</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/c.svg" alt="C" loading="lazy"></div><span>C</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/cpp.svg" alt="C++" loading="lazy"></div><span>C++</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/csharp.svg" alt="C#" loading="lazy"></div><span>C#</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/numpy.svg" alt="NumPy" loading="lazy"></div><span>NumPy</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/pandas.svg" alt="Pandas" loading="lazy"></div><span>Pandas</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/opencv.svg" alt="OpenCV" loading="lazy"></div><span>OpenCV</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/yolo.svg" alt="YOLO" loading="lazy"></div><span>YOLO</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/jupyter.svg" alt="Jupyter" loading="lazy"></div><span>Jupyter</span></div>
</div></div>
<div class="ts-group"><h3>Embedded &amp; Tools</h3><div class="ts-grid">
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/espressif.svg" alt="ESP32" loading="lazy"></div><span>ESP32</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/platformio.svg" alt="PlatformIO" loading="lazy"></div><span>PlatformIO</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/arduino.svg" alt="Arduino" loading="lazy"></div><span>Arduino</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/mqtt.svg" alt="MQTT" loading="lazy"></div><span>MQTT</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/git.svg" alt="Git" loading="lazy"></div><span>Git</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/github.svg" alt="GitHub" loading="lazy"></div><span>GitHub</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/vscode.svg" alt="VS Code" loading="lazy"></div><span>VS Code</span></div>
  <div class="ts-item"><div class="ts-logo"><img src="/assets/img/logos/latex.svg" alt="LaTeX" loading="lazy"></div><span>LaTeX</span></div>
  <div class="ts-item"><div class="ts-logo ts-fa"><i class="fa-solid fa-cube"></i></div><span>3D-Druck</span></div>
</div></div>
<h2 class="hm-h" id="highlights">Auf der Strecke, im Labor, auf der Bühne</h2>
<p class="hm-sub">Einige Momente hinter den Projekten — Wettbewerbe, Reinraumarbeit und die Hardware selbst.</p>
<div class="hm-gallery">
  <figure class="hm-tile hm-big"><img src="/assets/img/home/track.jpg" alt="Prototyp von EcoVolt CCM auf der Strecke" loading="lazy"><figcaption><strong>Prototyp EcoVolt CCM</strong>Energieeffizientes E-Fahrzeug, ca. 200 km/kWh bei ca. 28 km/h</figcaption></figure>
  <figure class="hm-tile"><img src="/assets/img/home/award-2025.jpg" alt="Data and Telemetry Award 2025" loading="lazy"><figcaption><strong>1. Platz 2025</strong>Data &amp; Telemetry Award</figcaption></figure>
  <figure class="hm-tile"><img src="/assets/img/home/soldering.jpg" alt="Löten der Telemetrie-Elektronik" loading="lazy"><figcaption><strong>Telemetrie-Hardware</strong>Bestückung &amp; Inbetriebnahme</figcaption></figure>
  <figure class="hm-tile hm-wide"><img src="/assets/img/home/award-us26.jpg" alt="Shell Eco-marathon United States 2026" loading="lazy"><figcaption><strong>Shell Eco-marathon US 2026</strong>Vehicle Design Award &amp; 2. Platz Data &amp; Telemetry</figcaption></figure>
  <figure class="hm-tile"><img src="/assets/img/home/mit-cleanroom.jpg" alt="Reinraum MIT.nano" loading="lazy"><figcaption><strong>MIT.nano</strong>Mikrofertigung im Reinraum</figcaption></figure>
  <figure class="hm-tile"><img src="/assets/img/home/assembly.jpg" alt="Arbeit im Fahrerlager" loading="lazy"><figcaption><strong>Fahrerlager</strong>Fahrzeugelektronik vor Ort</figcaption></figure>
  <figure class="hm-tile hm-wide"><img src="/assets/img/home/shell-explaining.jpg" alt="Präsentation beim Shell Eco-marathon" loading="lazy"><figcaption><strong>Unsere Systeme vorstellen</strong>Off-Track-Awards beim Shell Eco-marathon</figcaption></figure>
</div>

<h2 class="hm-h" id="experience">Praxis &amp; Studium</h2>
<div class="hm-tl">
  <div class="hm-item"><img src="/assets/img/home/pcb.jpg" alt="EcoVolt CCM" loading="lazy"><div>
    <div class="hm-when">08/2023 – 08/2026</div>
    <p class="hm-role">Teamkapitänin, Leiterin Elektronik &amp; Mentorin</p>
    <p class="hm-org">Elektro-Rennteam EcoVolt CCM · Shell Eco-marathon</p>
    <ul>
      <li>Leitung eines Teams mit ca. 30 Mitgliedern; energieeffizientes E-Fahrzeug mit ca. 200 km/kWh bei ca. 28 km/h</li>
      <li>Telemetrie-Platinen in Altium entwickelt und ESP32-Firmware in C++ geschrieben (CAN, SPI, I2C, UART)</li>
      <li>Data &amp; Telemetry Award: 1. Platz 2025, 2. Platz 2026 · Vehicle Design Award 2026</li>
    </ul>
    <a class="hm-more" href="/de/projects/ecovolt-telemetry/">Zum Telemetrie-Projekt →</a>
  </div></div>
  <div class="hm-item"><img src="/assets/img/home/solar.jpg" alt="Solarzelle MIT.nano" loading="lazy"><div>
    <div class="hm-when">10/2025</div>
    <p class="hm-role">Gaststudentin — NanoLab Microfabrication Program</p>
    <p class="hm-org">MIT.nano · Massachusetts Institute of Technology</p>
    <ul>
      <li>Solarzelle, MEMS-Cantilever und Mikrofluidik-Mischer gefertigt (Lithografie, PECVD/PVD, Ätzen)</li>
      <li>Bauelemente charakterisiert: IV-Kennlinie, mechanische und Fluidtests</li>
    </ul>
    <a class="hm-more" href="/de/projects/mit-nano-fabrication/">Zum MIT.nano-Projekt →</a>
  </div></div>
  <div class="hm-item"><img src="/assets/img/home/endress.jpg" alt="Endress+Hauser" loading="lazy"><div>
    <div class="hm-when">2025 – 2026</div>
    <p class="hm-role">Projekte mit Industriepartnern</p>
    <p class="hm-org">Endress+Hauser · ORZA Tech · mit dem Tecnológico de Monterrey</p>
    <ul>
      <li>Messelektronik für ein Viskositätssystem auf drei eigenen Platinen — 252 cP und 1676 cP zuverlässig unterschieden</li>
      <li>Digitaler Zwilling einer CNC-Zelle: S7-1500 mit 35-stufiger Ablaufkette, SCADA und KPI (Yield, Ausschuss, OEE)</li>
    </ul>
    <a class="hm-more" href="/de/projects/">Alle Projekte →</a>
  </div></div>
  <div class="hm-item"><img src="/assets/img/home/scara.jpg" alt="SCARA" loading="lazy"><div>
    <div class="hm-when">08/2023 – 12/2027</div>
    <p class="hm-role">Studium: B.Sc. Mechatronik &amp; B.Eng. Elektrotechnik (DHIK-Doppelabschluss)</p>
    <p class="hm-org">Tecnológico de Monterrey · Hochschule Zittau/Görlitz (seit 09/2026)</p>
    <ul>
      <li>Notenschnitt 92/100 (≈ 1,8) · Leistungsstipendium (30 %)</li>
      <li>Aktuelle Module: Kollaborative Roboter, Neuronale Netze, Mikrocontroller, Bildverarbeitung, Advanced Control Theory</li>
    </ul>
  </div></div>
</div>

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
