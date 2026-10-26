---
layout: page
title: Telemetry & Energy-Optimization Platform
description: PCB lead & firmware — three generations of telemetry for a Shell Eco-marathon car — 1st (2025) and 2nd (2026) Data & Telemetry Award
img: assets/img/ecovolt-telemetry.jpg
importance: 1
category: PCB, Embedded, Electronics
featured: true
hide_from_grid: true # shown in the "Professional & lab experience" section instead of the academic grid
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .tel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .tel-grid.single { grid-template-columns: minmax(0, 720px); justify-content: center; }
  .tel-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .tel-fig img, .tel-fig video { display: block; width: 100%; height: 320px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .tel-fig.photo img { object-fit: cover; }
  .tel-fig.tall img, .tel-fig.tall video { height: 440px; }
  .tel-fig.auto img, .tel-fig.auto video { height: auto; }
  .tel-fig.sq img, .tel-fig.sq video { aspect-ratio: 1/1; height: auto; object-fit: cover; background: rgba(128, 128, 128, 0.06); }
  .tel-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .tel-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .tel-table th, .tel-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .tel-table th { background: rgba(128, 128, 128, 0.08); }
  .tel-grid.tel-grid-battery { grid-template-columns: 2fr 1fr; }
  .tel-grid.tel-grid-battery .tel-fig img { height: 360px; object-fit: cover; }
  /* Ergonomics trio: tall Posture Monitor capture on the left (shown whole, never cropped), the other two stacked on the right. */
  .tel-grid.tel-grid-ergo { grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr); }
  .tel-grid.tel-grid-ergo .tel-fig img { height: auto; }
  .tel-grid.tel-grid-ergo .tel-fig.tall-shot { grid-row: span 2; }
  .tel-grid.tel-grid-ergo .tel-fig.tall-shot img { object-fit: contain; background: #fff; }
  @media (max-width: 767px) {
    .tel-grid.tel-grid-ergo { grid-template-columns: minmax(0, 1fr); }
    .tel-grid.tel-grid-ergo .tel-fig.tall-shot { grid-row: auto; width: 100%; max-width: 420px; margin: 0 auto; }
  }
  /* Board pair: both images share the layout's aspect ratio so the layout and the photo line up at the same size. */
  .tel-grid.tel-grid-pair .tel-fig img { aspect-ratio: 1202 / 1102; height: auto; object-fit: cover; }
</style>

**1st place Data & Telemetry Award (2025) and 2nd place (2026) at Shell Eco-marathon.** Three generations of telemetry PCBs and ESP32 firmware for EcoVolt CCM: live data to the pit and the driver, 1 kHz current logging to SD card, a supercapacitor reserve that keeps the system running after a power loss, and a simulator loop for energy strategy.

<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-wiring.jpg' | relative_url }}" alt="Paulina wiring the telemetry electronics at the competition"><figcaption>Wiring the vehicle electronics during the competition.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-award-2025.jpg' | relative_url }}" alt="Data and Telemetry Award, Shell Eco-marathon Americas 2025"><figcaption>1st place, Data &amp; Telemetry Award — Shell Eco-marathon Americas 2025.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="US 2026 board, Altium 3D" loading="lazy"><figcaption>US 2026 board, Altium 3D</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-purple.jpg' | relative_url }}" alt="Fabricated US 2026 board" loading="lazy"><figcaption>Fabricated US 2026 board</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Hand-etched INA240 prototype" loading="lazy"><figcaption>Hand-etched INA240 prototype</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Telemetry installed in the car" loading="lazy"><figcaption>Telemetry installed in the car</figcaption></figure>
</div>

**Design decisions, from first principles**

<table class="dag-table">
  <tr><th>Decision</th><th>Engineering reasoning</th><th>Result</th></tr>
  <tr><td>INA240 current-sense amplifier</td><td>A few millivolts across the shunt sit on a 48 V line: the INA240 (gain 20 V/V) rejects the common mode and is bidirectional, so it also reads regeneration</td><td>Calibrated current channel instead of a 15 A offset</td></tr>
  <tr><td>Shunt reduced from 20 m&Omega; to 5 m&Omega;</td><td>The 20 m&Omega; shunt saturated the amplifier at the real peak current; a quarter of the resistance gives four times the range</td><td>No saturation at US 2026</td></tr>
  <tr><td>Write to SD first, transmit second</td><td>In Brazil 2025 only about one lap reached the server over the cellular link</td><td>No data lost in transit</td></tr>
  <tr><td>External antenna on the windshield</td><td>The carbon monocoque is conductive and attenuates Wi-Fi like a partial Faraday cage</td><td>Stable radio link from inside the car</td></tr>
  <tr><td>Supercapacitor energy reserve</td><td>A power loss or switching off the car would cut the log; ~80 s of reserve bridges the gap</td><td>Telemetry keeps running after power loss</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Full technical write-up</summary>

