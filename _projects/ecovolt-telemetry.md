---
layout: page
title: Telemetry & Energy-Optimization Platform
description: Three generations of telemetry PCBs and ESP32 firmware for a Shell Eco-marathon car — 1st (2025) and 2nd (2026) Data & Telemetry Award
img: assets/img/ecovolt-telemetry.png
importance: 1
category: PCB, Embedded, Electronics
featured: true
hide_from_grid: true # shown in the "Professional & lab experience" section instead of the academic grid
---

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
</style>

Three seasons of telemetry for EcoVolt CCM's Shell Eco-marathon car: from a breadboard prototype to custom PCBs integrated in the vehicle, with live data for the pit and the driver, local logging, and a supercapacitor reserve that keeps the system running after a power loss.

<div class="tel-grid">
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-wiring.jpg' | relative_url }}" alt="Paulina wiring the telemetry electronics at the competition"><figcaption>Wiring the vehicle electronics during the competition.</figcaption></figure>
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-award-2025.jpg' | relative_url }}" alt="Data and Telemetry Award, Shell Eco-marathon Americas 2025"><figcaption>1st place, Data &amp; Telemetry Award — Shell Eco-marathon Americas 2025.</figcaption></figure>
</div>

## Project overview

In the Shell Eco-marathon, teams compete on energy efficiency, not speed: the winner covers the required distance on the least energy. Two things decide the result here: how the driver uses the throttle, and whether the team can see what the powertrain is doing during a run.

When I joined the electronics team, EcoVolt CCM had no telemetry. Over three seasons, the Telemetry area I co-founded and later led took the system from a breadboard prototype to a vehicle-integrated platform.

The engineering goals were:

- **Measure what matters:** battery voltage and bidirectional motor current, plus position, acceleration and driver inputs.
- **Get data off the car reliably:** a moving carbon-fibre vehicle on large outdoor circuits is a hostile environment for wireless links.
- **Never lose a run's data:** a connectivity drop must not leave a gap in the log.
- **Turn data into driving decisions:** feedback for the driver, and comparison of driving strategies before reaching the track.

## My role & responsibilities

<table class="tel-table">
  <tr><th>Period</th><th>Role</th></tr>
  <tr><td>Aug 2023 – May 2024</td><td>Electronics & Design Member </td></tr>
  <tr><td>May 2024 – May 2025</td><td>Electronics Co-Lead and reserve driver</td></tr>
  <tr><td>May 2025 – May 2026</td><td>Team Captain, Telemetry Lead, Social Media Lead and main driver</td></tr>
  <tr><td>Jul – Sep 2026</td><td>Team Mentor:Telemetry & CV member</td></tr>
</table>

**What I did directly**

- **PCB design:** designed the INA240 current-sense breakout and the Brazil 2025 telemetry board. I was the main contributor to the US 2026 board (with José Diego González) and co-designed the Brazil 2026 revision; the layout carries both our names.
- **Current measurement:** designed, hand-built and programmed the first shunt-based bidirectional current sensor, from a home-etched prototype to a fabricated board.
- **Embedded firmware:** CAN communication with the team's in-house motor controller, the SD-card, SPI and I²C drivers, and current and voltage acquisition in the early versions.
- **GPS:** configured the NEO-6M receiver's detection region in u-blox u-center.
- **CAN hardware:** the transceiver circuit and its integration with the motor controller.
- **Driver display:** as the team's main driver, I defined and validated which information the driver sees and how it is laid out.
- **Track analysis:** MATLAB 3D reconstruction of the Indianapolis circuit, including the elevation profile, from GPS data. I also reconstructed the Pier Mauá circuit (Rio de Janeiro) from our own telemetry, recorded before and during the competition.

**What I did with others**

