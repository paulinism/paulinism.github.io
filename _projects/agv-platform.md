---
layout: page
title: Scissor Lift & AGV — Automated Material Handling Platform
description: Scissor lift + line-following AGV for material handling — base load-tested at >100 kg
img: assets/img/agv-cover-pair.jpg
importance: 6
category: Mechanical, Electronics
featured: true
---

<style>
  .agv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .agv-grid.single { grid-template-columns: minmax(0, 520px); justify-content: center; }
  .agv-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .agv-fig img, .agv-fig video { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .agv-fig.photo img { object-fit: cover; }
  .agv-fig.tall img { height: 400px; object-position: center 20%; }
  .agv-fig.auto img { height: 300px; }
  .agv-fig.auto video { height: auto; }
  .agv-fig.clip video { height: 300px; }
  .agv-fig.tall video { height: 400px; }
  .agv-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
</style>

Fourth-semester integrative challenge (team of 5) at Tec de Monterrey: a scissor lift and line-following AGV for automated material handling, from mechanical design through embedded control and fabrication.

<div class="agv-grid">
  <figure class="agv-fig"><img src="{{ 'assets/img/agv-cover.jpg' | relative_url }}" alt="SolidWorks assembly of the scissor lift with tilting tray"><figcaption>Full SolidWorks assembly of the scissor lift and tilting tray.</figcaption></figure>
  <figure class="agv-fig"><img src="{{ 'assets/img/agv-prototype.jpg' | relative_url }}" alt="Assembled prototype with the tilting table and printed cam"><figcaption>Assembled prototype: tilting table, ABS-printed cam and gearmotor.</figcaption></figure>
  <figure class="agv-fig"><img src="{{ 'assets/img/agv-final-build.jpg' | relative_url }}" alt="Final lift build with load-cell scale and electronics on the tray"><figcaption>Final build: load-cell scale and electronics on the tray, welded base.</figcaption></figure>
</div>

**Challenge**

Build a scissor lift that raises, weighs, and dumps a 1–5 kg load, carried between stations by a line-following AGV. Two constraints shaped the design: the unloading tilt had to reach ≥25°, and the load cell had to be read without an off-the-shelf conditioner (HX711 not allowed).

**My contribution**

- **Mechanical design:** built the full assembly of the lift; remodeled, validated, and 3D-printed the tilting cam; ran motion studies of the mechanism
- **Electronics:** built the PCB for the load-cell measurement chain (Wheatstone bridge → amplifiers → low-pass filter → ADC)
- **Embedded:** proposed splitting control across three ESP32s; programmed the 16×2 LCD; brought up the stepper lift drive
- **Manufacturing:** turned and milled the aluminum motor coupler and the connecting rod

<div class="agv-grid">
  <figure class="agv-fig photo tall"><img src="{{ 'assets/img/agv-lathe-2.jpg' | relative_url }}" alt="Paulina turning on the lathe"><figcaption>Turning a part on the lathe, with the digital readout.</figcaption></figure>
  <figure class="agv-fig clip tall">
    <video src="{{ 'assets/img/agv-coupler.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Machined aluminum coupler mounted on the NEMA 17 lift motor.</figcaption>
  </figure>
</div>

Teammates led the AGV/lift control firmware, scale calibration, and base welding.

**Design & simulation**

Before building, I checked the mechanism in simulation: an NX motion study of the scissor linkage, a static displacement check on one arm, and a SolidWorks animation of the cam-driven tilting tray.

<div class="agv-grid">
  <figure class="agv-fig clip">
    <video src="{{ 'assets/img/agv-nx-motion.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Siemens NX motion simulation of the scissor linkage (pivots and sliders).</figcaption>
  </figure>
  <figure class="agv-fig auto"><img src="{{ 'assets/img/agv-displacement.png' | relative_url }}" alt="SolidWorks static displacement plot of one scissor arm"><figcaption>SolidWorks Motion Study, static displacement of one scissor arm: maximum 0.28 mm at the free end.</figcaption></figure>
</div>

<div class="agv-grid single"><figure class="agv-fig auto">
  <video src="{{ 'assets/img/agv-cam-tilt.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
  <figcaption>SolidWorks animation of the tilting tray: the cam lifts one side of the tray to dump the load.</figcaption>
</figure></div>

**Electronics**

The load-cell conditioning circuit (differential amplifier, non-inverting amplifier, RC low-pass) and the 16×2 LCD brought up on a breadboard with the ESP32.

<div class="agv-grid">
  <figure class="agv-fig auto"><img src="{{ 'assets/img/agv-loadcell-circuit.png' | relative_url }}" alt="Load-cell signal conditioning circuit"><figcaption>Load-cell conditioning chain: differential amplifier → non-inverting amplifier → RC low-pass → ESP32 ADC (102 kΩ feedback, 1 µF).</figcaption></figure>
  <figure class="agv-fig clip">
    <video src="{{ 'assets/img/agv-lcd.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>16×2 LCD bring-up on the breadboard with the ESP32.</figcaption>
  </figure>
</div>

**Tools & technologies**

- **SolidWorks:** full assembly, cam modeling, motion study
- **Siemens NX:** parametric modeling, motion simulation
- **ESP32 / ESP-IDF (C++):** 16×2 LCD control, stepper bring-up (NEMA 17, DRV8825)
- **Op-amp signal conditioning + custom PCB:** load-cell measurement chain
- **FDM printing (ABS):** cam manufacturing
- **Lathe, milling machine, tapping:** aluminum coupler and connecting rod
- **Cost estimation:** per-operation cost model with estimated machine rates, plus cutting-data calculation

**Results & lessons**

<div class="agv-grid single">
  <figure class="agv-fig tall">
    <video src="{{ 'assets/img/agv-lift-demo.mp4' | relative_url }}" autoplay loop muted playsinline controls style="height: 480px"></video>
    <figcaption>The built scissor lift lowering during testing.</figcaption>
  </figure>
</div>

- **Structure:** base frame held >100 kg with no visible deformation — confirms the material choice (steel rectangular-tube base under a lightweight aluminum scissor structure), a large margin over the 5 kg payload
- **Payload:** the platform carried 7 kg at the final demo, 40% above the 5 kg requirement — the scissor linkage and lead-screw drive worked beyond specification
- **Footprint:** the final lift measures 40 × 30 × 76 cm, meeting the minimum footprint while adding a tilting platform and a scale on top
- **Lift drive:** the lead-screw mechanism was validated under load using a drill as the rotary actuator before the motor was integrated, separating mechanical validation from electrical validation
- **Tilt mechanism:** the cam was designed for ≥30° against a ≥25° requirement; the dump motion was demonstrated in a full-size test and a scaled prototype. When the ABS cam cracked at the motor shaft, a bearing-supported aluminum shaft on the opposite side fixed it
- **Scale:** output was linear from 0–5 kg to 0–3 V, measured in 1 kg steps, with no off-the-shelf conditioner — stays inside the ESP32's ADC range, and moving from breadboard to PCB removed shorts and loose connections
- **Outcome:** full autonomous integration was not completed — motor drivers failed from a short circuit and one AGV motor was defective
- **Lesson:** treat electrical insulation as a design requirement, and size actuators by calculation, not recommendation

<div class="agv-grid">
  <figure class="agv-fig auto"><img src="{{ 'assets/img/agv-voltage-time.png' | relative_url }}" alt="Scale output voltage versus time in 1 kg steps"><figcaption>Scale output over time, loaded in 1 kg steps (voltage in mV; the plot's axis label is a typo).</figcaption></figure>
  <figure class="agv-fig auto"><img src="{{ 'assets/img/agv-force-voltage.png' | relative_url }}" alt="Force versus voltage for the scale"><figcaption>Force (N) vs. voltage (mV) for 1–5 kg: monotonic and close to linear.</figcaption></figure>
</div>

**Context:** Tec de Monterrey, Feb–Jun 2025, 4th-semester integrative challenge, team of 5.
**Result:** functional scissor lift, 40 × 30 × 76 cm, base load-tested at >100 kg.
**Stack:** SolidWorks, Siemens NX, ESP32/ESP-IDF, op-amp signal conditioning, custom PCB, FDM printing, lathe/milling
