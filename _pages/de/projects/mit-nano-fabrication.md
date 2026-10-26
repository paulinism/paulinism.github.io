---
layout: page
permalink: /de/projects/mit-nano-fabrication/
lang: de
de_project: true
ref: mit-nano-fabrication
title: Halbleiter-Mikrofertigung — MIT.nano
description: Reinraum-Intensivkurs bei MIT.nano — Solarzelle mit Wirkungsgrad 15,87 % (Voc 0,60 V), funktionsfähige MEMS-Biegebalken und Mikrofluidikmischer — eine Woche, Klasse 100/1K/10K
img: assets/img/mit-cover-wafer.jpg
importance: 4
category: Fertigung, Elektronik
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .mit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0 1.5rem; }
  .mit-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .mit-fig img, .mit-fig video { display: block; width: 100%; height: 340px; object-fit: contain; background: rgba(128, 128, 128, 0.06); }
  .mit-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .mit-pair { display: grid; grid-template-columns: 1.78fr 1.25fr; gap: 1rem; margin: 1rem 0 1.5rem; align-items: start; }
  .mit-pair .mit-fig img { height: auto; }
  @media (max-width: 767px) { .mit-pair { grid-template-columns: minmax(0, 1fr); } }
  </style>

**Drei funktionsfähige Bauelemente in einer Woche bei MIT.nano (Cambridge, Oktober 2025): eine Silizium-Solarzelle mit 15,87 % Wirkungsgrad und Voc 0,60 V, MEMS-Biegebalken, die Kraft-Weg-Tests unter 4 mg Last überstanden, und ein Mikrofluidikmischer aus PDMS.** Ein Reinraum-Intensivkurs im Programm MIT–Tec de Monterrey, im Zweierteam in Reinräumen der Klassen 100/1K/10K unter vollständiger Schutzausrüstung und Sicherheitsprotokollen durchgeführt.

<div class="mit-pair">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-group-certificates.jpg' | relative_url }}" alt="Programmteilnehmende mit ihren MIT.nano-Zertifikaten"><figcaption>Die Gruppe MIT–Tec de Monterrey mit unseren Abschlusszertifikaten von MIT.nano vor dem Labor fab.nano.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-group-cleanroom.jpg' | relative_url }}" alt="Gruppe in Reinraumanzügen"><figcaption>Die Gruppe in Reinraumanzügen vor dem Betreten des Labors.</figcaption></figure>
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

## Auf einen Blick

<div class="dag-grid">
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-solar-cell-probe.jpg' | relative_url }}" alt="Solarzelle unter der Messspitze" loading="lazy"><figcaption>Solarzelle unter der Messspitze</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-iv-curve.jpg' | relative_url }}" alt="IV-Kennlinie: Voc 0,60 V, Wirkungsgrad 15,87 %" loading="lazy"><figcaption>IV-Kennlinie: Voc 0,60 V, Wirkungsgrad 15,87 %</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-test-a.jpg' | relative_url }}" alt="Krafttest an einer MEMS-Brücke" loading="lazy"><figcaption>Krafttest an einer MEMS-Brücke</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-coflow.jpg' | relative_url }}" alt="Laminare Parallelströmung im Mischer" loading="lazy"><figcaption>Laminare Parallelströmung im Mischer</figcaption></figure>
</div>

**Entscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Antireflexschichten aus SiN mit 80 nm und 100 nm vergleichen</td><td>Die Reflexion ist minimal, wenn die Schicht im Film etwa eine Viertelwellenlänge dick ist</td><td>Beste Zelle: Wirkungsgrad 15,87 %, Voc 0,60 V; zweiter Wafer ~2 % zeigte die Empfindlichkeit</td></tr>
  <tr><td>Spannungsarmes SiN für die MEMS-Balken</td><td>Eigenspannungen verbiegen oder zerbrechen freigelegte Balken</td><td>Alle Biegebalken überstanden die Biegung; Brücken kehrten nach 4 mg Last zurück</td></tr>
  <tr><td>Mischen im Mikromaßstab beobachten</td><td>Bei kleiner Reynolds-Zahl ist die Strömung laminar, die Ströme laufen nebeneinander und mischen sich nur durch Diffusion</td><td>Parallelströmung beobachtet; Partikel setzten sich an den Wänden fest, wo die Geschwindigkeit &rarr; 0</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Drei Bauelemente in einer Woche durch den vollständigen Mikrofertigungszyklus bringen: Dünnschichtabscheidung, Strukturübertragung, Ätzen und Freilegen, Aufbau und Funktionstest. In jedem Modul mussten Prozessparameter (Rezept, Belichtungsenergie, Schichtdicke) gewählt und das Ergebnis im Mikromaßstab geprüft werden, bevor es zum nächsten Schritt ging.

**Mein Beitrag**

