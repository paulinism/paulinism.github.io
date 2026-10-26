---
layout: page
permalink: /de/projects/agv-platform/
lang: de
de_project: true
ref: agv-platform
title: Scherenhubtisch & AGV — automatisierte Plattform für den Materialtransport
description: Konstruktion & Elektronik — Scherenhubtisch (über 100 kg belastet, 40 × 30 × 76 cm) mit eigener Wägezellen-Platine (ohne HX711) und gedrehten/gefrästen Aluminiumteilen
img: assets/img/agv-cover-pair.jpg
importance: 6
category: Mechanik, Elektronik
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

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

**Funktionsfähiger Scherenhubtisch (40 × 30 × 76 cm), mit über 100 kg belastet und in der Abschlussvorführung mit 7 kg beladen — 40 % über der Anforderung von 5 kg — mit einer eigenen Platine zur Wägezellen-Signalaufbereitung, die 0–5 kg ohne fertiges HX711-Modul misst.** Integrative Challenge im 4. Semester (Team aus 5 Personen) am Tec de Monterrey: von der SolidWorks-Konstruktion und Bewegungsstudie über CNC-Bearbeitung und Schweißen bis zur Embedded-Steuerung.

<div class="agv-grid">
  <figure class="agv-fig"><img data-zoomable src="{{ 'assets/img/agv-cover.jpg' | relative_url }}" alt="SolidWorks-Baugruppe des Scherenhubtischs mit Kippschale"><figcaption>Vollständige SolidWorks-Baugruppe des Scherenhubtischs mit Kippschale.</figcaption></figure>
  <figure class="agv-fig"><img data-zoomable src="{{ 'assets/img/agv-prototype.jpg' | relative_url }}" alt="Montierter Prototyp mit Kipptisch und gedruckter Kurvenscheibe"><figcaption>Montierter Prototyp: Kipptisch, in ABS gedruckte Kurvenscheibe und Getriebemotor.</figcaption></figure>
  <figure class="agv-fig"><img data-zoomable src="{{ 'assets/img/agv-final-build.jpg' | relative_url }}" alt="Finaler Hubtisch mit Wägezellen-Waage und Elektronik auf der Schale"><figcaption>Finaler Aufbau: Wägezellen-Waage und Elektronik auf der Schale, geschweißte Basis.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-loadcell-circuit.png' | relative_url }}" alt="Verstärkerschaltung der Wägezelle" loading="lazy"><figcaption>Verstärkerschaltung der Wägezelle</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-displacement.png' | relative_url }}" alt="Statische Studie: max. Durchbiegung des Arms 0,28 mm" loading="lazy"><figcaption>Statische Studie: max. Durchbiegung des Arms 0,28 mm</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-lathe-2.jpg' | relative_url }}" alt="Drehen der Aluminiumkupplung" loading="lazy"><figcaption>Drehen der Aluminiumkupplung</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-force-voltage.png' | relative_url }}" alt="Gemessener Ausgang der Waage: linear 0&ndash;5 kg" loading="lazy"><figcaption>Gemessener Ausgang der Waage: linear 0&ndash;5 kg</figcaption></figure>
</div>

**Konstruktionsentscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Basis aus Stahlrohr, Scherenarme aus Aluminium</td><td>Steifigkeit dort, wo sich die Lasten konzentrieren, geringe bewegte Masse im Gestänge; vor dem Zuschnitt mit einer statischen Studie geprüft</td><td>Rahmen hielt &gt;100 kg; 7 kg Nutzlast bei 5 kg gefordert</td></tr>
  <tr><td>Hubantrieb mit Gewindespindel</td><td>Eine Gewindespindel hält die Last ohne Energie; zuerst mit einer Bohrmaschine als Antrieb getestet, um mechanische und elektrische Validierung zu trennen</td><td>Hubmechanik unter Last validiert, bevor der Motor integriert wurde</td></tr>
  <tr><td>Kurvenscheibe für &ge;30&deg; Neigung ausgelegt</td><td>Reserve gegenüber den geforderten 25&deg; für Reibung und Toleranzen</td><td>Kippbewegung vorgeführt; gerissene ABS-Kurvenscheibe mit gelagerter Aluminiumwelle behoben</td></tr>
  <tr><td>Eigener Wägezellen-Verstärker (ohne HX711)</td><td>Eine Wheatstone-Brücke liefert nur Millivolt: Differenz- und nichtinvertierende Verstärkung sowie ein RC-Tiefpass bringen das Signal in den 3,3-V-Bereich des ADC</td><td>Linear 0&ndash;5 kg &rarr; 0&ndash;3 V</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Einen Scherenhubtisch bauen, der eine Last von 1–5 kg anhebt, wiegt und abkippt und von einem linienfolgenden AGV zwischen Stationen transportiert wird. Zwei Vorgaben prägten den Entwurf: Die Kippneigung zum Entladen musste ≥25° erreichen, und die Wägezelle musste ohne fertigen Messverstärker ausgelesen werden (HX711 nicht erlaubt).

