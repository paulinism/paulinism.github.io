---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 5
description: Curriculum Vitae of Paulina L. Ruíz Servín.
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
    <p class="cv-name">Curriculum Vitae</p>
    <p class="cv-label">Electrical &amp; Mechatronics Engineering Student — Embedded Systems, Electronics, Control &amp; Automation</p>
    <p class="cv-summary">Mechatronics engineering student completing a DHIK double degree between Tecnológico de Monterrey (Mexico) and Hochschule Zittau/Görlitz (Germany), specializing in electrical engineering. Experience spans embedded systems (PCB design, ESP32/FreeRTOS firmware, CAN/SPI/I2C/UART), model-based control (MATLAB/Simulink/Simscape, PID), and industrial automation (Siemens TIA Portal, Allen-Bradley, digital twins with Process Simulate and Universal Robots cobots), plus laboratory testing and characterization of electronic hardware. Available for internships and Bachelor thesis projects in Germany from March 2027 (full-time, up to 6 months).</p>
  </div>
  <div class="cv-dl">
    <p><strong>Full CV (PDF)</strong><br><span style="opacity:.8">Available from February/March 2027</span></p>
    <a class="pc-btn primary" href="{{ '/assets/pdf/CV_Paulina_EN.pdf' | relative_url }}?v=20261026" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> CV (English)</a>
    <a class="pc-btn" href="{{ '/assets/pdf/CV_Paulina_DE.pdf' | relative_url }}?v=20261026" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> Lebenslauf (Deutsch)</a>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-graduation-cap"></i> Education</h2>
<div class="cv-tl">
  <div class="cv-tl-item">
    <div class="cv-when">Aug 2023 – Dec 2027</div>
    <div class="cv-what">B.Sc. Mechatronics Engineering</div>
    <div class="cv-where">Tecnológico de Monterrey · Mexico City, Mexico</div>
    <div class="cv-where" style="margin-top:.2rem">Expected graduation: December 2027 · GPA: 92/100 (≈ 1.8 on the German scale) · Merit scholarship (30%)</div>
  </div>
  <div class="cv-tl-item">
    <div class="cv-when">Sep 2026 – Dec 2027</div>
    <div class="cv-what">B.Eng. Electrical Engineering (DHIK Double Degree)</div>
    <div class="cv-where">Hochschule Zittau/Görlitz · Zittau, Germany</div>
    <div class="cv-where" style="margin-top:.2rem">Expected graduation: December 2027<br>Courses: Collaborative Robot Systems, Artificial Neural Networks, Microcontrollers, Image processing, Advanced Control Theory</div>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-briefcase"></i> Experience</h2>
<div class="pc-card cv-card">
  <div class="cv-head"><div><div class="cv-what"><a href="{{ '/projects/ecovolt-telemetry/#my-contribution' | relative_url }}">Team Captain, Electronics Lead &amp; Mentor</a></div><div class="cv-where">EcoVolt CCM EV Racing Team (Shell Eco-marathon) · Mexico City, Mexico</div></div><div class="cv-when">Aug 2023 – Aug 2026</div></div>
  <p style="margin:.4rem 0 0;font-size:.93rem">Led and mentored a 30+ person multidisciplinary team across mechanical, electrical, telemetry, and data-analysis systems for Shell Eco-marathon Americas, Brazil, and United States 2025–2026.</p>
  <ul><li>Designed the telemetry PCBs in Altium Designer (schematic, layout, BOM) — the Brazil 2025 board, main contributor to US 2026 and co-designer of Brazil 2026 — and brought them up and debugged them on the vehicle</li><li>Linked the in-house motor controller to the telemetry system by implementing the CAN communication (incl. transceiver circuit) and writing ESP32 firmware in C++ with SPI, I2C, UART and SD drivers, logging current, voltage and GPS position in real time</li><li>Developed a bidirectional INA240 shunt current sensor from a self-etched prototype to a manufactured board, verified with oscilloscope and multimeter</li><li>Performed BLDC drive measurements and contributed to the transfer functions of its current and speed loops in MATLAB/Simulink</li><li>Characterized transistors and Zener, Schottky and rectifier diodes in the lab to select the components of a supercapacitor energy backup system</li><li>Built, with the team, a Python HiL test bench (real traction motor and driving simulator) showing with measured data that constant throttle is more efficient than pulse-and-glide</li><li>Validated cockpit layout and seating position with an ergonomic RULA analysis (virtual human model in Tecnomatix Process Simulate), contributing to the 2026 Vehicle Design Award</li><li>Proposed a QR inventory system for tools and PPE and programmed its first Python/OpenCV version (generated QR codes, automatic detection, scan logging) to track material at competitions</li></ul>
  <a class="pc-btn" href="{{ '/projects/ecovolt-telemetry/#my-contribution' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> View project</a>
