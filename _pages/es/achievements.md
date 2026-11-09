---
layout: page
title: logros
permalink: /es/achievements/
lang: es
description: Premios, participaciones, artículos en coautoría y certificaciones.
certificates:
  - file: cert-01.jpg
    group: "Ingeniería eléctrica"
    caption: "MIT.nano, Massachusetts Institute of Technology — 2025 NanoLab (oct. 2025)"
  - file: cert-02.jpg
    group: "Ingeniería eléctrica"
    caption: "Altair Global Student Contest 2025 — Mención honorífica"
  - file: cert-03.jpg
    group: "Ingeniería eléctrica"
    caption: "Altium Education — Curso básico de diseño de PCB (feb. 2026)"
  - file: cert-04.jpg
    group: "Ingeniería eléctrica"
    caption: "MathWorks — Simulink Onramp (oct. 2026)"
  - file: cert-05.jpg
    group: "Ingeniería eléctrica"
    caption: "MathWorks — Simscape Onramp (oct. 2026)"
  - file: cert-06.jpg
    group: "Automatización"
    caption: "Universal Robots — e-Series Core Track (mar. 2026)"
  - file: cert-07.jpg
    group: "Automatización"
    caption: "Universal Robots — e-Series Pro Track (mar. 2026)"
  - file: cert-08.jpg
    group: "Automatización"
    caption: "Universal Robots — e-Series Application Track (oct. 2026)"
  - file: cert-09.jpg
    group: "Automatización"
    caption: "Universal Robots — Educational Robotics Training, Core (mar. 2026)"
  - file: cert-10.jpg
    group: "Automatización"
    caption: "Universal Robots — Educational Robotics Training, Core: temario"
  - file: cert-11.jpg
    group: "Automatización"
    caption: "MiR Academy — Personnel Safety (oct. 2026)"
  - file: cert-12.jpg
    group: "Automatización"
    caption: "MiR Academy — Autonomous Navigation (oct. 2026)"
  - file: cert-13.jpg
    group: "Automatización"
    caption: "MiR Academy — Mission Programming (oct. 2026)"
  - file: cert-14.jpg
    group: "Automatización"
    caption: "Siemens Xcelerator Academy — Process Simulate Standalone Associate (jun. 2026)"
  - file: cert-15.jpg
    group: "Automatización"
    caption: "Dassault Systèmes — Certified SOLIDWORKS Associate, CSWA (ago. 2026)"
  - file: cert-16.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Americas 2025 — Ganador, Data & Telemetry Award (abr. 2025)"
  - file: cert-17.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Americas 2025 — Certificado de resultados (abr. 2025)"
  - file: cert-18.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Brazil 2025 — Certificado de resultados (ago. 2025)"
  - file: cert-19.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon United States 2026 — Segundo lugar, Data & Telemetry Award (abr. 2026)"
  - file: cert-20.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon United States 2026 — Ganador, Vehicle Design Award, Prototype (abr. 2026)"
  - file: cert-21.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon United States 2026 — Certificado de resultados (abr. 2026)"
  - file: cert-22.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Brazil 2026 — Certificado de participación (ago. 2026)"
---

