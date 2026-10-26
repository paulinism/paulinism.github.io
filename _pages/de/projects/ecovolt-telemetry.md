---
layout: page
permalink: /de/projects/ecovolt-telemetry/
lang: de
de_project: true
ref: ecovolt-telemetry
title: Plattform für Telemetrie & Energieoptimierung
description: Platinenverantwortung & Firmware — drei Generationen Telemetrie für ein Shell-Eco-marathon-Fahrzeug — 1. (2025) und 2. Platz (2026) beim Data & Telemetry Award
img: assets/img/ecovolt-telemetry.jpg
importance: 1
category: Platinen, Embedded, Elektronik
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .tel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .tel-grid.single { grid-template-columns: minmax(0, 720px); justify-content: center; }
  .tel-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .tel-fig img, .tel-fig video { display: block; width: 100%; height: 320px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .tel-fig.photo img { object-fit: cover; }
  .tel-fig.tall img, .tel-fig.tall video { height: 440px; }
  .tel-fig.auto img, .tel-fig.auto video { height: auto; }
  .tel-fig.sq img, .tel-fig.sq video { aspect-ratio: 1/1; height: auto; object-fit: cover; background: rgba(128, 128, 128, 0.06); }
  .tel-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .tel-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .tel-table th, .tel-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .tel-table th { background: rgba(128, 128, 128, 0.08); }
  .tel-grid.tel-grid-battery { grid-template-columns: 2fr 1fr; }
  .tel-grid.tel-grid-battery .tel-fig img { height: 360px; object-fit: cover; }
  .tel-grid.tel-grid-ergo { grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr); }
  .tel-grid.tel-grid-ergo .tel-fig img { height: auto; }
  .tel-grid.tel-grid-ergo .tel-fig.tall-shot { grid-row: span 2; }
  .tel-grid.tel-grid-ergo .tel-fig.tall-shot img { object-fit: contain; background: #fff; }
  @media (max-width: 767px) {
    .tel-grid.tel-grid-ergo { grid-template-columns: minmax(0, 1fr); }
    .tel-grid.tel-grid-ergo .tel-fig.tall-shot { grid-row: auto; width: 100%; max-width: 420px; margin: 0 auto; }
  }
  .tel-grid.tel-grid-pair .tel-fig img { aspect-ratio: 1202 / 1102; height: auto; object-fit: cover; }
</style>

**1. Platz beim Data & Telemetry Award (2025) und 2. Platz (2026) beim Shell Eco-marathon.** Drei Generationen Telemetrie-Platinen und ESP32-Firmware für EcoVolt CCM: Live-Daten an Box und Fahrerin, Strommessung mit 1 kHz auf SD-Karte, ein Superkondensator-Energiespeicher, der das System nach einem Spannungsausfall weiterlaufen lässt, und eine Simulatorschleife für die Energiestrategie.

<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-wiring.jpg' | relative_url }}" alt="Paulina verkabelt die Telemetrie-Elektronik beim Wettbewerb"><figcaption>Verkabelung der Fahrzeugelektronik während des Wettbewerbs.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-award-2025.jpg' | relative_url }}" alt="Data and Telemetry Award, Shell Eco-marathon Americas 2025"><figcaption>1. Platz, Data &amp; Telemetry Award — Shell Eco-marathon Americas 2025.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="Platine US 2026, Altium 3D" loading="lazy"><figcaption>Platine US 2026, Altium 3D</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-purple.jpg' | relative_url }}" alt="Gefertigte Platine US 2026" loading="lazy"><figcaption>Gefertigte Platine US 2026</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Selbst geätzter INA240-Prototyp" loading="lazy"><figcaption>Selbst geätzter INA240-Prototyp</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Im Fahrzeug eingebaute Telemetrie" loading="lazy"><figcaption>Im Fahrzeug eingebaute Telemetrie</figcaption></figure>
</div>

**Konstruktionsentscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Strommessverstärker INA240</td><td>Wenige Millivolt am Shunt liegen auf einer 48-V-Leitung: Der INA240 (Verstärkung 20 V/V) unterdrückt die Gleichtaktspannung und misst bidirektional, also auch die Rekuperation</td><td>Kalibrierter Stromkanal statt eines Offsets von 15 A</td></tr>
  <tr><td>Shunt von 20 m&Omega; auf 5 m&Omega; verkleinert</td><td>Der 20-m&Omega;-Shunt trieb den Verstärker beim realen Spitzenstrom in die Sättigung; ein Viertel des Widerstands ergibt den vierfachen Messbereich</td><td>Keine Sättigung bei US 2026</td></tr>
  <tr><td>Erst auf SD schreiben, dann senden</td><td>In Brasilien 2025 kam über die Mobilfunkverbindung nur etwa eine Runde beim Server an</td><td>Keine Datenverluste bei der Übertragung</td></tr>
  <tr><td>Externe Antenne an der Windschutzscheibe</td><td>Das Kohlefaser-Monocoque ist leitfähig und dämpft WLAN wie ein teilweiser Faradayscher Käfig</td><td>Stabile Funkverbindung aus dem Fahrzeuginneren</td></tr>
  <tr><td>Superkondensator-Energiespeicher</td><td>Ein Spannungsausfall oder das Abschalten des Fahrzeugs würde die Aufzeichnung abbrechen; ~80 s Reserve überbrücken die Lücke</td><td>Telemetrie läuft nach einem Spannungsausfall weiter</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Beim Shell Eco-marathon zählt Energieeffizienz, nicht Geschwindigkeit: Es gewinnt, wer die Strecke mit der wenigsten Energie zurücklegt. Zwei Dinge entscheiden das Ergebnis — wie der Fahrer das Gaspedal nutzt und ob das Team sieht, was der Antriebsstrang tut. Als ich ins Elektronikteam kam, hatte EcoVolt CCM keine Telemetrie. Die Ziele: Batteriespannung und bidirektionalen Motorstrom sowie Position, Beschleunigung und Fahrereingaben messen; die Daten aus einem fahrenden Kohlefaserfahrzeug übertragen; nie die Daten eines Laufs verlieren; und aus Daten Fahrentscheidungen machen.

<a id="my-contribution"></a>

**Mein Beitrag**

Co-Leiterin Elektronik und Ersatzfahrerin (2024–25), Teamkapitänin, Leiterin Telemetrie und Hauptfahrerin (2025–26) sowie Mentorin (2026).

- **Platinenentwurf:** das INA240-Strommessmodul und die Telemetrie-Platine Brazil 2025; Hauptbeitrag zur Platine US 2026 und Mitentwicklerin der Revision Brazil 2026
- **Strommessung:** der bidirektionale Shunt-Sensor, vom selbst geätzten Prototyp bis zur gefertigten Platine
- **Firmware:** CAN zum eigenen Motorcontroller (inkl. Transceiver-Schaltung), Treiber für SD-Karte, SPI, I²C und UART, Strom- und Spannungserfassung
- **GPS:** den Empfänger NEO-6M in u-blox u-center konfiguriert
- **Fahreranzeige & Streckenanalyse:** festgelegt, was der Fahrer sieht; 3D-Rekonstruktion der Strecken in Indianapolis und Rio de Janeiro aus GPS-Daten in MATLAB
- **Mit anderen:** Betreuung des Superkondensator-Moduls (gebaut von José Diego González), der Datenanalyse in Altair, der Simulator-Prüfstandstests und der Anforderungen an die Webplattform

Teammitglieder haben die Webplattform und die Dashboards gebaut; die Hardware-Revision Brazil 2026 wurde von José Diego González unter meiner Betreuung geleitet.

**Elektrische Fahrzeughardware**

