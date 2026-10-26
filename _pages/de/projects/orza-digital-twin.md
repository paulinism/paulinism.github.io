---
layout: page
permalink: /de/projects/orza-digital-twin/
lang: de
de_project: true
ref: orza-digital-twin
title: Digitaler Zwilling einer flexiblen CNC-Fertigungszelle
description: "Industrie-Challenge mit ORZA Tech — virtuelle CNC-Zelle zu 100 % in Software in Betrieb genommen (SPS-Programmierung S7-1500 in TIA Portal, UR5 VRC, CAM und G-Code, Cognex-Bildverarbeitung, SCADA/KPIs)"
img: assets/img/orza.png
importance: 2
category: Automatisierung
featured: true
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .oz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .oz-grid.oz-row3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .oz-grid.oz-row2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 767px) { .oz-grid.oz-row3, .oz-grid.oz-row2 { grid-template-columns: minmax(0, 1fr); } }
  .oz-hmi .oz-fig img { aspect-ratio: 1000 / 570; object-fit: cover; }
  .oz-grid.single { grid-template-columns: minmax(0, 900px); justify-content: center; }
  .oz-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .oz-fig img, .oz-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .oz-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .oz-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .oz-table th, .oz-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .oz-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**Eine vollständig virtuelle CNC-Fräszelle, in Betrieb genommen ohne jede physische Hardware.** Eine virtuelle S7-1500 führt das Kontaktplanprogramm aus, Process Simulate bewegt die 3D-Zelle, ein Virtual Robot Controller führt das Pick-and-Place-Programm des UR5 aus, ein Cognex-Prüfsystem klassifiziert jedes Teil (gut / Nacharbeit / Ausschuss), eine WinCC-HMI gibt dem Bediener Automatik- und Handbetrieb, und ein SCADA-Dashboard verfolgt OEE und KPIs in Echtzeit. Hinter dem Bearbeitungsschritt steht ein Fräsprogramm mit sechs Werkzeugen für einen Kolbenkörper aus Aluminium, den ich bis hin zu Zahnvorschub und Zykluszeit (≈ 12,8 min) analysiert habe; im selben Kurs kamen eine Cognex-Prüfung und eine CAM-Übung zum Drehen hinzu, die ich von der Rohteildefinition bis zum G-Code geführt habe.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-general-dt.mp4' | relative_url }}" poster="{{ 'assets/img/orza-general-dt-poster.jpg' | relative_url }}" controls preload="metadata" playsinline></video><figcaption>Rundgang mit Erklärung (auf Englisch): ein Teil wird ausgeschleust, die CNC-Zelle arbeitet in Process Simulate, und es wird erklärt, wie HMI und SPS-Logik mit der Simulation zusammenlaufen.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-layout-iso.jpg' | relative_url }}" alt="Zellenlayout in Process Simulate" loading="lazy"><figcaption>Zellenlayout in Process Simulate</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="Teil P2 in SOLIDWORKS CAM" loading="lazy"><figcaption>Teil P2 in SOLIDWORKS CAM</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="Meine CNC-Frässtation" loading="lazy"><figcaption>Meine CNC-Frässtation</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA: OEE, Zykluszeit, Ausschuss" loading="lazy"><figcaption>SCADA: OEE, Zykluszeit, Ausschuss</figcaption></figure>
</div>

**Konstruktionsentscheidungen, aus den Grundlagen hergeleitet**

<table class="dag-table">
  <tr><th>Entscheidung</th><th>Technische Begründung</th><th>Ergebnis</th></tr>
  <tr><td>Jede Bewegung gegen Sensoren des Zwillings verriegeln, keine Timer</td><td>Das SPS-Programm geht unverändert an die reale Maschine, daher muss es auf die Anlage reagieren, nicht auf angenommene Zeiten</td><td>Vollständige Zyklen einschließlich Nacharbeits- und Ausschusszweig</td></tr>
  <tr><td>Zahnvorschub von Hand prüfen</td><td>f<sub>z</sub> = 1645,9 / (12 000 &times; 2) &asymp; 0,069 mm/Zahn, innerhalb von 0,05&ndash;0,13 mm für Aluminium</td><td>Zyklus &asymp; 12,8 min; Spindeldrehzahl als zu hoch für die Labormaschine markiert</td></tr>
  <tr><td>Vor den kleinen Bohrungen anbohren</td><td>Ein kurzer, steifer Anbohrer verhindert, dass der dünne &Oslash;-1,75-mm-Bohrer verläuft</td><td>Korrekte Bohrungspositionen in der Simulation</td></tr>
  <tr><td>Die Cognex-Prüfung mit dem Messschieber validieren</td><td>Reflektierende Folie erzeugt helle Kanten, die das Konturwerkzeug als Teilekanten liest</td><td>3,7&ndash;3,9 % Übermaß gefunden und die Korrektur dokumentiert</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Vollständige technische Beschreibung</summary>