**Challenge**

In the Shell Eco-marathon, teams compete on energy efficiency, not speed: the winner covers the distance on the least energy. Two things decide the result — how the driver uses the throttle, and whether the team can see what the powertrain is doing. When I joined the electronics team, EcoVolt CCM had no telemetry. The goals: measure battery voltage and bidirectional motor current plus position, acceleration and driver inputs; get the data off a moving carbon-fibre car; never lose a run's data; and turn data into driving decisions.

<a id="my-contribution"></a>

**My contribution**

Electronics Co-Lead and reserve driver (2024–25), Team Captain, Telemetry Lead and main driver (2025–26), and mentor (2026).

- **PCB design:** the INA240 current-sense breakout and the Brazil 2025 telemetry board; main contributor to the US 2026 board and co-designer of the Brazil 2026 revision
- **Current measurement:** the bidirectional shunt sensor, from a hand-etched prototype to a fabricated board
- **Firmware:** CAN to the in-house motor controller (incl. transceiver circuit), SD card, SPI, I²C and UART drivers, current and voltage acquisition
- **GPS:** configured the NEO-6M receiver in u-blox u-center
- **Driver display & track analysis:** defined what the driver sees; MATLAB 3D reconstruction of the Indianapolis and Rio de Janeiro circuits from GPS data
- **With others:** supervised the supercapacitor module (built by José Diego González), the Altair data analysis, the simulator bench tests and the requirements for the web platform

Teammates built the web platform and dashboards; the Brazil 2026 hardware revision was led by José Diego González under my supervision.

**Vehicle electrical hardware**

Before and alongside telemetry, I worked on the rest of the car's electronics: soldering and debugging SMD and THT circuits, characterizing transistors and Zener, Schottky and rectifier diodes on the in-house motor controller, and assembling the 48 V battery pack — cell interconnection, BMS and fuse installation, insulation and per-cell voltage checks.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-mc-assembled.jpg' | relative_url }}" alt="Assembled SEM motor controller with Raspberry Pi Pico"><figcaption>Assembled motor controller (SEM board): Raspberry Pi Pico, gate drivers, six MOSFETs and current-sense section. Used to characterize transistors and diodes and validate the drive electronics.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-mc-bare.jpg' | relative_url }}" alt="Bare SEM motor controller PCB with schematic on phone"><figcaption>Bare PCB next to the schematic: SMD pads for gate drivers, MOSFET footprints and the Raspberry Pi Pico socket.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-mc-test.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Motor controller under test on the bench, running firmware written in C.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-battery-pack.jpg' | relative_url }}" alt="48 V battery pack with BMS during assembly"><figcaption>48 V battery pack assembly: cells in holders, BMS board and output wiring before installation in the vehicle.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-comp-assembly.jpg' | relative_url }}" alt="Paulina and José Diego working on the vehicle at the competition"><figcaption>At the competition with José Diego González — working on the vehicle electronics between scrutineering checks.</figcaption></figure>
</div>

**V0 — Breadboard prototype (Americas 2025)**

An ESP32 on a breadboard with a Hall-effect current module, a voltage divider, GPS and IMU, publishing over MQTT. Live data reached the pit during a run, but the current channel carried a ~15 A calibration offset, so the efficiency calculation was wrong at its source. It still won 1st place in the Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-breadboard-2025.jpg' | relative_url }}" alt="Breadboard prototype with ESP32 and NEO-6M GPS"><figcaption>First prototype: ESP32 DevKit and NEO-6M GPS on a breadboard.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-proto-hall-2025.jpg' | relative_url }}" alt="Protoboard with ESP32 and Hall-effect current module"><figcaption>Protoboard version with a Hall-effect current module, used at Americas 2025.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-indy-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>The car on track at Indianapolis Motor Speedway, Americas 2025.</figcaption></figure>
</div>
<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-thingspeak-2025.jpg' | relative_url }}" alt="ThingSpeak current and voltage charts, 2025"><figcaption>Live data visualization in ThingSpeak during Shell Eco-marathon Americas 2025: motor current readings ranged from 14.5 to 17.6 A, with an approximately 15 A calibration offset. The voltage trace was accurate at 57.0 V, consistent with the battery's nominal operating voltage of approximately 60 V.</figcaption></figure>
</div>