- **Energy reserve:** supervised and advised the design of the supercapacitor module, which was built by José Diego González.
- **Firmware and integration:** firmware architecture and system integration with the electronics team.
- **Web platform requirements:** worked with the web and data-analysis team to define which variables to read and how to interpret them.
- **Data analysis:** the variable-correlation study in Altair AI Studio, and the simulator bench tests.

**Built by other team members (shown here for context)**

- **V3 hardware (Brazil 2026):** the board re-route, assembly improvements and locking connector — led by José Diego González under my supervision as mentor.
- **Web platform:** server-side Python processing, the dashboards (US 2026) and the run archive with AI-assisted analysis (Brazil 2026).

## Electronics Co-Lead season (2024 – 2025)

I co-founded and led the Telemetry area within EcoVolt's Electronics team, covering hardware development, embedded programming, technical research and project coordination. The area started with sensor tests on a breadboard and early research into AI-assisted energy optimization. That first prototype won the 2025 Data & Telemetry Award, and over the following seasons it grew into the sensor-integrated platform for real-time vehicle monitoring described on this page.

Alongside the telemetry work, being on the electronics team meant hands-on time with the rest of the vehicle's electrical hardware:

- **Power electronics & hardware:** soldering and debugging SMD and THT circuits; tested and characterized transistors, and Zener, Schottky and rectifier diodes on the in-house motor controller PCB.
- **Battery assembly:** assembled the vehicle's 48 V battery pack: cell interconnection, BMS and fuse installation, insulation, and per-cell voltage check before installation.
- **Lab instrumentation:** oscilloscope, variable DC power supply, multimeter and function generator.
- **Programming:** built my foundation in C/C++ through the firmware of the first telemetry prototype.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-mc-assembled.jpg' | relative_url }}" alt="Assembled SEM motor controller with Raspberry Pi Pico"><figcaption>Assembled motor controller (SEM board): Raspberry Pi Pico, gate drivers, six MOSFETs and current-sense section. Used to characterize transistors and diodes and validate the drive electronics.</figcaption></figure>
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-mc-bare.jpg' | relative_url }}" alt="Bare SEM motor controller PCB with schematic on phone"><figcaption>Bare PCB next to the schematic: SMD pads for gate drivers, MOSFET footprints and the Raspberry Pi Pico socket.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-mc-test.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Motor controller under test on the bench.</figcaption></figure>
</div>

<div class="tel-grid tel-grid-battery">
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-battery-pack.jpg' | relative_url }}" alt="48 V battery pack with BMS during assembly"><figcaption>48 V battery pack assembly: cells in holders, BMS board and output wiring before installation in the vehicle.</figcaption></figure>
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-comp-assembly.jpg' | relative_url }}" alt="Paulina and José Diego working on the vehicle at the competition"><figcaption>At the competition with José Diego González — working on the vehicle electronics between scrutineering checks.</figcaption></figure>
</div>

## Technical background

**Current sensing with a shunt.** A milliohm resistor (shunt) in series with the motor produces a voltage proportional to the current. That voltage is only a few millivolts and sits on top of a 48 V battery line, so it cannot go straight into a microcontroller. A current-sense amplifier such as the TI INA240A1 amplifies the small differential voltage (fixed gain of 20 V/V) and rejects the large common-mode voltage. It is also bidirectional, so it measures both motor draw and regenerative current.

**Shunt value as a design trade-off.** A larger shunt gives more signal but saturates the amplifier output at lower currents. A smaller shunt widens the measurable range at the cost of resolution. The value has to be sized from the real peak current, not the expected one.

**CAN (Controller Area Network).** A differential two-wire bus designed for electrically noisy automotive environments. On the ESP32 it is handled by Espressif's TWAI peripheral, with an external transceiver (SN65HVD256) and 120 Ω bus termination.

**MQTT.** A lightweight publish/subscribe protocol: the car publishes messages to a broker, and dashboards subscribe to them.

**Carbon fibre and radio links.** Carbon fibre is conductive, so the monocoque behaves partly like a Faraday cage and attenuates Wi-Fi signals coming from inside the car.

