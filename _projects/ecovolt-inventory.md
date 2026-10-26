---
layout: page
title: Automated PPE & Inventory Management System
description: "Solo project — QR tracking for Shell Eco-marathon paddock ops — customs-ready Excel export, under 80 ms QR reading, web dashboard with loan management"
img: assets/img/inv-cover-composite.jpg
importance: 1
category: Computer Vision, Web
featured: false
hide_from_grid: true # shown in the "Professional & lab experience" section instead of the academic grid
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .inv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .inv-grid.single { grid-template-columns: minmax(0, 860px); justify-content: center; }
  .inv-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .inv-fig img, .inv-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .inv-fig.phone img, .inv-fig.phone video { height: 520px; object-fit: contain; }
  .inv-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .inv-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .inv-table th, .inv-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .inv-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**Deployed at Shell Eco-marathon Brazil 2026: a QR-tracked inventory system that simplified customs declaration for dozens of tools and components and let the team close out its paddock loan list in minutes.** Every item gets a physical QR label linked to a database record — reads run in under 80 ms and the system exports a customs-ready Excel file in one click.

<div class="inv-grid single">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-dashboard.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-dashboard-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Inventory dashboard: totals, status overview, items that need attention and the Excel export flow.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Stage 1: Excel register (data model prototype)" loading="lazy"><figcaption>Stage 1: Excel register (data model prototype)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="Stage 2: OpenCV QR detection and ID check" loading="lazy"><figcaption>Stage 2: OpenCV QR detection and ID check</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Latency benchmark of the pilot" loading="lazy"><figcaption>Latency benchmark of the pilot</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Stage 3: web platform, item quick view" loading="lazy"><figcaption>Stage 3: web platform, item quick view</figcaption></figure>
</div>

**Design decisions, from first principles**

<table class="dag-table">
  <tr><th>Decision</th><th>Engineering reasoning</th><th>Result</th></tr>
  <tr><td>Excel register before any code</td><td>Validate which fields the team really needs before building software</td><td>Became the database model and the one-click customs Excel export</td></tr>
  <tr><td>Five image variants, first successful read wins</td><td>Low contrast, blur and small codes break QR detection: CLAHE raises local contrast, sharpening restores edges, 2&times; upscaling enlarges small modules; stopping at the first hit keeps latency low</td><td>Reads in under 80 ms per image</td></tr>
  <tr><td>Separate &ldquo;readable&rdquo; from &ldquo;valid&rdquo;</td><td>A QR can decode perfectly and still carry the wrong text, so the payload is checked against the ID format</td><td>Green outline for valid IDs, red for malformed ones</td></tr>
  <tr><td>Capture separated from processing</td><td>Testing the algorithm on saved photos isolates camera problems and makes runs repeatable</td><td>Benchmark with hit rate, mean and p95 latency, logged to JSONL</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Full technical write-up</summary>

**Challenge**

Traveling from Mexico to an international competition means clearing customs with dozens of tools, PPE and electronic components — a process that had cost the team time and stress in previous editions — and then keeping track of them in a busy paddock. I proposed a QR-based inventory with four goals: one physical label per item, one database record behind it, loans to other teams under control, and every toolbox locatable at a glance. It was built in three stages and became part of the team's Safety Leadership Award submission.

**My contribution**

- **Concept and data model:** proposed the system and defined what each inventory record contains
- **Stage 1 — Excel register:** the first inventory, with a photo, a Drive link and a "sticker applied" check for every item
- **Stage 2 — Python pilot:** the OpenCV pipeline that loads a photo, preprocesses it, decodes the QR, validates the ID, benchmarks the latency and keeps a JSONL backup
- **QR generation:** a Python script that generates the labels
- **With the team:** the TypeScript web platform that replaced the pilot, with the database built in

**Stage 1 — Excel register**

Before any software existed, the register listed the QR ID, item code, description, quantity, type, area, the box it belongs to, a photo link and whether the sticker was applied. It became the prototype of the database.

<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Excel inventory register with photos and QR IDs"><figcaption>Initial Excel register: one row per item, with its box, photo link and sticker status.</figcaption></figure>
</div>

**Stage 2 — Python / OpenCV pilot**

The pilot works on photos captured separately (phone camera via DroidCam), so camera problems and algorithm problems stay apart. Each photo is tried in five variants — original, grayscale, CLAHE, sharpened and 2× upscaled — and the first one that decodes wins, which keeps latency low. The decoded text is then checked against the ID format, because a QR can be readable and still carry the wrong content; the image is annotated green or red with the variant used and the processing time, and every run is logged to JSONL with hit rate, mean and p95 latency.