**Mein Beitrag**

- **Konstruktion:** die vollständige Baugruppe des Hubtischs erstellt; die Kurvenscheibe zum Kippen neu modelliert, validiert und im 3D-Druck gefertigt; Bewegungsstudien der Mechanik durchgeführt
- **Elektronik:** die Platine für die Messkette der Wägezelle aufgebaut (Wheatstone-Brücke → Verstärker → Tiefpassfilter → ADC)
- **Embedded:** die Aufteilung der Steuerung auf drei ESP32 vorgeschlagen; das 16×2-LCD programmiert; den Schrittmotor-Hubantrieb in Betrieb genommen
- **Fertigung:** die Motorkupplung und das Pleuel aus Aluminium gedreht und gefräst

<div class="agv-grid">
  <figure class="agv-fig photo tall"><img data-zoomable src="{{ 'assets/img/agv-lathe-2.jpg' | relative_url }}" alt="Paulina an der Drehmaschine"><figcaption>Drehen eines Teils an der Drehmaschine mit Digitalanzeige.</figcaption></figure>
  <figure class="agv-fig clip tall">
    <video src="{{ 'assets/img/agv-coupler.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Gedrehte Aluminiumkupplung am NEMA-17-Hubmotor montiert.</figcaption>
  </figure>
</div>

Teammitglieder haben die Steuerungsfirmware von AGV und Hubtisch, die Kalibrierung der Waage und das Schweißen der Basis verantwortet.

**Konstruktion & Simulation**

Vor dem Bau habe ich die Mechanik in der Simulation geprüft: eine Bewegungsstudie des Scherengestänges in NX, eine statische Verformungsprüfung an einem Arm und eine SolidWorks-Animation der von der Kurvenscheibe angetriebenen Kippschale.

<div class="agv-grid">
  <figure class="agv-fig clip">
    <video src="{{ 'assets/img/agv-nx-motion.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Bewegungssimulation des Scherengestänges in Siemens NX (Drehgelenke und Schieber).</figcaption>
  </figure>
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-displacement.png' | relative_url }}" alt="Statische Verformung eines Scherenarms in SolidWorks"><figcaption>SolidWorks Motion Study, statische Verformung eines Scherenarms: maximal 0,28 mm am freien Ende.</figcaption></figure>
</div>

<div class="agv-grid single"><figure class="agv-fig auto">
  <video src="{{ 'assets/img/agv-cam-tilt.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
  <figcaption>SolidWorks-Animation der Kippschale: Die Kurvenscheibe hebt eine Seite der Schale an, um die Last abzukippen.</figcaption>
</figure></div>

**Elektronik**

Die Signalaufbereitung der Wägezelle (Differenzverstärker, nichtinvertierender Verstärker, RC-Tiefpass) und das 16×2-LCD, auf dem Steckbrett mit dem ESP32 in Betrieb genommen.

<div class="agv-grid">
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-loadcell-circuit.png' | relative_url }}" alt="Signalaufbereitung der Wägezelle"><figcaption>Messkette der Wägezelle: Differenzverstärker → nichtinvertierender Verstärker → RC-Tiefpass → ESP32-ADC (Rückkopplung 102 kΩ, 1 µF).</figcaption></figure>
  <figure class="agv-fig clip">
    <video src="{{ 'assets/img/agv-lcd.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Inbetriebnahme des 16×2-LCD auf dem Steckbrett mit dem ESP32.</figcaption>
  </figure>
</div>

**Werkzeuge & Technologien**

- **SolidWorks:** vollständige Baugruppe, Modellierung der Kurvenscheibe, Bewegungsstudie
- **Siemens NX:** parametrische Modellierung, Bewegungssimulation
- **ESP32 / ESP-IDF (C++):** Ansteuerung des 16×2-LCD, Inbetriebnahme des Schrittmotors (NEMA 17, DRV8825)
- **OPV-Signalaufbereitung + eigene Platine:** Messkette der Wägezelle
- **FDM-Druck (ABS):** Fertigung der Kurvenscheibe
- **Drehmaschine, Fräsmaschine, Gewindeschneiden:** Aluminiumkupplung und Pleuel
- **Kostenschätzung:** Kostenmodell pro Arbeitsgang mit geschätzten Maschinenstundensätzen sowie Berechnung der Schnittdaten

**Ergebnisse & Erkenntnisse**

