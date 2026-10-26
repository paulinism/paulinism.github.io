---
layout: page
permalink: /de/projects/scara-robot/
lang: de
de_project: true
ref: scara-robot
title: Kamerageführter SCARA-Roboter für Pick-and-Place (4 DoF)
description: Firmware & Elektronik — 4-DOF-SCARA mit YOLOv11n-Bildverarbeitung (mAP 0,72), 5 von 6 Teilen bei ~14 s pro Zyklus, eigene Altium-Platine
img: assets/img/scara.jpg.jpg
importance: 3
category: Embedded, Bildverarbeitung
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .sc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .sc-grid.single { grid-template-columns: minmax(0, 860px); justify-content: center; }
  .sc-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .sc-fig img, .sc-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .sc-fig.tall img, .sc-fig.tall video { height: 460px; object-fit: contain; }
  .sc-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .sc-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .sc-table th, .sc-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .sc-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**In der Abschlussvorführung wurden 5 von 6 Teilen korrekt gegriffen und abgelegt, mit etwa 14 Sekunden pro Zyklus.** Der Roboter klassifiziert die Teile nach Form und Farbe mit einem YOLOv11n-Modell (mAP@0,5 = 0,72), das auf meinem eigenen Rechner läuft, und greift und legt sie dann selbstständig ab — die Koordinaten gehen von Python per MQTT an die C++-Firmware auf einem ESP32.

<div class="sc-grid single">
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-demo.mp4' | relative_url }}" poster="{{ 'assets/img/scara-demo-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Abschlusspräsentation: Test des Greifers, Gelenksteuerung über die HMI und über direkte Befehle an den MQTT-Broker sowie Erklärung des Echtzeit-Bildverarbeitungssystems.</figcaption></figure>
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

## Konstruktion auf einen Blick

<div class="dag-grid">
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="CAD-Modell (4 DoF)" loading="lazy"><figcaption>CAD-Modell (4 DoF)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Erreichbarer Arbeitsraum 50&ndash;250 mm" loading="lazy"><figcaption>Erreichbarer Arbeitsraum 50&ndash;250 mm</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="Steuerplatine, 3D-Ansicht (Altium)" loading="lazy"><figcaption>Steuerplatine, 3D-Ansicht (Altium)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Form-/Farberkennung" loading="lazy"><figcaption>Form-/Farberkennung</figcaption></figure>
</div>

**Konstruktionsentscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Alle Gelenkachsen vertikal</td><td>Entkoppelt das Problem: ebene Position aus Schulter und Ellbogen, Höhe aus der Z-Achse; inverse Kinematik geschlossen lösbar mit dem Kosinussatz</td><td>Mittlerer Fehler der Vorwärtskinematik 4,0 mm, der inversen 6,9 mm</td></tr>
  <tr><td>L1 = 150 mm, L2 = 110 mm</td><td>Ringförmiger Arbeitsraum von |L1&minus;L2| bis L1+L2 deckt den geforderten Radius von 25 cm ab</td><td>Erreichbarer Bereich 50&ndash;250 mm von der Basis</td></tr>
  <tr><td>Schrittmotoren an J1/J2, Absolutencoder am Handgelenk, Referenzfahrt mit Endschalter</td><td>Schrittmotoren liefern die Position ohne Rückführung, die Genauigkeit hängt also von einer korrekten Referenz ab</td><td>Referenzfahrt als größte Fehlerquelle identifiziert</td></tr>
  <tr><td>YOLOv11n zusätzlich zur HSV-Pipeline</td><td>HSV-Schwellwerte verschieben sich mit der Beleuchtung; ein trainierter Detektor ist robuster</td><td>mAP@0,5 = 0,72; 5 von 6 Teilen sortiert, ~14 s/Zyklus</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Flache Teile mit unterschiedlicher Form, Farbe und Ausrichtung in einem Arbeitsraum mit 25 cm Radius erkennen, greifen und ablegen und jedes Teil ohne menschlichen Eingriff in seinen Zielbereich sortieren. Es gibt fünf Formen (Quadrat, Kreis, Dreieck, Kreuz, Fünfeck) und vier Farben. Der Arm hat zwei Drehgelenke mit NEMA-17-Schrittmotoren (Schulter und Ellbogen), eine Vertikalachse mit Gewindespindel und DC-Motor mit Encoder, ein Handgelenk mit AS5600-Absolutencoder und einen Servogreifer, gebaut aus PETG mit Aluminiumprofilen. Kurs „Design and Development of Robots“, Tec de Monterrey, Team aus vier Personen.

**Mein Beitrag**

