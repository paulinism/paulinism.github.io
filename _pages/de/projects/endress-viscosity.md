---
layout: page
permalink: /de/projects/endress-viscosity/
lang: de
de_project: true
ref: endress-viscosity
title: Automatisiertes Viskositätsmesssystem
description: Platinen & Embedded mit Endress+Hauser — Signalkette mit 400-facher Verstärkung trennt 252 cP von 1676 cP; drei Altium-Platinen, zwei davon von JLCPCB gefertigt
img: assets/img/viscosity.jpg
importance: 5
category: Platinen, Embedded, Automatisierung
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .vis-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .vis-grid.single { grid-template-columns: minmax(0, 560px); justify-content: center; }
  .vis-grid.hero { grid-template-columns: 1fr 2fr; }
  .vis-grid.hero .vis-fig img { height: 420px; object-fit: contain; }
  .vis-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .vis-fig img { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .vis-fig.photo img { object-fit: cover; }
  .vis-fig.auto img { height: auto; }
  .vis-fig.full img { height: auto; max-height: 460px; }
  .vis-fig video { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .vis-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
</style>

**Ein Stromfenster von 6 mA — der Unterschied zwischen verdünnter und reiner Seife bei 30 U/min — wird 400-fach in den ADC-Bereich des ESP32 verstärkt und trennt auf einer eigenen zweistufigen OPV-Platine zuverlässig 252 cP von 1676 cP.** Challenge „Industrial Automation“ am Tec de Monterrey mit Endress+Hauser (Team aus 4 Personen): ein automatisierter Ablauf zur Flüssigkeitshandhabung, der SPS-Schrittketten und ESP32-Messung verbindet, vom Platinenentwurf in Altium bis zur Validierung am realen Aufbau.

<div class="vis-grid hero">
  <figure class="vis-fig"><img data-zoomable src="{{ 'assets/img/viscosity.jpg' | relative_url }}" alt="SolidWorks-Rendering des Gesamtsystems"><figcaption>Entwurf: SolidWorks-CAD-Modell der Drehteller-Messstation, der Viskositätsmesseinheit und des Spenders wie ursprünglich geplant.</figcaption></figure>
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-system-test.jpg' | relative_url }}" alt="Integriertes System bei der Abschlusspräsentation"><figcaption>Aufbau: Integriertes System als finaler Prototyp, mit Relais, Not-Aus-System, Wasserpumpe, Sortierung der Behälter, Schrittmotoren, DC-Motor mit Encoder, Infrarotsensoren und Förderbändern für den Behältertransport.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="OPV-Platine, aufgebaut und verdrahtet" loading="lazy"><figcaption>OPV-Platine, aufgebaut und verdrahtet</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Layout der OPV-Platine" loading="lazy"><figcaption>Layout der OPV-Platine</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="ESP32-Master-Platine (JLCPCB)" loading="lazy"><figcaption>ESP32-Master-Platine (JLCPCB)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Multisim-Prüfung bei 61 mA" loading="lazy"><figcaption>Multisim-Prüfung bei 61 mA</figcaption></figure>
</div>

**Konstruktionsentscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Viskosität über den Motorstrom messen</td><td>Viskose Reibung erhöht das Drehmoment an der Spindel, und das Drehmoment eines DC-Motors ist proportional zum Strom; ein 1-&Omega;-Shunt wandelt ihn in eine Spannung um</td><td>Fenster von 6 mV zwischen verdünnter und reiner Seife bei 30 U/min</td></tr>
  <tr><td>Verstärkung &asymp; 400 in zwei Stufen (&times;100, dann &times;4)</td><td>Bildet das 6-mV-Fenster auf 0&ndash;3,3 V ab und hält die erste Stufe innerhalb der &plusmn;12-V-Versorgung</td><td>252 cP und 1676 cP zuverlässig getrennt</td></tr>
  <tr><td>Pegelwandler 5 V &rarr; 3,3 V</td><td>Bei 130 U/min erreichte der Ausgang etwa 4 V, über der Grenze des ESP32-ADC</td><td>ADC bei allen Drehzahlen geschützt</td></tr>
  <tr><td>PID während der Messung aus</td><td>Die Drehzahlregelung im geschlossenen Kreis trieb den Strom auf 63&ndash;72 mA, außerhalb des Messfensters</td><td>Stabile Messwerte bei konstant 30 U/min</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Einen vollständigen Ablauf zur Flüssigkeitshandhabung automatisieren: eine Probe an ihrer Farbmarkierung erkennen, ihre Viskosität messen, sie auf einen Zielwert (±10 %) verdünnen und anschließend sortieren. Zwei Vorgaben prägten den Entwurf: Die Viskosität musste aus dem Strom des Spindelmotors abgeleitet werden, ohne kommerzielles Viskosimeter, und die Steuerung war auf SPS-Stationen (Zuführung und Sortierung) und eine ESP32-Station (Messung) aufgeteilt, die miteinander kommunizieren.

**Mein Beitrag**

- **Platinenentwurf:** alle drei Platinen der Messstation in Altium Designer entworfen — die ESP32-Master- und Slave-Platine (zweilagig, Leiterbahnbreiten nach IPC-2221, gefertigt von JLCPCB) und die OPV-Platine für die Viskositätsmessung, die ich auf kupferkaschiertem Basismaterial aufgebaut habe, damit die Schaltung debuggt und abgestimmt werden konnte
- **Signalaufbereitung:** die Strommesskette (1-Ω-Shunt, zweistufige Verstärkung mit UA741, etwa 400-fach) mitentwickelt, bei 61 mA und 67 mA simuliert und auf unserer eigenen Platine verifiziert
- **Embedded** (gemeinsam mit einem Teammitglied entwickelt): Referenz- und Messroutinen, gleitender Mittelwert für das Stromsignal, Auslesen der Farbmarkierung über I²C, Bluetooth-Verbindung zur LabVIEW-HMI, UART zwischen den beiden ESP32 und die Melodie, die der Summer der Slave-Platine spielt, während sich die Motoren bewegen (sie stoppt bei der Becher-, Farb- und Viskositätsprüfung)
- **SPS & Fertigung:** Förderbänder mitgebaut, die Kontaktplan-Logik mitprogrammiert und die FC-51-Sensoren platziert und kalibriert

Teammitglieder haben die mechanische Konstruktion der Stationen, den Entwurf der SPS-Schrittkette und die LabVIEW-HMI verantwortet.

**Integration**

Die vollständige Integration am Prüfstand, mit dem größten Teil der automatischen Schrittkette: Drehteller, Messstation und Steuerelektronik arbeiten zusammen.

<div class="vis-grid single">
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-integration-demo.mp4' | relative_url }}" muted playsinline controls preload="metadata"></video><figcaption>Integrationsdemo: der größte Teil der automatischen Schrittkette läuft am Prüfstand.</figcaption></figure>
</div>

<div class="vis-grid single">
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-revolver.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Der Revolver (drehbarer Becherhalter) dreht sich mit beladenen Probenbechern.</figcaption></figure>
</div>

**Platinenentwurf**

Alle Platinen wurden in Altium Designer entworfen. Die beiden ESP32-Platinen wurden von JLCPCB gefertigt. Die OPV-Platine wurde dagegen auf kupferkaschiertem Basismaterial aufgebaut: Aus praktischen Gründen und für die Fehlersuche konnten wir so die Aufbereitungsschaltung testen und Bauteilwerte anhand der Messergebnisse ändern, was mit einer gefertigten Platine nicht so schnell möglich gewesen wäre.

<div class="vis-grid">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="ESP32-Master-Platine"><figcaption>ESP32-Master-Platine: steuert die Hauptmotoren, einschließlich des Schrittmotors des Drehtellers (Anschlüsse für Schrittmotor und Encoder, I²C-Stecker, Pegelwandler).</figcaption></figure>
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-b.jpg' | relative_url }}" alt="ESP32-Slave-Platine"><figcaption>ESP32-Slave-Platine: Sensoren und Peripherie (SPS-Signale, Lüfter und Wasserpumpe) sowie der Summer, der die Melodie spielt, während sich die Mechanik bewegt.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Layout der OPV-Messplatine"><figcaption>OPV-Messplatine: Platinenlayout.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="Gefertigte und verdrahtete OPV-Platine"><figcaption>Dieselbe Platine, auf kupferkaschiertem Basismaterial aufgebaut, damit Werte bei der Fehlersuche geändert werden konnten.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-master-schematic.png' | relative_url }}" alt="Schaltplan der Master-Platine"><figcaption>Master-Schaltplan: ESP32-Steckleisten, STEP/DIR des Schrittmotors sowie Encoder- und Induktivsensor-Eingänge mit Pegelwandlung von 5 V auf 3,3 V.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-slave-schematic.png' | relative_url }}" alt="Schaltplan der Slave-Platine"><figcaption>Slave-Schaltplan: Sensoreingänge, Ausgänge für Lüfter und Wasserpumpe, Farb-/Startsignale der SPS, UART, RGB-LED, Summer und Taster.</figcaption></figure>
</div>

