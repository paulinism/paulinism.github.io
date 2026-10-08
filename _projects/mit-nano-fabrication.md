---
layout: page
title: Semiconductor Microfabrication — MIT.nano
description: Cleanroom device fabrication — solar cells, MEMS cantilevers, and microfluidic mixers
img: assets/img/mitnano-cleanroom-equipment.jpg
importance: 4
category: Fabrication, Electronics
featured: true
hide_from_grid: true # shown in the "Professional & lab experience" section instead of the academic grid
---

<style>
  .mit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0 1.5rem; }
  .mit-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .mit-fig img, .mit-fig video { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .mit-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  </style>

Hands-on semiconductor device fabrication intensive at **MIT.nano** (MIT, Cambridge, USA, October 2025): a one-week cleanroom course from the MIT–Tec de Monterrey program, done as a team of 2, covering three full fabrication modules in Class 100/1K/10K cleanrooms under strict PPE/safety protocols.

**Challenge**

Take three devices through the full microfabrication cycle in one week: thin-film deposition, pattern transfer, etching and release, packaging and functional testing. Each module required choosing process parameters (recipe, exposure energy, film thickness) and verifying the result at the microscale before moving to the next step.

**My contribution**

- **Fabrication:** executed thin-film deposition, photolithography, and wet and dry etching steps across all three modules, as a two-person team
- **Physical validation and characterization of all devices:** measured coating thickness by ellipsometry, took the solar cell's IV curve under a solar simulator, tested the MEMS beams under force–displacement, and ran tracer-particle flow tests on the microfluidic mixer (details in each module below)
- **Safety:** worked in full cleanroom PPE for the KOH and other hazardous chemical steps
- **Report:** co-authored the technical report under Dr. Javier Izquierdo Reyes and Dr. Arnoldo Salazar Soto

**In the cleanroom**

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-photolitho-track.jpg' | relative_url }}" alt="Photolithography track"><figcaption>Photolithography track (resist coat and develop) in the yellow-light room.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-asher.jpg' | relative_url }}" alt="Plasma asher control screen"><figcaption>Plasma asher control screen (recipe ash thin, 250 °C, about 1.2 Torr, O₂ and N₂ flow).</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-wet-bench-acid.jpg' | relative_url }}" alt="Loading a wafer carrier into the Spin Rinse Dryer"><figcaption>In acid-resistant PPE: after the piranha solution clean, the wafers go into the Spin Rinse Dryer (SRD).</figcaption></figure>
</div>

**Module 1 · Solar cell**

_Process._ Deposited the silicon nitride anti-reflective coating at two thicknesses (80 nm and 100 nm, measured by ellipsometry) to compare them. Patterned the front contacts by photolithography and RIE, sputtered Ti/Al (50 nm / 1 µm), wet-etched the excess metal, cleaved the cells and measured the IV curve.

_What it demonstrated._

- The best device (30 µm fingers, 25 lines, 160 µm pitch) produced a clear diode IV curve under illumination, with Voc = 0.60 V and a power conversion efficiency of 15.87 % (fill factor 47.25 %) as reported by the IV-sweep software
- The second wafer failed and reached only about 2 % efficiency, which shows how sensitive the result is to coating and metallization quality

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-nitride-wafer.jpg' | relative_url }}" alt="Silicon nitride coated wafer"><figcaption>Wafer coated with the silicon nitride anti-reflective layer.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-thickness-station.jpg' | relative_url }}" alt="Film thickness measurement station"><figcaption>Film thickness measurement of the coating.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-metallized-wafer.jpg' | relative_url }}" alt="Wafer with metal contact patterns"><figcaption>Wafer with the front-contact patterns, with different finger densities across the cells.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-wafer-cleaving.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Cleaving the wafer into individual cells.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-solar-cell-probe.jpg' | relative_url }}" alt="Solar cell on the measurement stage"><figcaption>A finished cell contacted for the IV measurement.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-iv-curve.jpg' | relative_url }}" alt="IV sweep of the best device"><figcaption>IV sweep of the best device under illumination; the software readout shows PCE 15.87 %, Voc 0.60 V and FF 47.25 %.</figcaption></figure>
</div>

