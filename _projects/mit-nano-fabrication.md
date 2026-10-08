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
  .mit-snap { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin: 1rem 0 1.5rem; }
  .mit-chip { border: 1px solid rgba(128, 128, 128, 0.3); border-radius: 12px; padding: 0.7rem 0.9rem; }
  .mit-chip b { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.65; margin-bottom: 0.2rem; }
  .mit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0 1.5rem; }
  .mit-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .mit-fig img, .mit-fig video { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .mit-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .mit-result { border-left: 4px solid rgba(128, 128, 128, 0.45); padding: 0.1rem 0 0.1rem 0.9rem; margin: 0.8rem 0; }
</style>

<div class="mit-snap">
  <div class="mit-chip"><b>When &amp; where</b>Oct 2025 · MIT.nano nanoLab, Cambridge, USA</div>
  <div class="mit-chip"><b>Format</b>One-week cleanroom intensive (MIT–Tec de Monterrey program) · team of 2</div>
  <div class="mit-chip"><b>Role</b>Fabrication and characterization of three devices; co-author of the technical report</div>
  <div class="mit-chip"><b>Tools</b>Photolithography · thin-film deposition · sputtering · RIE/KOH etching</div>
</div>

**Result:** three working device types: a silicon solar cell with a measured IV curve, released MEMS beams that passed mechanical testing, and a PDMS microfluidic mixer with laminar co-flow.

**Challenge**

Take three devices through the full microfabrication cycle in one week: thin-film deposition, pattern transfer, etching and release, packaging and functional testing. Each module required choosing process parameters (recipe, exposure energy, film thickness) and verifying the result at the microscale before moving to the next step.

**My contribution**

Working as a two-person team, I carried out every process step on all three devices and co-authored the technical report under Dr. Javier Izquierdo Reyes and Dr. Arnoldo Salazar Soto.

**In the cleanroom**

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-photolitho-track.jpg' | relative_url }}" alt="Photolithography track"><figcaption>Photolithography track (resist coat and develop) in the yellow-light room.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-asher.jpg' | relative_url }}" alt="Plasma asher control screen"><figcaption>Plasma asher control screen (recipe ash thin, 250 °C, about 1.2 Torr, O₂ and N₂ flow).</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-wet-bench-acid.jpg' | relative_url }}" alt="Loading a wafer carrier into a wet-processing tool"><figcaption>Wet processing in acid-resistant PPE: loading the wafer carrier into the tool.</figcaption></figure>
</div>

**1 · Solar cell**

Deposited the silicon nitride anti-reflective coating at two thicknesses (80 nm and 100 nm, measured by ellipsometry) to compare them. Patterned the front contacts by photolithography and RIE, sputtered Ti/Al (50 nm / 1 µm), wet-etched the excess metal, cleaved the cells and measured the IV curve.

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-nitride-wafer.jpg' | relative_url }}" alt="Silicon nitride coated wafer"><figcaption>Wafer coated with the silicon nitride anti-reflective layer.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-thickness-station.jpg' | relative_url }}" alt="Film thickness measurement station"><figcaption>Film thickness measurement of the coating.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-metallized-wafer.jpg' | relative_url }}" alt="Wafer with metal contact patterns"><figcaption>Wafer with the front-contact patterns, with different finger densities across the cells.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-contact-fingers.jpg' | relative_url }}" alt="Contact fingers under the microscope"><figcaption>Contact fingers inspected under the microscope.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-wafer-cleaving.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Cleaving the wafer into individual cells.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-solar-cell-probe.jpg' | relative_url }}" alt="Solar cell on the measurement stage"><figcaption>A finished cell contacted for the IV measurement.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-iv-curve.jpg' | relative_url }}" alt="IV sweep of the best device"><figcaption>IV sweep of the best device under illumination; the software readout shows Voc = 0.60 V.</figcaption></figure>
</div>

<div class="mit-result"><b>Result:</b> the best device (30 µm fingers, 25 lines, 160 µm pitch) produced a clear diode IV curve with Voc = 0.60 V under illumination. The second wafer failed and reached only about 2 % efficiency, which shows how sensitive the result is to coating and metallization quality.</div>

**2 · MEMS cantilevers and bridges**

Deposited about 1.2 µm of low-stress mixed-frequency silicon nitride after an RCA clean. Set the exposure at about 130 mJ/cm² for a 15 µm beam width. Estimated the SF₆ etch endpoint from interference, released the beams in KOH and tested them under force–displacement.

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-profilometer-stage.jpg' | relative_url }}" alt="Profilometer stage with a patterned wafer"><figcaption>Stylus profilometer with a patterned wafer on the stage, before scanning.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-profilometer-scan.jpg' | relative_url }}" alt="Profilometer scan"><figcaption>Stylus profilometer scan across a patterned feature (1000 µm scan, 5 mg stylus force).</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-micrograph-radial.jpg' | relative_url }}" alt="Micrograph of a radial test structure"><figcaption>Optical micrograph of a radial test structure (scale bar 12.5 µm).</figcaption></figure>
</div>

<div class="mit-result"><b>Result:</b> the bridges reached the bottom of the cavity under a 4 mg load and returned to their initial position. All cantilevers survived the bending tests without breaking. One bridge came out incomplete; it is documented as a process defect.</div>

**3 · Microfluidic mixer**

Spun a ~30 µm SU-8 2025 mold, cast the PDMS, bonded it to glass with O₂ plasma and ran flow tests with 3 µm tracer particles.

<div class="mit-grid">
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-su8-mold.jpg' | relative_url }}" alt="SU-8 mold wafer"><figcaption>SU-8 mold wafer with the mixer channel designs.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-pdms-casting.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Pouring PDMS over the SU-8 mold to cast the microfluidic device.</figcaption></figure>
  <figure class="mit-fig"><img src="{{ 'assets/img/mit-coflow.jpg' | relative_url }}" alt="Two streams in laminar co-flow"><figcaption>Two streams flowing side by side in laminar co-flow at the channel junction.</figcaption></figure>
</div>

<div class="mit-result"><b>Result:</b> the two streams flowed side by side in laminar co-flow, and the tracer particles made local eddies visible.</div>

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
- **Failure modes in microfluidics:** the tracer particles accumulated at the walls, where flow velocity is close to zero, until the channel blocked completely. This is a real failure mode for microfluidic devices.

**Context:** MIT.nano, Cambridge, USA — one-week cleanroom intensive, semiconductor fabrication (Oct 2025).
**Stack:** LPCVD/PECVD, photolithography, RIE/KOH wet etching, PDMS soft lithography, cleanroom protocols (Class 100/1K/10K)