Vor und neben der Telemetrie habe ich an der übrigen Fahrzeugelektronik gearbeitet: SMD- und THT-Schaltungen gelötet und debuggt, Transistoren sowie Z-, Schottky- und Gleichrichterdioden am eigenen Motorcontroller charakterisiert und das 48-V-Batteriepaket montiert — Zellverbindung, Einbau von BMS und Sicherung, Isolation und Prüfung der Einzelzellspannungen.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-mc-assembled.jpg' | relative_url }}" alt="Montierter SEM-Motorcontroller mit Raspberry Pi Pico"><figcaption>Montierter Motorcontroller (SEM-Platine): Raspberry Pi Pico, Gate-Treiber, sechs MOSFETs und Strommessteil. Diente zur Charakterisierung von Transistoren und Dioden und zur Validierung der Antriebselektronik.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-mc-bare.jpg' | relative_url }}" alt="Unbestückte SEM-Motorcontroller-Platine mit Schaltplan auf dem Handy"><figcaption>Unbestückte Platine neben dem Schaltplan: SMD-Pads für die Gate-Treiber, MOSFET-Footprints und der Sockel für den Raspberry Pi Pico.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-mc-test.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Motorcontroller im Test auf dem Prüfstand, mit in C geschriebener Firmware.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-battery-pack.jpg' | relative_url }}" alt="48-V-Batteriepaket mit BMS während der Montage"><figcaption>Montage des 48-V-Batteriepakets: Zellen in Haltern, BMS-Platine und Ausgangsverkabelung vor dem Einbau ins Fahrzeug.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-comp-assembly.jpg' | relative_url }}" alt="Paulina und José Diego arbeiten beim Wettbewerb am Fahrzeug"><figcaption>Beim Wettbewerb mit José Diego González — Arbeit an der Fahrzeugelektronik zwischen den technischen Abnahmen.</figcaption></figure>
</div>

**V0 — Steckbrett-Prototyp (Americas 2025)**

Ein ESP32 auf einem Steckbrett mit Hall-Strommodul, Spannungsteiler, GPS und IMU, das per MQTT sendet. Live-Daten erreichten während eines Laufs die Box, aber der Stromkanal hatte einen Kalibrierfehler von ~15 A, sodass die Effizienzberechnung schon an der Quelle falsch war. Trotzdem gewann er den 1. Platz beim Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-breadboard-2025.jpg' | relative_url }}" alt="Steckbrett-Prototyp mit ESP32 und NEO-6M-GPS"><figcaption>Erster Prototyp: ESP32 DevKit und NEO-6M-GPS auf einem Steckbrett.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-proto-hall-2025.jpg' | relative_url }}" alt="Lochrasterplatine mit ESP32 und Hall-Strommodul"><figcaption>Version auf Lochrasterplatine mit Hall-Strommodul, eingesetzt bei Americas 2025.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-indy-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Das Fahrzeug auf dem Indianapolis Motor Speedway, Americas 2025.</figcaption></figure>
</div>
<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-thingspeak-2025.jpg' | relative_url }}" alt="ThingSpeak-Diagramme für Strom und Spannung, 2025"><figcaption>Live-Datenvisualisierung in ThingSpeak beim Shell Eco-marathon Americas 2025: Die Motorstromwerte lagen zwischen 14,5 und 17,6 A, mit einem Kalibrierfehler von etwa 15 A. Der Spannungsverlauf war mit 57,0 V korrekt und passt zur Nennbetriebsspannung der Batterie von etwa 60 V.</figcaption></figure>
</div>

**V1 — Erste eigene Platine (Brazil 2025)**