**Aufgabe**

Einen virtuellen digitalen Zwilling einer flexiblen Fertigungszelle entwerfen, umsetzen und validieren — Lieferant, drei CNC-Stationen, Intralogistik, Qualitätsprüfung, Montage und Lager — mit simulierter industrieller Kommunikation, zwei Betriebsarten, Rückverfolgbarkeit und KPIs. Alles ist virtuell: keine physischen SPSen, Roboter oder AGVs. Kurs „Automation of Manufacturing Systems“, Tec de Monterrey, Challenge von ORZA Tech; Team aus drei Personen, eine CNC-Station pro Mitglied.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-workflow.png' | relative_url }}" alt="Ablauf der Fertigungszelle"><figcaption>Materialfluss: Lieferant, Transport, CNC-Bearbeitung, Qualitätsprüfung (gut, Nacharbeit oder Ausschuss), Montage und Lager.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-network.jpg' | relative_url }}" alt="Netzwerkdiagramm der drei Arbeitsplätze"><figcaption>Reales Netzwerk: drei Arbeitsplätze an einem Ethernet-Switch, jeder mit Process Simulate, einem VMware-Tecnomatix-Server, einem Modbus-Sensor und einer PLCSIM-Advanced-Instanz.</figcaption></figure>
</div>

**Mein Beitrag — CNC-Fräszelle (Station 3)**

- **SPS-Programm (Kern der Challenge):** das vollständige Kontaktplanprogramm in TIA Portal für eine virtuelle S7-1500 in PLCSIM Advanced: Schrittkette mit 35 Schritten, Verriegelungen, Sicherheitsstopp, Handbetrieb, Qualitätsweiche, Rezepte, KPIs und Protokollierung
- **Digitaler Zwilling:** meine Zelle in Process Simulate (Lieferantenregal mit Pneumatikzylinder, AGV, zwei Förderbänder, drei UR5-Roboter, CNC-Fräsmaschine und Prüfkamera), jeder Aktor und Sensor auf SPS-E/A abgebildet
- **Roboterintegration:** ein UR5 im Modus Virtual Robot Controller mit eigenem PolyScope-Programm, über einen digitalen Handshake mit der SPS synchronisiert
- **HMI und SCADA:** die WinCC-Bedienbilder der Zelle und das anlagenweite KPI-Bild
- **Bearbeitung:** das SOLIDWORKS-CAM-Modell von Teil P2 und eine satzweise Analyse seines G-Codes
- **Kommunikation:** ein Modbus-TCP-Feldsensor in C# und die S7-GET/PUT-Verbindung zur Montagestation, mit Alarm bei Verbindungsabbruch
- **Layoutkonzept:** das leiterförmige Layout des Gesamtsystems vorgeschlagen

Das Team hat das vollständige Layout in Process Simulate aufgebaut und die drei PCs über einen Ethernet-Switch integriert.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-layout-top.jpg' | relative_url }}" alt="Draufsicht auf das Zellenlayout"><figcaption>Draufsicht auf den Linienbetrieb in Process Simulate: Förderbänder, AGV-Fahrweg, CNC-Zellen und Roboter.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="CNC-Station mit UR5-Robotern"><figcaption>CNC-Station: Zwei UR5-Roboter be- und entladen die Fräsmaschine und zeigen das Teil der Kamera.</figcaption></figure>
</div>

**SPS-Programm**

Die Zelle läuft als Kette von Schrittmerkern (K1 … K35): Zuführung, AGV-Transport, Beladen durch einen UR5, Bearbeitung, Entladen und Prüfung, Weiche und Zyklusabschluss. Ein Schritt wird nur weitergeschaltet, wenn der Zwilling bestätigt, dass die vorherige Aktion wirklich abgeschlossen ist — ein Sensor, eine Tür, das Fertigsignal der Maschine — nie über einen Timer. Bei einer virtuellen Inbetriebnahme ist die SPS der Teil, der unverändert an die reale Maschine ginge; jede falsche Annahme zeigte sich daher als hängendes Teil, als Kollision oder als Zelle, die nie fertig wurde.