## System architecture (US 2026 / Brazil 2026)

<div class="tel-grid single">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-sch-us26.png' | relative_url }}" alt="Telemetry schematic, US 2026"><figcaption>US 2026 schematic: INA240A1 current sensing, voltage divider, MPU6050, NEO-6M GPS, ADS1115 for driver inputs, SPI microSD, CAN transceiver and the ESP32-C5.</figcaption></figure>
</div>

**Sensing layer**

- **Current:** INA240A1 across a 5 mΩ shunt, with an RC input filter (2.7 Ω / 2.2 µF).
- **Battery voltage:** 33 kΩ / 2.2 kΩ divider, scaled to a maximum of 3.15 V at the ADC.
- **Motion and inputs:** MPU6050 accelerometer/gyroscope with a steering-wheel connector, and NEO-6M GNSS receiver over UART.
- **Driver inputs:** throttle and two brake signals read by an ADS1115 16-bit ADC over I²C.
- **Wheel speed:** SS49E Hall sensor.
- **Motor controller:** CAN link providing motor voltage, current, RPM, phase currents and temperature.

**Processing and communication**

- **Controller:** ESP32-C5 (RISC-V, Wi-Fi at 2.4 and 5 GHz).
- **Antenna:** external, mounted on the windshield, outside the carbon monocoque.
- **Transmission:** frames published to the cloud at about 5 Hz (US 2026); the rate was increased for Brazil 2026. <!-- TODO: confirm the Brazil 2026 sampling rate and replace this sentence -->

**Data integrity**

- **Local logging:** every frame is written to a microSD card over SPI.
- **Network buffering:** frames that cannot be sent are queued and retried when the link returns. If the queue overflows, the oldest unsent packets are dropped from transmission but remain on the SD card.
- **Energy reserve:** a supercapacitor module keeps the telemetry running for about 60 s after a power loss, or when the car is intentionally switched off to save energy. This prevents data loss and allows the car to be restarted.

**Server and visualization** (built by teammates)

- **Processing:** an asynchronous Python bridge with outlier detection, derived quantities (rolling km/kWh efficiency, distance and elevation), an optimal-cruising-speed estimator and driver notifications.
- **Interfaces:** a pit dashboard, a low-latency driver display and a historical analysis workbench.
- **Brazil 2026:** a run archive with an AI assistant that answers questions about each recorded session.

## <u>Development process & iterations</u>

### V0 — Breadboard prototype (Shell Eco-marathon Americas 2025, Indianapolis)

- **Hardware:** ESP32-WROOM-32 DevKit on a breadboard with a Hall-effect current module, a voltage divider, a NEO-6M GPS and an MPU6050.
- **Data path:** published over MQTT to ThingSpeak.
- **Result:** live current and voltage were transmitted during a run. The voltage channel carried a constant ~15 V offset from incorrect calibration.
- **Analytics:** a neural-network energy model was proposed, but there was too little transmitted data to train or test it on the vehicle.
- **Outcome:** 1st place, Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-breadboard-2025.jpg' | relative_url }}" alt="Breadboard prototype with ESP32 and NEO-6M GPS"><figcaption>First prototype: ESP32 DevKit and NEO-6M GPS on a breadboard.</figcaption></figure>
  <figure class="tel-fig sq"><img src="{{ 'assets/img/tel-proto-hall-2025.jpg' | relative_url }}" alt="Protoboard with ESP32 and Hall-effect current module"><figcaption>Protoboard version with a Hall-effect current module, used at Americas 2025.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-indy-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>The car on track at Indianapolis Motor Speedway, Americas 2025.</figcaption></figure>
</div>

<div class="tel-grid single">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-thingspeak-2025.jpg' | relative_url }}" alt="ThingSpeak current and voltage charts, 2025"><figcaption>Live data visualization in ThingSpeak during Shell Eco-marathon Americas 2025: motor current readings ranged from 14.5 to 17.6 A, with an approximately 15 A calibration offset. The voltage trace was accurate at 57.0 V, consistent with the battery's nominal operating voltage of approximately 60 V.</figcaption></figure>
</div>

