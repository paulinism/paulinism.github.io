---
layout: page
permalink: /de/projects/ecovolt-inventory/
lang: de
de_project: true
ref: ecovolt-inventory
title: Automatisiertes Inventarsystem für Schutzausrüstung & Werkzeug
description: "Konzept & Python-Pilot — QR-Tracking für den Paddock-Betrieb beim Shell Eco-marathon — zollfertiger Excel-Export, QR-Erkennung unter 80 ms, Web-Dashboard mit Ausleihverwaltung"
img: assets/img/inv-cover-composite.jpg
importance: 1
category: Bildverarbeitung, Web
featured: false
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

**Beim Shell Eco-marathon Brazil 2026 im Einsatz: ein QR-basiertes Inventarsystem, das die Zollanmeldung für Dutzende Werkzeuge und Bauteile vereinfacht und mit dem das Team seine Ausleihliste im Paddock in wenigen Minuten abgeschlossen hat.** Jeder Gegenstand erhält ein physisches QR-Etikett, das mit einem Datenbankeintrag verknüpft ist — das Auslesen dauert unter 80 ms, und das System exportiert per Klick eine zollfertige Excel-Datei.

<div class="inv-grid single">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-dashboard.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-dashboard-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Inventar-Dashboard: Gesamtzahlen, Statusübersicht, Gegenstände mit Handlungsbedarf und der Excel-Export.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Stufe 1: Excel-Register (Prototyp des Datenmodells)" loading="lazy"><figcaption>Stufe 1: Excel-Register (Prototyp des Datenmodells)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="Stufe 2: QR-Erkennung mit OpenCV und ID-Prüfung" loading="lazy"><figcaption>Stufe 2: QR-Erkennung mit OpenCV und ID-Prüfung</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Latenz-Benchmark des Piloten" loading="lazy"><figcaption>Latenz-Benchmark des Piloten</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Stufe 3: Webplattform, Schnellansicht eines Gegenstands" loading="lazy"><figcaption>Stufe 3: Webplattform, Schnellansicht eines Gegenstands</figcaption></figure>
</div>

**Entscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Excel-Register vor jeglichem Code</td><td>Erst prüfen, welche Felder das Team wirklich braucht, bevor Software entsteht</td><td>Wurde zum Datenbankmodell und zum zollfertigen Excel-Export per Klick</td></tr>
  <tr><td>Fünf Bildvarianten, die erste erfolgreiche Erkennung gewinnt</td><td>Geringer Kontrast, Unschärfe und kleine Codes stören die QR-Erkennung: CLAHE hebt den lokalen Kontrast, Schärfen stellt Kanten wieder her, 2-fache Hochskalierung vergrößert kleine Module; der Abbruch beim ersten Treffer hält die Latenz niedrig</td><td>Erkennung unter 80 ms pro Bild</td></tr>
  <tr><td>&bdquo;Lesbar&ldquo; und &bdquo;gültig&ldquo; trennen</td><td>Ein QR-Code kann einwandfrei dekodiert werden und trotzdem den falschen Text enthalten, daher wird der Inhalt gegen das ID-Format geprüft</td><td>Grüner Rahmen für gültige IDs, roter für fehlerhafte</td></tr>
  <tr><td>Aufnahme von der Verarbeitung getrennt</td><td>Den Algorithmus an gespeicherten Fotos zu testen trennt Kameraprobleme ab und macht Durchläufe reproduzierbar</td><td>Benchmark mit Trefferquote, Mittelwert und p95-Latenz, protokolliert in JSONL</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Wer von Mexiko zu einem internationalen Wettbewerb reist, muss Dutzende Werkzeuge, Schutzausrüstung und elektronische Bauteile durch den Zoll bringen — ein Prozess, der das Team in früheren Jahren Zeit und Nerven gekostet hatte — und sie danach in einem hektischen Paddock im Blick behalten. Ich habe ein QR-basiertes Inventar mit vier Zielen vorgeschlagen: ein physisches Etikett pro Gegenstand, ein Datenbankeintrag dahinter, Ausleihen an andere Teams unter Kontrolle und jede Werkzeugkiste auf einen Blick auffindbar. Es entstand in drei Stufen und wurde Teil der Bewerbung des Teams für den Safety Leadership Award.

**Mein Beitrag**