- **Bildverarbeitung:** die klassische OpenCV-Pipeline (Kantenerkennung, HSV-Segmentierung, Formklassifikation, Greifwinkel) und ihre Anbindung an den Roboter über MQTT
- **Pixel- in Roboterkoordinaten:** die ArUco-Homografie, die Bildpixel in Robotermillimeter umrechnet
- **Maschinelles Lernen:** der YOLOv11n-Ablauf: automatische Vorannotation, Aufteilung des Datensatzes, Training und Auswertung
- **Platinenentwurf:** die einseitige Steuerplatine in Altium Designer (ESP32, Schrittmotor- und DC-Treiber, Encoder, Spannungsversorgung)
- **Kinematik:** meine eigene Vorwärts- und inverse Kinematik in MATLAB (jedes Teammitglied hat sie einzeln hergeleitet)
- **Im Team:** Steckbrett-Prototyp, Auswahl von Motoren und Treibern sowie die Referenzsensoren — Endschalter der Z-Achse und AS5600 am Handgelenk, gegen bekannte Referenzwinkel validiert; die MQTT-Verbindung zwischen Bildverarbeitungsrechner, Broker und ESP32; Mitautorin des Roboter-Datenblatts

Teammitglieder haben die C++-Kinematik und die Firmware-Architektur auf dem ESP32, die HMI in MATLAB App Designer, das finale Simscape-Modell des SCARA und die mechanische Struktur erstellt.

**Kinematik & Mechanik**

Alle vier Gelenkachsen sind vertikal, daher lässt sich das Problem sauber aufteilen: Die ebene Position hängt nur von Schulter und Ellbogen ab, die Höhe nur von der Vertikalachse, und der Werkzeugwinkel ist die Summe der drei Drehungen. Die Vorwärtskinematik verkettet vier Denavit-Hartenberg-Transformationen; die inverse Kinematik nutzt den Kosinussatz für den Zweigelenkarm (L1 = 150 mm, L2 = 110 mm), liefert eine Lösung mit Ellbogen oben und eine mit Ellbogen unten und behält die, die der aktuellen Stellung am nächsten ist. Ein Ziel ist nur zwischen 50 und 250 mm von der Basis erreichbar.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="CAD-Modell des SCARA-Roboters"><figcaption>CAD-Modell des Roboters.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Erreichbarer Arbeitsraum"><figcaption>Draufsicht auf den erreichbaren Arbeitsraum (Radius 250 mm).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-simscape.mp4' | relative_url }}" poster="{{ 'assets/img/scara-simscape-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simscape-Multibody-Modell des SCARA, aus der CAD-Geometrie aufgebaut, mit PID-Regelung der beiden ebenen Gelenke (finale Version von einem Teammitglied).</figcaption></figure>
</div>

Vor dem SCARA hat das Team andere Manipulatoren modelliert, um Bewegung und Regelung zu untersuchen. Für ein Portal mit einem Arm mit einem Freiheitsgrad haben wir die Bewegungsgleichungen nach Euler-Lagrange hergeleitet und das Modell zweimal aufgebaut — aus den Gleichungen in Simulink und in Simscape Multibody — mit PID-Regelkreisen für die Wagenposition und den Armwinkel. Beide Modelle stimmten im Gesamtverhalten überein, einschließlich des leichten Nachschwingens am Ende jeder Bewegung durch die Kopplung zwischen Wagen und Arm.

<div class="sc-grid">
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-gantry.mp4' | relative_url }}" poster="{{ 'assets/img/sim-gantry-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simulation des Portalroboters (Teamarbeit im Kurs).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-arm.mp4' | relative_url }}" poster="{{ 'assets/img/sim-arm-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simulation eines Industrieroboterarms (Teamarbeit im Kurs).</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simulink.jpg' | relative_url }}" alt="Simulink-Blockdiagramm des Portalroboter-Modells"><figcaption>Simulink-Modell des Portals: die nichtlinearen Zustandsgleichungen in einem MATLAB-Function-Block, zwei PID-Regelkreise (x und θ) und Scopes, mit Sprung-Sollwerten (links) und sinusförmigen Sollwerten (rechts).</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-top.jpg' | relative_url }}" alt="Oberste Ebene des Simscape-Modells mit Portal- und Arm-Subsystem"><figcaption>Oberste Ebene des Simscape-Modells: das Portal-Subsystem (Schiene, Wagen und Arm) und das Roboterarm-Subsystem, jeweils mit Bewegungsvorgabe und Aufzeichnung in Scopes.</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-diagram.jpg' | relative_url }}" alt="Simscape-Multibody-Verbindungsdiagramm des Portalroboters"><figcaption>Simscape-Multibody-Verbindungsdiagramm: Portal- und Arm-Subsystem, die Bewegungsvorgaben und zum Vergleich dieselben PID-Regelkreise wie im analytischen Modell.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-outputs.jpg' | relative_url }}" alt="Simscape-Ausgaben: Winkel, Winkelgeschwindigkeit, Drehmoment und Stellgröße"><figcaption>Simscape-Ausgaben: Armwinkel θ gegenüber seinem Sollwert, Winkelgeschwindigkeit, Ausgangsdrehmoment und PID-Stellgröße. Die Stellgröße schwingt zu Beginn jedes Sprungs über und stellt sich dann ein.</figcaption></figure>
</div>