**V1 — First custom board (Brazil 2025)**

I replaced the Hall module with my own shunt design: an INA240A1 across a 20 mΩ shunt with an RC filter, from a hand-etched board to an Altium breakout and a fabricated PCB, on a single board with an ESP32-C3, GPS and IMU. The shunt voltage is only a few millivolts on a 48 V line, so the INA240 (gain 20 V/V) rejects the common mode and reads both draw and regeneration. Two problems appeared on track: the 20 mΩ shunt saturated the amplifier at the car's real current, and latency over a cellular hotspot left about one lap of usable data.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Hand-etched INA240 current-sense prototype"><figcaption>July 2025: hand-etched INA240 current-sense prototype.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-ina240-breakout.jpg' | relative_url }}" alt="Altium render of the INA240 breakout board"><figcaption>The same circuit as an Altium breakout: shunt, INA240A1, RC filter and header.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-brazil25.jpg' | relative_url }}" alt="Brazil 2025 telemetry board with GPS and IMU"><figcaption>Brazil 2025 telemetry board, fabricated, with the GPS and IMU modules.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-sch-brazil25.png' | relative_url }}" alt="Telemetry schematic, Brazil 2025"><figcaption>Brazil 2025 schematic: 20 mΩ shunt with INA240A1, 1 MΩ / 56 kΩ divider, MPU6050, NEO-6M and ESP32-C3 SuperMini.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-pcb-brazil25-layout.jpg' | relative_url }}" alt="Brazil 2025 PCB layout in Altium"><figcaption>Brazil 2025 layout in Altium, with the shunt section (IN/OUT pads) on the right.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-brazil-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Track as driver at Pier Mauá, Rio de Janeiro — Brazil 2025.</figcaption></figure>
</div>

Between seasons we compared eight regression models in Altair AI Studio. With so little data no model was reliable (36–80 % relative error), but the variable ranking — speed as the dominant factor — pointed the next season toward speed strategy and earned an Honorable Mention in the Altair Global Student Contest 2025.

<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-altair.png' | relative_url }}" alt="Altair AI Studio model comparison and factor ranking"><figcaption>Altair AI Studio: eight models compared on relative error and runtime (top); variable ranking with speed as the dominant factor (bottom right).</figcaption></figure>
</div>

**V2 — Complete redesign (US 2026)**

The shunt went from 20 mΩ to 5 mΩ, a quarter of the signal per ampere and four times the range. An ESP32-C5 with an external antenna on the windshield gets around the carbon monocoque, which attenuates Wi-Fi like a partial Faraday cage. New interfaces: an ADS1115 for driver inputs, CAN to the motor controller and SD-card logging, all in a 3D-printed enclosure. Result: 2nd place in the Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="Altium 3D render of the US 2026 board"><figcaption>US 2026 board, Altium 3D render: ESP32-C5 footprint, sensor connectors and the shunt section.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-purple.jpg' | relative_url }}" alt="Fabricated US 2026 board, ¾ view"><figcaption>The fabricated US 2026 board: ESP32-C5, IMU, shunt section and sensor connectors.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-enclosure.jpg' | relative_url }}" alt="US 2026 board in its 3D-printed enclosure"><figcaption>In its 3D-printed enclosure, ready for the car.</figcaption></figure>
</div>
<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-sch-us26.png' | relative_url }}" alt="Telemetry schematic, US 2026"><figcaption>US 2026 schematic: INA240A1 current sensing, voltage divider, MPU6050, NEO-6M GPS, ADS1115 for driver inputs, SPI microSD, CAN transceiver and the ESP32-C5.</figcaption></figure>
</div>

**V3 — Robustness revision (Brazil 2026)**

Same circuit, re-routed board, better soldering and a locking power connector to remove intermittent faults and noise. Data integrity became the design rule: every frame goes to the SD card first and is transmitted afterwards, unsent frames are buffered and retried, and a supercapacitor module keeps the system running for about 80 s after a power loss. I mentored José Diego González on this supercapacitor energy reserve, which he built under my supervision.