- **Konzept und Datenmodell:** das System vorgeschlagen und festgelegt, was jeder Inventareintrag enthält
- **Stufe 1 — Excel-Register:** das erste Inventar, mit Foto, Drive-Link und einem Häkchen „Etikett angebracht“ für jeden Gegenstand
- **Stufe 2 — Python-Pilot:** die OpenCV-Pipeline, die ein Foto lädt, vorverarbeitet, den QR-Code dekodiert, die ID prüft, die Latenz misst und eine JSONL-Sicherung führt
- **QR-Erzeugung:** ein Python-Skript, das die Etiketten erzeugt
- **Im Team:** die TypeScript-Webplattform, die den Piloten ersetzt hat, mit integrierter Datenbank

**Stufe 1 — Excel-Register**

Noch bevor es Software gab, enthielt das Register QR-ID, Artikelnummer, Beschreibung, Menge, Typ, Bereich, zugehörige Kiste, einen Foto-Link und ob das Etikett angebracht war. Es wurde zum Prototyp der Datenbank.

<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Excel-Inventarregister mit Fotos und QR-IDs"><figcaption>Erstes Excel-Register: eine Zeile pro Gegenstand, mit Kiste, Foto-Link und Etikettenstatus.</figcaption></figure>
</div>

**Stufe 2 — Pilot mit Python / OpenCV**

Der Pilot arbeitet mit separat aufgenommenen Fotos (Handykamera über DroidCam), sodass Kamera- und Algorithmusprobleme getrennt bleiben. Jedes Foto wird in fünf Varianten versucht — Original, Graustufen, CLAHE, geschärft und 2-fach hochskaliert — und die erste, die dekodiert, gewinnt, was die Latenz niedrig hält. Der dekodierte Text wird dann gegen das ID-Format geprüft, denn ein QR-Code kann lesbar sein und trotzdem den falschen Inhalt haben; das Bild wird grün oder rot mit der verwendeten Variante und der Verarbeitungszeit beschriftet, und jeder Durchlauf wird mit Trefferquote, Mittelwert und p95-Latenz in JSONL protokolliert.

<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="QR-Erkennung mit OpenCV und beschriftetem Rahmen"><figcaption>Test mit einem QR-Code, der kein Werkzeugetikett ist: Er wird in der Graustufenvariante in 73 ms dekodiert und korrekt als fehlerhafte ID markiert.</figcaption></figure>
</div>
<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Ausgabe des Latenz-Benchmarks"><figcaption>Latenz-Benchmark (5 Durchläufe mit einem Bild): 100 % Trefferquote, 76,1 ms im Mittel, 79,4 ms p95, im JSONL-Protokoll gespeichert.</figcaption></figure>
</div>

**Stufe 3 — Webplattform**

Die Webversion integriert die Datenbank in die Plattform. Das Dashboard zeigt den Status der Gegenstände (verfügbar, ausgeliehen, reserviert, Wartung, fehlt) und einen Bereich „Handlungsbedarf“. Gegenstände werden per Handy mit einem Kamerafoto erfasst; die ID (`EV-######`) wird automatisch vergeben, die Seriennummer auf Dubletten geprüft und die Größe des QR-Etiketts aus Vorlagen im Verhältnis 2:3 gewählt. Etiketten werden einzeln oder im Stapel gedruckt, und das gesamte Register wird per Klick für den Zoll nach Excel exportiert.

<div class="inv-grid">
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-add-item.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-add-item-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Gegenstand anlegen: Formular, Kamerafoto, Etikettengröße und automatische ID (2,5-fache Geschwindigkeit).</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-label.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-label-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Der neue Gegenstand erhält sein QR-Etikett, druckbereit.</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-handoff.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-handoff-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Detailansicht und Übergabe: Das Scannen eines Etiketts erfasst eine Bewegung mit neuem Ort, Status und Notiz.</figcaption></figure>
</div>
<div class="inv-grid">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-print-labels.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-print-labels-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Etikettendruck im Stapel und Einzelansicht (Etikettengröße, ID und Seriennummer).</figcaption></figure>
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-export.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-export-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Export aus der Webplattform in das Excel-Inventarregister.</figcaption></figure>
</div>

Jeder Gegenstand hat eine Schnellansicht mit Foto, Status, verantwortlichem Bereich und Aktivitätsprotokoll. Ein Team, das etwas ausleihen möchte, füllt eine Ausleihanfrage aus (Gegenstand, Team, Daten, Zweck), die ein Admin freigibt, bevor sie erfasst wird; das Foto bei der Erfassung belegt den Zustand des Gegenstands zum Zeitpunkt der Ausleihe.

