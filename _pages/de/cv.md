---
layout: page
permalink: /de/cv/
lang: de
title: Lebenslauf
description: Lebenslauf von Paulina L. Ruíz Servín.
toc:
  sidebar: left
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
  .cv-top { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); gap: 1.5rem; align-items: center; margin: 1rem 0 1.5rem; }
  .cv-name { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 .3rem; }
  .cv-label { opacity: .85; margin: 0 0 .8rem; }
  .cv-summary { line-height: 1.6; margin: 0; }
  .cv-dl { border: 1px solid rgba(128,128,128,.3); border-left: 4px solid var(--global-theme-color); border-radius: 12px; padding: 1rem 1.1rem; }
  .cv-dl p { margin: 0 0 .6rem; }
  .cv-dl .pc-btn { width: 100%; justify-content: center; margin-bottom: .45rem; }
  .cv-tl { position: relative; margin: .5rem 0 0 .4rem; padding-left: 1.4rem; border-left: 2px solid rgba(128,128,128,.35); }
  .cv-tl-item { position: relative; margin-bottom: 1.1rem; }
  .cv-tl-item::before { content: ""; position: absolute; left: -1.85rem; top: .35rem; width: .8rem; height: .8rem; border-radius: 50%; background: var(--global-theme-color); }
  .cv-when { font-family: "Roboto Mono", ui-monospace, monospace; font-size: .8rem; opacity: .7; }
  .cv-what { font-weight: 700; margin: .1rem 0; }
  .cv-where { font-size: .92rem; opacity: .85; }
  .cv-card { padding: 1rem 1.1rem; margin-bottom: 1rem; }
  .cv-card ul { margin: .5rem 0 0; padding-left: 1.1rem; font-size: .93rem; }
  .cv-card li { margin-bottom: .25rem; }
  .cv-head { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; align-items: baseline; }
  .cv-head { flex-wrap: nowrap; } .cv-head > .cv-when { flex-shrink: 0; white-space: nowrap; }
  .cv-proj { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .cv-proj .cv-card { margin: 0; display: flex; flex-direction: column; }
  .cv-proj .cv-card ul { margin-bottom: .8rem; }
  .cv-card .pc-btn { align-self: flex-start; margin-top: auto; font-size: .85rem; padding: .35rem .8rem; }
  .cv-skills { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .9rem 1.5rem; }
  .cv-skills strong { display: block; font-size: .95rem; margin-bottom: .3rem; }
  .cv-two { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
  .cv-mini { list-style: none; padding: 0; margin: 0; }
  .cv-mini li { padding: .45rem 0; border-bottom: 1px solid rgba(128,128,128,.2); font-size: .93rem; }
  .cv-mini li span { opacity: .7; }
  .cv-h { color: var(--global-theme-color); display: flex; align-items: center; gap: .6rem; padding-bottom: .4rem; border-bottom: 2px solid var(--global-theme-color); }
  .cv-h i { font-size: .8em; }
  .cv-h a, .cv-what a { color: inherit !important; text-decoration: none !important; }
  .cv-h a:hover, .cv-what a:hover { text-decoration: underline !important; }
  .cv-h-arrow { font-size: .6em; opacity: .8; }
  .cv-more { display: inline-block; margin-top: .4rem; font-size: .88rem; font-weight: 600; }
  .cv-card .cv-what { color: var(--global-theme-color); }
  .cv-tl-item .cv-what { color: var(--global-theme-color); }
  .cv-mini li { border-left: 3px solid var(--global-theme-color); padding-left: .7rem; border-bottom: none; margin-bottom: .45rem; background: rgba(128,128,128,.06); border-radius: 0 8px 8px 0; }
  .cv-lang { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
  .cv-lang .pc-card { padding: .9rem 1rem; }
  .cv-lang strong { display: block; }
  .cv-lang span { font-size: .88rem; opacity: .8; }
  .cv-bar { height: 6px; border-radius: 999px; background: rgba(128,128,128,.25); margin-top: .55rem; overflow: hidden; }
  .cv-bar i { display: block; height: 100%; background: var(--global-theme-color); border-radius: 999px; }
  @media (max-width: 760px) { .cv-lang { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 760px) { .cv-top, .cv-proj, .cv-skills, .cv-two { grid-template-columns: minmax(0, 1fr); } .cv-card > .cv-head { flex-wrap: wrap; } }
</style>
<div class="cv-top">
  <div>
    <p class="cv-name">Lebenslauf</p>
    <p class="cv-label">Studentin der Elektrotechnik &amp; Mechatronik — Embedded Systems, Elektronik, Regelung &amp; Automatisierung</p>
    <p class="cv-summary">Mechatronik-Studentin im DHIK-Doppelabschluss zwischen dem Tecnológico de Monterrey (Mexiko) und der Hochschule Zittau/Görlitz (Deutschland) mit Vertiefung Elektrotechnik. Erfahrung in Embedded Systems (Platinenentwurf, ESP32/FreeRTOS-Firmware, CAN/SPI/I2C/UART), modellbasierter Regelung (MATLAB/Simulink/Simscape, PID) und industrieller Automatisierung (Siemens TIA Portal, Allen-Bradley, digitale Zwillinge mit Process Simulate und Cobots von Universal Robots) sowie im Testen und Charakterisieren elektronischer Hardware im Labor. Verfügbar für Praktika und Bachelorarbeiten in Deutschland ab März 2027 (Vollzeit, bis zu 6 Monate).</p>
  </div>
  <div class="cv-dl">
    <p><strong>Vollständiger Lebenslauf (PDF)</strong><br><span style="opacity:.8">Verfügbar ab Februar/März 2027</span></p>
    <a class="pc-btn primary" href="{{ '/assets/pdf/CV_Paulina_DE.pdf' | relative_url }}?v=20261026" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> Lebenslauf (Deutsch)</a>
    <a class="pc-btn" href="{{ '/assets/pdf/CV_Paulina_EN.pdf' | relative_url }}?v=20261026" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> CV (English)</a>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-graduation-cap"></i> Studium</h2>
<div class="cv-tl">
  <div class="cv-tl-item">
    <div class="cv-when">08/2023 – 12/2027</div>
    <div class="cv-what">B.Sc. Mechatronik</div>
    <div class="cv-where">Tecnológico de Monterrey · Mexiko-Stadt, Mexiko</div>
    <div class="cv-where" style="margin-top:.2rem">Voraussichtlicher Abschluss: Dezember 2027 · Notenschnitt: 92/100 (≈ 1,8 nach deutscher Skala) · Leistungsstipendium (30 %)</div>
  </div>
  <div class="cv-tl-item">
    <div class="cv-when">09/2026 – 12/2027</div>
    <div class="cv-what">B.Eng. Elektrotechnik (DHIK-Doppelabschluss)</div>
    <div class="cv-where">Hochschule Zittau/Görlitz · Zittau, Deutschland</div>
    <div class="cv-where" style="margin-top:.2rem">Voraussichtlicher Abschluss: Dezember 2027<br>Module: Kollaborative Robotersysteme, Künstliche Neuronale Netze, Mikrocontroller, Bildverarbeitung, Advanced Control Theory</div>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-briefcase"></i> Praktische Erfahrung</h2>
<div class="pc-card cv-card">
  <div class="cv-head"><div><div class="cv-what"><a href="{{ '/de/projects/ecovolt-telemetry/#my-contribution' | relative_url }}">Teamkapitänin, Leiterin Elektronik &amp; Mentorin</a></div><div class="cv-where">Elektro-Rennteam EcoVolt CCM (Shell Eco-marathon) · Mexiko-Stadt, Mexiko</div></div><div class="cv-when">08/2023 – 08/2026</div></div>
  <p style="margin:.4rem 0 0;font-size:.93rem">Leitung und Betreuung eines interdisziplinären Teams mit über 30 Mitgliedern in Mechanik, Elektrik, Telemetrie und Datenanalyse für den Shell Eco-marathon Americas, Brazil und United States 2025–2026.</p>
  <ul><li>Telemetrie-Platinen in Altium Designer entwickelt (Schaltplan, Layout, Stückliste) — die Platine Brazil 2025, Hauptbeitrag zu US 2026 und Mitentwicklung von Brazil 2026 — und am Fahrzeug in Betrieb genommen und debuggt</li><li>Den eigenen Motorcontroller über CAN (inkl. Transceiver-Schaltung) an das Telemetriesystem angebunden und ESP32-Firmware in C++ mit SPI-, I2C-, UART- und SD-Treibern geschrieben, die Strom, Spannung und GPS-Position in Echtzeit aufzeichnet</li><li>Einen bidirektionalen Shunt-Stromsensor mit INA240 vom selbst geätzten Prototyp zur gefertigten Platine entwickelt, mit Oszilloskop und Multimeter verifiziert</li><li>Messungen am BLDC-Antrieb durchgeführt und an den Übertragungsfunktionen seiner Strom- und Drehzahlregelkreise in MATLAB/Simulink mitgearbeitet</li><li>Transistoren sowie Z-, Schottky- und Gleichrichterdioden im Labor charakterisiert, um die Bauteile eines Superkondensator-Energiespeichers auszuwählen</li><li>Im Team einen HiL-Prüfstand in Python aufgebaut (realer Fahrmotor und Fahrsimulator), der mit Messdaten zeigt, dass konstantes Gasgeben effizienter ist als Pulse-and-Glide</li><li>Cockpit-Layout und Sitzposition mit einer RULA-Ergonomieanalyse validiert (virtuelles Menschmodell in Tecnomatix Process Simulate), als Beitrag zum Vehicle Design Award 2026</li><li>Ein QR-Inventarsystem für Werkzeug und Schutzausrüstung vorgeschlagen und die erste Version in Python/OpenCV programmiert (QR-Erzeugung, automatische Erkennung, Scan-Protokoll), um Material bei Wettbewerben zu verfolgen</li></ul>
  <a class="pc-btn" href="{{ '/projects/ecovolt-telemetry/#my-contribution' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Zum Projekt</a>
</div>
<div class="pc-card cv-card">
  <div class="cv-head"><div><div class="cv-what"><a href="{{ '/de/projects/mit-nano-fabrication/' | relative_url }}">Visiting Student — Intensivkurs Halbleiterfertigung</a></div><div class="cv-where">MIT.nano Lab, Massachusetts Institute of Technology · Cambridge, MA, USA</div></div><div class="cv-when">10/2025</div></div>
  <ul><li>Praktische Fertigung von Bauelementen (Halbleiter, Solarzellen, Mikrofluidik) mit Dünnschichtabscheidung (PECVD/PVD) und chemischem Ätzen</li><li>Fotolithografie- und Charakterisierungsprozesse in Reinräumen der Klassen 100/1K/10K unter strengen Sicherheitsprotokollen durchgeführt</li><li>Die gefertigten Bauelemente charakterisiert: IV-Kennlinie der Solarzelle, Kraft-Weg-Test des MEMS-Biegebalkens und Strömungstests des Mikrofluidikmischers</li></ul>
  <a class="pc-btn" href="{{ '/projects/mit-nano-fabrication/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Zum Projekt</a>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-diagram-project"></i> Projekte</h2>
<div class="cv-proj">
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/de/projects/orza-digital-twin/' | relative_url }}">Digitaler Zwilling einer flexiblen CNC-Fertigungszelle</a></div>
    <div class="cv-when">02/2026 – 06/2026 · Team aus 3 Personen, eine Station pro Mitglied · virtuelle Inbetriebnahme ohne physische Hardware</div>
    <ul><li>Meine Station vollständig in der Simulation in Betrieb genommen: digitaler Zwilling in Process Simulate (3 UR5-Cobots, AGV, Förderbänder, CNC-Fräse, Kamera), gesteuert von einer virtuellen S7-1500 (PLCSIM Advanced)</li><li>Die Kontaktplan-Logik in TIA Portal (Schrittkette, Verriegelungen, Handbetrieb, Qualitätsweiche) und die WinCC-HMI programmiert</li><li>Das anlagenweite SCADA-Bild (OEE, Zykluszeit, Ausschussquote), einen Modbus-TCP-Sensor in C# und eine S7-GET/PUT-Verbindung mit Alarm bei Verbindungsverlust erstellt</li></ul>
    <a class="pc-btn" href="{{ '/projects/orza-digital-twin/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Zum Projekt</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/de/projects/scara-robot/' | relative_url }}">Kamerageführter SCARA-Roboter für Pick-and-Place (4 DoF)</a></div>
    <div class="cv-when">02/2026 – 06/2026 · Team aus 4 Personen · Firmware, Elektronik und Integration der Bildverarbeitung</div>
    <ul><li>Die Bildverarbeitungspipeline aufgebaut: Form-/Farbklassifikation mit YOLOv11n (mAP@0,5 = 0,72) und ArUco-Homografie von Pixeln in Millimeter; die Greifkoordinaten gehen per MQTT an die ESP32-Firmware (C++, ESP-IDF, FreeRTOS)</li><li>Die Steuerplatine in Altium Designer entworfen (ESP32, Schrittmotor-/DC-Treiber, Encoder, Spannungsversorgung); Motoren und Treiber ausgewählt und die Referenzsensoren integriert (Endschalter, Magnetencoder AS5600)</li><li>Vorwärts-/Rückwärtskinematik und PID-Gelenkregelung in MATLAB/Simulink modelliert; in der Abschlussvorführung wurden <strong>5 von 6 Teilen</strong> korrekt abgelegt, bei ~14 s pro Zyklus</li></ul>
    <a class="pc-btn" href="{{ '/projects/scara-robot/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Zum Projekt</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/de/projects/endress-viscosity/' | relative_url }}">Automatisiertes Viskositätsmesssystem</a></div>
    <div class="cv-when">08/2025 – 12/2025 · Team aus 4 Personen · verantwortlich für Platinen und Embedded</div>
    <ul><li>Alle drei Platinen in Altium Designer entworfen: ESP32-Master und -Slave (Leiterbahnbreiten nach IPC-2221, gefertigt von JLCPCB) und die OPV-Messplatine</li><li>Eine zweistufige OPV-Signalkette mitentwickelt (1-Ω-Shunt, ~400-fache Verstärkung), die ein Stromfenster von 6 mA auf den ADC-Bereich des ESP32 abbildet und <strong>252 cP von 1676 cP trennt</strong>; in Multisim und an der Hardware verifiziert</li><li>Die ESP32-Firmware mitgeschrieben (Referenz- und Messroutinen, Filterung, I²C-Farbsensor, Bluetooth zu einer LabVIEW-HMI, UART zwischen den Platinen) und die OpenPLC-Kontaktplanlogik der Sortierbänder mitprogrammiert</li></ul>
    <a class="pc-btn" href="{{ '/projects/endress-viscosity/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Zum Projekt</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/de/projects/agv-platform/' | relative_url }}">Scherenhubtisch &amp; AGV</a></div>
    <div class="cv-when">02/2025 – 06/2025 · Team aus 5 Personen · Konstruktion und Wägezellen-Elektronik</div>
    <ul><li>Die vollständige SolidWorks-Baugruppe erstellt; Bewegungsstudien in NX und statische Studien in SolidWorks durchgeführt (max. Durchbiegung des Arms 0,28 mm); die Kippkurvenscheibe konstruiert und 3D-gedruckt (≥30° Kippwinkel bei ≥25° gefordert)</li><li>Eine Platine zur Signalaufbereitung der Wägezelle ohne HX711 entworfen (Wheatstone-Brücke, OPV-Stufen, RC-Tiefpass), die 0–5 kg linear auf 0–3 V für den ESP32-ADC abbildet</li><li>Motorkupplung und Pleuel aus Aluminium gedreht und gefräst; Rahmen mit <strong>über 100 kg</strong> belastet, in der Abschlussvorführung 7 kg getragen (5 kg gefordert)</li></ul>
    <a class="pc-btn" href="{{ '/projects/agv-platform/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Zum Projekt</a>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-screwdriver-wrench"></i> Kenntnisse</h2>
<div class="cv-skills">
  <div><strong><i class="fa-solid fa-microchip" style="color:var(--global-theme-color)"></i> Embedded Systems &amp; Firmware</strong><span class="pc-tag">ESP32</span><span class="pc-tag">FreeRTOS</span><span class="pc-tag">PlatformIO</span><span class="pc-tag">CAN/SPI/I2C/UART</span><span class="pc-tag">MQTT</span><span class="pc-tag">Hardware-in-the-Loop-Simulation (HiL)</span></div>
  <div><strong><i class="fa-solid fa-bolt" style="color:var(--global-theme-color)"></i> Platinenentwurf &amp; Messtechnik</strong><span class="pc-tag">Altium Designer</span><span class="pc-tag">Schaltplan- &amp; Layoutentwurf</span><span class="pc-tag">Signalaufbereitung</span><span class="pc-tag">Instrumentenverstärker</span><span class="pc-tag">Analog-/Digitalelektronik</span><span class="pc-tag">NI Multisim</span></div>
  <div><strong><i class="fa-solid fa-sliders" style="color:var(--global-theme-color)"></i> Regelungstechnik &amp; modellbasierte Entwicklung</strong><span class="pc-tag">PID- &amp; nichtlineare Regelung</span><span class="pc-tag">MATLAB</span><span class="pc-tag">Simulink</span><span class="pc-tag">Simscape</span><span class="pc-tag">Modellbasierte Entwicklung</span></div>
  <div><strong><i class="fa-solid fa-industry" style="color:var(--global-theme-color)"></i> Industrielle Automatisierung &amp; SPS</strong><span class="pc-tag">Siemens TIA Portal (S7-1500, LOGO!)</span><span class="pc-tag">Allen-Bradley ControlLogix 5570</span><span class="pc-tag">Rockwell Automation Studio 5000</span><span class="pc-tag">WinCC</span><span class="pc-tag">PLCSIM Advanced</span><span class="pc-tag">Programmierung in Kontaktplan</span></div>
  <div><strong><i class="fa-solid fa-robot" style="color:var(--global-theme-color)"></i> Digitale Zwillinge, Robotik &amp; industrielle Bildverarbeitung</strong><span class="pc-tag">Tecnomatix Process Simulate</span><span class="pc-tag">Universal Robots (PolyScope)</span><span class="pc-tag">Cognex In-Sight</span><span class="pc-tag">OpenCV</span><span class="pc-tag">YOLOv11n</span></div>
  <div><strong><i class="fa-solid fa-cube" style="color:var(--global-theme-color)"></i> Konstruktion (CAD/CAM)</strong><span class="pc-tag">SolidWorks CAD/CAM</span><span class="pc-tag">NX CAD</span><span class="pc-tag">Fusion CAM</span><span class="pc-tag">Zerspanung (Drehen, Fräsen)</span><span class="pc-tag">MIG-Schweißen</span><span class="pc-tag">3D-Druck</span></div>
  <div><strong><i class="fa-solid fa-file-lines" style="color:var(--global-theme-color)"></i> Methoden &amp; Dokumentation</strong><span class="pc-tag">Design Thinking</span><span class="pc-tag">Technische Berichte</span><span class="pc-tag">Testdokumentation</span><span class="pc-tag">LaTeX</span><span class="pc-tag">MS Office</span></div>
  <div><strong><i class="fa-solid fa-code" style="color:var(--global-theme-color)"></i> Programmierung</strong><span class="pc-tag">C</span><span class="pc-tag">C++</span><span class="pc-tag">Python</span><span class="pc-tag">SQL</span></div>
</div>
<div class="cv-two">
  <div><h2 class="pc-h cv-h"><i class="fa-solid fa-trophy"></i> <a href="{{ '/de/achievements/' | relative_url }}#awards">Auszeichnungen <span class="cv-h-arrow">→</span></a></h2><ul class="cv-mini"><li>Vehicle Design Award – Kategorie Prototype <span>· Shell Eco-marathon (United States 2026)</span></li><li>Data &amp; Telemetry Award — 1. Platz <span>· Shell Eco-marathon (Americas 2025)</span></li><li>Data &amp; Telemetry Award — 2. Platz <span>· Shell Eco-marathon (United States 2026)</span></li><li>Honorable Mention <span>· Altair Global Student Contest 2025</span></li></ul><p style="margin-top:.6rem"><a href="{{ '/de/achievements/' | relative_url }}">Alle Auszeichnungen →</a></p></div>
  <div><h2 class="pc-h cv-h"><i class="fa-solid fa-certificate"></i> <a href="{{ '/de/achievements/' | relative_url }}#certifications">Zertifikate <span class="cv-h-arrow">→</span></a></h2><ul class="cv-mini"><li>Process Simulate Standalone Associate <span>· Siemens</span></li><li>Educational Robotics Training – Core <span>· Universal Robots</span></li><li>Certified SolidWorks Associate (CSWA) <span>· Dassault Systèmes</span></li><li>MATLAB, Simulink and Simscape Onramp <span>· MathWorks</span></li><li>Educational PCB Basic Design <span>· Altium Designer</span></li></ul>
</div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-language"></i> Sprachen</h2>
<div class="cv-lang"><div class="pc-card"><strong>Spanisch</strong><span>Muttersprache</span><div class="cv-bar"><i style="width:100%"></i></div></div><div class="pc-card"><strong>Englisch</strong><span>Sehr gut (C1)</span><div class="cv-bar"><i style="width:85%"></i></div></div><div class="pc-card"><strong>Französisch</strong><span>Gut (B1)</span><div class="cv-bar"><i style="width:55%"></i></div></div><div class="pc-card"><strong>Deutsch</strong><span>Gut (B1)</span><div class="cv-bar"><i style="width:55%"></i></div></div></div>
<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/repositories/' | relative_url }}">← Zurück: Repositorien</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/contact/' | relative_url }}">Weiter: Kontakt →</a>
</div>
