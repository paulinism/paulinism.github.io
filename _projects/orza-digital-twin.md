---
layout: page
title: Digital Twin of a Flexible CNC Manufacturing Cell
description: Industry challenge with ORZA Tech — virtual CNC cell (S7-1500 PLC, UR5 robot, Cognex vision, SCADA/KPI dashboard) commissioned 100 % in software
img: assets/img/orza.png
importance: 2
category: Automation
featured: true
---

<style>
  .oz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .oz-grid.single { grid-template-columns: minmax(0, 900px); justify-content: center; }
  .oz-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .oz-fig img, .oz-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .oz-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .oz-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .oz-table th, .oz-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .oz-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**A fully virtual CNC milling cell commissioned with zero physical hardware.** A virtual S7-1500 runs the ladder program, Process Simulate drives the 3D cell, a Virtual Robot Controller runs the UR5 pick-and-place program, a Cognex inspector classifies each part (pass / rework / scrap), a WinCC HMI gives the operator automatic and manual control, and a SCADA dashboard tracks OEE and KPIs in real time.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cell-loop.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cell-loop-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>My CNC cell running in Process Simulate under PLC control: machining and unloading by the UR5 robot (1.5× speed).</figcaption></figure>
</div>

## Project overview

**Context:** Automation of Manufacturing Systems, Tecnológico de Monterrey (Mexico City), Feb – Jun 2026. Academic challenge proposed by the industry partner ORZA Tech; team of three, with one CNC station per member.

**Challenge:** design, implement and validate a virtual digital twin of a flexible manufacturing cell (supplier, three CNC stations, intralogistics, quality inspection, assembly and warehouse) with simulated industrial communication, two operating modes, traceability and KPIs. Everything is virtual: no physical PLCs, robots or AGVs.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-layout-iso.jpg' | relative_url }}" alt="Isometric view of the flexible manufacturing system"><figcaption>The full flexible manufacturing system in Process Simulate: three CNC cells in parallel along a shared conveyor and AGV backbone.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-workflow.png' | relative_url }}" alt="Manufacturing cell workflow"><figcaption>Material flow: supplier, transport, CNC machining, quality inspection (pass, rework or scrap), assembly and warehouse.</figcaption></figure>
</div>

## My role & responsibilities

**What I did directly — my CNC milling cell (Station 3)**

- **Digital twin:** my cell in Tecnomatix Process Simulate (supplier rack with pneumatic actuator, AGV, two conveyors, three UR5 robots, CNC milling machine and inspection camera), with every actuator and sensor mapped to PLC I/O.
- **PLC program:** the complete ladder program in TIA Portal for a virtual S7-1500 (CPU 1511-1 PN) running in PLCSIM Advanced: step sequence, interlocks, manual mode, quality routing, KPIs and data logging.
- **Robot integration:** a UR5 in Virtual Robot Controller mode (URSim in VMware) running its own PolyScope pick-and-place program, synchronised with the PLC through a digital I/O handshake.
- **HMI:** the WinCC Runtime Advanced operator interface for the cell.
- **Machining:** the CAM program and toolpath simulation for my station, and the analysis of the CNC program for part P2 (an aluminium piston body): tools, cutting speeds, roughing and contour passes, and an estimated machining time.
- **Global SCADA:** the supervisory screen that consolidates production counts and KPI trends for the whole system.
- **Modbus TCP sensor:** my C# simulated field sensor exchanging holding registers with the PLC (each team member built one for their own station).
- **Communication with the team:** the S7 GET/PUT link from my PLC to the assembly station on PC-1, with an alarm when that link fails.
- **FMS layout concept:** I proposed the ladder-type layout of the full system.

**What we did as a team**

- Building the full FMS layout in Process Simulate from that proposal.
- The three-PC integration over a shared Ethernet switch.

## System architecture