Ich habe das Hall-Modul durch einen eigenen Shunt-Entwurf ersetzt: ein INA240A1 an einem 20-mΩ-Shunt mit RC-Filter, von der selbst geätzten Platine über ein Altium-Modul bis zur gefertigten Leiterplatte, auf einer einzigen Platine mit ESP32-C3, GPS und IMU. Die Shunt-Spannung beträgt nur wenige Millivolt auf einer 48-V-Leitung; der INA240 (Verstärkung 20 V/V) unterdrückt daher die Gleichtaktspannung und misst sowohl Entnahme als auch Rekuperation. Auf der Strecke zeigten sich zwei Probleme: Der 20-mΩ-Shunt trieb den Verstärker beim realen Fahrzeugstrom in die Sättigung, und die Latenz über einen Mobilfunk-Hotspot ließ nur etwa eine Runde verwertbarer Daten übrig.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Selbst geätzter INA240-Strommess-Prototyp"><figcaption>Juli 2025: selbst geätzter INA240-Strommess-Prototyp.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-ina240-breakout.jpg' | relative_url }}" alt="Altium-Rendering des INA240-Moduls"><figcaption>Dieselbe Schaltung als Altium-Modul: Shunt, INA240A1, RC-Filter und Stiftleiste.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-brazil25.jpg' | relative_url }}" alt="Telemetrie-Platine Brazil 2025 mit GPS und IMU"><figcaption>Telemetrie-Platine Brazil 2025, gefertigt, mit GPS- und IMU-Modul.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-sch-brazil25.png' | relative_url }}" alt="Telemetrie-Schaltplan, Brazil 2025"><figcaption>Schaltplan Brazil 2025: 20-mΩ-Shunt mit INA240A1, Spannungsteiler 1 MΩ / 56 kΩ, MPU6050, NEO-6M und ESP32-C3 SuperMini.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-pcb-brazil25-layout.jpg' | relative_url }}" alt="Platinenlayout Brazil 2025 in Altium"><figcaption>Layout Brazil 2025 in Altium, rechts der Shunt-Bereich (IN/OUT-Pads).</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-brazil-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Als Fahrerin auf der Strecke am Pier Mauá, Rio de Janeiro — Brazil 2025.</figcaption></figure>
</div>

Zwischen den Saisons haben wir acht Regressionsmodelle in Altair AI Studio verglichen. Bei so wenig Daten war kein Modell zuverlässig (36–80 % relativer Fehler), aber die Rangfolge der Variablen — Geschwindigkeit als dominierender Faktor — lenkte die nächste Saison auf eine Geschwindigkeitsstrategie und brachte eine Honorable Mention beim Altair Global Student Contest 2025.

<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-altair.png' | relative_url }}" alt="Modellvergleich und Faktorrangfolge in Altair AI Studio"><figcaption>Altair AI Studio: acht Modelle nach relativem Fehler und Laufzeit verglichen (oben); Rangfolge der Variablen mit Geschwindigkeit als dominierendem Faktor (unten rechts).</figcaption></figure>
</div>

**V2 — Vollständige Neuentwicklung (US 2026)**

Der Shunt wurde von 20 mΩ auf 5 mΩ verkleinert: ein Viertel des Signals pro Ampere und der vierfache Messbereich. Ein ESP32-C5 mit externer Antenne an der Windschutzscheibe umgeht das Kohlefaser-Monocoque, das WLAN wie ein teilweiser Faradayscher Käfig dämpft. Neue Schnittstellen: ein ADS1115 für die Fahrereingaben, CAN zum Motorcontroller und Aufzeichnung auf SD-Karte, alles in einem 3D-gedruckten Gehäuse. Ergebnis: 2. Platz beim Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="Altium-3D-Rendering der Platine US 2026"><figcaption>Platine US 2026, Altium-3D-Rendering: Footprint des ESP32-C5, Sensoranschlüsse und Shunt-Bereich.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-purple.jpg' | relative_url }}" alt="Gefertigte Platine US 2026, Schrägansicht"><figcaption>Die gefertigte Platine US 2026: ESP32-C5, IMU, Shunt-Bereich und Sensoranschlüsse.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-enclosure.jpg' | relative_url }}" alt="Platine US 2026 im 3D-gedruckten Gehäuse"><figcaption>Im 3D-gedruckten Gehäuse, bereit für das Fahrzeug.</figcaption></figure>
</div>
<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-sch-us26.png' | relative_url }}" alt="Telemetrie-Schaltplan, US 2026"><figcaption>Schaltplan US 2026: Strommessung mit INA240A1, Spannungsteiler, MPU6050, NEO-6M-GPS, ADS1115 für die Fahrereingaben, microSD über SPI, CAN-Transceiver und der ESP32-C5.</figcaption></figure>
</div>