**Module 2 · MEMS cantilevers and bridges**

_Process._ Deposited about 1.2 µm of low-stress mixed-frequency silicon nitride after an RCA clean. Set the exposure at about 130 mJ/cm² for a 15 µm beam width. Estimated the SF₆ etch endpoint from interference, released the beams in KOH and tested them under force–displacement.

_What it demonstrated._

- The bridges reached the bottom of the cavity under a 4 mg load and returned to their initial position
- All cantilevers survived the bending tests without breaking
- One bridge came out incomplete; it is documented as a process defect

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-bridge-test-a.jpg' | relative_url }}" alt="Well-fabricated bridge"><figcaption>Well-fabricated bridge: a continuous structure extending from one side of the opening to the other.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-bridge-test-b.jpg' | relative_url }}" alt="Defective bridge"><figcaption>Defective bridge: the structure is incomplete, likely due to process inconsistencies during fabrication.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-profilometer-stage.jpg' | relative_url }}" alt="Mechanical test equipment with the patterned wafer"><figcaption>Mechanical test equipment, which applies controlled micro-scale forces, with the patterned wafer on the stage.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-bridge-view.jpg' | relative_url }}" alt="Real-time camera view during the bridge test"><figcaption>Real-time camera view of the bridge with the tester's tip positioned on it.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-profilometer-scan.jpg' | relative_url }}" alt="Force-displacement plot of the bridge test"><figcaption>Force–displacement plot for a 4 mg test on a narrow bridge: the bridge is pulled down until it reaches the bottom of the cavity, then returns to its initial position.</figcaption></figure>
</div>

**Module 3 · Microfluidic mixer**

_Process._ Spun a ~30 µm SU-8 2025 mold, cast the PDMS, bonded it to glass with O₂ plasma and ran flow tests with 3 µm tracer particles.

_What it demonstrated._

- The two streams flowed side by side in laminar co-flow, and the tracer particles made local eddies visible
- The tracer particles accumulated at the walls, where flow velocity is close to zero, until the channel blocked completely, a real failure mode for microfluidic devices

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-flow-setup.jpg' | relative_url }}" alt="Microfluidic flow test setup"><figcaption>Flow test setup: stereo microscope, pressure controller, tubing and the PDMS device on glass.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-su8-mold.jpg' | relative_url }}" alt="SU-8 mold wafer"><figcaption>SU-8 mold wafer with the mixer channel designs.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-pdms-casting.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Pouring PDMS over the SU-8 mold to cast the microfluidic device.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-coflow.jpg' | relative_url }}" alt="Two streams in laminar co-flow"><figcaption>Two streams flowing side by side in laminar co-flow at the channel junction.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-particle-clog.jpg' | relative_url }}" alt="Tracer particles accumulated at the channel junction"><figcaption>Tracer particles accumulating at the channel junction until the channel blocked.</figcaption></figure>
</div>

**Tools & technologies**

- **Silicon nitride deposition (mixed- and high-frequency recipes):** anti-reflective coating and structural layer
- **Ellipsometry:** film thickness measurement
- **Photolithography (positive resist with HMDS prime; SU-8 negative resist):** contact grids, beam geometry, microfluidic mold
- **RIE (SF₆) with interferometric endpoint:** silicon nitride patterning
- **Wet etching (KOH, HF, aluminum etchant):** beam release, Ti and Al removal
- **Sputtering (Ti/Al):** solar cell metallization
- **PDMS soft lithography and O₂ plasma bonding:** microfluidic device
- **Force–displacement tester, optical microscope, solar simulator with IV sweep:** characterization

**Lessons**

- **Contamination control:** a wafer broke during cleaving because the workstation was not clean. Contamination control applies to every step, not only to the cleanroom itself.
- **Failure modes:** the microfluidic channel blocked because tracer particles collected at the walls, so test conditions have to be planned for that.

**Context:** MIT.nano, Cambridge, USA — one-week cleanroom intensive, semiconductor fabrication (Oct 2025).
**Stack:** LPCVD/PECVD, photolithography, RIE/KOH wet etching, PDMS soft lithography, cleanroom protocols (Class 100/1K/10K)