### V1 — First custom board (Shell Eco-marathon Brazil 2025)

- **Current sensing:** replaced the Hall module with my shunt design (INA240A1, 20 mΩ, RC-filtered). It went from a hand-etched board (July 2025) to an Altium breakout and then a fabricated PCB.
- **Hardware:** ESP32-C3 SuperMini, voltage divider (1 MΩ / 56 kΩ), GPS, IMU and two Hall inputs on a single board I designed.
- **Connectivity:** Wi-Fi through a cellular hotspot to a Python MQTT broker.
- **Result:** high latency, a long sampling interval and mechanical issues limited the usable data to about one lap.
- **Lesson:** the 20 mΩ shunt saturated the amplifier at the car's real currents, because the current had been estimated too low in the design.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Hand-etched INA240 current-sense prototype"><figcaption>July 2025: hand-etched INA240 current-sense prototype.</figcaption></figure>
  <figure class="tel-fig sq"><img src="{{ 'assets/img/tel-ina240-breakout.jpg' | relative_url }}" alt="Altium render of the INA240 breakout board"><figcaption>The same circuit as an Altium breakout: shunt, INA240A1, RC filter and header.</figcaption></figure>
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-pcb-brazil25.jpg' | relative_url }}" alt="Brazil 2025 telemetry board with GPS and IMU"><figcaption>Brazil 2025 telemetry board, fabricated, with the GPS and IMU modules.</figcaption></figure>
</div>

<div class="tel-grid">
  <figure class="tel-fig sq"><img src="{{ 'assets/img/tel-sch-brazil25.png' | relative_url }}" alt="Telemetry schematic, Brazil 2025"><figcaption>Brazil 2025 schematic: 20 mΩ shunt with INA240A1, 1 MΩ / 56 kΩ divider, MPU6050, NEO-6M and ESP32-C3 SuperMini.</figcaption></figure>
  <figure class="tel-fig sq"><img src="{{ 'assets/img/tel-pcb-brazil25-layout.jpg' | relative_url }}" alt="Brazil 2025 PCB layout in Altium"><figcaption>Brazil 2025 layout in Altium, with the shunt section (IN/OUT pads) on the right.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-brazil-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Track at Pier Mauá, Rio de Janeiro — Brazil 2025.</figcaption></figure>
</div>

### Data analysis between seasons

- **Model comparison:** using the data collected so far, we compared eight regression models in Altair AI Studio.
- **Result:** relative errors ranged from 36 % (decision tree) to 80 % (deep learning). With such a small dataset, no model was reliable enough as a predictor.
- **Useful outcome:** the ranking of input variables, with vehicle speed as the most influential factor. That finding pointed the next season's work toward speed strategy.
- **Recognition:** this work received an Honorable Mention in the Altair Global Student Contest 2025.

<div class="tel-grid single">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-altair.png' | relative_url }}" alt="Altair AI Studio model comparison and factor ranking"><figcaption>Altair AI Studio: eight models compared on relative error and runtime (top); variable ranking with speed as the dominant factor (bottom right).</figcaption></figure>
</div>

### V2 — Complete redesign (Shell Eco-marathon US 2026)