**V3 — Robustheitsrevision (Brazil 2026)**

Gleiche Schaltung, neu entflochtene Platine, bessere Lötstellen und ein verriegelnder Versorgungsstecker, um sporadische Fehler und Störungen zu beseitigen. Datenintegrität wurde zur Konstruktionsregel: Jeder Datensatz wird zuerst auf die SD-Karte geschrieben und danach gesendet, nicht gesendete Datensätze werden gepuffert und erneut versucht, und ein Superkondensator-Modul hält das System nach einem Spannungsausfall etwa 80 s am Laufen. Ich habe José Diego González bei diesem Superkondensator-Energiespeicher betreut, den er unter meiner Anleitung gebaut hat.

<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-pcb-br26-layout.png' | relative_url }}" alt="Platinenlayout Brazil 2026 in Altium"><figcaption>Layout Brazil 2026 in Altium, Paulina Ruíz Servín und José Diego González Fernández zugeschrieben.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26.jpg' | relative_url }}" alt="Gefertigte Platine Brazil 2026 mit microSD-Steckplatz"><figcaption>Die gefertigte Platine Brazil 2026 mit microSD-Steckplatz und verriegelndem Versorgungsstecker.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-supercap.jpg' | relative_url }}" alt="Superkondensator-Energiespeichermodul"><figcaption>Superkondensator-Energiespeichermodul: etwa 80 s Betrieb nach einem Spannungsausfall.</figcaption></figure>
  <figure class="tel-fig"><img data-zoomable src="{{ 'assets/img/tel-supercap-render.jpg' | relative_url }}" alt="3D-Rendering der Energiespeicher-Platine"><figcaption>3D-Rendering der Energiespeicher-Platine.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Im Fahrzeug eingebaute Telemetrie"><figcaption>Im Fahrzeug eingebaute Telemetrie, neben der Batterie.</figcaption></figure>
</div>

Auf der Strecke in Rio de Janeiro mit dem System V3 — eine der drei Sitzungen, die als Trainingsdaten für ein künftiges Energiemodell aufgezeichnet wurden.

<div class="tel-grid single">
  <figure class="tel-fig tall"><video src="{{ 'assets/img/tel-brazil-2026-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Auf der Strecke in Rio de Janeiro, Brazil 2026 — eine der drei aufgezeichneten Sitzungen.</figcaption></figure>
</div>

**Simulator-Prüfstandstest**

Noch bevor das Fahrzeug 2026 existierte, hat das Team den realen Motor und Controller im geschlossenen Kreis mit dem Simulator Assetto Corsa verbunden, während die Telemetrie-Platine Strom und Spannung aufzeichnete. Die beiden Datenströme hatten keine gemeinsame Uhr, daher wurden sie synchronisiert, indem das Loslassen des Gaspedals den Stromabfällen zugeordnet und eine Kreuzkorrelation berechnet wurde. Über 15 Runden in Indianapolis erreichte konstantes Gasgeben **347,2 km/kWh** gegenüber **304,3 km/kWh** bei Pulse-and-Glide — 14,1 % weniger effizient — und die Motortemperatur blieb bei 47,7 °C.

<div class="tel-grid single">
  <figure class="tel-fig photo auto"><img data-zoomable src="{{ 'assets/img/tel-sim-setup.jpg' | relative_url }}" alt="Simulator-Prüfstand mit dem realen Motor im Kreis"><figcaption>Simulator-Prüfstandstest: Assetto Corsa mit Lenkrad und Pedalen, der reale Motor mit Controller im Kreis und das Live-Telemetrie-Dashboard.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-sim-bench.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Fahrt auf der Strecke von Indianapolis im Simulator.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-motor-temp.jpg' | relative_url }}" alt="Messung mit IR-Thermometer am Motor während des Prüfstandstests"><figcaption>Motortemperatur während des Prüfstandstests (47,7 °C): Prüfung des Verhaltens im Fahrzeug und ob nach einem gültigen Versuch eine Kühlung nötig wäre.</figcaption></figure>