<style>
  @media (min-width: 768px) {
    .inv-grid.inv-stack { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr); grid-template-rows: 1fr 1fr; align-items: stretch; }
    .inv-grid.inv-stack .inv-fig:first-child { grid-row: span 2; }
    .inv-grid.inv-stack .inv-fig { display: flex; flex-direction: column; }
    .inv-grid.inv-stack .inv-fig img { flex: 1 1 auto; height: 0; min-height: 200px; width: 100%; object-fit: contain; }
  }
</style>

<div class="inv-grid inv-stack">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Schnellansicht eines Gegenstands"><figcaption>Schnellansicht: Foto, Status, Details und Aktionen — Ausleihe anfragen, Bewegung erfassen, QR drucken und Bearbeiten — mit dem vollständigen Aktivitätsprotokoll darunter.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-photo.png' | relative_url }}" alt="Fotoansicht"><figcaption>Fotoansicht: das bei der Erfassung aufgenommene Foto, in voller Auflösung zoombar, sodass der Zustand bei der Ausleihe immer dokumentiert ist.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-loans-request.png' | relative_url }}" alt="Dialog für eine Ausleihanfrage"><figcaption>Formular für die Ausleihanfrage: Gegenstand, ausleihendes Team, Beginn und Rückgabe sowie Zweck — wird vor der Erfassung einem Admin zur Freigabe vorgelegt.</figcaption></figure>
</div>

**Vorgestellt beim Shell Eco-marathon Brazil 2026**

Wir haben das System dem Safety Team der Veranstaltung im Paddock als Teil der Bewerbung für den Safety Leadership Award vorgestellt; über den QR-Code „Try it!“ auf dem Poster konnten die Juroren die Plattform auf ihren eigenen Handys öffnen.

<div class="inv-grid">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-explaining.jpg' | relative_url }}" alt="Erklärung des Systems für ein Mitglied des Shell Safety Teams"><figcaption>Ein Mitglied des Shell Safety Teams wird auf seinem Handy durch die Plattform geführt.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-safety-team.jpg' | relative_url }}" alt="Posterpräsentation für das Shell Safety Team im Paddock"><figcaption>Posterpräsentation für das Safety Team im Paddock von EcoVolt CCM.</figcaption></figure>
</div>
<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-poster.png' | relative_url }}" alt="Poster: Automated PPE and Inventory Management System"><figcaption>Poster beim Shell Eco-marathon Brazil 2026: Problem, Ziel, Ausleihablauf und Zusammenfassung.</figcaption></figure>
</div>

**Werkzeuge & Technologien**

- **Python, OpenCV, NumPy, Matplotlib, JSONL:** Pilot zur QR-Erkennung und Benchmark
- **TypeScript-Webplattform mit Convex-Datenbank (Team):** Inventar, Ausleihen, Etiketten, Export
- **Excel:** erstes Register und Zollexport

**Ergebnisse & Erkenntnisse**

- **Im Einsatz in Brasilien 2026:** vereinfachte die Zollanmeldung und ermöglichte es dem Team, seine Ausleihliste im Paddock in wenigen Minuten abzuschließen
- **Schnelle Erkennung:** unter 80 ms pro Bild auf einem Laptop, gültige und ungültige IDs getrennt
- **Ehrlich messen:** Die 80 ms stammen aus 5 Durchläufen mit einem Bild; echte Paddock-Fotos (Licht, Winkel, Abstand) sind der nächste Test
- **Datenmodell zuerst:** Das ID-Format änderte sich zwischen den Stufen (`TL-####` → `EV-######`); es vorab festzulegen hätte die Migration vermieden
- **Akzeptanz ist eine UX-Frage:** Ein verpflichtender Scan bei der Ausgabe würde den Prozess besser durchsetzen als ein optionaler
- **Nächster Schritt:** eine kamerabasierte Zustandsprüfung bei der Ausgabe, um abgenutzte oder beschädigte Schutzausrüstung zu markieren

</details>

**Kontext:** EcoVolt CCM, Shell Eco-marathon (Paddock-Betrieb), 2025–2026; Teil der Bewerbung des Teams für den Safety Leadership Award.
**Stack:** Python, OpenCV, NumPy, Matplotlib, JSONL · TypeScript-Webplattform, Convex-Datenbank · Excel · QR-Etiketten

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#extracurricular' | relative_url }}">← Zurück zu den Projekten</a>
</div>