- **Fertigung:** Dünnschichtabscheidung, Fotolithografie sowie Nass- und Trockenätzschritte in allen drei Modulen im Zweierteam durchgeführt
- **Physische Validierung und Charakterisierung aller Bauelemente:** Schichtdicke per Ellipsometrie gemessen, die IV-Kennlinie der Solarzelle unter einem Sonnensimulator aufgenommen, die MEMS-Balken im Kraft-Weg-Test geprüft und Strömungstests mit Tracer-Partikeln am Mikrofluidikmischer durchgeführt (Details in den Modulen unten)
- **Sicherheit:** in vollständiger Reinraum-Schutzausrüstung für KOH und andere gefährliche chemische Schritte gearbeitet
- **Bericht:** Mitautorin des technischen Berichts unter Dr. Javier Izquierdo Reyes und Dr. Arnoldo Salazar Soto

**Im Reinraum**

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-photolitho-track.jpg' | relative_url }}" alt="Fotolithografie-Linie"><figcaption>Fotolithografie-Linie (Belacken und Entwickeln) im Gelblichtraum.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-asher.jpg' | relative_url }}" alt="Bedienbildschirm des Plasma-Veraschers"><figcaption>Bedienbildschirm des Plasma-Veraschers (Rezept ash thin, 250 °C, etwa 1,2 Torr, O₂- und N₂-Fluss).</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-wet-bench-acid.jpg' | relative_url }}" alt="Einsetzen eines Waferträgers in den Spin Rinse Dryer"><figcaption>In säurefester Schutzausrüstung: Nach der Reinigung mit Piranha-Lösung kommen die Wafer in den Spin Rinse Dryer (SRD).</figcaption></figure>
</div>

**Modul 1 · Solarzelle**

_Prozess._ Die Antireflexschicht aus Siliziumnitrid in zwei Dicken abgeschieden (80 nm und 100 nm, per Ellipsometrie gemessen), um sie zu vergleichen. Die Frontkontakte per Fotolithografie und RIE strukturiert, Ti/Al (50 nm / 1 µm) gesputtert, das überschüssige Metall nassgeätzt, die Zellen gebrochen und die IV-Kennlinie gemessen.

_Was es gezeigt hat._

- Das beste Bauelement (30-µm-Finger, 25 Linien, 160 µm Abstand) zeigte unter Beleuchtung eine klare Dioden-Kennlinie mit Voc = 0,60 V und einem Wirkungsgrad von 15,87 % (Füllfaktor 47,25 %), laut Software der IV-Messung
- Der zweite Wafer misslang und erreichte nur etwa 2 % Wirkungsgrad — das zeigt, wie empfindlich das Ergebnis von der Qualität der Beschichtung und Metallisierung abhängt

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-nitride-wafer.jpg' | relative_url }}" alt="Mit Siliziumnitrid beschichteter Wafer"><figcaption>Wafer mit der Antireflexschicht aus Siliziumnitrid.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-thickness-station.jpg' | relative_url }}" alt="Messplatz für die Schichtdicke"><figcaption>Messung der Schichtdicke der Beschichtung.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-metallized-wafer.jpg' | relative_url }}" alt="Wafer mit Metallkontaktmustern"><figcaption>Wafer mit den Frontkontaktmustern, mit unterschiedlicher Fingerdichte je Zelle.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-wafer-cleaving.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Brechen des Wafers in einzelne Zellen.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-solar-cell-probe.jpg' | relative_url }}" alt="Solarzelle auf dem Messtisch"><figcaption>Eine fertige Zelle, kontaktiert für die IV-Messung.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-iv-curve.jpg' | relative_url }}" alt="IV-Messung des besten Bauelements"><figcaption>IV-Messung des besten Bauelements unter Beleuchtung; die Software zeigt Wirkungsgrad 15,87 %, Voc 0,60 V und FF 47,25 %.</figcaption></figure>
</div>

**Modul 2 · MEMS-Biegebalken und Brücken**

_Prozess._ Nach einer RCA-Reinigung etwa 1,2 µm spannungsarmes Siliziumnitrid (Mischfrequenz) abgeschieden. Die Belichtung auf etwa 130 mJ/cm² für eine Balkenbreite von 15 µm eingestellt. Den Endpunkt der SF₆-Ätzung über Interferenz bestimmt, die Balken in KOH freigelegt und im Kraft-Weg-Test geprüft.

_Was es gezeigt hat._

