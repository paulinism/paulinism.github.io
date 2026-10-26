---
layout: page
title: Digital Twin of a Flexible CNC Manufacturing Cell
description: "Industry challenge with ORZA Tech — virtual CNC cell commissioned 100 % in software (S7-1500 PLC programming in TIA Portal, UR5 VRC, CAM and G-code, Cognex vision, SCADA/KPIs)"
img: assets/img/orza.png
importance: 2
category: Automation
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .oz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .oz-grid.oz-row3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .oz-grid.oz-row2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 767px) { .oz-grid.oz-row3, .oz-grid.oz-row2 { grid-template-columns: minmax(0, 1fr); } }
  .oz-hmi .oz-fig img { aspect-ratio: 1000 / 570; object-fit: cover; }
  .oz-grid.single { grid-template-columns: minmax(0, 900px); justify-content: center; }
  .oz-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .oz-fig img, .oz-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .oz-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .oz-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .oz-table th, .oz-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .oz-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**A fully virtual CNC milling cell commissioned with zero physical hardware.** A virtual S7-1500 runs the ladder program, Process Simulate drives the 3D cell, a Virtual Robot Controller runs the UR5 pick-and-place program, a Cognex inspector classifies each part (pass / rework / scrap), a WinCC HMI gives the operator automatic and manual control, and a SCADA dashboard tracks OEE and KPIs in real time. Behind the machining step is a six-tool milling program for an aluminium piston body that I analysed down to chip load and cycle time (≈ 12.8 min), and the same course added a Cognex inspection exam and a lathe CAM exercise that I carried from stock definition to G-code.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-general-dt.mp4' | relative_url }}" poster="{{ 'assets/img/orza-general-dt-poster.jpg' | relative_url }}" controls preload="metadata" playsinline></video><figcaption>Walkthrough with narration: scrapping a part, the CNC cell working in Process Simulate, and an explanation of how the HMI and the PLC logic run together with the simulation.</figcaption></figure>
</div>

<!-- DESIGN-AT-A-GLANCE:START -->
<style>
  .dag-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.9rem; margin: 1rem 0 1.25rem; }
  .dag-fig { margin: 0; border: 1px solid rgba(128,128,128,.25); border-radius: 10px; overflow: hidden; }
  .dag-fig img { display: block; width: 100%; height: 190px; object-fit: contain; background: rgba(128,128,128,.06); }
  .dag-fig figcaption { padding: .4rem .6rem; font-size: .78rem; line-height: 1.3; opacity: .85; border-top: 1px solid rgba(128,128,128,.2); }
  .dag-table { width: 100%; border-collapse: collapse; font-size: .9rem; margin: .5rem 0 1rem; }
  .dag-table th, .dag-table td { border: 1px solid rgba(128,128,128,.3); padding: .45rem .6rem; vertical-align: top; text-align: left; }
  .dag-table th { background: rgba(128,128,128,.08); }
  details.writeup { margin: 1.5rem 0; border: 1px solid rgba(128,128,128,.3); border-radius: 10px; padding: .6rem 1rem; }
  details.writeup > summary { cursor: pointer; font-weight: 700; font-size: 1.05rem; margin-bottom: 1.25rem; }
  details.writeup > summary + * { margin-top: 0.5rem; }
</style>

## Design at a glance

<div class="dag-grid">
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-layout-iso.jpg' | relative_url }}" alt="Cell layout in Process Simulate" loading="lazy"><figcaption>Cell layout in Process Simulate</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="Part P2 in SOLIDWORKS CAM" loading="lazy"><figcaption>Part P2 in SOLIDWORKS CAM</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="My CNC milling station" loading="lazy"><figcaption>My CNC milling station</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA: OEE, cycle time, scrap" loading="lazy"><figcaption>SCADA: OEE, cycle time, scrap</figcaption></figure>
</div>

**Design decisions, from first principles**

<table class="dag-table">
  <tr><th>Decision</th><th>Engineering reasoning</th><th>Result</th></tr>
  <tr><td>Interlock every move against twin sensors, no timers</td><td>The PLC program is what goes to the real machine unchanged, so it must react to the plant, not to assumed times</td><td>Full cycles incl. rework and scrap branches</td></tr>
  <tr><td>Check the chip load by hand</td><td>f<sub>z</sub> = 1645.9 / (12 000 &times; 2) &asymp; 0.069 mm/tooth, inside 0.05&ndash;0.13 mm for aluminium</td><td>Cycle &asymp; 12.8 min; spindle speed flagged as too high for the lab machine</td></tr>
  <tr><td>Spot-drill before the small holes</td><td>A short, stiff spot drill keeps the thin &Oslash;1.75 mm drill from wandering</td><td>Correct hole positions in simulation</td></tr>
  <tr><td>Validate the Cognex inspection against calipers</td><td>Reflective foil creates bright edges that the outline tool reads as part edges</td><td>Found a 3.7&ndash;3.9 % oversize and documented the fix</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Full technical write-up</summary>