<div class="agv-grid">
  <figure class="agv-fig tall">
    <video src="{{ 'assets/img/agv-lift-demo.mp4' | relative_url }}" autoplay loop muted playsinline controls style="height: 480px"></video>
    <figcaption>Der gebaute Scherenhubtisch senkt sich während des Tests ab.</figcaption>
  </figure>
  <figure class="agv-fig tall">
    <video src="{{ 'assets/img/agv-moving.mp4' | relative_url }}" autoplay loop muted playsinline controls style="height: 480px"></video>
    <figcaption>Das linienfolgende AGV fährt entlang der schwarzen Klebebandspur.</figcaption>
  </figure>
</div>

- **Struktur:** Der Grundrahmen hielt >100 kg ohne sichtbare Verformung — das bestätigt die Materialwahl (Basis aus Stahl-Rechteckrohr unter einer leichten Scherenstruktur aus Aluminium), eine große Reserve gegenüber der Nutzlast von 5 kg
- **Nutzlast:** Die Plattform trug in der Abschlussvorführung 7 kg, 40 % über der Anforderung von 5 kg — Scherengestänge und Spindelantrieb arbeiteten über der Spezifikation
- **Bauraum:** Der finale Hubtisch misst 40 × 30 × 76 cm, erfüllt die Mindestgrundfläche und trägt zusätzlich eine Kippplattform und eine Waage
- **Hubantrieb:** Die Spindelmechanik wurde mit einer Bohrmaschine als Drehantrieb unter Last validiert, bevor der Motor integriert wurde — mechanische und elektrische Validierung getrennt
- **Kippmechanik:** Die Kurvenscheibe wurde für ≥30° bei geforderten ≥25° ausgelegt; die Kippbewegung wurde im Originalmaßstab und an einem verkleinerten Prototyp vorgeführt. Als die ABS-Kurvenscheibe an der Motorwelle riss, löste eine gelagerte Aluminiumwelle auf der Gegenseite das Problem
- **Waage:** Der Ausgang war linear von 0–5 kg auf 0–3 V, in 1-kg-Schritten gemessen, ohne fertigen Messverstärker — er bleibt im ADC-Bereich des ESP32, und der Wechsel vom Steckbrett auf die Platine beseitigte Kurzschlüsse und Wackelkontakte
- **Ergebnis:** Die vollständig autonome Integration wurde nicht abgeschlossen — die Motortreiber fielen durch einen Kurzschluss aus, und ein AGV-Motor war defekt

## Erkenntnisse

- **Elektrische Isolation ist eine Konstruktionsvorgabe, kein Nachgedanke:** Der Ausfall der Motortreiber kam von einem Kurzschluss, der bei der Integration nicht erkannt wurde. Isolation und Strombegrenzung gehören in die Konstruktions-Checkliste, bevor ein Stecker gefertigt wird.
- **Antriebe per Berechnung auslegen:** Der defekte AGV-Motor wurde auf Empfehlung statt anhand von Drehmoment- und Drehzahlberechnung ausgewählt. Eine Rechnung im Voraus hätte die Fehlauslegung vor der Vorführung aufgedeckt.
- **Erst mechanisch, dann elektrisch validieren:** Den Spindeltest (Bohrmaschine als Antrieb) von der Motorintegration zu trennen, hat gut funktioniert — mechanische Probleme wurden ohne zusätzliches elektrisches Risiko gefunden. Diese Reihenfolge lohnt sich bei jedem künftigen Aufbau.
- **Früher vom Steckbrett auf die Platine wechseln:** Die Genauigkeit der Waage verbesserte sich deutlich, als die Signalaufbereitung vom Steckbrett auf die Platine wanderte. Früher im Zeitplan hätte das mehr Zeit für die Kalibrierung gelassen.

<div class="agv-grid">
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-voltage-time.png' | relative_url }}" alt="Ausgangsspannung der Waage über der Zeit in 1-kg-Schritten"><figcaption>Ausgang der Waage über der Zeit, in 1-kg-Schritten belastet (Spannung in mV; die Achsbeschriftung im Diagramm enthält einen Tippfehler).</figcaption></figure>
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-force-voltage.png' | relative_url }}" alt="Kraft über Spannung der Waage"><figcaption>Kraft (N) über Spannung (mV) für 1–5 kg: monoton und nahezu linear.</figcaption></figure>
</div>

</details>

**Kontext:** Tec de Monterrey, Feb.–Jun. 2025, integrative Challenge im 4. Semester, Team aus 5 Personen.
**Ergebnis:** funktionsfähiger Scherenhubtisch, 40 × 30 × 76 cm, Basis mit >100 kg belastet.
**Stack:** SolidWorks, Siemens NX, ESP32/ESP-IDF, OPV-Signalaufbereitung, eigene Platine, FDM-Druck, Drehen/Fräsen

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#academic' | relative_url }}">← Zurück zu den Projekten</a>
</div>