- **Microcontroller:** moved to the ESP32-C5 for 5 GHz connectivity, with an external antenna to get around the carbon monocoque.
- **Shunt:** reduced from 20 mΩ to 5 mΩ to cover the real current range without saturating the amplifier.
- **New interfaces:** ADS1115 for driver inputs, CAN to the motor controller, and SD-card logging.
- **Build:** purple PCB in a 3D-printed enclosure.
- **Software (team):** a new web platform with three dashboards and server-side processing.
- **Outcome:** 2nd place, Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq"><img src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="Altium 3D render of the US 2026 board"><figcaption>US 2026 board, Altium 3D render: ESP32-C5 footprint, sensor connectors and the shunt section.</figcaption></figure>
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-pcb-us26.jpg' | relative_url }}" alt="Fabricated US 2026 board with ESP32-C5"><figcaption>The fabricated board with the ESP32-C5 and IMU mounted.</figcaption></figure>
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-pcb-us26-enclosure.jpg' | relative_url }}" alt="US 2026 board in its 3D-printed enclosure"><figcaption>In its 3D-printed enclosure, ready for the car.</figcaption></figure>
</div>

### V3 — Robustness revision (Shell Eco-marathon Brazil 2026)

My role in this revision was primarily mentor and supervisor: José Diego González led the hardware work, with my guidance on design decisions and assembly.

- **Same circuit, new layout:** re-routed board.
- **Assembly:** improved pin soldering to remove intermittent disconnections and EM noise.
- **Wiring:** a safer locking power connector.
- **Energy reserve:** the supercapacitor module was added.
- **Software (team):** a new web platform with a run archive and an AI-assisted analysis assistant.

<div class="tel-grid">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-pcb-br26-layout.png' | relative_url }}" alt="Brazil 2026 PCB layout in Altium"><figcaption>Brazil 2026 layout in Altium, credited to Paulina Ruíz Servín and José Diego González Fernández.</figcaption></figure>
  <figure class="tel-fig photo tall"><img src="{{ 'assets/img/tel-pcb-br26.jpg' | relative_url }}" alt="Fabricated Brazil 2026 board with microSD slot"><figcaption>The fabricated Brazil 2026 board, with the microSD slot and the locking power connector.</figcaption></figure>
</div>

<div class="tel-grid">
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-supercap.jpg' | relative_url }}" alt="Supercapacitor energy-reserve module"><figcaption>Supercapacitor energy-reserve module: about 60 s of operation after a power loss.</figcaption></figure>
  <figure class="tel-fig"><img src="{{ 'assets/img/tel-supercap-render.jpg' | relative_url }}" alt="3D render of the energy-reserve board"><figcaption>3D render of the energy-reserve board.</figcaption></figure>
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Telemetry installed in the vehicle"><figcaption>Telemetry installed in the vehicle, next to the battery.</figcaption></figure>
</div>

## Technical challenges & solutions

**1. Miscalibrated current reading (2025).** ThingSpeak showed a constant ~15 A offset on the motor current channel, so the efficiency calculation was wrong at its source. I moved voltage and current measurement onto my own board with a defined divider ratio and current-sense amplifier, so both could be calibrated against known values. _Lesson:_ calibrate every analog channel before the event.

**2. Undersized current range (Brazil 2025).** The 20 mΩ shunt was sized for a lower current than the car actually drew, and the amplifier output saturated. For US 2026 I reduced the shunt to 5 mΩ, which quarters the signal per ampere and widens the measurable range accordingly. _Lesson:_ size the shunt from measured peak current with margin, not from the expected consumption.

**3. Data lost in transit (Brazil 2025).** Only about one lap of usable data reached the server, because of latency over the cellular link, a long sampling interval and mechanical issues. The next version changed the microcontroller and radio, and stopped relying on the network for data integrity: every frame now goes to the SD card first and is transmitted afterwards.

**4. Radio attenuation by the carbon monocoque.** The conductive carbon structure blocks Wi-Fi signals from inside the car. The solution was an external antenna on the windshield.

**5. Intermittent faults from assembly.** Disconnections and electromagnetic noise were traced to pin soldering and wiring. The Brazil 2026 revision kept the circuit, re-routed the board, improved the soldering and switched to a locking connector.

**6. Losing data when the car loses power.** An unexpected power loss, or switching off the car to save energy, would cut the telemetry and leave a gap in the log. A supercapacitor module, designed by José Diego under my supervision, powers the system for about 60 s after power is lost: enough to keep transmitting and to restart the vehicle.