**Challenge**

Design, implement and validate a virtual digital twin of a flexible manufacturing cell — supplier, three CNC stations, intralogistics, quality inspection, assembly and warehouse — with simulated industrial communication, two operating modes, traceability and KPIs. Everything is virtual: no physical PLCs, robots or AGVs. Automation of Manufacturing Systems, Tec de Monterrey, challenge proposed by ORZA Tech; team of three, one CNC station per member.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-workflow.png' | relative_url }}" alt="Manufacturing cell workflow"><figcaption>Material flow: supplier, transport, CNC machining, quality inspection (pass, rework or scrap), assembly and warehouse.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-network.jpg' | relative_url }}" alt="Network diagram of the three workstations"><figcaption>Real network: three workstations on one Ethernet switch, each running Process Simulate, a VMware Tecnomatix server, a Modbus sensor and a PLCSIM Advanced instance.</figcaption></figure>
</div>

**My contribution — CNC milling cell (Station 3)**

- **PLC program (core of the challenge):** the complete ladder program in TIA Portal for a virtual S7-1500 in PLCSIM Advanced: 35-step sequence, interlocks, safety stop, manual mode, quality routing, recipes, KPIs and logging
- **Digital twin:** my cell in Process Simulate (supplier rack with pneumatic actuator, AGV, two conveyors, three UR5 robots, CNC milling machine and inspection camera), with every actuator and sensor mapped to PLC I/O
- **Robot integration:** a UR5 in Virtual Robot Controller mode running its own PolyScope program, synchronised with the PLC through a digital handshake
- **HMI and SCADA:** the WinCC operator screens of the cell and the plant-wide KPI screen
- **Machining:** the SOLIDWORKS CAM model of part P2 and a block-by-block analysis of its G-code
- **Communication:** a C# Modbus TCP field sensor and the S7 GET/PUT link to the assembly station, with an alarm when the link fails
- **Layout concept:** proposed the ladder-type layout of the full system

The team built the full layout in Process Simulate and integrated the three PCs over one Ethernet switch.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-layout-top.jpg' | relative_url }}" alt="Top view of the cell layout"><figcaption>Top view of the line operation in Process Simulate: conveyors, AGV path, CNC cells and robots.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="CNC station with UR5 robots"><figcaption>CNC station: two UR5 robots load and unload the milling machine and present the part to the camera.</figcaption></figure>
</div>

**PLC program**

The cell runs as a chain of step flags (K1 … K35): supply, AGV transport, loading by a UR5, machining, unloading and inspection, routing and cycle close. A step advances only when the twin confirms the previous action really finished — a sensor, a door, the machine's done signal — never on a timer. In a virtual commissioning the PLC is the part that would go to the real machine unchanged, so any wrong assumption showed up as a stuck part, a collision or a cell that never finished.

- **Interlocks:** a function block turns raw sensor signals into named bits (part present, CNC ready, conveyor clear), so wiring and sequence stay decoupled
- **Safety:** one global stop contact sits in every step rung; any alarm puts the cell in Fault until it is reset from the HMI
- **Manual mode:** every step can be driven from the HMI, but only in manual mode, so manual and automatic commands cannot fight each other
- **Routing and recipes:** the inspection result (OK, rework, scrap) is locked by the PLC and decides the next conveyor; a FIFO recipe queue sets which stations a part type needs and the batch size
- **KPIs:** yield, scrap rate and Micro OEE computed in the PLC every cycle, with a 100-entry retentive log that survives a restart

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-menu.jpg' | relative_url }}" alt="HMI main menu"><figcaption>Main menu.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-monitor.jpg' | relative_url }}" alt="Station monitor screen"><figcaption>Station monitor: mode, current process, station progress and batch quantity.</figcaption></figure>
</div>
<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-supply.jpg' | relative_url }}" alt="Supplier and conveyor screen"><figcaption>Supplier and conveyor screen with manual commands.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-cnc-qi.jpg' | relative_url }}" alt="CNC and quality inspection screen"><figcaption>CNC and quality inspection: manual machining commands and the OK / rework / scrap result.</figcaption></figure>
</div>
<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-db22.png' | relative_url }}" alt="DATA_LOG data block"><figcaption>The retentive DATA_LOG block with counters, KPIs, alarm bits and the 100-entry log.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA counters and trends"><figcaption>Global SCADA screen at the end of a demonstration run: 11 parts, 11 OK, 0 scrap, with yield, scrap and Micro OEE trends.</figcaption></figure>
</div>