- **Verriegelungen:** Ein Funktionsbaustein wandelt rohe Sensorsignale in benannte Bits (Teil vorhanden, CNC bereit, Band frei), sodass Verdrahtung und Schrittkette entkoppelt bleiben
- **Sicherheit:** Ein globaler Stoppkontakt liegt in jedem Schrittnetzwerk; jeder Alarm versetzt die Zelle in den Störzustand, bis sie an der HMI quittiert wird
- **Handbetrieb:** Jeder Schritt lässt sich von der HMI aus fahren, aber nur im Handbetrieb, damit sich Hand- und Automatikbefehle nicht gegenseitig stören
- **Weiche und Rezepte:** Das Prüfergebnis (gut, Nacharbeit, Ausschuss) wird von der SPS gespeichert und bestimmt das nächste Band; eine FIFO-Rezeptwarteschlange legt fest, welche Stationen ein Teiletyp braucht und wie groß das Los ist
- **KPIs:** Ausbeute, Ausschussquote und Micro-OEE werden in jedem Zyklus in der SPS berechnet, mit einem remanenten Protokoll von 100 Einträgen, das einen Neustart übersteht

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-menu.jpg' | relative_url }}" alt="Hauptmenü der HMI"><figcaption>Hauptmenü.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-monitor.jpg' | relative_url }}" alt="Stationsübersicht"><figcaption>Stationsübersicht: Betriebsart, aktueller Prozess, Fortschritt der Station und Losgröße.</figcaption></figure>
</div>
<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-supply.jpg' | relative_url }}" alt="Bild für Lieferant und Förderband"><figcaption>Bild für Lieferant und Förderband mit Handbefehlen.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-cnc-qi.jpg' | relative_url }}" alt="Bild für CNC und Qualitätsprüfung"><figcaption>CNC und Qualitätsprüfung: Handbefehle für die Bearbeitung und das Ergebnis gut / Nacharbeit / Ausschuss.</figcaption></figure>
</div>
<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-db22.png' | relative_url }}" alt="Datenbaustein DATA_LOG"><figcaption>Der remanente Baustein DATA_LOG mit Zählern, KPIs, Alarmbits und dem Protokoll mit 100 Einträgen.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA-Zähler und Trends"><figcaption>Globales SCADA-Bild am Ende eines Vorführlaufs: 11 Teile, 11 gut, 0 Ausschuss, mit Trends für Ausbeute, Ausschuss und Micro-OEE.</figcaption></figure>
</div>

**CAM & G-Code**

Teil P2 ist ein Kolbenkörper aus Aluminium mit 32 × 20 × 20 mm, einer Ø16-Bohrung, einer Tasche und zwei Paaren kleiner Bohrungen, bearbeitet mit sechs Werkzeugen: Anbohren und Ø16-Tieflochbohren mit Spanbruch, ein Zentrierbohrer vor den kleinen Bohrungen, damit der dünne Bohrer nicht verläuft, Taschenschruppen in acht Z-Ebenen und sieben Konturdurchgänge mit Fräserradiuskorrektur (G41), sodass Werkzeugverschleiß mit einem einzigen Korrekturwert ausgeglichen wird. Ich habe jede Schnittgeschwindigkeit (v<sub>c</sub> = π·D·n/1000) und den Zahnvorschub nachgerechnet: f<sub>z</sub> ≈ 0,069 mm/Zahn, innerhalb des Bereichs von 0,05–0,13 mm für Aluminium. Die geschätzte Zykluszeit beträgt 12,8 min, davon 72 % Schruppen; die Schwachstelle ist die Spindeldrehzahl von 12 000 U/min, in der Simulation unproblematisch, aber über dem, was die Labormaschine fährt.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-drawing.png' | relative_url }}" alt="Technische Zeichnung von Teil P2"><figcaption>Technische Zeichnung von P2 (SOLIDWORKS, Maßstab 2:1).</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="P2 im Rohteil in SOLIDWORKS CAM"><figcaption>P2 im Rohteil in SOLIDWORKS CAM.</figcaption></figure>
</div>
<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cam.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cam-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>CAM-Simulation der Werkzeugwege von P2 (2-fache Geschwindigkeit).</figcaption></figure>
</div>

In einer zweiten Übung habe ich eine gedrehte Welle aus AISI 304 vom Rohteil bis zum postprozessierten G-Code programmiert (8 Arbeitsgänge, 9,0 min) und herausgearbeitet, was ich vor dem Einsatz an einer realen Drehmaschine korrigieren würde: eine fehlende Drehzahlbegrenzung (G50) und ein Abstechen, das 62 % des Zyklus einnimmt.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cam-turn-ops.jpg' | relative_url }}" alt="Arbeitsgangbaum in SOLIDWORKS CAM"><figcaption>Arbeitsgangbaum: Plandrehen, Bohren, Längsdrehen, Einstich und Abstechen.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cam-turn-sim.jpg' | relative_url }}" alt="Werkzeugweg-Simulation der gedrehten Welle"><figcaption>Werkzeugweg-Simulation mit dem Rohteil im Futter.</figcaption></figure>
</div>