<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-pcb-br26-layout.png' | relative_url }}" alt="Brazil 2026 PCB layout in Altium"><figcaption>Brazil 2026 layout in Altium, credited to Paulina Ruíz Servín and José Diego González Fernández.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26.jpg' | relative_url }}" alt="Fabricated Brazil 2026 board with microSD slot"><figcaption>The fabricated Brazil 2026 board, with the microSD slot and the locking power connector.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-supercap.jpg' | relative_url }}" alt="Supercapacitor energy-reserve module"><figcaption>Supercapacitor energy-reserve module: about 80 s of operation after a power loss.</figcaption></figure>
  <figure class="tel-fig"><img data-zoomable src="{{ 'assets/img/tel-supercap-render.jpg' | relative_url }}" alt="3D render of the energy-reserve board"><figcaption>3D render of the energy-reserve board.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Telemetry installed in the vehicle"><figcaption>Telemetry installed in the vehicle, next to the battery.</figcaption></figure>
</div>

On track in Rio de Janeiro with the V3 system — one of the three sessions recorded as training data for a future energy model.

<div class="tel-grid single">
  <figure class="tel-fig tall"><video src="{{ 'assets/img/tel-brazil-2026-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>On track in Rio de Janeiro, Brazil 2026 — one of the three recorded sessions.</figcaption></figure>
</div>

**Simulator bench test**

Before the 2026 car existed, the team connected the real motor and controller to the Assetto Corsa simulator in closed loop while the telemetry board logged current and voltage. The two streams had no shared clock, so they were aligned by matching throttle-off events to current drops and cross-correlating. Over 15 laps of Indianapolis, constant throttle reached **347.2 km/kWh** against **304.3 km/kWh** for pulse-and-glide — 14.1 % less efficient — and the motor temperature stayed at 47.7 °C.

<div class="tel-grid single">
  <figure class="tel-fig photo auto"><img data-zoomable src="{{ 'assets/img/tel-sim-setup.jpg' | relative_url }}" alt="Simulator bench test with the physical motor in the loop"><figcaption>Simulator bench test: Assetto Corsa with steering wheel and pedals, the physical motor and controller in the loop, and the live telemetry dashboard.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-sim-bench.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Driving the Indianapolis circuit in the simulator.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-motor-temp.jpg' | relative_url }}" alt="IR thermometer reading on the motor during the bench test"><figcaption>Motor temperature during the bench test (47.7 °C): checking in-car behaviour and whether cooling would be needed after a valid attempt.</figcaption></figure>
</div>

**Driver display, dashboards & track analysis**

As main driver, I tested the driver display from the cockpit and decided what it shows. The web team built the dashboards and the run archive from the variables we defined together; I reconstructed the Indianapolis circuit in 3D from 2,696 GPS fixes.

<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-dashboard.png' | relative_url }}" alt="Real-time pit dashboard"><figcaption>Real-time pit dashboard, US 2026 (built by the web team).</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-track-map.png' | relative_url }}" alt="Track map coloured by telemetry"><figcaption>Lap trace on the Indianapolis layout, coloured by telemetry values.</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-indy-3d.png' | relative_url }}" alt="MATLAB 3D reconstruction of the Indianapolis circuit"><figcaption>My MATLAB 3D reconstruction of the Indianapolis circuit from 2,696 GPS fixes (latitude, longitude, altitude); the elevation varies by about 3.8 m around the lap.</figcaption></figure>
</div>
<div class="tel-grid single wide">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-driver-display.png' | relative_url }}" alt="Driver display during a simulator session"><figcaption>Driver display during a simulator session: session time, speed, target speed and efficiency.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-run-archive.png' | relative_url }}" alt="Run archive of the Brazil 2026 web platform"><figcaption>Run archive, Brazil 2026: 14 sessions and 55.1 K telemetry records (built by the web team).</figcaption></figure>
  <figure class="tel-fig auto"><video src="{{ 'assets/img/tel-web-platform.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Session analysis in the web platform.</figcaption></figure>
</div>

<a id="driver-ergonomics-vehicle-design-award"></a>

**Driver ergonomics (Vehicle Design Award)**