<table class="oz-table">
  <tr><th>Layer</th><th>Tool</th><th>Role</th></tr>
  <tr><td>3D plant</td><td>Tecnomatix Process Simulate</td><td>Kinematics of robots, conveyors, AGV and CNC; virtual sensors fed back to the PLC</td></tr>
  <tr><td>Control</td><td>TIA Portal + PLCSIM Advanced (S7-1500)</td><td>Ladder program; virtual Ethernet adapter seen as a real PROFINET device</td></tr>
  <tr><td>Robot</td><td>URSim (UR5 VRC) in VMware</td><td>PolyScope program; joint positions streamed to Process Simulate</td></tr>
  <tr><td>Operator</td><td>WinCC Runtime Advanced</td><td>Station HMI: modes, manual commands, alarms, recipes, trends</td></tr>
  <tr><td>Network</td><td>S7 GET/PUT, Modbus TCP</td><td>Data exchange between the three team PCs and the simulated sensor</td></tr>
</table>

<div class="oz-grid single">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-network.jpg' | relative_url }}" alt="Network diagram of the three workstations"><figcaption>Real network: three workstations on one Ethernet switch, each running Process Simulate, a VMware Tecnomatix server, a Modbus sensor and a PLCSIM Advanced instance.</figcaption></figure>
</div>

## The station sequence

The cell runs as a chain of PLC step flags (K1 … K35). Each transition only fires when the digital twin confirms the previous action really finished, so the PLC never moves on based on a timer alone.

1. **Supply:** a proximity sensor detects a blank on the rack; a pneumatic actuator deploys it onto the AGV.
2. **Transport:** the AGV carries the blank to the VRC robot, which picks it and places it on the inlet conveyor.
3. **Loading:** the conveyor stops at the CNC; a UR5 loads the part and the CNC door closes.
4. **Machining:** the spindle head rises and the tool magazine starts the cycle; the step only ends on the machine's done signal.
5. **Unloading and inspection:** the door opens and a second UR5 holds the part in front of the inspection camera.
6. **Routing:** OK parts go to the exit conveyor and the assembly station; rework parts go back through the CNC and are inspected again; scrap goes to the disposal bin.
7. **Cycle close:** counters, cycle time and the log entry are updated, and the order quantity counts down.

<table class="oz-table">
  <tr><th>State</th><th>Entry condition</th><th>Exit condition</th></tr>
  <tr><td>Idle</td><td>Reset or cycle start</td><td>Part present at the supplier</td></tr>
  <tr><td>Loading</td><td>Part present</td><td>Part inside the CNC</td></tr>
  <tr><td>Machining</td><td>CNC ready, door closed</td><td>Machining done</td></tr>
  <tr><td>Unloading</td><td>Machining done</td><td>Robot done</td></tr>
  <tr><td>Quality inspection</td><td>Part at the camera</td><td>Result locked (OK, rework or scrap)</td></tr>
  <tr><td>Fault</td><td>Any alarm bit active</td><td>Reset from the HMI</td></tr>
</table>

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-layout-top.jpg' | relative_url }}" alt="Top view of the cell layout"><figcaption>Top view of the line operation in Process Simulate: conveyors, AGV path, CNC cells and robots.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="CNC station with UR5 robots"><figcaption>CNC station: two UR5 robots load and unload the milling machine and present the part to the camera.</figcaption></figure>
</div>

## Machining

The milling operations for my station were programmed and simulated in CAM before being represented in the twin as a machining cycle with its own done signal.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cam.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cam-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>CAM toolpath simulation of my machined part (2× speed).</figcaption></figure>
</div>

## PLC program