- Die Brücken erreichten unter 4 mg Last den Boden der Kavität und kehrten in ihre Ausgangslage zurück
- Alle Biegebalken überstanden die Biegetests ohne Bruch
- Eine Brücke war unvollständig; sie ist als Prozessfehler dokumentiert

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-profilometer-stage.jpg' | relative_url }}" alt="Mechanisches Prüfgerät mit dem strukturierten Wafer"><figcaption>Mechanisches Prüfgerät, das kontrollierte Kräfte im Mikromaßstab aufbringt, mit dem strukturierten Wafer auf dem Tisch.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-profilometer-scan.jpg' | relative_url }}" alt="Kraft-Weg-Diagramm des Brückentests"><figcaption>Kraft-Weg-Diagramm eines 4-mg-Tests an einer schmalen Brücke: Die Brücke wird nach unten gezogen, bis sie den Boden der Kavität erreicht, und kehrt dann in ihre Ausgangslage zurück.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-view.jpg' | relative_url }}" alt="Live-Kamerabild während des Brückentests"><figcaption>Live-Kamerabild der Brücke mit aufgesetzter Spitze des Prüfgeräts.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-test-a.jpg' | relative_url }}" alt="Gut gefertigte Brücke"><figcaption>Gut gefertigte Brücke: eine durchgehende Struktur von einer Seite der Öffnung zur anderen.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-test-b.jpg' | relative_url }}" alt="Fehlerhafte Brücke"><figcaption>Fehlerhafte Brücke: Die Struktur ist unvollständig, wahrscheinlich durch Prozessschwankungen bei der Fertigung.</figcaption></figure>
</div>

**Modul 3 · Mikrofluidikmischer**

_Prozess._ Eine Form aus SU-8 2025 (~30 µm) aufgeschleudert, PDMS gegossen, per O₂-Plasma auf Glas gebondet und Strömungstests mit 3-µm-Tracer-Partikeln durchgeführt.

_Was es gezeigt hat._

- Die beiden Ströme flossen in laminarer Parallelströmung nebeneinander, und die Tracer-Partikel machten lokale Wirbel sichtbar
- Die Tracer-Partikel sammelten sich an den Wänden, wo die Strömungsgeschwindigkeit nahe null ist, bis der Kanal vollständig verstopfte — ein realer Ausfallmechanismus mikrofluidischer Bauelemente

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-su8-mold.jpg' | relative_url }}" alt="SU-8-Formwafer"><figcaption>SU-8-Formwafer mit den Kanalentwürfen der Mischer.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-pdms-casting.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>PDMS wird über die SU-8-Form gegossen, um das mikrofluidische Bauelement abzuformen.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-flow-setup.jpg' | relative_url }}" alt="Aufbau für den mikrofluidischen Strömungstest"><figcaption>Aufbau für den Strömungstest: Stereomikroskop, Druckregler, Schläuche und das PDMS-Bauelement auf Glas.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-coflow.jpg' | relative_url }}" alt="Zwei Ströme in laminarer Parallelströmung"><figcaption>Zwei Ströme fließen an der Kanalverzweigung in laminarer Parallelströmung nebeneinander.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-particle-clog.jpg' | relative_url }}" alt="An der Kanalverzweigung angesammelte Tracer-Partikel"><figcaption>Tracer-Partikel sammeln sich an der Kanalverzweigung, bis der Kanal verstopft.</figcaption></figure>
</div>

**Werkzeuge & Technologien**

- **Abscheidung von Siliziumnitrid (Misch- und Hochfrequenzrezepte):** Antireflexschicht und Strukturschicht
- **Ellipsometrie:** Messung der Schichtdicke
- **Fotolithografie (Positivlack mit HMDS-Haftvermittler; SU-8-Negativlack):** Kontaktgitter, Balkengeometrie, mikrofluidische Form
- **RIE (SF₆) mit interferometrischer Endpunkterkennung:** Strukturierung des Siliziumnitrids
- **Nassätzen (KOH, HF, Aluminiumätze):** Freilegen der Balken, Entfernen von Ti und Al
- **Sputtern (Ti/Al):** Metallisierung der Solarzelle
- **PDMS-Softlithografie und O₂-Plasmabonden:** mikrofluidisches Bauelement
- **Kraft-Weg-Prüfgerät, optisches Mikroskop, Sonnensimulator mit IV-Messung:** Charakterisierung

**Erkenntnisse**

- **Kontaminationskontrolle:** Ein Wafer zerbrach beim Brechen, weil der Arbeitsplatz nicht sauber war. Kontaminationskontrolle gilt für jeden Schritt, nicht nur für den Reinraum selbst.
- **Ausfallmechanismen:** Der mikrofluidische Kanal verstopfte, weil sich Tracer-Partikel an den Wänden sammelten; die Testbedingungen müssen das von Anfang an berücksichtigen.

</details>

**Kontext:** MIT.nano, Cambridge, USA — einwöchiger Reinraum-Intensivkurs, Halbleiterfertigung (Okt. 2025).
**Stack:** LPCVD/PECVD, Fotolithografie, RIE/KOH-Nassätzen, PDMS-Softlithografie, Reinraumprotokolle (Klasse 100/1K/10K)

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#extracurricular' | relative_url }}">← Zurück zu den Projekten</a>
</div>