**Roboter: von virtuell zu real**

Der UR5 zwischen AGV und Förderband führt sein eigenes PolyScope-Programm in URSim aus, dem offiziellen Emulator von Universal Robots; das Programm ist also echt und übertragbar statt eines reinen Simulationspfads. Die SPS behandelt ihn als externes Gerät und tauscht nur sieben vereinbarte Handshake-Signale aus (Start, Greifen bestätigt, Loslassen bestätigt, Aufnahme läuft, Ablage abgeschlossen). Bevor ich dem virtuellen Roboter vertraut habe, habe ich den physischen UR5e im Labor programmiert — hier ein Pick-and-Place mit Vakuumgreifer in einem 2-×-2-Muster.

<div class="oz-grid">
  <figure class="oz-fig" style="max-width: 640px; margin: 0 auto"><img data-zoomable src="{{ 'assets/img/orza-polyscope.png' | relative_url }}" alt="PolyScope-Programm für Pick-and-Place"><figcaption>PolyScope-Programm in URSim: BeforeStart, die Trigger-Schleife und die Aufnahme- und Ablageroutinen mit ihren Warteschritten auf Bestätigung.</figcaption></figure>
  <figure class="oz-fig" style="max-width: 420px; margin: 0 auto"><video src="{{ 'assets/img/ur5e-physical-pnp.mp4' | relative_url }}" poster="{{ 'assets/img/ur5e-physical-pnp-poster.jpg' | relative_url }}" autoplay muted loop playsinline style="max-height: 640px; object-fit: contain"></video><figcaption>Physischer UR5e im Labor: Pick-and-Place mit Vakuumgreifer, in PolyScope programmiert.</figcaption></figure>
</div>

**Kommunikation**

S7 GET/PUT verbindet meine SPS mit der Montagestation auf einem anderen PC, und ein Modbus-TCP-Sensor in C# tauscht Holding-Register mit der SPS aus. Wird die Verbindung unterbrochen, meldet der GET-Baustein den Fehler, die HMI löst einen Alarm aus, und die Station gibt keine veralteten Daten mehr weiter.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-s7-get.png' | relative_url }}" alt="S7-GET-Baustein"><figcaption>S7-GET-Baustein, der ein Byte aus der Partner-SPS liest, mit 10 Hz ausgelöst.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-modbus-app.png' | relative_url }}" alt="Modbus-Sensoranwendung in C#"><figcaption>Modbus-TCP-Sensorsimulator in C#, der den Lagerbestand des Lieferanten mit der SPS austauscht.</figcaption></figure>
</div>

**Qualitätsprüfung (Cognex In-Sight)**

Eine vollständige Prüfung, eigenständig an einem reflektierenden Antistatikbeutel aufgebaut: 20 Bilder mit absichtlichen Fehlern, Gitterkalibrierung (0,33 px mittlerer Fehler über 823 Punkte), ein PatMax-Referenzrahmen, der dem Teil bei Bewegung folgt, Kreis- und Messschieber-Messungen in Millimetern, QR-, Barcode- und OCR-Lesung sowie ein Spreadsheet, das ein Teil nur dann freigibt, wenn jedes Merkmal in Ordnung ist. Siegel und Etikett stimmten innerhalb von ±3 % mit einem Messschieber überein; die Außenkontur der Verpackung fiel 3,7–3,9 % zu groß aus, weil die Glanzlichter der Folie als Kanten gelesen wurden.