**Bildverarbeitung**

Ein Smartphone 500 mm über dem Arbeitsraum mit senkrechter optischer Achse überträgt das Bild an den PC; ein Skript nimmt ein Einzelbild mit 1280 × 720 px auf. Vier ArUco-Marker an bekannten Ecken einer Fläche von 562 × 562 mm definieren eine Homografie von Bildpixeln in Robotermillimeter.

<div class="sc-grid">
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-camera.jpg' | relative_url }}" alt="Kameraaufbau von oben"><figcaption>Kamera 500 mm über dem Arbeitsraum, mit den ArUco-Markern an den Ecken.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-homography.jpg' | relative_url }}" alt="Für die Homografie erkannte ArUco-Marker"><figcaption>ArUco-Erkennung: Die Markermittelpunkte (rot) definieren die Homografie von Pixeln in Millimeter.</figcaption></figure>
</div>

Die klassische Pipeline erzeugt eine Kantenkarte (Gauß-Filter, Laplace, Otsu), segmentiert jede Farbe im HSV-Raum (Rot braucht zwei Farbtonbereiche, weil der Farbton zyklisch ist) und trennt sich berührende Teile mit einem Watershed-Verfahren. Die Formen werden über Solidität, Konvexitätsdefizit und Kreisförmigkeit klassifiziert: Das Kreuz wird zuerst erkannt, weil es das einzige nicht konvexe Teil ist, die übrigen entscheidet eine Abstimmung von `approxPolyDP` mit drei Toleranzen. Der Greifwinkel ergibt sich aus dem Rechteck minimaler Fläche, angepasst an die Symmetrie jeder Form, damit sich das Handgelenk so wenig wie möglich dreht, und jedes Teil wird per MQTT als `shape, colour, x, y, angle` veröffentlicht.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Klassifizierte Formen im Arbeitsraum"><figcaption>Endgültige Erkennung: jedes Teil mit ID, Form und Farbe beschriftet.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-grip.jpg' | relative_url }}" alt="Greifwinkel über dem Arbeitsraum"><figcaption>Für jedes Teil berechnete Greifwinkel, die seine Symmetrie nutzen, um den Weg des Handgelenks zu minimieren.</figcaption></figure>
</div>

Da HSV-Schwellwerte empfindlich auf Beleuchtung und ähnliche Farben reagieren, habe ich einen YOLOv11n-Detektor mit Bildern des realen Arbeitsraums trainiert (16 Klassen, Aufteilung 80/20, 50 Epochen). Die klassische Pipeline hat jedes Bild vorannotiert, sodass das Labeln etwa 30 Minuten statt 3–4 Stunden dauerte. Das Modell erreichte mAP@0,5 = 0,72; am schwächsten waren die Kreuze mit nur 62–94 Beispielen gegenüber 1.580 für das blaue Quadrat — die Klassenungleichheit, nicht das Modell, ist die wichtigste Grenze.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-preannot.jpg' | relative_url }}" alt="Trainingsbild des Arbeitsraums"><figcaption>Trainingsbild aus dem realen Arbeitsraum, mit Teilen in unterschiedlichen Positionen, Ausrichtungen und Farben.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-loss.png' | relative_url }}" alt="Verlust- und mAP-Kurven von YOLOv11n"><figcaption>Trainings- und Validierungsverluste sowie mAP über 50 Epochen.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-confusion.png' | relative_url }}" alt="Normierte Konfusionsmatrix"><figcaption>Normierte Konfusionsmatrix: Grüne Teile werden am besten erkannt, Kreuze am schlechtesten.</figcaption></figure>
</div>

**Elektronik & Platine**