</div>

**Fahreranzeige, Dashboards & Streckenanalyse**

Als Hauptfahrerin habe ich die Fahreranzeige im Cockpit getestet und festgelegt, was sie anzeigt. Das Webteam hat die Dashboards und das Laufarchiv aus den gemeinsam definierten Variablen gebaut; ich habe die Strecke von Indianapolis aus 2.696 GPS-Punkten in 3D rekonstruiert.

<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-dashboard.png' | relative_url }}" alt="Echtzeit-Dashboard für die Box"><figcaption>Echtzeit-Dashboard für die Box, US 2026 (vom Webteam gebaut).</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-track-map.png' | relative_url }}" alt="Streckenkarte nach Telemetriewerten eingefärbt"><figcaption>Rundenverlauf auf der Strecke von Indianapolis, nach Telemetriewerten eingefärbt.</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-indy-3d.png' | relative_url }}" alt="3D-Rekonstruktion der Strecke von Indianapolis in MATLAB"><figcaption>Meine 3D-Rekonstruktion der Strecke von Indianapolis in MATLAB aus 2.696 GPS-Punkten (Breite, Länge, Höhe); die Höhe variiert über die Runde um etwa 3,8 m.</figcaption></figure>
</div>
<div class="tel-grid single wide">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-driver-display.png' | relative_url }}" alt="Fahreranzeige während einer Simulatorsitzung"><figcaption>Fahreranzeige während einer Simulatorsitzung: Sitzungszeit, Geschwindigkeit, Zielgeschwindigkeit und Effizienz.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-run-archive.png' | relative_url }}" alt="Laufarchiv der Webplattform Brazil 2026"><figcaption>Laufarchiv, Brazil 2026: 14 Sitzungen und 55,1 Tsd. Telemetriedatensätze (vom Webteam gebaut).</figcaption></figure>
  <figure class="tel-fig auto"><video src="{{ 'assets/img/tel-web-platform.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Sitzungsanalyse in der Webplattform.</figcaption></figure>
</div>

<a id="driver-ergonomics-vehicle-design-award"></a>

**Fahrerergonomie (Vehicle Design Award)**

Bevor die CAD-Arbeit begann, habe ich in Process Simulate ein virtuelles Fahrermodell mit meinen eigenen Körpermaßen erstellt. Die RULA-Bewertung ergab einen Wert von 3 (geringes Risiko), und das Modell wurde in das SolidWorks-Cockpit importiert, sodass das Monocoque das aerodynamische Profil und den Fahrerraum in einer Iteration erfüllte — ein Beitrag zum Vehicle Design Award 2026.