<div class="oz-grid oz-row3">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-golden.jpg' | relative_url }}" alt="Referenzbild der Verpackung"><figcaption>Referenzbild: zwei Farbsiegel, QR-Code, Barcode, Text „QTY“ und das Etikett.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-faulty.jpg' | relative_url }}" alt="Absichtlich fehlerhafte Probe"><figcaption>Absichtlich fehlerhafte Probe: ein Siegel nur teilweise vorhanden und ein QR-Code, der nicht zum Inhalt passt.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-setup-vertical.jpg' | relative_url }}" alt="Aufbau für die Bildaufnahme"><figcaption>Aufnahmeaufbau: Handy fest über einer matten schwarzen Fläche, nur Deckenlicht, Kalibrier-Schachbrett an der Seite.</figcaption></figure>
</div>
<style>
  .oz-grid.oz-bw .oz-fig img { aspect-ratio: 4 / 3; object-fit: contain; background: #555; }
</style>

<div class="oz-grid oz-row3 oz-bw">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-pattern.jpg' | relative_url }}" alt="PatMax-Referenzrahmen auf der Verpackung"><figcaption>PatMax-Referenzrahmen, an dem jedes Prüfwerkzeug ausgerichtet ist.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-circle.jpg' | relative_url }}" alt="Kreiswerkzeug an einem Siegel"><figcaption>FindCircle misst den Radius eines Farbsiegels.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-reflection.jpg' | relative_url }}" alt="Fehlmessung durch Reflexion"><figcaption>Fehlerfall: Ein Glanzlicht auf der Folie wird vom Caliper als Kante interpretiert.</figcaption></figure>
</div>
<div class="oz-grid oz-row2">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-calibration.jpg' | relative_url }}" alt="Ergebnis der Kalibrierung"><figcaption>Gitterkalibrierung: 0,33 px mittlerer Fehler über 823 Punkte.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-caliper.jpg' | relative_url }}" alt="Messung eines Siegels mit dem Messschieber"><figcaption>Physische Validierung: Messung eines Siegels mit dem Messschieber.</figcaption></figure>
</div>
<div class="oz-grid single">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-spreadsheet.jpg' | relative_url }}" alt="Cognex-In-Sight-Spreadsheet"><figcaption>In-Sight-Spreadsheet: links die Rohwerte der Werkzeuge, rechts die Prüftabelle mit Nennwert, Grenzen und Freigabe.</figcaption></figure>
</div>

**Werkzeuge & Technologien**

- **TIA Portal, S7-1500, PLCSIM Advanced, WinCC:** SPS-Programm, HMI und SCADA
- **Tecnomatix Process Simulate:** digitaler Zwilling und virtuelle Inbetriebnahme
- **URSim / PolyScope, physischer UR5e:** Roboterprogrammierung
- **SOLIDWORKS CAM:** Fräs- und Drehwerkzeugwege, G-Code-Analyse
- **C# (Modbus TCP), S7 GET/PUT:** Kommunikation zwischen Stationen und Sensoren
- **Cognex In-Sight:** kalibrierte Bildverarbeitungsprüfung

**Ergebnisse & Erkenntnisse**

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-full-demo.mp4' | relative_url }}" poster="{{ 'assets/img/orza-full-demo-poster.jpg' | relative_url }}" controls preload="none" playsinline></video><figcaption>Vollständige Vorführung der CNC-Zelle: Process Simulate, SPS und HMI laufen zusammen.</figcaption></figure>
</div>

- **Geschlossener Kreis:** Jeder SPS-Ausgang bewegt die 3D-Szene, und jeder virtuelle Sensor meldet zurück; die Zelle durchläuft vollständige Automatikzyklen einschließlich Nacharbeits- und Ausschusszweig
- **Kommunikation:** Modbus TCP in beide Richtungen verifiziert; eine unterbrochene Verbindung löst einen Alarm aus und stoppt veraltete Daten
- **Integration:** Jede S7-Verbindung funktionierte für sich, aber die vollständige Kopplung der drei Stationen wurde wegen IP-Konflikten, doppelter Variablennamen und veralteter PLCSIM-Verbindungen nicht abgeschlossen
- **Integration ist eine eigene Ingenieursaufgabe:** Ein vorab vereinbarter IP-Plan und Variablen-Namensraum hätte den größten Teil der verlorenen Zeit gespart
- **Grenzwerte folgen aus der Anforderung:** Meine Freigabegrenzen der Prüfung lagen bei ±10 %, weiter als das Ziel von ±3 %; beim nächsten Mal würde ich sie zuerst herleiten und die Werkzeuge darauf aufbauen

</details>

**Stack:** Tecnomatix Process Simulate · TIA Portal, S7-1500, PLCSIM Advanced, Kontaktplan · WinCC Runtime Advanced · URSim / PolyScope (UR5 VRC), physischer UR5e · S7 GET/PUT, Modbus TCP · C# (Modbus-Simulator) · SOLIDWORKS CAM (Fräsen und Drehen), G-Code (G71/G72, G82/G83, G41/G43, G96/G97) · Cognex In-Sight (PatMax RedLine, FindCircle, Caliper, ReadIDMax, OCRMax)

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/de/projects/#academic' | relative_url }}">← Zurück zu den Projekten</a>
</div>
