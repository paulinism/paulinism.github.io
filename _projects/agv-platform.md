---
layout: page
title: Scissor Lift & AGV — Automated Material Handling Platform
description: Scissor lift + line-following AGV for material handling — base load-tested at >100 kg
img: assets/img/agv.png
importance: 6
category: Mechanical, Electronics
featured: true
---

Fourth-semester integrative challenge (team of 5) at Tec de Monterrey: a scissor lift and line-following AGV for automated material handling, from mechanical design through embedded control and fabrication.

**Challenge**

Build a scissor lift that raises, weighs, and dumps a 1–5 kg load, carried between stations by a line-following AGV. Two constraints shaped the design: the unloading tilt had to reach ≥25°, and the load cell had to be read without an off-the-shelf conditioner (HX711 not allowed).

**My contribution**

- **Mechanical design:** built the full assembly of the lift; remodeled, validated, and 3D-printed the tilting cam; ran motion studies of the mechanism
- **Electronics:** built the PCB for the load-cell measurement chain (Wheatstone bridge → amplifiers → low-pass filter → ADC)
- **Embedded:** proposed splitting control across three ESP32s; programmed the 16×2 LCD; brought up the stepper lift drive
- **Manufacturing:** turned and milled the aluminum motor coupler and the connecting rod

Teammates led the AGV/lift control firmware, scale calibration, and base welding.

**Tools & technologies**

- **SolidWorks:** full assembly, cam modeling, motion study
- **Siemens NX:** parametric modeling, motion simulation
- **ESP32 / ESP-IDF (C++):** 16×2 LCD control, stepper bring-up (NEMA 17, DRV8825)
- **Op-amp signal conditioning + custom PCB:** load-cell measurement chain
- **FDM printing (ABS):** cam manufacturing
- **Lathe, milling machine, tapping:** aluminum coupler and connecting rod
- **Cost estimation:** per-operation cost model with estimated machine rates, plus cutting-data calculation

**Results & lessons**

- **Structure:** base frame held >100 kg with no visible deformation — confirms the material choice (steel rectangular-tube base under a lightweight aluminum scissor structure), a large margin over the 5 kg payload
- **Payload:** the platform carried 7 kg at the final demo, 40% above the 5 kg requirement — the scissor linkage and lead-screw drive worked beyond specification
- **Footprint:** the final lift measures 40 × 30 × 76 cm, meeting the minimum footprint while adding a tilting platform and a scale on top
- **Lift drive:** the lead-screw mechanism was validated under load using a drill as the rotary actuator before the motor was integrated, separating mechanical validation from electrical validation
- **Tilt mechanism:** the cam was designed for ≥30° against a ≥25° requirement; the dump motion was demonstrated in a full-size test and a scaled prototype. When the ABS cam cracked at the motor shaft, a bearing-supported aluminum shaft on the opposite side fixed it
- **Scale:** output was linear from 0–5 kg to 0–3 V, measured in 1 kg steps, with no off-the-shelf conditioner — stays inside the ESP32's ADC range, and moving from breadboard to PCB removed shorts and loose connections
- **Outcome:** full autonomous integration was not completed — motor drivers failed from a short circuit and one AGV motor was defective
- **Lesson:** treat electrical insulation as a design requirement, and size actuators by calculation, not recommendation

**Context:** Tec de Monterrey, Feb–Jun 2025, 4th-semester integrative challenge, team of 5.
**Result:** functional scissor lift, 40 × 30 × 76 cm, base load-tested at >100 kg.
**Stack:** SolidWorks, Siemens NX, ESP32/ESP-IDF, op-amp signal conditioning, custom PCB, FDM printing, lathe/milling