<style>
  .ach-kpis { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .75rem; margin: 1rem 0 2rem; }
  .ach-kpi { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; padding: .9rem 1rem; text-align: center; }
  .ach-kpi b { display: block; font-size: 2rem; line-height: 1.1; color: var(--global-theme-color); }
  .ach-kpi span { font-size: .85rem; opacity: .85; }
  .ach-h { margin: 2rem 0 .3rem; }
  .ach-sub { opacity: .8; margin: 0 0 1rem; }
  .ach-awards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.1rem; }
  .ach-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
  .ach-card img { width: 100%; height: 230px; object-fit: cover; display: block; background: rgba(128,128,128,.08); }
  .ach-card img.doc { object-fit: contain; background: #fff; }
  .ach-body { padding: .9rem 1rem 1rem; display: flex; flex-direction: column; gap: .3rem; flex: 1; }
  .ach-badge { align-self: flex-start; font-size: .72rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: .15rem .55rem; border-radius: 999px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .ach-title { font-weight: 700; font-size: 1.08rem; margin: .2rem 0 0; }
  .ach-event { font-size: .88rem; opacity: .8; margin: 0; }
  .ach-why { font-size: .92rem; margin: .3rem 0 0; }
  .ach-link { margin-top: auto; padding-top: .5rem; font-size: .9rem; font-weight: 600; }
  .ach-timeline { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; margin: .3rem 0 0; }
  .ach-stop { font-size: .85rem; padding: .3rem .7rem; border-radius: 8px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.07); }
  .ach-stop.win { border-color: var(--global-theme-color); }
  .ach-arrow { opacity: .5; }
  .ach-research { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.1rem; }
  .ach-res { border: 1px solid rgba(128,128,128,.3); border-left: 4px solid var(--global-theme-color); border-radius: 10px; padding: .9rem 1rem; }
  .ach-res p { margin: .25rem 0 0; font-size: .92rem; }
  .ach-certs { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .8rem; margin: .5rem 0 1.5rem; }
  .ach-cert { border: 1px solid rgba(128,128,128,.3); border-radius: 10px; padding: .75rem .9rem; }
  .ach-cert .iss { font-size: .72rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--global-theme-color); }
  .ach-cert .nm { font-size: .92rem; font-weight: 600; margin-top: .15rem; line-height: 1.35; }
  .ach-cert .dt { font-size: .8rem; opacity: .75; margin-top: .15rem; }
  @media (max-width: 760px) {
    .ach-kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ach-awards, .ach-research { grid-template-columns: minmax(0, 1fr); }
    .ach-certs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  /* ---- Page title and section headings matched to Projects/CV/Contact ---- */
  .post > .post-header { display: none !important; }
  .pg-title { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: -0.02em; margin: 1rem 0 .3rem; }
  .pg-lead { opacity: .85; margin: 0 0 1.2rem; max-width: 46rem; line-height: 1.6; }
  .sec-h { display: flex; align-items: center; gap: .6rem; color: var(--global-theme-color) !important; font-size: 1.45rem; font-weight: 700; padding-bottom: .4rem; border-bottom: 2px solid var(--global-theme-color); margin: 2.2rem 0 1rem !important; }
  .sec-h i { font-size: .8em; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>
<p class="pg-title">Logros</p>
<p class="pg-lead">Premios, investigación y certificaciones de mi trabajo en competencias, cuarto limpio y automatización — cada uno con su documento de respaldo.</p>

<div class="ach-kpis">
  <div class="ach-kpi"><b>3</b><span>premios internacionales</span></div>
  <div class="ach-kpi"><b>4</b><span>competencias Shell Eco-marathon</span></div>
  <div class="ach-kpi"><b>12</b><span>certificaciones técnicas</span></div>
  <div class="ach-kpi"><b>1</b><span>artículo IEEE (primera autora)</span></div>
</div>

<h2 class="ach-h sec-h" id="awards"><i class="fa-solid fa-trophy"></i> Premios</h2>
<p class="ach-sub">Escudería EcoVolt CCM EV Racing Team — Capitana del equipo y líder de electrónica, 2023–2026</p>

<div class="ach-awards">
  <div class="ach-card">
    <img data-zoomable src="/assets/img/tel-award-2025.jpg" alt="Data and Telemetry Award, Shell Eco-marathon Americas 2025" style="object-position: center 35%">
    <div class="ach-body">
      <span class="ach-badge">🥇 Ganador · 3,000 USD</span>
      <p class="ach-title">Data &amp; Telemetry Award</p>
      <p class="ach-event">Shell Eco-marathon Americas 2025 · patrocinado por Schmid Elektronik</p>
      <p class="ach-why">Por el primer sistema de telemetría que cofundé: corriente, voltaje y GPS en vivo del auto a los pits.</p>
      <a class="ach-link" href="/es/projects/ecovolt-telemetry/">Ver el proyecto de telemetría →</a>
    </div>
  </div>
  <div class="ach-card">
    <img data-zoomable src="/assets/img/tel-award-vehicle-design-us26.jpg" alt="Vehicle Design Award, Shell Eco-marathon United States 2026">
    <div class="ach-body">
      <span class="ach-badge">🥇 Ganador · 3,000 USD</span>
      <p class="ach-title">Vehicle Design Award — Prototype</p>
      <p class="ach-event">Shell Eco-marathon United States 2026 · patrocinado por Qatar Museums</p>
      <p class="ach-why">Mi aporte: el análisis ergonómico del piloto (modelo humano virtual, RULA) que definió la cabina.</p>
      <a class="ach-link" href="/es/projects/ecovolt-telemetry/#driver-ergonomics-vehicle-design-award">Ver el trabajo de ergonomía →</a>
    </div>
  </div>
  <div class="ach-card">
    <img class="doc" data-zoomable src="/assets/img/certificates/cert-19.jpg" alt="Runner-up certificate, Data and Telemetry Award 2026">
    <div class="ach-body">
      <span class="ach-badge">🥈 Segundo lugar · 1,500 USD</span>
      <p class="ach-title">Data &amp; Telemetry Award</p>
      <p class="ach-event">Shell Eco-marathon United States 2026 · patrocinado por Schmid Elektronik</p>
      <p class="ach-why">Por el sistema V2 rediseñado: PCB propio, CAN al controlador del motor y registro en tarjeta SD.</p>
      <a class="ach-link" href="/es/projects/ecovolt-telemetry/">Ver el proyecto de telemetría →</a>
    </div>
  </div>
  <div class="ach-card">
    <img class="doc" data-zoomable src="/assets/img/certificates/cert-02.jpg" alt="Altair Global Student Contest 2025 Honorable Mention">
    <div class="ach-body">
      <span class="ach-badge">🏅 Mención honorífica</span>
      <p class="ach-title">Altair Global Student Contest 2025</p>
      <p class="ach-event">Con José Diego González Fernández (ITESM)</p>
      <p class="ach-why">"AI-Driven Data Analysis for Vehicle Energy Efficiency": Altair AI Studio aplicado a datos de competencia para jerarquizar los factores de la eficiencia.</p>
      <a class="ach-link" href="https://web.altair.com/global-student-contest-2025" target="_blank" rel="noopener">Página del concurso →</a>
    </div>
  </div>
</div>

<h2 class="ach-h sec-h"><i class="fa-solid fa-file-lines"></i> Investigación e informes</h2>
<div class="ach-research">
  <div class="ach-res">
    <strong>📄 IEEE SAIBOT 2026 — primera autora (aceptado)</strong>
    <p><em>Real-Time Telemetry and Computational Intelligence Pipeline for Energy-Efficient Driving of an Electric Eco-Marathon Vehicle</em></p>
    <p><a href="/es/publications/">Ver publicaciones →</a></p>
  </div>
  <div class="ach-res">
    <strong>🔬 MIT.nano Lab — informe técnico (oct. 2025)</strong>
    <p>Micro/Nanofabrication Processing Technology: celda solar de silicio tipo n, cantilevers MEMS y mezclador microfluídico, bajo la supervisión del Dr. Javier Izquierdo Reyes y el Dr. Arnoldo Salazar Soto.</p>
    <p><a href="/es/projects/mit-nano-fabrication/">Ver el proyecto de MIT.nano →</a></p>
  </div>
</div>

<h2 class="ach-h sec-h" id="certifications"><i class="fa-solid fa-certificate"></i> Certificaciones de un vistazo</h2>
<div class="ach-certs">
  <div class="ach-cert"><div class="iss">Siemens</div><div class="nm">Process Simulate Standalone Associate</div><div class="dt">jun. 2026</div></div>
  <div class="ach-cert"><div class="iss">Dassault Systèmes</div><div class="nm">Certified SOLIDWORKS Associate (CSWA)</div><div class="dt">ago. 2026</div></div>
  <div class="ach-cert"><div class="iss">Universal Robots</div><div class="nm">Educational Robotics Core + e-Series Core, Pro &amp; Application Tracks</div><div class="dt">mar. – oct. 2026</div></div>
  <div class="ach-cert"><div class="iss">MiR Academy</div><div class="nm">Personnel Safety, Autonomous Navigation, Mission Programming</div><div class="dt">oct. 2026</div></div>
  <div class="ach-cert"><div class="iss">MathWorks</div><div class="nm">Simulink Onramp &amp; Simscape Onramp</div><div class="dt">oct. 2026</div></div>
  <div class="ach-cert"><div class="iss">Altium Education</div><div class="nm">PCB Basic Design</div><div class="dt">feb. 2026</div></div>
</div>

<h2 class="sec-h" id="all-certificates--award-documents"><i class="fa-solid fa-folder-open"></i> Todos los certificados y documentos de premios</h2>

<!--- ### Certificate viewer --->
<!--- Flip through my certificates and award documents, grouped by Electrical Engineering, Automation and Shell Eco-marathon, each in chronological order. --->

Usa las flechas, el teclado (← →), desliza en el celular o toca una miniatura.

<div class="certbook" id="certbook" tabindex="0" aria-label="Visor de certificados">
  <div class="certbook-stage">
    <button class="certbook-btn prev" type="button" aria-label="Certificado anterior">&#8249;</button>
    <div class="certbook-page">
      {% for c in page.certificates %}
        <figure class="certbook-sheet{% if forloop.first %} active{% endif %}" data-caption="{{ c.caption | escape }}" data-group="{{ c.group | escape }}">
          <img
            src="{{ '/assets/img/certificates/' | append: c.file | relative_url }}"
            alt="{{ c.caption | escape }}"
            loading="{% if forloop.index <= 2 %}eager{% else %}lazy{% endif %}"
          >
        </figure>
      {% endfor %}
    </div>
    <button class="certbook-btn next" type="button" aria-label="Certificado siguiente">&#8250;</button>
  </div>
  <p class="certbook-caption"></p>
  <div class="certbook-bar">
    <span class="certbook-count"></span>
    <a class="btn btn-sm z-depth-0" href="{{ '/assets/pdf/Certificates_Paulina_Ruiz.pdf' | relative_url }}" target="_blank" rel="noopener">Abrir PDF completo</a>
  </div>
  <div class="certbook-thumbs">
    {% for c in page.certificates %}
      <button type="button" class="certbook-thumb{% if forloop.first %} active{% endif %}" data-i="{{ forloop.index0 }}" aria-label="{{ c.caption | escape }}">
        <img src="{{ '/assets/img/certificates/' | append: c.file | relative_url }}" alt="" loading="lazy">
      </button>
    {% endfor %}
  </div>
</div>

<style>
  .certbook { margin: 1.5rem 0 1rem; outline: none; }
  .certbook-stage { position: relative; display: flex; align-items: center; gap: 0.5rem; }
  .certbook-page {
    position: relative; flex: 1; aspect-ratio: 4 / 3; perspective: 1600px;
    background: var(--global-bg-color, #fff); border: 1px solid var(--global-divider-color, #ddd); border-radius: 8px; overflow: hidden;
  }
  .certbook-sheet {
    position: absolute; inset: 0; margin: 0; display: flex; align-items: center; justify-content: center; padding: 3%;
    background: var(--global-bg-color, #fff); transform-origin: left center; transform: rotateY(0deg);
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.8s ease; backface-visibility: hidden;
    pointer-events: none;
  }
  .certbook-sheet.active { pointer-events: auto; }
  .certbook-sheet.turned { transform: rotateY(-180deg); box-shadow: -20px 0 30px rgba(0, 0, 0, 0.25); }
  .certbook-sheet img { max-width: 100%; max-height: 100%; object-fit: contain; box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18); background: #fff; cursor: zoom-in; }
  .certbook-btn {
    flex: 0 0 auto; width: 2.4rem; height: 2.4rem; border-radius: 50%; border: 1px solid var(--global-divider-color, #ccc);
    background: var(--global-bg-color, #fff); color: var(--global-theme-color, #333); font-size: 1.6rem; line-height: 1; cursor: pointer;
  }
  .certbook-btn:disabled { opacity: 0.3; cursor: default; }
  .certbook-caption { text-align: center; font-weight: 600; margin: 0.8rem 0 0.2rem; min-height: 1.5em; }
  .certbook-group {
    display: block; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--global-theme-color, #555); margin-bottom: 0.15rem;
  }
  .certbook-bar { display: flex; justify-content: center; align-items: center; gap: 1rem; font-size: 0.9rem; }
  .certbook-thumbs { position: relative; display: flex; gap: 0.4rem; overflow-x: auto; padding: 0.8rem 0.1rem 0.3rem; }
  .certbook-thumb { flex: 0 0 auto; width: 64px; height: 48px; padding: 0; border: 2px solid transparent; border-radius: 4px; background: #fff; cursor: pointer; opacity: 0.6; }
  .certbook-thumb img { width: 100%; height: 100%; object-fit: contain; }
  .certbook-thumb.active { border-color: var(--global-theme-color, #333); opacity: 1; }
  @media (max-width: 576px) {
    .certbook-page { aspect-ratio: 3 / 4; }
    .certbook-btn { width: 2rem; height: 2rem; font-size: 1.3rem; }
  }
  @media (prefers-reduced-motion: reduce) { .certbook-sheet { transition: none; } }
</style>

<script>
  (function () {
    var book = document.getElementById("certbook");
    if (!book) return;
    var sheets = book.querySelectorAll(".certbook-sheet");
    var thumbs = book.querySelectorAll(".certbook-thumb");
    var prev = book.querySelector(".prev");
    var next = book.querySelector(".next");
    var cap = book.querySelector(".certbook-caption");
    var count = book.querySelector(".certbook-count");
    var grp = document.createElement("span");
    grp.className = "certbook-group";
    var capText = document.createElement("span");
    cap.appendChild(grp);
    cap.appendChild(capText);
    var cur = 0;
    function show(i) {
      if (i < 0 || i >= sheets.length) return;
      for (var k = 0; k < sheets.length; k++) {
        sheets[k].classList.toggle("active", k === i);
        sheets[k].classList.toggle("turned", k < i);
        sheets[k].style.zIndex = k < i ? sheets.length + k : sheets.length - k;
        thumbs[k].classList.toggle("active", k === i);
      }
      cur = i;
      grp.textContent = sheets[i].getAttribute("data-group");
      capText.textContent = sheets[i].getAttribute("data-caption");
      count.textContent = i + 1 + " / " + sheets.length;
      prev.disabled = i === 0;
      next.disabled = i === sheets.length - 1;
      var strip = thumbs[i].parentNode;
      var t = thumbs[i];
      if (t.offsetLeft < strip.scrollLeft) strip.scrollLeft = t.offsetLeft;
      else if (t.offsetLeft + t.offsetWidth > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = t.offsetLeft + t.offsetWidth - strip.clientWidth;
    }
    prev.addEventListener("click", function () { show(cur - 1); });
    next.addEventListener("click", function () { show(cur + 1); });
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () { show(+t.getAttribute("data-i")); });
    });
    book.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { show(cur - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { show(cur + 1); e.preventDefault(); }
    });
    var x0 = null;
    book.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    book.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    book.querySelectorAll(".certbook-sheet img").forEach(function (img) {
      img.addEventListener("click", function () { window.open(img.src, "_blank"); });
    });
    show(0);
  })();
</script>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/' | relative_url }}">← Anterior: Proyectos</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/publications/' | relative_url }}">Siguiente: Publicaciones →</a>
</div>