I built a virtual driver model from my own body dimensions in Process Simulate before the CAD work began. The RULA assessment gave a score of 3 (low risk), and the model was imported into the SolidWorks cockpit so the monocoque met the aerodynamic profile and the driver envelope in one iteration — a contribution to the 2026 Vehicle Design Award.

<style>
  .tel-grid.wide { grid-template-columns: minmax(0, 1000px); }
  .tel-grid.wide .tel-fig video, .tel-grid.wide .tel-fig img { height: auto; }
  @media (min-width: 768px) {
    .tel-grid.tel-grid-ergo { align-items: stretch; grid-template-rows: 1fr 1fr; }
    .tel-grid.tel-grid-ergo .tel-fig:not(.tall-shot) { display: flex; flex-direction: column; }
    .tel-grid.tel-grid-ergo .tel-fig:not(.tall-shot) img { flex: 1 1 auto; height: 0; min-height: 220px; width: 100%; }
    .tel-grid.tel-grid-ergo .tel-fig:nth-child(2) img { object-fit: contain; background: #fff; }
    .tel-grid.tel-grid-ergo .tel-fig:nth-child(3) img { object-fit: cover; object-position: center 45%; }
  }
</style>

<div class="tel-grid tel-grid-ergo">
  <figure class="tel-fig tall-shot"><img data-zoomable src="{{ 'assets/img/tel-rula-monitor.png' | relative_url }}" alt="Tecnomatix Posture Monitor showing joint angles and RULA scores"><figcaption>Posture Monitor in Tecnomatix Process Simulate: joint angles for the virtual driver in the 2026 cockpit. Neck flexion (47°, yellow) and trunk flexion (84°, red) flagged as angles to watch; elbows at 45° flexion, wrists neutral.</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-driver-model.png' | relative_url }}" alt="3D driver model inside the EcoVolt 2026 vehicle shell in Tecnomatix"><figcaption>Driver model inside the 2026 vehicle shell (Tecnomatix Process Simulate).</figcaption></figure>
  <figure class="tel-fig"><img data-zoomable src="{{ 'assets/img/tel-award-vehicle-design-us26.jpg' | relative_url }}" alt="EcoVolt CCM team receiving the Vehicle Design Award at Shell Eco-marathon United States 2026"><figcaption>EcoVolt CCM team receiving the 1st place Vehicle Design Award – Prototype at Shell Eco-marathon United States 2026, Indianapolis Motor Speedway.</figcaption></figure>
</div>

**Tools & technologies**

- **Altium Designer:** telemetry boards and INA240 breakout
- **ESP32-C3/C5 (C++):** CAN (TWAI), SPI, I²C, UART, SD logging, MQTT
- **MATLAB, Altair AI Studio, u-center:** track reconstruction, model comparison, GPS setup
- **Lab:** oscilloscope, DC power supply, multimeter, function generator

**Results & lessons**

<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-soldering.jpg' | relative_url }}" alt="Soldering a sensor board"><figcaption>Hands-on throttle debugging during the Shell Eco-marathon Brazil 2025.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-trackside-brazil.jpg' | relative_url }}" alt="Briefing the drivers trackside in Rio de Janeiro"><figcaption>Briefing the drivers trackside in Rio de Janeiro on driving strategy and telemetry data.</figcaption></figure>
</div>

- **Awards:** 1st place (2025) and 2nd place (2026) Data & Telemetry Award; Honorable Mention, Altair Global Student Contest 2025
- **Hardware evolution:** from a breadboard to three generations of custom PCBs integrated into the vehicle
- **Driving strategy:** constant throttle identified as the most efficient strategy before the car reached the track
- **Calibrate every analog channel before the event**
- **Size the shunt from measured peak current, not expected consumption**
- **The local log is the source of truth;** the radio link is best-effort
- **Honest analysis:** with a small dataset, the useful result was the variable ranking, not a predictive model

</details>

**Context:** EcoVolt CCM EV Racing Team (Escudería), Shell Eco-marathon, 2024–2026.
**Result:** 1st place (2025) and 2nd place (2026), Data & Telemetry Award; Honorable Mention, Altair Global Student Contest 2025.
**Stack:** Altium Designer, ESP32-C3/C5, C++, INA240, ADS1115, CAN (TWAI), SPI, I²C, UART, MQTT, u-blox u-center, MATLAB, Altair AI Studio, Assetto Corsa bench testing

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/projects/#extracurricular' | relative_url }}">← Back to projects</a>
</div>
