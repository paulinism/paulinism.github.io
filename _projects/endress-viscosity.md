---
layout: page
title: Automated Viscosity Measurement System
description: PCB & embedded lead with Endress+Hauser — 400× gain signal chain separating 252 cP from 1676 cP; three Altium boards, two manufactured by JLCPCB
img: assets/img/viscosity.jpg
importance: 5
category: PCB, Embedded, Automation
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .vis-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .vis-grid.single { grid-template-columns: minmax(0, 560px); justify-content: center; }
  .vis-grid.hero { grid-template-columns: 1fr 2fr; }
  .vis-grid.hero .vis-fig img { height: 420px; object-fit: contain; }
  .vis-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .vis-fig img { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .vis-fig.photo img { object-fit: cover; }
  .vis-fig.auto img { height: auto; }
  .vis-fig.full img { height: auto; max-height: 460px; }
  .vis-fig video { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .vis-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
</style>

**A current window of 6 mA — the difference between diluted and pure soap at 30 RPM — amplified 400× into the ESP32 ADC range, reliably separating 252 cP from 1676 cP on a custom two-stage op-amp board.** Industrial Automation challenge at Tec de Monterrey with Endress+Hauser (team of 4): an automated fluid-handling cycle combining PLC sequencing and ESP32 measurement, from Altium PCB design to physical validation.

<div class="vis-grid hero">
  <figure class="vis-fig"><img data-zoomable src="{{ 'assets/img/viscosity.jpg' | relative_url }}" alt="SolidWorks render of the full system"><figcaption>Design: SolidWorks CAD model of the rotary measurement station, viscosity measurement unit, and dispenser as originally planned.</figcaption></figure>
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-system-test.jpg' | relative_url }}" alt="Integrated system during the final presentation"><figcaption>Build: Integrated system presented as the final prototype, combining relays, emergency-stop system, water pump, container sorting, stepper motors, DC motor with encoder, infrared sensors, and conveyor belts for container transport.</figcaption></figure>
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
  details.writeup > summary { cursor: pointer; font-weight: 700; font-size: 1.05rem; }
</style>

## Design at a glance

<div class="dag-grid">
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="Op-amp board built and wired" loading="lazy"><figcaption>Op-amp board built and wired</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Op-amp board layout" loading="lazy"><figcaption>Op-amp board layout</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="ESP32 master board (JLCPCB)" loading="lazy"><figcaption>ESP32 master board (JLCPCB)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Multisim check at 61 mA" loading="lazy"><figcaption>Multisim check at 61 mA</figcaption></figure>
</div>

**Design decisions, from first principles**

<table class="dag-table">
  <tr><th>Decision</th><th>Engineering reasoning</th><th>Result</th></tr>
  <tr><td>Measure viscosity through motor current</td><td>Viscous drag raises spindle torque, and DC-motor torque is proportional to current; a 1 &Omega; shunt turns it into voltage</td><td>6 mV window between diluted and pure soap at 30 RPM</td></tr>
  <tr><td>Gain &asymp; 400 in two stages (&times;100, then &times;4)</td><td>Maps the 6 mV window onto 0&ndash;3.3 V while keeping the first stage inside the &plusmn;12 V rails</td><td>252 cP and 1676 cP reliably separated</td></tr>
  <tr><td>5 V &rarr; 3.3 V level converter</td><td>At 130 RPM the output reached about 4 V, above the ESP32 ADC limit</td><td>ADC protected at all speeds</td></tr>
  <tr><td>PID off during the measurement</td><td>Closed-loop speed control pushed the current to 63&ndash;72 mA, outside the measurement window</td><td>Stable readings at constant 30 RPM</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1">
<summary>Full technical write-up (click to expand)</summary>

**Challenge**

Automate a full fluid-handling cycle: identify a sample by its color tag, measure its viscosity, dilute it to a target (±10%), then sort it. Two constraints shaped the design: viscosity had to be inferred from the spindle motor's current, with no commercial viscometer, and control was split between PLC stations (supply and sorting) and an ESP32 station (measurement), which communicate with each other.

**My contribution**

- **PCB design:** designed all three boards of the measurement station in Altium Designer — the ESP32 master and slave boards (two-layer, IPC-2221 trace sizing, manufactured by JLCPCB) and the op-amp board for viscosity measurement, which I built on copper-clad laminate so the circuit could be debugged and tuned
- **Signal conditioning:** co-developed the current-sensing chain (1 Ω shunt, two-stage UA741 amplification, about 400× gain), simulated it at 61 mA and 67 mA, and verified it on our own PCB
- **Embedded** (co-developed with a teammate): homing and measuring routines, moving-average filtering of the current signal, color-tag reading over I²C, Bluetooth link to the LabVIEW HMI, UART between the two ESP32s, and the song the slave board's buzzer plays while the motors move (it stops during the cup, color and viscosity checks)
- **PLC & manufacturing:** co-built the conveyor belts, co-programmed the ladder logic, and placed and calibrated the FC-51 sensors

Teammates led the mechanical design of the stations, the PLC sequence design, and the LabVIEW HMI.

**Integration**

The full bench integration, with most of the automatic sequence running: the carousel, measurement station and control electronics working together.

<div class="vis-grid single">
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-integration-demo.mp4' | relative_url }}" muted playsinline controls preload="metadata"></video><figcaption>Integration demo: most of the automatic sequence running on the bench.</figcaption></figure>
</div>

<div class="vis-grid single">
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-revolver.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>The revolver (rotating cup holder) turning with the sample cups loaded.</figcaption></figure>
</div>

**PCB design**

All boards were designed in Altium Designer. The two ESP32 boards were manufactured by JLCPCB. The op-amp board was instead built on copper-clad laminate: for practicality and debugging, this let us test the conditioning circuit and modify component values with experimental results, which a fabricated board would not have allowed as quickly.

<div class="vis-grid">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="ESP32 master board"><figcaption>ESP32 master board: drives the main motors, including the stepper of the carousel (stepper and encoder terminals, I²C connector, level shifter).</figcaption></figure>
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-b.jpg' | relative_url }}" alt="ESP32 slave board"><figcaption>ESP32 slave board: sensors and peripherals (PLC signals, fan and water pump), plus the buzzer that plays the song while the mechanisms move.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Op-amp measurement board layout"><figcaption>Op-amp measurement board: PCB layout.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="Fabricated and wired op-amp board"><figcaption>The same board, built on copper-clad laminate so values could be changed while debugging.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-master-schematic.png' | relative_url }}" alt="Master board schematic"><figcaption>Master schematic: ESP32 headers, stepper STEP/DIR, and encoder and inductive-sensor inputs level-shifted from 5 V to 3.3 V.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-slave-schematic.png' | relative_url }}" alt="Slave board schematic"><figcaption>Slave schematic: sensor inputs, fan and water-pump outputs, PLC color/start signals, UART, RGB LED, buzzer and push button.</figcaption></figure>
</div>