**Signalaufbereitung**

Die Viskosität wurde aus dem Versorgungsstrom des Motors über einen 1-Ω-Shunt abgeleitet: etwa 61 mV bei 75 % Seife und 67 mV bei reiner Seife bei 30 U/min, also ein Fenster von 6 mV. Eine Verstärkung von etwa 400 (×100, dann eine Differenzstufe mit ×4) bildet dieses Fenster auf 0–3,3 V ab, aufgeteilt in zwei Stufen, damit die erste innerhalb der ±12-V-Versorgung bleibt. Bei 130 U/min erreichte der Ausgang mit einer 3,3-V-Z-Diode allein noch etwa 4 V, daher wurde ein Logikpegelwandler 5 V → 3,3 V ergänzt, um den ADC des ESP32 zu schützen.

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Multisim-Simulation bei 61 mA"><figcaption>Multisim bei 61 mA: 61 mV am 1-Ω-Shunt werden am ADC-Eingang zu etwa 250 mV.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-sim-67ma.jpg' | relative_url }}" alt="Multisim-Simulation bei 67 mA"><figcaption>Multisim bei 67 mA: 67 mV werden zu etwa 2,67 V, begrenzt durch die 3,3-V-Z-Diode.</figcaption></figure>
</div>

**Förderbänder**

