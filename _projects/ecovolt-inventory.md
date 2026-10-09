---
layout: page
title: Automated PPE & Inventory Management System
description: QR-code and computer-vision based tracking system for paddock tool and PPE loans — from an Excel register and a Python/OpenCV pilot to a web platform
img: assets/img/inv-sem-explaining.jpg
importance: 1
category: Computer Vision, Web
featured: false
hide_from_grid: true # shown in the "Professional & lab experience" section instead of the academic grid
---

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

A QR-based system to track EcoVolt CCM's tools and safety equipment on the way to, and inside, the Shell Eco-marathon paddock. Every item gets a physical QR label linked to a database record, so the team can see what it owns, where each item is, who has it, and what still has to come back.

<div class="inv-grid single">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-dashboard.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-dashboard-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Inventory dashboard: totals, status overview, items that need attention and the Excel export flow.</figcaption></figure>
</div>

## Project overview

I proposed this system to automate how the team manages its tools and how they travel to and during competitions such as Shell Eco-marathon Brazil 2026. It was also part of the team's off-track Safety Leadership Award submission.

**Goals**

- **One identity per item:** a physical QR label on every tool and piece of equipment used in the paddock.
- **One source of truth:** each label points to a database record instead of to a paper list.
- **Loans under control:** admin roles that manage loans to other teams during the competition.
- **Find things fast:** the physical status and location of every toolbox at a glance.

The system was built in three stages: an Excel register as the first record, a Python/OpenCV pilot to validate QR reading, and a web platform with the database built in.

## My role & responsibilities

**What I did directly**

- **Concept and data model:** proposed the system and defined what each inventory record contains.
- **Initial register:** built the first Excel inventory, with a photo, a Drive link and a "sticker applied" check for every item.
- **Python pilot:** wrote the OpenCV pipeline that loads a photo, preprocesses it, decodes the QR, validates the identifier, annotates the result, benchmarks the latency and keeps a JSONL backup.
- **QR generation:** Python script to generate the QR labels, to support the development of the web version.

**Developed with the team**

- **Web platform:** the TypeScript version that replaced the pilot, with the database integrated into the platform.

## Data model

<table class="inv-table">
  <tr><th>Field</th><th>Values</th></tr>
  <tr><td>Unique ID</td><td>One identifier per item</td></tr>
  <tr><td>Short description</td><td>Free text</td></tr>
  <tr><td>Tool type</td><td>Manual, Electric, N/A</td></tr>
  <tr><td>Area</td><td>Electronics, Mechanics, General</td></tr>
  <tr><td>Identifier type</td><td>QR, barcode, ArUco</td></tr>
  <tr><td>Status</td><td>On loan, Returned</td></tr>
</table>

## Stage 1 — Excel register

The first version of the inventory was an Excel register, filled in before any software existed. Each row carries the QR ID, a unique item code, a short description, quantity, type, area, the box it belongs to, a link to its photo and whether the sticker has already been applied. It served as the prototype for the database of the web version.

<div class="inv-grid single">
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Excel inventory register with photos and QR IDs"><figcaption>Initial Excel register: one row per item, with its box, photo link and sticker status.</figcaption></figure>
</div>

## Stage 2 — Python / OpenCV pilot

Before moving to the web, I wrote a pilot reader in Python (`read_identifier_opencv.py`) to test and validate QR reading. It works on a photo captured beforehand by another program (a phone camera streamed with DroidCam), so capture and processing stay separate.

**Pipeline**

1. **Load** the photo with `cv2.imread()`, and stop with an error if it cannot be read.
2. **Preprocess** it into five variants: original, grayscale, CLAHE (local contrast enhancement), sharpened and 2× upscaled.
3. **Detect and decode** with OpenCV's QR detector (`QRCodeDetectorAruco` when available, otherwise `QRCodeDetector`), using `detectAndDecodeMulti()`.
4. **First successful read wins:** the variants are tried in order and the search stops at the first one that decodes a code.
5. **Validate** the decoded text against the tool-ID format.
6. **Annotate** the image: green outline for a valid ID, red for a malformed one, with the payload, the variant used and the processing time.
7. **Benchmark** repeated runs with `time.perf_counter()`: hit rate, mean, min, max and p95 latency.
8. **Back up** every result to a JSONL file.