**Signal conditioning**

Viscosity was inferred from the motor's supply current through a 1 Ω shunt: about 61 mV for 75% soap and 67 mV for pure soap at 30 RPM, a 6 mV window. A gain of about 400 (×100, then a differential stage with ×4) maps that window to 0–3.3 V, split in two stages so the first one stays inside the ±12 V rails. At 130 RPM the output still reached about 4 V with a 3.3 V Zener alone, so a 5 V → 3.3 V logic-level converter was added to protect the ESP32 ADC.

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Multisim simulation at 61 mA"><figcaption>Multisim at 61 mA: 61 mV across the 1 Ω shunt becomes about 250 mV at the ADC input.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-sim-67ma.jpg' | relative_url }}" alt="Multisim simulation at 67 mA"><figcaption>Multisim at 67 mA: 67 mV becomes about 2.67 V, clamped by the 3.3 V Zener.</figcaption></figure>
</div>

**Conveyors**

The original sorting idea (a vending-machine-style stepper, screw and spring) was dropped because exactly spaced springs were not available and the ladder logic was complex. For practicality and material feasibility, the final integration uses small conveyor belts instead, driven by an Arduino Mega running OpenPLC.

<div class="vis-grid">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-conveyors.jpg' | relative_url }}" alt="Conveyor belts with FC-51 sensors"><figcaption>Conveyors: the sorting belts I co-built, with FC-51 sensors for cup detection.</figcaption></figure>
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-plc-validation.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>My PLC logic validation: moving a cup along the conveyor belt with the FC-51 sensors.</figcaption></figure>
</div>

**Tools & technologies**

- **PCB design (IPC-2221, JLCPCB):** ESP32 master/slave boards, op-amp measurement board
- **Multisim:** simulation of the two-stage amplifier across the 61–67 mA range
- **ESP32 (C++, ESP-IDF):** homing and measuring routines, digital filtering, TCS34725 color sensor over I²C, Bluetooth, master/slave over UART
- **OpenPLC on Arduino Mega (ladder):** conveyor control at the supply station
- **FC-51 IR sensors:** cup detection on the belts
- **Laser-cut MDF, aluminum rollers, rubber belts:** conveyor manufacturing

## Results & lessons

- **Viscosity measurement:** a 6 mA current window, amplified about 400× into the ESP32 ADC range, gave a repeatable separation between diluted and pure soap (252 vs 1676 cP)
- **Water dosing:** running the pump at 5 V made it controllable, delivering 19/26/36 ml against 18/27/36 ml targets
- **Conveyors:** the belts carried 5 kg (supply) and 8 kg (sorting) against a requirement below 1 kg
- **Outcome:** the automatic sequence ran on video, but the live demo failed because of wiring faults and short circuits — the PLC boards were swapped for breadboards after the FC-51 sensors drew more current than the board supply could deliver
- **Measurement lessons:** PID control had to be dropped for the 30 RPM measurement because it pushed the current to 63–72 mA, outside the 61–67 mA window; swapping the UA741CN for the UA741CP fixed an output that froze
- **Lessons:** route a short common ground for inter-board UART, since a RX/TX mismatch on the slave board cost debugging time; budget sensor supply current before routing a board, and check pin assignments against the target software (OpenPLC addressing) before fabrication

</details>

**Context:** Tec de Monterrey, Aug–Dec 2025, Industrial Automation challenge with Endress+Hauser as industry partner, team of 4.
**Result:** current-based viscosity measurement separating 252 cP from 1676 cP on a custom PCB.
**Stack:** ESP32/ESP-IDF, custom PCB design (IPC-2221), Multisim, OpenPLC (Arduino Mega), I²C, UART, Bluetooth, LabVIEW HMI

<div class="vis-grid single">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-endress-visit.jpg' | relative_url }}" alt="Team at Endress+Hauser"><figcaption>The team at Endress+Hauser, in front of their process instrumentation.</figcaption></figure>
</div>

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/projects/#academic' | relative_url }}">← Back to projects</a>
</div>