**CAM & G-code**

Part P2 is an aluminium piston body of 32 × 20 × 20 mm with a Ø16 bore, a pocket and two pairs of small holes, machined with six tools: spot drill and Ø16 peck drilling, a centre drill before the small holes so the thin drill does not wander, pocket roughing in eight Z levels, and seven contour passes with cutter compensation (G41), so tool wear is corrected with one offset value. I recalculated every surface speed (v<sub>c</sub> = π·D·n/1000) and the chip load, f<sub>z</sub> ≈ 0.069 mm/tooth, inside the 0.05–0.13 mm range for aluminium. The estimated cycle is 12.8 min, 72 % of it roughing; the weak point is the 12 000 rpm spindle speed, fine in simulation but above what the lab machine runs.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-drawing.png' | relative_url }}" alt="Technical drawing of part P2"><figcaption>Technical drawing of P2 (SOLIDWORKS, scale 2:1).</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="P2 inside its billet in SOLIDWORKS CAM"><figcaption>P2 inside the billet in SOLIDWORKS CAM.</figcaption></figure>
</div>
<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cam.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cam-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>CAM toolpath simulation of P2 (2× speed).</figcaption></figure>
</div>

In a second exercise I programmed a turned AISI 304 shaft from stock to post-processed G-code (8 operations, 9.0 min) and found what I would fix before a real lathe: a missing spindle-speed clamp (G50) and a cut-off that takes 62 % of the cycle.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cam-turn-ops.jpg' | relative_url }}" alt="Operation tree in SOLIDWORKS CAM"><figcaption>Operation tree: facing, drilling, turning, groove and cut-off.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cam-turn-sim.jpg' | relative_url }}" alt="Toolpath simulation of the turned shaft"><figcaption>Toolpath simulation with the stock in the chuck.</figcaption></figure>
</div>

**Robot: from virtual to real**

The AGV-to-conveyor UR5 runs its own PolyScope program in URSim, Universal Robots' official emulator, so the program is real and portable instead of a simulation-only path. The PLC treats it as an external device and only exchanges seven agreed handshake signals (start, grip confirmed, release confirmed, pick in progress, place complete). Before trusting the virtual robot, I programmed the lab's physical UR5e — here a vacuum-gripper pick-and-place in a 2 × 2 pattern.

<div class="oz-grid">
  <figure class="oz-fig" style="max-width: 640px; margin: 0 auto"><img data-zoomable src="{{ 'assets/img/orza-polyscope.png' | relative_url }}" alt="PolyScope program for pick and place"><figcaption>PolyScope program in URSim: BeforeStart, the trigger loop, and the pick and place routines with their wait-for-confirmation steps.</figcaption></figure>
  <figure class="oz-fig" style="max-width: 420px; margin: 0 auto"><video src="{{ 'assets/img/ur5e-physical-pnp.mp4' | relative_url }}" poster="{{ 'assets/img/ur5e-physical-pnp-poster.jpg' | relative_url }}" autoplay muted loop playsinline style="max-height: 640px; object-fit: contain"></video><figcaption>Physical UR5e in the lab: vacuum-gripper pick-and-place programmed in PolyScope.</figcaption></figure>
</div>

**Communication**

S7 GET/PUT links my PLC to the assembly station on another PC, and a C# Modbus TCP sensor exchanges holding registers with the PLC. When the link is cut, the GET block reports the error, the HMI raises an alarm and the station stops passing stale data downstream.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-s7-get.png' | relative_url }}" alt="S7 GET block"><figcaption>S7 GET block reading a byte from the partner PLC, triggered at 10 Hz.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-modbus-app.png' | relative_url }}" alt="C# Modbus sensor application"><figcaption>C# Modbus TCP sensor simulator exchanging the supplier stock value with the PLC.</figcaption></figure>
</div>

**Quality inspection (Cognex In-Sight)**