<style>
  .tel-grid.wide { grid-template-columns: minmax(0, 1000px); }
  .tel-grid.wide .tel-fig video, .tel-grid.wide .tel-fig img { height: auto; }
  @media (min-width: 768px) {
    .tel-grid.tel-grid-ergo { align-items: stretch; grid-template-rows: 1fr 1fr; }
    .tel-grid.tel-grid-ergo .tel-fig:not(.tall-shot) { display: flex; flex-direction: column; }
    .tel-grid.tel-grid-ergo .tel-fig:not(.tall-shot) img { flex: 1 1 auto; height: 0; min-height: 220px; width: 100%; }
    .tel-grid.tel-grid-ergo .tel-fig:nth-child(2) img { object-fit: contain; background: #fff; }
    .tel-grid.tel-grid-ergo .tel-fig:nth-child(3) img { object-fit: cover; object-position: center 45%; }
  }
</style>

<div class="tel-grid tel-grid-ergo">
  <figure class="tel-fig tall-shot"><img data-zoomable src="{{ 'assets/img/tel-rula-monitor.png' | relative_url }}" alt="Tecnomatix Posture Monitor mit Gelenkwinkeln und RULA-Werten"><figcaption>Posture Monitor in Tecnomatix Process Simulate: Gelenkwinkel des virtuellen Fahrers im Cockpit 2026. Nackenbeugung (47°, gelb) und Rumpfbeugung (84°, rot) als zu beobachtende Winkel markiert; Ellbogen bei 45° Beugung, Handgelenke neutral.</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-driver-model.png' | relative_url }}" alt="3D-Fahrermodell in der Fahrzeughülle EcoVolt 2026 in Tecnomatix"><figcaption>Fahrermodell in der Fahrzeughülle 2026 (Tecnomatix Process Simulate).</figcaption></figure>
  <figure class="tel-fig"><img data-zoomable src="{{ 'assets/img/tel-award-vehicle-design-us26.jpg' | relative_url }}" alt="Das Team EcoVolt CCM erhält den Vehicle Design Award beim Shell Eco-marathon United States 2026"><figcaption>Das Team EcoVolt CCM erhält den 1. Platz beim Vehicle Design Award – Prototype, Shell Eco-marathon United States 2026, Indianapolis Motor Speedway.</figcaption></figure>
</div>

**Werkzeuge & Technologien**

- **Altium Designer:** Telemetrie-Platinen und INA240-Modul
- **ESP32-C3/C5 (C++):** CAN (TWAI), SPI, I²C, UART, SD-Aufzeichnung, MQTT
- **MATLAB, Altair AI Studio, u-center:** Streckenrekonstruktion, Modellvergleich, GPS-Konfiguration
- **Labor:** Oszilloskop, Labornetzteil, Multimeter, Funktionsgenerator

**Ergebnisse & Erkenntnisse**

<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-soldering.jpg' | relative_url }}" alt="Löten einer Sensorplatine"><figcaption>Fehlersuche am Gaspedal direkt am Fahrzeug beim Shell Eco-marathon Brazil 2025.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-trackside-brazil.jpg' | relative_url }}" alt="Briefing der Fahrer an der Strecke in Rio de Janeiro"><figcaption>Briefing der Fahrer an der Strecke in Rio de Janeiro zu Fahrstrategie und Telemetriedaten.</figcaption></figure>
</div>

- **Auszeichnungen:** 1. Platz (2025) und 2. Platz (2026) beim Data & Telemetry Award; Honorable Mention beim Altair Global Student Contest 2025
- **Hardware-Entwicklung:** vom Steckbrett zu drei Generationen eigener, ins Fahrzeug integrierter Platinen
- **Fahrstrategie:** konstantes Gasgeben als effizienteste Strategie erkannt, bevor das Fahrzeug auf der Strecke war
- **Jeden analogen Kanal vor der Veranstaltung kalibrieren**
- **Den Shunt nach dem gemessenen Spitzenstrom auslegen, nicht nach dem erwarteten Verbrauch**
- **Die lokale Aufzeichnung ist die maßgebliche Quelle;** die Funkverbindung ist nur Best Effort
- **Ehrliche Analyse:** Bei kleinem Datensatz war das brauchbare Ergebnis die Rangfolge der Variablen, nicht ein Vorhersagemodell

</details>

**Kontext:** Elektro-Rennteam EcoVolt CCM, Shell Eco-marathon, 2024–2026.
**Ergebnis:** 1. Platz (2025) und 2. Platz (2026), Data & Telemetry Award; Honorable Mention, Altair Global Student Contest 2025.
**Stack:** Altium Designer, ESP32-C3/C5, C++, INA240, ADS1115, CAN (TWAI), SPI, I²C, UART, MQTT, u-blox u-center, MATLAB, Altair AI Studio, Prüfstandstests mit Assetto Corsa

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#extracurricular' | relative_url }}">← Zurück zu den Projekten</a>
</div>