**Preprocessing variants**

```python
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
clahe = cv2.createCLAHE(clipLimit=CLAHE_CLIP_LIMIT, tileGridSize=CLAHE_TILE_GRID).apply(gray)
blur = cv2.GaussianBlur(gray, (0, 0), sigmaX=3)
sharpened = cv2.addWeighted(gray, 1.5, blur, -0.5, 0)
upscaled = cv2.resize(gray, None, fx=UPSCALE_FACTOR, fy=UPSCALE_FACTOR, interpolation=cv2.INTER_CUBIC)
```

No binarization is applied beforehand: the OpenCV detector does its own thresholding internally. When a code is found on the upscaled variant, its corner coordinates are divided by the scale factor so they map back onto the original image.

**Identifier validation**

```python
TOOL_ID_PATTERN = r"^TL-\d{4}$"
r.valid_id = bool(re.match(TOOL_ID_PATTERN, r.raw_payload.strip()))
```

Reading a code and trusting its content are two separate checks. A QR can decode perfectly and still carry the wrong kind of text. The check is syntactic only: it does not look up whether the tool exists in the database.

<div class="inv-grid">
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="OpenCV QR detection with annotated outline"><figcaption>Test with a QR that is not a tool label: it decodes on the grayscale variant in 73 ms and is correctly flagged as a malformed ID.</figcaption></figure>
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Latency benchmark output"><figcaption>Latency benchmark (5 runs on one image): 100 % hit rate, 76.1 ms mean, 79.4 ms p95, saved to the JSONL log.</figcaption></figure>
</div>

**Local backup.** Each run appends one JSON object per line to `benchmark_opencv.jsonl`: timestamp, engine, image, payload, variant, ID validity and latency statistics. Runs with no detection are logged too. Every record starts with `synced_to_convex: false`, and `load_pending()` returns the records not yet synchronized. The pilot only implements the local backup; the upload to the Convex database was left to the web platform.

## Stage 3 — Web platform

The web version (TypeScript) brings the database into the platform itself. It adds admin profiles to register items manually, admin roles to manage loans to other teams during the competition, and the status of each toolbox so it can be located quickly.

**Inventory dashboard.** Total items and units, a status overview (available, on loan, reserved, maintenance, missing) that doubles as a filter, and a "needs attention" panel for loan requests, overdue returns and items missing or in maintenance.

**Adding an item from a phone.** The item form takes the name, category, quantity, home location, responsible area and country of purchase. The photo is taken directly from the phone camera. The QR sticker size is chosen from presets (3 × 4.5, 2 × 3, 1.5 × 2.25 and 1 × 1.5 cm, or custom), always keeping a 2:3 aspect ratio. The item ID (`EV-######`) is assigned automatically, and the serial number is checked so it is not duplicated.

<div class="inv-grid">
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-add-item.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-add-item-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Adding an item: form, camera capture, sticker size and automatic item ID (2.5× speed).</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-label.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-label-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>The new item gets its QR label, ready to print.</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-handoff.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-handoff-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Item detail and handoff: scanning a label records a movement with its new place, status and note.</figcaption></figure>
</div>

**Printing QR labels.** Labels can be printed one at a time or in batches: select several items in the list and send all their labels to the printer in one go.

<div class="inv-grid single">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-print-labels.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-print-labels-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Batch label printing and the single-label view (label size, item ID and serial number).</figcaption></figure>
</div>

**Exporting the register.** The whole inventory can be exported to an Excel "EcoVolt Inventory Register": item and serial IDs, category, status, quantity, home and current location, responsible team, country of purchase, sticker size, photo link, who created and last updated each record, and summary counters. The export keeps the original Excel register alive as a portable backup.

<div class="inv-grid single">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-export.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-export-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Export from the web platform to the Excel inventory register.</figcaption></figure>
</div>

**Loans & item tracking.** Each item has a Quick View panel with its photo, current status, responsible area, activity log and four actions: Request loan, Record movement, Print QR and Edit. To borrow an item, a team fills in a loan request (item, team name, start and return date, purpose) and submits it for approval — an admin reviews it before it is recorded. Every movement is logged with the person, timestamp and destination, and the photo captured at registration makes it easy to confirm what was actually lent.