A complete inspection built on my own on a reflective anti-static bag: 20 images with deliberate errors, grid calibration (0.33 px average error over 823 points), a PatMax reference frame that follows the part as it moves, circle and caliper measurements in millimetres, QR, barcode and OCR reading, and a spreadsheet that passes a part only if every feature passes. Seals and label matched a vernier caliper within ±3 %; the package outline came out 3.7–3.9 % too large, because the foil's highlights were read as edges.

<div class="oz-grid oz-row3">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-golden.jpg' | relative_url }}" alt="Golden reference image of the package"><figcaption>Golden image: two colour seals, QR code, barcode, "QTY" text and the label.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-faulty.jpg' | relative_url }}" alt="Deliberately faulty sample"><figcaption>Deliberately faulty sample: one seal only partly present and a QR code that does not match the part inside.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-setup-vertical.jpg' | relative_url }}" alt="Image acquisition setup"><figcaption>Acquisition setup: phone fixed above a matte black surface, ceiling light only, calibration checkerboard at the side.</figcaption></figure>
</div>
<style>
  .oz-grid.oz-bw .oz-fig img { aspect-ratio: 4 / 3; object-fit: contain; background: #555; }
</style>

<div class="oz-grid oz-row3 oz-bw">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-pattern.jpg' | relative_url }}" alt="PatMax reference frame on the package"><figcaption>PatMax reference frame that anchors every inspection tool.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-circle.jpg' | relative_url }}" alt="Circle tool on a seal"><figcaption>FindCircle measuring the radius of a colour seal.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-reflection.jpg' | relative_url }}" alt="Caliper failure due to reflection"><figcaption>Failure case: a specular highlight on the foil is taken as an edge by the caliper.</figcaption></figure>
</div>
<div class="oz-grid oz-row2">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-calibration.jpg' | relative_url }}" alt="Calibration result"><figcaption>Grid calibration: 0.33 px average error over 823 points.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-caliper.jpg' | relative_url }}" alt="Vernier caliper measurement of a seal"><figcaption>Physical validation: measuring a seal with the vernier caliper.</figcaption></figure>
</div>
<div class="oz-grid single">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-spreadsheet.jpg' | relative_url }}" alt="Cognex In-Sight spreadsheet"><figcaption>In-Sight spreadsheet: raw tool outputs on the left, and the quality-control table with nominal, limits and pass flags on the right.</figcaption></figure>
</div>

**Tools & technologies**

- **TIA Portal, S7-1500, PLCSIM Advanced, WinCC:** PLC program, HMI and SCADA
- **Tecnomatix Process Simulate:** digital twin and virtual commissioning
- **URSim / PolyScope, physical UR5e:** robot programming
- **SOLIDWORKS CAM:** milling and turning toolpaths, G-code analysis
- **C# (Modbus TCP), S7 GET/PUT:** communication between stations and sensors
- **Cognex In-Sight:** calibrated vision inspection

**Results & lessons**

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-full-demo.mp4' | relative_url }}" poster="{{ 'assets/img/orza-full-demo-poster.jpg' | relative_url }}" controls preload="none" playsinline></video><figcaption>Full demonstration of the CNC cell: Process Simulate, PLC and HMI running together.</figcaption></figure>
</div>

- **Closed loop:** every PLC output drives the 3D scene and every virtual sensor feeds back; the cell completes full automatic cycles, including the rework and scrap branches
- **Communication:** Modbus TCP verified in both directions; a cut link raises an alarm and stops stale data
- **Integration:** each S7 link worked alone, but the full three-station interconnection was not completed because of IP conflicts, duplicate tags and stale PLCSIM connections
- **Integration is its own engineering task:** one IP plan and tag namespace agreed first would have saved most of the lost time
- **Limits come from the requirement:** my inspection pass limits were ±10 %, wider than the ±3 % target; next time I would derive them first and build the tools around them

</details>

**Stack:** Tecnomatix Process Simulate · TIA Portal, S7-1500, PLCSIM Advanced, ladder logic · WinCC Runtime Advanced · URSim / PolyScope (UR5 VRC), physical UR5e · S7 GET/PUT, Modbus TCP · C# (Modbus simulator) · SOLIDWORKS CAM (milling and turning), G-code (G71/G72, G82/G83, G41/G43, G96/G97) · Cognex In-Sight (PatMax RedLine, FindCircle, Caliper, ReadIDMax, OCRMax)

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/projects/#academic' | relative_url }}">← Back to projects</a>
</div>