- **Structure:** the sequence engine, HMI interface, interlocks, quality inspection, latches and the production log each live in their own data block. Optimised block access is disabled so every tag maps to a fixed absolute address, which Process Simulate's signal mapping and the S7 exchange both need.
- **Interlocks:** a function block turns raw sensor signals into named interlock bits (part present, CNC ready, conveyor clear …). Step transitions only use these bits, never raw inputs, so wiring and sequence logic stay decoupled.
- **Safety:** a single global stop bit sits as a normally-closed contact in every step rung and freezes the whole sequence; reset clears all steps and returns the cell to idle.
- **Manual mode:** every step can be driven from the HMI (deploy part, load, start and finish machining, unload, conveyor start/stop/reverse, AGV return), only when the cell is in manual mode.
- **Recipes:** a FIFO production queue on the HMI; each recipe (A–D) sets which of the three CNC stations a part type needs and the batch quantity, which counts down every cycle.

**Robot handshake.** The VRC robot is treated as an asynchronous external device: the PLC only reads and writes agreed handshake bits, never individual waypoints. It also waits until both the gripper sensor and the simulation's attach event agree before telling the robot the grip is confirmed.

<table class="oz-table">
  <tr><th>Direction</th><th>Signal</th><th>Purpose</th></tr>
  <tr><td>PLC → robot</td><td>digital_in[2]</td><td>Start the pick-and-place cycle</td></tr>
  <tr><td>PLC → robot</td><td>digital_in[0] / [1]</td><td>Gripper close / open confirmed</td></tr>
  <tr><td>Robot → PLC</td><td>tool_digital_out[0] / [1]</td><td>Robot requests gripper close / open</td></tr>
  <tr><td>Robot → PLC</td><td>digital_out[3] / [4]</td><td>Pick in progress / place complete</td></tr>
</table>

## HMI

The station HMI has a main menu, a station monitor, one screen per area with its own manual commands, status LEDs, fault indicator and error counter, plus alarms with acknowledge, recipes and trends.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-menu.jpg' | relative_url }}" alt="HMI main menu"><figcaption>Main menu.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-monitor.jpg' | relative_url }}" alt="Station monitor screen"><figcaption>Station monitor: mode, current process, station progress and batch quantity.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-supply.jpg' | relative_url }}" alt="Supplier and conveyor screen"><figcaption>Supplier and conveyor screen with manual commands.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-cnc-qi.jpg' | relative_url }}" alt="CNC and quality inspection screen"><figcaption>CNC and quality inspection: manual machining commands and the OK / rework / scrap result.</figcaption></figure>
</div>

## KPIs and data logging

All production statistics are computed inside the PLC at the end of every cycle and stored in a retentive data block, so they survive a PLC restart.

- **Yield** = good parts / total parts.
- **Scrap rate** = scrapped parts / total parts.
- **Micro OEE** = ideal cycle time × good parts / accumulated cycle time (performance × quality, assuming full availability in uninterrupted automatic mode).
- **Per-cycle log:** a 100-entry ring buffer stores the part type, operation, station state, quality result, cycle time and active alarms of every cycle.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-db22.png' | relative_url }}" alt="DATA_LOG data block"><figcaption>The retentive DATA_LOG block with counters, KPIs, alarm bits and the 100-entry log.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA counters and trends"><figcaption>Global SCADA screen at the end of a demonstration run: 11 parts, 11 OK, 0 scrap, with yield, scrap and Micro OEE trends.</figcaption></figure>
</div>

## Integration and results

- **Digital twin closed loop:** every PLC output drives a body in the 3D scene and every virtual sensor feeds back into the PLC; the cell completes full cycles in automatic mode, including the rework and scrap branches.
- **Modbus TCP:** bidirectional exchange verified between the C# sensor simulator and the PLC (read holding registers and write multiple registers).
- **Communication failure:** when the link to a partner PC is cut, the GET block reports the error, an alarm is raised on the HMI and the station stops passing stale data downstream.
- **Protocols:** the challenge brief suggested OPC UA or EtherNet/IP; the partner accepted S7 GET/PUT between PLCs and Modbus TCP for the sensors, which proved simpler and more reliable in the virtual setup.
- **Three-PC integration:** each station's S7 link worked on its own, but the full interconnection of all three stations could not be completed in the integration window because of IP conflicts, duplicate tag references and stale PLCSIM connections between the individual projects.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-s7-get.png' | relative_url }}" alt="S7 GET block"><figcaption>S7 GET block reading a byte from the partner PLC, triggered at 10 Hz.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-modbus-app.png' | relative_url }}" alt="C# Modbus sensor application"><figcaption>C# Modbus TCP sensor simulator exchanging the supplier stock value with the PLC.</figcaption></figure>
</div>