</div>
<div class="pc-card cv-card">
  <div class="cv-head"><div><div class="cv-what"><a href="{{ '/projects/mit-nano-fabrication/' | relative_url }}">Visiting Student — Semiconductor Fabrication Intensive</a></div><div class="cv-where">MIT.nano Lab, Massachusetts Institute of Technology · Cambridge, MA, USA</div></div><div class="cv-when">Oct 2025</div></div>
  <ul><li>Hands-on device fabrication (semiconductors, solar cells, microfluidics) via thin-film deposition (PECVD/PVD) and chemical etching</li><li>Ran photolithography and characterization processes in Class 100/1K/10K cleanrooms under strict safety protocols</li><li>Characterized the fabricated devices: IV curve of the solar cell, force–displacement test of the MEMS cantilever and flow tests of the microfluidic mixer</li></ul>
  <a class="pc-btn" href="{{ '/projects/mit-nano-fabrication/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> View project</a>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-diagram-project"></i> Projects</h2>
<div class="cv-proj">
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/projects/orza-digital-twin/' | relative_url }}">Digital Twin of a Flexible CNC Manufacturing Cell</a></div>
    <div class="cv-when">Feb 2026 – Jun 2026 · Team of 3, one station per member · virtual commissioning with no physical hardware</div>
    <ul><li>Commissioned my station fully in simulation: digital twin in Process Simulate (3 UR5 cobots, AGV, conveyors, CNC mill, camera) driven by a virtual S7-1500 (PLCSIM Advanced)</li><li>Programmed the TIA Portal ladder logic (step sequence, interlocks, manual mode, quality routing) and the WinCC HMI</li><li>Built the plant-wide SCADA screen (OEE, cycle time, scrap rate), a C# Modbus TCP sensor and an S7 GET/PUT link with link-loss alarm</li></ul>
    <a class="pc-btn" href="{{ '/projects/orza-digital-twin/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> View project</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/projects/scara-robot/' | relative_url }}">Vision-Guided SCARA Pick-and-Place Robot (4 DoF)</a></div>
    <div class="cv-when">Feb 2026 – Jun 2026 · Team of 4 · firmware, electronics and computer-vision integration</div>
    <ul><li>Built the vision pipeline: YOLOv11n shape/color classification (mAP@0.5 = 0.72) and ArUco-based pixel-to-mm homography, publishing pick coordinates over MQTT to the ESP32 firmware (C++, ESP-IDF, FreeRTOS)</li><li>Designed the control board in Altium Designer (ESP32, stepper/DC drivers, encoders, power distribution); selected motors and drivers and integrated the homing sensors (limit switch, AS5600 magnetic encoder)</li><li>Modeled forward/inverse kinematics and PID joint control in MATLAB/Simulink; final demo placed <strong>5 of 6 parts</strong> correctly at ~14 s per cycle</li></ul>
    <a class="pc-btn" href="{{ '/projects/scara-robot/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> View project</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/projects/endress-viscosity/' | relative_url }}">Automated Viscosity Measurement System</a></div>
    <div class="cv-when">Aug 2025 – Dec 2025 · Team of 4 · PCB and embedded lead</div>
    <ul><li>Designed all three boards in Altium Designer: ESP32 master and slave (IPC-2221 trace sizing, fabricated by JLCPCB) and the op-amp measurement board</li><li>Co-developed a two-stage op-amp signal chain (1 Ω shunt, ~400× gain) that maps a 6 mA current window onto the ESP32 ADC range, <strong>separating 252 cP from 1676 cP</strong>; verified in Multisim and on hardware</li><li>Co-wrote the ESP32 firmware (homing and measurement routines, filtering, I²C color sensor, Bluetooth to a LabVIEW HMI, inter-board UART) and co-programmed the OpenPLC ladder logic for the sorting conveyors</li></ul>
    <a class="pc-btn" href="{{ '/projects/endress-viscosity/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> View project</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/projects/agv-platform/' | relative_url }}">Scissor Lift &amp; AGV</a></div>
    <div class="cv-when">Feb 2025 – Jun 2025 · Team of 5 · mechanical design and load-cell electronics</div>
    <ul><li>Built the full SolidWorks assembly; ran NX motion and SolidWorks static studies (max. arm deflection 0.28 mm); designed and 3D-printed the tilting cam (≥30° dump angle vs. ≥25° required)</li><li>Designed a load-cell conditioning PCB (Wheatstone bridge, op-amp stages, RC low-pass) without an HX711, giving a linear 0–3 V output over 0–5 kg into the ESP32 ADC</li><li>Turned and milled the aluminum motor coupler and connecting rod; frame load-tested <strong>above 100 kg</strong>, carried 7 kg at the final demo (5 kg required)</li></ul>
    <a class="pc-btn" href="{{ '/projects/agv-platform/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> View project</a>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-screwdriver-wrench"></i> Skills</h2>