**7. Validating strategy before the car existed.** The 2026 car was still being built when the strategy work had to start. The team connected the physical motor and controller to the Assetto Corsa simulator in a closed loop: the driver's throttle drove the real motor, and the motor's response was fed back to the game. The telemetry board logged current and voltage at the same time. The two data streams had no shared clock, so they were aligned offline by matching throttle-off events to drops in current and then cross-correlating the signals.

<div class="tel-grid single">
  <figure class="tel-fig photo auto"><img src="{{ 'assets/img/tel-sim-setup.jpg' | relative_url }}" alt="Simulator bench test with the physical motor in the loop"><figcaption>Simulator bench test: Assetto Corsa with steering wheel and pedals, the physical motor and controller in the loop, and the live telemetry dashboard.</figcaption></figure>
</div>

<div class="tel-grid">
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-sim-bench.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Driving the Indianapolis circuit in the simulator.</figcaption></figure>
  <figure class="tel-fig sq photo"><img src="{{ 'assets/img/tel-motor-temp.jpg' | relative_url }}" alt="IR thermometer reading on the motor during the bench test"><figcaption>Motor temperature during the bench test (47.7 °C): checking in-car behaviour and whether cooling would be needed after a valid attempt.</figcaption></figure>
</div>

## Testing & validation

<table class="tel-table">
  <tr><th>Test</th><th>Setup</th><th>Result</th></tr>
  <tr><td>Americas 2025 on track</td><td>Breadboard system → MQTT → ThingSpeak</td><td>Live current trace (14.5–17.6 A); voltage reading correct at 57 V (battery ~60 V); ~15 V offset was on the current channel</td></tr>
  <tr><td>Brazil 2025 on track</td><td>Custom V1 board, cellular Wi-Fi</td><td>About one lap of usable data; latency, sampling interval and shunt saturation identified as the limits</td></tr>
  <tr><td>Model comparison</td><td>8 regression models in Altair AI Studio</td><td>Relative errors of 36–80 %; speed identified as the dominant variable</td></tr>
  <tr><td>Simulator bench test (Mar 2026)</td><td>Motor and controller in the loop with Assetto Corsa; Indianapolis circuit; 15 laps</td><td>Constant throttle: <strong>347.2 km/kWh</strong>; throttle pulses and coasting: <strong>304.3 km/kWh</strong> (14.1 % less efficient); combined strategy: 331.6 km/kWh. Motor temperature monitored with an IR thermometer</td></tr>
  <tr><td>Brazil 2026 on track</td><td>V3 board, SD logging, energy reserve</td><td>3 sessions recorded as training data for a future AI model; one disconnection of about 15 s, link essentially uninterrupted in the other sessions</td></tr>
</table>

<div class="tel-grid single">
  <figure class="tel-fig tall"><video src="{{ 'assets/img/tel-brazil-2026-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>On track in Rio de Janeiro, Brazil 2026 — one of the three recorded sessions.</figcaption></figure>
</div>

## Driver display, dashboards & track analysis

As the main driver, I tested the driver display from the cockpit and decided what it shows. The dashboards and the run archive were built by the web team, working from the variables and interpretation we defined together.

<div class="tel-grid single">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-driver-display.png' | relative_url }}" alt="Driver display during a simulator session"><figcaption>Driver display during a simulator session: session time, speed, target speed and efficiency.</figcaption></figure>
</div>

<div class="tel-grid">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-dashboard.png' | relative_url }}" alt="Real-time pit dashboard"><figcaption>Real-time pit dashboard, US 2026 (built by the web team).</figcaption></figure>
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-track-map.png' | relative_url }}" alt="Track map coloured by telemetry"><figcaption>Lap trace on the Indianapolis layout, coloured by telemetry values.</figcaption></figure>
</div>

