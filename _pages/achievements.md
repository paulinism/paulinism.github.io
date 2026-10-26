---
layout: page
title: achievements
permalink: /achievements/
description: Awards, participations, co-authored papers, and certifications.
nav: true
nav_order: 2
certificates:
  - file: cert-01.jpg
    group: "Electrical Engineering"
    caption: "MIT.nano, Massachusetts Institute of Technology — 2025 NanoLab (Oct 2025)"
  - file: cert-02.jpg
    group: "Electrical Engineering"
    caption: "Altair Global Student Contest 2025 — Honorable Mention"
  - file: cert-03.jpg
    group: "Electrical Engineering"
    caption: "Altium Education — PCB Basic Design Course (Feb 2026)"
  - file: cert-04.jpg
    group: "Electrical Engineering"
    caption: "MathWorks — Simulink Onramp (Oct 2026)"
  - file: cert-05.jpg
    group: "Electrical Engineering"
    caption: "MathWorks — Simscape Onramp (Oct 2026)"
  - file: cert-06.jpg
    group: "Automation"
    caption: "Universal Robots — e-Series Core Track (Mar 2026)"
  - file: cert-07.jpg
    group: "Automation"
    caption: "Universal Robots — e-Series Pro Track (Mar 2026)"
  - file: cert-08.jpg
    group: "Automation"
    caption: "Universal Robots — e-Series Application Track (Oct 2026)"
  - file: cert-09.jpg
    group: "Automation"
    caption: "Universal Robots — Educational Robotics Training, Core (Mar 2026)"
  - file: cert-10.jpg
    group: "Automation"
    caption: "Universal Robots — Educational Robotics Training, Core: curriculum"
  - file: cert-11.jpg
    group: "Automation"
    caption: "MiR Academy — Personnel Safety (Oct 2026)"
  - file: cert-12.jpg
    group: "Automation"
    caption: "MiR Academy — Autonomous Navigation (Oct 2026)"
  - file: cert-13.jpg
    group: "Automation"
    caption: "MiR Academy — Mission Programming (Oct 2026)"
  - file: cert-14.jpg
    group: "Automation"
    caption: "Siemens Xcelerator Academy — Process Simulate Standalone Associate (Jun 2026)"
  - file: cert-15.jpg
    group: "Automation"
    caption: "Dassault Systèmes — Certified SOLIDWORKS Associate, CSWA (Aug 2026)"
  - file: cert-16.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Americas 2025 — Winner, Data & Telemetry Award (Apr 2025)"
  - file: cert-17.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Americas 2025 — Certificate of Results (Apr 2025)"
  - file: cert-18.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Brazil 2025 — Certificate of Results (Aug 2025)"
  - file: cert-19.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon United States 2026 — Runner-Up, Data & Telemetry Award (Apr 2026)"
  - file: cert-20.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon United States 2026 — Winner, Vehicle Design Award, Prototype (Apr 2026)"
  - file: cert-21.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon United States 2026 — Certificate of Results (Apr 2026)"
  - file: cert-22.jpg
    group: "Shell Eco-marathon"
    caption: "Shell Eco-marathon Brazil 2026 — Certificate of Participation (Aug 2026)"
---

**Shell Eco-marathon** — Team Captain & Electronics Lead, EcoVolt CCM EV Racing Team (Escudería), 2023–2026

- 🥇 <a href='https://www.shellecomarathon.com/about/previous-seasons/2025-programme/regional-americas.html'>Winner</a>, Data & Telemetry Award (sponsored by Schmid Elektronik) — Americas 2025
- 🥈 <a href='https://www.shellecomarathon.com/about/previous-seasons/2026-programme-shell-eco-marathon/united-states.html'>Runner-Up</a>, Data & Telemetry Award (sponsored by Schmid Elektronik) — United States 2026
- 🥇 <a href='https://www.shellecomarathon.com/about/previous-seasons/2026-programme-shell-eco-marathon/united-states.html'>Winner</a>, Vehicle Design Award, Prototype category (sponsored by Qatar Museums) — United States 2026
- Competed: Americas 2025, Brazil 2025, Brazil 2026, United States 2026

**Altair Global Student Contest 2025** — <a href='https://web.altair.com/global-student-contest-2025'>Honorable Mention</a> —
Co-authored: _"AI-Driven Data Analysis for Vehicle Energy Efficiency"_ with José Diego González Fernández (ITESM México), using Altair AI Studio on Shell Eco-marathon performance data to identify the strongest drivers of vehicle energy efficiency.

**MIT.nano Lab, MIT** — _Micro/Nanofabrication Processing Technology_ (October 2025)
Co-authored a technical report on n-type silicon solar cell fabrication, MEMS cantilever fabrication, and microfluidic diffusion mixer fabrication, in collaboration with a teammate, under Dr. Javier Izquierdo Reyes and Dr. Arnoldo Salazar Soto (Tecnológico de Monterrey / MIT).

## Certifications

<!--- ### Certificate viewer --->
<!--- Flip through my certificates and award documents, grouped by Electrical Engineering, Automation and Shell Eco-marathon, each in chronological order. --->

Use the arrows, your keyboard (← →), swipe on mobile, or tap a thumbnail.

<div class="certbook" id="certbook" tabindex="0" aria-label="Certificate viewer">
  <div class="certbook-stage">
    <button class="certbook-btn prev" type="button" aria-label="Previous certificate">&#8249;</button>
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
    <button class="certbook-btn next" type="button" aria-label="Next certificate">&#8250;</button>
  </div>
  <p class="certbook-caption"></p>
  <div class="certbook-bar">
    <span class="certbook-count"></span>
    <a class="btn btn-sm z-depth-0" href="{{ '/assets/pdf/Certificates_Paulina_Ruiz.pdf' | relative_url }}" target="_blank" rel="noopener">Open full PDF</a>
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
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/projects/' | relative_url }}">← Previous: Projects</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/publications/' | relative_url }}">Next: Publications →</a>
</div>

- Process Simulate Standalone Associate (Siemens)
- Educational Robotics Training – Core, e-Series Core Track, e-Series Pro Track and e-Series Application Track (Universal Robots)
- Personnel Safety, Autonomous Navigation and Mission Programming (MiR – Mobile Industrial Robots Academy)
- Certified SolidWorks Associate – CSWA (Dassault Systèmes)
- MATLAB, Simulink and Simscape Onramp (MathWorks)
- Educational PCB Basic Design (Altium Designer)