<div class="inv-grid">
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Item Quick View panel"><figcaption>Quick View: item photo, status, details and action buttons — Request loan, Record movement, Print QR and Edit — with the full activity log below.</figcaption></figure>
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-web-loans-request.png' | relative_url }}" alt="Request a loan modal"><figcaption>Loan request form: item, borrowing team, start and return date, and purpose — submitted for admin approval before it is recorded.</figcaption></figure>
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-web-item-photo.png' | relative_url }}" alt="Photo Inspection view"><figcaption>Photo Inspection: the photo taken at registration, zoomable at full resolution, so the item condition at loan time is always on record.</figcaption></figure>
</div>

**Main interface components**

- **CameraCaptureModal:** opens the device camera with `getUserMedia` (rear camera at 1920 × 1080 when available, simpler settings otherwise), copies the frame to a canvas, turns it into a JPEG and shows a preview to retake or use it. It handles missing permissions, no camera, a camera in use or an insecure context, and releases the camera when it closes.
- **ItemFormModal:** creates or edits an item. It suggests an asset code and checks for duplicates with a debounced query, prepares the photo with `processInventoryPhoto`, sets the QR label size at 2:3, validates the required fields and then calls `createInventoryItem` or `updateInventoryItem`.
- **InventoryShared:** shared icons, status badges (internal states mapped to readable, color-coded labels) and a common modal shell, so every screen looks and behaves the same.

## Presented at Shell Eco-marathon Brazil 2026

We presented the system to the event's Safety Team in the paddock as part of the Safety Leadership Award submission. The poster's "Try it!" QR code let the judges open the platform on their own phones.

<div class="inv-grid">
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-sem-explaining.jpg' | relative_url }}" alt="Explaining the system to a member of the Shell Safety Team"><figcaption>Walking a Shell Safety Team member through the platform on his phone.</figcaption></figure>
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-sem-safety-team.jpg' | relative_url }}" alt="Poster presentation to the Shell Safety Team in the paddock"><figcaption>Poster presentation to the Safety Team at the EcoVolt CCM paddock.</figcaption></figure>
</div>

**Loan workflow as presented**

- **User side:** scan the QR to check availability → fill in the loan request (item ID, team name, start and return, purpose) → approval → reserved / on loan → use → scan the QR to return → status updated.
- **System side:** identify the asset, check availability, store and update the request, and alert the admins when an item goes missing or a loan is overdue.

<table class="inv-table">
  <tr><th>Item status</th><th>Loan status</th></tr>
  <tr><td>Available, On loan, Reserved, Maintenance, Missing, Retired</td><td>Pending, Approved, Denied, Cancelled, Returned</td></tr>
</table>

**What changed since the competition.** The core model is the same: the dashboard filters by the same item statuses, and its "needs attention" panel (loan requests to review, overdue returns, items missing or in maintenance) is the alert branch of the poster's flow. Since then, item IDs moved to automatic `EV-######` codes, and the platform gained phone-camera photos, preset sticker sizes, batch label printing and the Excel export.

<div class="inv-grid single">
  <figure class="inv-fig"><img src="{{ 'assets/img/inv-sem-poster.png' | relative_url }}" alt="Poster: Automated PPE and Inventory Management System"><figcaption>Poster presented at Shell Eco-marathon Brazil 2026: problem, objective, loan flow and summary.</figcaption></figure>
</div>

## Results & limitations

- **QR reading works on real photos** in under 80 ms per image on a laptop, and the validation step separates "readable" from "valid".
- **The benchmark is a first estimate:** 5 runs on a single image. A proper evaluation needs a set of test photos under different lighting, distances and angles.
- **ID format changed between stages:** the pilot validates `TL-####`, while the web platform assigns `EV-######` automatically.
- **From pilot to platform:** the pilot keeps a local backup only; synchronization and multi-user access were moved to the web version.

**Context:** EcoVolt CCM, Shell Eco-marathon (paddock operations), 2025–2026; part of the team's Safety Leadership Award submission.
**Stack:** Python, OpenCV, NumPy, Matplotlib, JSONL · TypeScript web platform, Convex database · Excel · QR labels