<div class="tel-grid">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-run-archive.png' | relative_url }}" alt="Run archive of the Brazil 2026 web platform"><figcaption>Run archive, Brazil 2026: 14 sessions and 55.1 K telemetry records (built by the web team).</figcaption></figure>
  <figure class="tel-fig auto"><video src="{{ 'assets/img/tel-web-platform.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Session analysis in the web platform.</figcaption></figure>
</div>

<div class="tel-grid single">
  <figure class="tel-fig auto"><img src="{{ 'assets/img/tel-indy-3d.png' | relative_url }}" alt="MATLAB 3D reconstruction of the Indianapolis circuit"><figcaption>My MATLAB 3D reconstruction of the Indianapolis circuit from 2,696 GPS fixes (latitude, longitude, altitude); the elevation varies by about 3.8 m around the lap.</figcaption></figure>
</div>

Download the MATLAB files: [Live Script (.mlx)]({{ 'assets/files/indianapolis-track/Indianapolis_track.mlx' | relative_url }}) · [plain script (.m)]({{ 'assets/files/indianapolis-track/Indianapolis_track.m' | relative_url }}) · [GPS data (.xlsx)]({{ 'assets/files/indianapolis-track/sem_2023_us.xlsx' | relative_url }})

## Results & achievements

- **Data & Telemetry Award:** 1st place at Shell Eco-marathon Americas 2025, 2nd place at Shell Eco-marathon Americas 2026.
- **Altair Global Student Contest 2025:** Honorable Mention.
- **Conference publication:** a paper documenting the telemetry platform's recent advances — hardware, firmware and data architecture up to and including the Brazil 2026 season — was accepted and presented at a conference, consolidating the work across multiple iterations.
- **Hardware evolution:** from a breadboard prototype to three generations of custom telemetry PCBs integrated into the vehicle.
- **Driving strategy:** the simulator bench test identified constant throttle as the most efficient strategy before the car reached the track.
- **Data resilience:** the final architecture combines SD logging, buffered retransmission and a supercapacitor energy reserve.

<div class="tel-grid">
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-soldering.jpg' | relative_url }}" alt="Soldering a sensor board"><figcaption>Soldering and debugging a sensor board.</figcaption></figure>
  <figure class="tel-fig photo"><img src="{{ 'assets/img/tel-trackside-brazil.jpg' | relative_url }}" alt="Briefing the drivers trackside in Rio de Janeiro"><figcaption>Briefing the drivers trackside in Rio de Janeiro.</figcaption></figure>
</div>

## Skills & lessons learned

- **Analog front-end design:** shunt sizing from real current measurements, current-sense amplifiers, input filtering, voltage scaling and calibration.
- **Mixed-protocol embedded systems:** CAN (TWAI), SPI, I²C, UART and ADC on one board.
- **PCB iteration:** each revision driven by failures seen in the field, not by new features.
- **Designing for data integrity:** in field telemetry, the local log is the source of truth and the radio link is best-effort.
- **Honest data analysis:** with a small dataset, the useful result was the variable ranking, not a predictive model.
- **Driver-centred interfaces:** as both engineer and driver, I learned that the driver display must be readable at a glance.
- **Technical leadership:** turning engineering needs into requirements for a separate software team, and supervising a teammate's hardware design.
- **Next step:** characterize the drivetrain on a dynamometer to build a higher-fidelity digital twin for the simulator loop, and gather enough runs to train a reliable energy model.

**Context:** Escudería EcoVolt CCM, Shell Eco-marathon, 2024–2026.
**Result:** 1st place (2025) and 2nd place (2026), Data & Telemetry Award; Honorable Mention, Altair Global Student Contest 2025.
**Stack:** Altium Designer, ESP32-C3/C5, C++, INA240, ADS1115, CAN (TWAI), SPI, I²C, UART, MQTT, u-blox u-center, MATLAB, Altair AI Studio, Assetto Corsa bench testing