Die ursprüngliche Sortieridee (Schrittmotor, Schnecke und Feder wie in einem Verkaufsautomaten) wurde verworfen, weil keine Federn mit exaktem Windungsabstand verfügbar waren und die Kontaktplan-Logik zu komplex wurde. Aus praktischen Gründen und wegen der Materialverfügbarkeit nutzt die finale Integration stattdessen kleine Förderbänder, gesteuert von einem Arduino Mega mit OpenPLC.

<div class="vis-grid">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-conveyors.jpg' | relative_url }}" alt="Förderbänder mit FC-51-Sensoren"><figcaption>Förderbänder: die von mir mitgebauten Sortierbänder mit FC-51-Sensoren zur Bechererkennung.</figcaption></figure>
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-plc-validation.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Meine Validierung der SPS-Logik: ein Becher wird mit den FC-51-Sensoren über das Förderband bewegt.</figcaption></figure>
</div>

**Werkzeuge & Technologien**

- **Platinenentwurf (IPC-2221, JLCPCB):** ESP32-Master-/Slave-Platinen, OPV-Messplatine
- **Multisim:** Simulation des zweistufigen Verstärkers im Bereich 61–67 mA
- **ESP32 (C++, ESP-IDF):** Referenz- und Messroutinen, digitale Filterung, Farbsensor TCS34725 über I²C, Bluetooth, Master/Slave über UART
- **OpenPLC auf Arduino Mega (Kontaktplan):** Steuerung der Förderbänder an der Zuführstation
- **IR-Sensoren FC-51:** Bechererkennung auf den Bändern
- **Lasergeschnittenes MDF, Aluminiumrollen, Gummibänder:** Fertigung der Förderbänder

## Ergebnisse & Erkenntnisse

- **Viskositätsmessung:** Ein Stromfenster von 6 mA, etwa 400-fach in den ADC-Bereich des ESP32 verstärkt, ergab eine reproduzierbare Trennung zwischen verdünnter und reiner Seife (252 vs. 1676 cP)
- **Wasserdosierung:** Mit 5 V betrieben war die Pumpe steuerbar und lieferte 19/26/36 ml bei Sollwerten von 18/27/36 ml
- **Förderbänder:** Die Bänder trugen 5 kg (Zuführung) und 8 kg (Sortierung), gefordert war weniger als 1 kg
- **Ergebnis:** Die automatische Schrittkette lief auf Video, aber die Live-Vorführung scheiterte an Verdrahtungsfehlern und Kurzschlüssen — die SPS-Platinen wurden durch Steckbretter ersetzt, nachdem die FC-51-Sensoren mehr Strom zogen, als die Platinenversorgung liefern konnte
- **Messtechnische Erkenntnisse:** Die PID-Regelung musste für die Messung bei 30 U/min abgeschaltet werden, weil sie den Strom auf 63–72 mA trieb, außerhalb des Fensters von 61–67 mA; der Tausch des UA741CN gegen den UA741CP behob einen Ausgang, der einfror
- **Erkenntnisse:** eine kurze gemeinsame Masse für UART zwischen Platinen führen, da eine RX/TX-Vertauschung auf der Slave-Platine Zeit bei der Fehlersuche gekostet hat; den Versorgungsstrom der Sensoren vor dem Layout einplanen und die Pinbelegung vor der Fertigung mit der Zielsoftware (OpenPLC-Adressierung) abgleichen

</details>

**Kontext:** Tec de Monterrey, Aug.–Dez. 2025, Challenge „Industrial Automation“ mit Endress+Hauser als Industriepartner, Team aus 4 Personen.
**Ergebnis:** strombasierte Viskositätsmessung, die auf einer eigenen Platine 252 cP von 1676 cP trennt.
**Stack:** ESP32/ESP-IDF, eigener Platinenentwurf (IPC-2221), Multisim, OpenPLC (Arduino Mega), I²C, UART, Bluetooth, LabVIEW-HMI

<div class="vis-grid single">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-endress-visit.jpg' | relative_url }}" alt="Team bei Endress+Hauser"><figcaption>Das Team bei Endress+Hauser vor deren Prozessmesstechnik.</figcaption></figure>
</div>

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#academic' | relative_url }}">← Zurück zu den Projekten</a>
</div>