<div class="cv-skills">
  <div><strong><i class="fa-solid fa-microchip" style="color:var(--global-theme-color)"></i> Embedded Systems &amp; Firmware</strong><span class="pc-tag">ESP32</span><span class="pc-tag">FreeRTOS</span><span class="pc-tag">PlatformIO</span><span class="pc-tag">CAN/SPI/I2C/UART</span><span class="pc-tag">MQTT</span><span class="pc-tag">Hardware-in-the-Loop (HiL) simulation</span></div>
  <div><strong><i class="fa-solid fa-bolt" style="color:var(--global-theme-color)"></i> PCB Design &amp; Instrumentation</strong><span class="pc-tag">Altium Designer</span><span class="pc-tag">Schematic &amp; layout design</span><span class="pc-tag">Signal conditioning</span><span class="pc-tag">Instrumentation amplifiers</span><span class="pc-tag">Analog/digital electronics</span><span class="pc-tag">NI Multisim</span></div>
  <div><strong><i class="fa-solid fa-sliders" style="color:var(--global-theme-color)"></i> Control Systems &amp; Model-Based Design</strong><span class="pc-tag">PID &amp; nonlinear control</span><span class="pc-tag">MATLAB</span><span class="pc-tag">Simulink</span><span class="pc-tag">Simscape</span><span class="pc-tag">Model-based design</span></div>
  <div><strong><i class="fa-solid fa-industry" style="color:var(--global-theme-color)"></i> Industrial Automation &amp; PLC</strong><span class="pc-tag">Siemens TIA Portal (S7-1500, LOGO!)</span><span class="pc-tag">Allen-Bradley ControlLogix 5570</span><span class="pc-tag">Rockwell Automation Studio 5000</span><span class="pc-tag">WinCC</span><span class="pc-tag">PLCSIM Advanced</span><span class="pc-tag">Ladder logic programming</span></div>
  <div><strong><i class="fa-solid fa-robot" style="color:var(--global-theme-color)"></i> Digital Twins, Robotics &amp; Machine Vision</strong><span class="pc-tag">Tecnomatix Process Simulate</span><span class="pc-tag">Universal Robots (PolyScope)</span><span class="pc-tag">Cognex In-Sight</span><span class="pc-tag">OpenCV</span><span class="pc-tag">YOLOv11n</span></div>
  <div><strong><i class="fa-solid fa-cube" style="color:var(--global-theme-color)"></i> Mechanical Design (CAD/CAM)</strong><span class="pc-tag">SolidWorks CAD/CAM</span><span class="pc-tag">NX CAD</span><span class="pc-tag">Fusion CAM</span><span class="pc-tag">Machining (turning, milling)</span><span class="pc-tag">MIG welding</span><span class="pc-tag">3D printing</span></div>
  <div><strong><i class="fa-solid fa-file-lines" style="color:var(--global-theme-color)"></i> Methods &amp; Documentation</strong><span class="pc-tag">Design thinking</span><span class="pc-tag">Technical reporting</span><span class="pc-tag">Test documentation</span><span class="pc-tag">LaTeX</span><span class="pc-tag">MS Office</span></div>
  <div><strong><i class="fa-solid fa-code" style="color:var(--global-theme-color)"></i> Programming</strong><span class="pc-tag">C</span><span class="pc-tag">C++</span><span class="pc-tag">Python</span><span class="pc-tag">SQL</span></div>
</div>
<div class="cv-two">
  <div><h2 class="pc-h cv-h"><i class="fa-solid fa-trophy"></i> <a href="{{ '/achievements/' | relative_url }}#awards">Awards <span class="cv-h-arrow">→</span></a></h2><ul class="cv-mini"><li>Vehicle Design Award – Prototype category <span>· Shell Eco-marathon (United States 2026)</span></li><li>Data &amp; Telemetry Award — 1st place <span>· Shell Eco-marathon (Americas 2025)</span></li><li>Data &amp; Telemetry Award — 2nd place <span>· Shell Eco-marathon (United States 2026)</span></li><li>Honorable Mention <span>· Altair Global Student Contest 2025</span></li></ul><p style="margin-top:.6rem"><a href="{{ '/achievements/' | relative_url }}">All achievements →</a></p></div>
  <div><h2 class="pc-h cv-h"><i class="fa-solid fa-certificate"></i> <a href="{{ '/achievements/' | relative_url }}#certifications">Certifications <span class="cv-h-arrow">→</span></a></h2><ul class="cv-mini"><li>Process Simulate Standalone Associate <span>· Siemens</span></li><li>Educational Robotics Training – Core <span>· Universal Robots</span></li><li>Certified SolidWorks Associate (CSWA) <span>· Dassault Systèmes</span></li><li>MATLAB, Simulink and Simscape Onramp <span>· MathWorks</span></li><li>Educational PCB Basic Design <span>· Altium Designer</span></li></ul>
</div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-language"></i> Languages</h2>
<div class="cv-lang"><div class="pc-card"><strong>Spanish</strong><span>Native</span><div class="cv-bar"><i style="width:100%"></i></div></div><div class="pc-card"><strong>English</strong><span>Fluent (C1)</span><div class="cv-bar"><i style="width:85%"></i></div></div><div class="pc-card"><strong>French</strong><span>Intermediate (B1)</span><div class="cv-bar"><i style="width:55%"></i></div></div><div class="pc-card"><strong>German</strong><span>Intermediate (B1)</span><div class="cv-bar"><i style="width:55%"></i></div></div></div>
<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/repositories/' | relative_url }}">← Previous: Repositories</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/contact/' | relative_url }}">Next: Contact →</a>
</div>
