---
layout: page
title: Automated Viscosity Measurement System
description: Current-based viscosity measurement and sorting system — PCB design, signal conditioning, ESP32/PLC control
img: assets/img/viscosity.png
importance: 5
category: PCB, Embedded, Automation
featured: true
---

<style>
  .vis-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .vis-grid.single { grid-template-columns: minmax(0, 560px); justify-content: center; }
  .vis-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .vis-fig img { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .vis-fig.photo img { object-fit: cover; }
  .vis-fig.auto img { height: auto; }
  .vis-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
</style>

Industrial Automation challenge (team of 4) at Tec de Monterrey, with Endress+Hauser as industry partner: an automated fluid-handling cycle combining PLC and ESP32 control.

**Challenge**

Automate a full fluid-handling cycle: identify a sample by its color tag, measure its viscosity, dilute it to a target (±10%), then sort it. Two constraints shaped the design: viscosity had to be inferred from the spindle motor's current, with no commercial viscometer, and control was split between PLC stations (supply and sorting) and an ESP32 station (measurement), which communicate with each other.

**My contribution**

- **PCB design:** designed all three boards of the measurement station — the ESP32 master and slave boards (two-layer, IPC-2221 trace sizing, manufactured by JLCPCB) and the op-amp board for viscosity measurement
- **Signal conditioning:** co-developed the current-sensing chain (1 Ω shunt, two-stage UA741 amplification, about 400× gain), simulated it at 61 mA and 67 mA, and verified it on our own PCB
- **Embedded** (co-developed with a teammate): homing and measuring routines, moving-average filtering of the current signal, color-tag reading over I²C, Bluetooth link to the LabVIEW HMI, UART between the two ESP32s, and the song played during measurement
- **PLC & manufacturing:** built the conveyor belts, programmed the ladder logic for some of them, and placed and calibrated the FC-51 sensors

Teammates led the mechanical design of the stations, the PLC sequence design, and the LabVIEW HMI.

**System**

<div class="vis-grid">
  <figure class="vis-fig"><img src="{{ 'assets/img/viscosity.png' | relative_url }}" alt="SolidWorks render of the full system"><figcaption>Design: SolidWorks render of the carousel, measurement station and conveyors.</figcaption></figure>
  <figure class="vis-fig photo"><img src="{{ 'assets/img/visc-system-test.jpg' | relative_url }}" alt="Integrated system during testing"><figcaption>Build: the integrated system during testing, with the control electronics laid out around it.</figcaption></figure>
</div>

**PCB design**

<div class="vis-grid">
  <figure class="vis-fig photo"><img src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="ESP32 master board"><figcaption>ESP32 master board: drives the main motors, including the stepper of the carousel (stepper and encoder terminals, I²C connector, level shifter).</figcaption></figure>
  <figure class="vis-fig photo"><img src="{{ 'assets/img/visc-esp32-board-b.jpg' | relative_url }}" alt="ESP32 slave board"><figcaption>ESP32 slave board: sensors and peripherals (PLC signals, fan and water pump), plus the buzzer that plays the song during measurement.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig"><img src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Op-amp measurement board layout"><figcaption>Op-amp measurement board: PCB layout.</figcaption></figure>
  <figure class="vis-fig photo"><img src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="Fabricated and wired op-amp board"><figcaption>The same board, fabricated and wired.</figcaption></figure>
</div>

**Signal conditioning**

<div class="vis-grid">
  <figure class="vis-fig auto"><img src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Multisim simulation at 61 mA"><figcaption>Multisim at 61 mA: 61 mV across the 1 Ω shunt becomes about 250 mV at the ADC input.</figcaption></figure>
  <figure class="vis-fig auto"><img src="{{ 'assets/img/visc-sim-67ma.jpg' | relative_url }}" alt="Multisim simulation at 67 mA"><figcaption>Multisim at 67 mA: 67 mV becomes about 2.67 V, clamped by the 3.3 V Zener.</figcaption></figure>
</div>

**Conveyors**

<div class="vis-grid single">
  <figure class="vis-fig photo"><img src="{{ 'assets/img/visc-conveyors.jpg' | relative_url }}" alt="Conveyor belts with FC-51 sensors"><figcaption>The conveyor belts I built, with FC-51 sensors for cup detection.</figcaption></figure>
</div>

**Tools & technologies**

- **PCB design (IPC-2221, JLCPCB):** ESP32 master/slave boards, op-amp measurement board
- **Multisim:** simulation of the two-stage amplifier across the 61–67 mA range
- **ESP32 (C++, ESP-IDF):** homing and measuring routines, digital filtering, TCS34725 color sensor over I²C, Bluetooth, master/slave over UART
- **OpenPLC on Arduino Mega (ladder):** conveyor control at the supply station
- **FC-51 IR sensors:** cup detection on the belts
- **Laser-cut MDF, aluminum rollers, rubber belts:** conveyor manufacturing

**Results & lessons**

- **Viscosity measurement:** a 6 mA current window, amplified about 400× into the ESP32 ADC range, gave a repeatable separation between diluted and pure soap (252 vs 1676 cP)
- **Water dosing:** running the pump at 5 V made it controllable, delivering 19/26/36 ml against 18/27/36 ml targets
- **Conveyors:** the belts carried 5 kg (supply) and 8 kg (sorting) against a requirement below 1 kg
- **Outcome:** the automatic sequence ran on video, but the live demo failed because of wiring faults and short circuits — the PLC boards were swapped for breadboards after the FC-51 sensors drew more current than the board supply could deliver
- **Lessons:** route a short common ground for inter-board UART, since a RX/TX mismatch on the slave board cost debugging time; budget sensor supply current before routing a board, and check pin assignments against the target software (OpenPLC addressing) before fabrication

**Context:** Tec de Monterrey, Aug–Dec 2025, Industrial Automation challenge with Endress+Hauser as industry partner, team of 4.
**Result:** current-based viscosity measurement separating 252 cP from 1676 cP on a custom PCB.
**Stack:** ESP32/ESP-IDF, custom PCB design (IPC-2221), Multisim, OpenPLC (Arduino Mega), I²C, UART, Bluetooth, LabVIEW HMI