Die Steuerplatine vereint den ESP32, zwei DRV8825-Treiber für die Schrittmotoren, einen TB6612FNG für die DC-Motoren, die Anschlüsse für Encoder und Sensoren sowie die Spannungsversorgung. Einseitig war eine Fertigungsvorgabe, daher wurden Platzierung und Leitungsführung so geplant, dass Kreuzungen vermieden werden, und Kupferflächen führen Versorgung und Masse, um den Spannungsabfall zwischen Treibern und Versorgung zu verringern. Die Platine wurde fertig entworfen, aber nicht integriert: In den letzten Wochen hat das Team die Fehlersuche an Mechanik, Regelung und Bildverarbeitung priorisiert, und die Vorführung lief mit der Steckbrett-Elektronik.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-schematic.png' | relative_url }}" alt="Schaltplan der Steuerplatine"><figcaption>Schaltplan: ESP32, Schrittmotortreiber, DC-Motortreiber und Anschlüsse.</figcaption></figure>
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-pcb-layout.png' | relative_url }}" alt="Einseitiges Platinenlayout"><figcaption>Einseitiges Layout mit Kupferflächen für die Versorgung.</figcaption></figure>
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="3D-Ansicht der Platine"><figcaption>3D-Ansicht der Platine.</figcaption></figure>
</div>

**HMI & Integration**

Bildverarbeitungsrechner, ESP32 und HMI kommunizieren nie direkt: Sie veröffentlichen und abonnieren über einen Mosquitto-Broker, sodass jeder Teil auf einem anderen Rechner laufen kann — bei Tests wurde der Roboter sogar aus einer anderen Stadt bedient. Im Pick-and-Place-Modus löst der ESP32 die inverse Kinematik, fährt 30 mm über das Teil, senkt sich ab, greift, hebt an und legt es ab.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-hmi.png' | relative_url }}" alt="HMI-Bedienoberfläche"><figcaption>HMI-Bedienoberfläche (von einem Teammitglied erstellt).</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-pick.mp4' | relative_url }}" poster="{{ 'assets/img/scara-pick-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Greifer nimmt ein blaues Quadrat auf.</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-joint.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-joint-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Schultergelenk dreht sich per MQTT-Befehl während der frühen Integration — Armglieder noch nicht montiert.</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-zaxis.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-zaxis-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Bewegungstest der Z-Achse während der Sensorintegration — Auslösen von Endschalter und Encoder in dieser Phase validiert.</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-mqtt-hmi.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-hmi-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Testsitzung mit sichtbarer SCARA-HMI: Tippbefehle für die Gelenke werden per MQTT von MATLAB an den ESP32 gesendet.</figcaption></figure>
</div>

**Werkzeuge & Technologien**

- **Python, OpenCV, YOLOv11n, LabelImg:** Bildverarbeitungspipeline, Homografie, Werkzeuge für den Datensatz
- **ESP32 (C++, ESP-IDF, PlatformIO, FreeRTOS):** Firmware; MQTT über WLAN mit einem Mosquitto-Broker
- **Altium Designer:** einseitige Steuerplatine
- **MATLAB, Simulink, Simscape Multibody:** Kinematik, PID-Gelenkregelung, Mehrkörpersimulation

**Ergebnisse & Erkenntnisse**

- **Pick-and-Place:** 5 von 6 Teilen korrekt abgelegt, etwa 14 s pro Zyklus
- **Genauigkeit:** mittlerer Fehler der Vorwärtskinematik 4,0 mm (Messschieber, 3 Stellungen); inverse Kinematik 6,9 mm im Mittel, 8,6 mm maximal (5 Ziele); Lokalisierung durch die Bildverarbeitung etwa 15 mm
- **Robuste Verbindung:** Steuerung etwa 2 s nach einem WLAN-Ausfall wiederhergestellt
- **Die Referenzfahrt bestimmt die Genauigkeit:** Die Schrittmotoren haben keine Positionsrückführung, daher hing jede Sitzung von einer korrekten Referenz ab; Riemenspiel und gedruckte Kupplungen waren die wichtigsten mechanischen Fehlerquellen
- **Versatz zwischen Bild und Greifer:** Die meisten Fehlgriffe kamen vom Versatz zwischen dem geschätzten Teilemittelpunkt und dem realen Greifermittelpunkt; eine bessere Objektivkalibrierung ist der nächste Schritt
- **Kleiner Validierungsumfang:** Sechs Versuche sind ein Hinweis, keine gemessene Erfolgsquote
- **Nächste Schritte:** mehr Bilder für die unterrepräsentierten Klassen, die Platine integrieren und den Regelkreis an den Schrittmotorgelenken schließen

</details>

**Stack:** Python, OpenCV, NumPy, Ultralytics YOLOv11n, LabelImg · ESP32, C++ (ESP-IDF, PlatformIO), FreeRTOS · MQTT (Mosquitto), I²C · Altium Designer · MATLAB, Simulink, Simscape Multibody

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#academic' | relative_url }}">← Zurück zu den Projekten</a>
</div>