## Full demonstration

The complete run of the cell, with my explanation (7 min, with sound).

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-full-demo.mp4' | relative_url }}" poster="{{ 'assets/img/orza-full-demo-poster.jpg' | relative_url }}" controls preload="none" playsinline></video><figcaption>Full demonstration of the CNC cell: Process Simulate, PLC and HMI running together.</figcaption></figure>
</div>

## Related work: post-machining inspection with Cognex

In the same course I built a Cognex In-Sight inspection on my own, which is the kind of post-CNC quality check the challenge asks for. The product was an LCSC anti-static bag holding a 0603 chip resistor; the inspection reads its codes and checks its seals and dimensions in calibrated millimetres.

- **Image set:** over 20 photos with varied position and rotation, including a deliberately faulty sample (missing seal and a QR code that does not match the part).
- **Calibration:** checkerboard with fiducial, 7 mm grid; 823 feature points, 0.33 px average error.
- **Fixturing:** a PatMax RedLine pattern with a ±55° search range gives a reference frame that every other tool follows, so the inspection works on rotated parts.
- **Checks:** FindCircle on the two colour seals, ReadIDMax for the QR code and barcode, OCRMax for the "QTY" text, and calipers for label and package dimensions, each with nominal, limits and a pass/fail flag.
- **Validation:** seal diameter and label length matched a vernier caliper measurement within ±3%.

**What did not work.** The reflective foil created false edges for the package-outline calipers: their readings came out 3.7–3.9% off, just outside the ±3% target, and only the images with the smallest rotation (11 of them) passed the full check. QR, barcode and OCR worked on every image. A light box or ring light would be the first fix.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-pattern.jpg' | relative_url }}" alt="PatMax reference frame on the package"><figcaption>PatMax reference frame that anchors every inspection tool.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-circle.jpg' | relative_url }}" alt="Circle tool on a seal"><figcaption>FindCircle measuring the radius of a colour seal.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-calibration.jpg' | relative_url }}" alt="Calibration result"><figcaption>Grid calibration: 0.33 px average error over 823 points.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-reflection.jpg' | relative_url }}" alt="Caliper failure due to reflection"><figcaption>Failure case: a specular highlight on the foil is taken as an edge by the caliper.</figcaption></figure>
</div>

## Limitations & lessons

- **Integration is its own engineering task:** most lost time came from configuration consistency (one authoritative IP plan, namespaced tags, a clean start-up and shutdown routine for the virtual adapters), not from any single protocol.
- **Inspection result:** in a real cell an operator confirms the camera's verdict. Cognex cannot be connected to Process Simulate, so in the simulation that confirmation is given on the HMI (OK, rework or scrap) and the PLC locks it and routes the part.
- **Ideal cycle time:** the Micro OEE formula is implemented, but there was no time to calibrate the ideal cycle time against the real machining time, so the OEE values are relative rather than absolute.
- **HMI coverage:** the five machine states are handled in the logic but not all of them are shown explicitly on the HMI screens.
- **Machining parameters:** some cutting speeds suit the simulation but exceed what the lab machine can do on aluminium 6061; they would need to be reduced before real machining.

**Stack:** Tecnomatix Process Simulate · TIA Portal, S7-1500, PLCSIM Advanced, ladder logic · WinCC Runtime Advanced · URSim / PolyScope (UR5) · S7 GET/PUT, Modbus TCP · C# (Modbus simulator) · Cognex In-Sight