<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="OpenCV QR detection with annotated outline"><figcaption>Test with a QR that is not a tool label: it decodes on the grayscale variant in 73 ms and is correctly flagged as a malformed ID.</figcaption></figure>
</div>
<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Latency benchmark output"><figcaption>Latency benchmark (5 runs on one image): 100 % hit rate, 76.1 ms mean, 79.4 ms p95, saved to the JSONL log.</figcaption></figure>
</div>

**Stage 3 — Web platform**

The web version brings the database into the platform. The dashboard shows item status (available, on loan, reserved, maintenance, missing) and a "needs attention" panel. Items are registered from a phone with a camera photo; the ID (`EV-######`) is assigned automatically, the serial number is checked for duplicates and the QR sticker size is chosen from presets that keep a 2:3 ratio. Labels print one by one or in batches, and the whole register exports to Excel for customs in one click.

<div class="inv-grid">
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-add-item.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-add-item-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Adding an item: form, camera capture, sticker size and automatic item ID (2.5× speed).</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-label.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-label-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>The new item gets its QR label, ready to print.</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-handoff.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-handoff-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Item detail and handoff: scanning a label records a movement with its new place, status and note.</figcaption></figure>
</div>
<div class="inv-grid">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-print-labels.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-print-labels-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Batch label printing and the single-label view (label size, item ID and serial number).</figcaption></figure>
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-export.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-export-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Export from the web platform to the Excel inventory register.</figcaption></figure>
</div>

Each item has a Quick View with its photo, status, responsible area and activity log. A team that wants to borrow an item fills in a loan request (item, team, dates, purpose) that an admin approves before it is recorded, and the registration photo confirms the item's condition at loan time.

<style>
  @media (min-width: 768px) {
    .inv-grid.inv-stack { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr); grid-template-rows: 1fr 1fr; align-items: stretch; }
    .inv-grid.inv-stack .inv-fig:first-child { grid-row: span 2; }
    .inv-grid.inv-stack .inv-fig { display: flex; flex-direction: column; }
    .inv-grid.inv-stack .inv-fig img { flex: 1 1 auto; height: 0; min-height: 200px; width: 100%; object-fit: contain; }
  }
</style>

<div class="inv-grid inv-stack">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Item Quick View panel"><figcaption>Quick View: item photo, status, details and action buttons — Request loan, Record movement, Print QR and Edit — with the full activity log below.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-photo.png' | relative_url }}" alt="Photo Inspection view"><figcaption>Photo Inspection: the photo taken at registration, zoomable at full resolution, so the item condition at loan time is always on record.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-loans-request.png' | relative_url }}" alt="Request a loan modal"><figcaption>Loan request form: item, borrowing team, start and return date, and purpose — submitted for admin approval before it is recorded.</figcaption></figure>
</div>

**Presented at Shell Eco-marathon Brazil 2026**

We presented the system to the event's Safety Team in the paddock as part of the Safety Leadership Award submission; the poster's "Try it!" QR code let the judges open the platform on their own phones.

<div class="inv-grid">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-explaining.jpg' | relative_url }}" alt="Explaining the system to a member of the Shell Safety Team"><figcaption>Walking a Shell Safety Team member through the platform on his phone.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-safety-team.jpg' | relative_url }}" alt="Poster presentation to the Shell Safety Team in the paddock"><figcaption>Poster presentation to the Safety Team at the EcoVolt CCM paddock.</figcaption></figure>
</div>
<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-poster.png' | relative_url }}" alt="Poster: Automated PPE and Inventory Management System"><figcaption>Poster presented at Shell Eco-marathon Brazil 2026: problem, objective, loan flow and summary.</figcaption></figure>
</div>

**Tools & technologies**

- **Python, OpenCV, NumPy, Matplotlib, JSONL:** QR reading pilot and benchmark
- **TypeScript web platform with Convex database (team):** inventory, loans, labels, export
- **Excel:** first register and customs export

**Results & lessons**

- **Deployed in Brazil 2026:** simplified the customs declaration and let the team close its paddock loan list in minutes
- **Fast reading:** under 80 ms per image on a laptop, with valid and invalid IDs separated
- **Benchmark honestly:** the 80 ms comes from 5 runs on one image; real paddock photos (light, angle, distance) are the next test
- **Data model first:** the ID format changed between stages (`TL-####` → `EV-######`); defining it upfront would have avoided the migration
- **Adoption is a UX problem:** a mandatory scan at checkout would enforce the process better than an optional one
- **Next step:** a camera-based condition check at checkout to flag worn or damaged PPE

</details>

**Context:** EcoVolt CCM, Shell Eco-marathon (paddock operations), 2025–2026; part of the team's Safety Leadership Award submission.
**Stack:** Python, OpenCV, NumPy, Matplotlib, JSONL · TypeScript web platform, Convex database · Excel · QR labels

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/projects/#extracurricular' | relative_url }}">← Back to projects</a>
</div>
