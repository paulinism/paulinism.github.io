---
layout: page
permalink: /es/projects/endress-viscosity/
lang: es
es_project: true
ref: endress-viscosity
title: Sistema automatizado de medición de viscosidad
description: Líder de PCB y embebidos con Endress+Hauser — cadena de señal con ganancia de 400× que distingue 252 cP de 1676 cP; tres placas en Altium, dos fabricadas por JLCPCB
img: assets/img/viscosity.jpg
importance: 5
category: PCB, Embebidos, Automatización
featured: true
tools: ["Altium", "Amp. operacionales", "ESP32", "LabVIEW", "OpenPLC"]
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

**Una ventana de corriente de 6 mA — la diferencia entre jabón diluido y jabón puro a 30 RPM — amplificada 400× hasta el rango del ADC del ESP32, que distingue de forma confiable 252 cP de 1676 cP en una placa propia de dos etapas con amplificadores operacionales.** Reto de Automatización Industrial en el Tec de Monterrey con Endress+Hauser (equipo de 4): un ciclo automatizado de manejo de fluidos que combina secuencias de PLC y medición con ESP32, desde el diseño de PCB en Altium hasta la validación física.

<div class="vis-grid hero">
  <figure class="vis-fig"><img data-zoomable src="{{ 'assets/img/viscosity.jpg' | relative_url }}" alt="Render en SolidWorks del sistema completo"><figcaption>Diseño: modelo CAD en SolidWorks de la estación giratoria de medición, la unidad de medición de viscosidad y el dispensador, tal como se planearon originalmente.</figcaption></figure>
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-system-test.jpg' | relative_url }}" alt="Sistema integrado durante la presentación final"><figcaption>Construcción: sistema integrado presentado como prototipo final, con relevadores, paro de emergencia, bomba de agua, clasificación de recipientes, motores a pasos, motor DC con encoder, sensores infrarrojos y bandas transportadoras para mover los recipientes.</figcaption></figure>
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

## El diseño de un vistazo

<div class="dag-grid">
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="Placa de amplificadores operacionales armada y cableada" loading="lazy"><figcaption>Placa de amplificadores operacionales armada y cableada</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Layout de la placa de amplificadores operacionales" loading="lazy"><figcaption>Layout de la placa de amplificadores operacionales</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="Placa maestra con ESP32 (JLCPCB)" loading="lazy"><figcaption>Placa maestra con ESP32 (JLCPCB)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Verificación en Multisim a 61 mA" loading="lazy"><figcaption>Verificación en Multisim a 61 mA</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Medir la viscosidad a través de la corriente del motor</td><td>El arrastre viscoso aumenta el torque del husillo, y el torque de un motor DC es proporcional a la corriente; un shunt de 1 &Omega; la convierte en voltaje</td><td>Ventana de 6 mV entre jabón diluido y puro a 30 RPM</td></tr>
  <tr><td>Ganancia &asymp; 400 en dos etapas (&times;100 y luego &times;4)</td><td>Lleva la ventana de 6 mV a 0&ndash;3.3 V y mantiene la primera etapa dentro de las fuentes de &plusmn;12 V</td><td>252 cP y 1676 cP distinguidos de forma confiable</td></tr>
  <tr><td>Convertidor de nivel de 5 V &rarr; 3.3 V</td><td>A 130 RPM la salida llegaba a unos 4 V, por encima del límite del ADC del ESP32</td><td>ADC protegido a todas las velocidades</td></tr>
  <tr><td>PID apagado durante la medición</td><td>El control de velocidad en lazo cerrado llevaba la corriente a 63&ndash;72 mA, fuera de la ventana de medición</td><td>Lecturas estables a 30 RPM constantes</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

Automatizar un ciclo completo de manejo de fluidos: identificar una muestra por su etiqueta de color, medir su viscosidad, diluirla a un objetivo (±10 %) y luego clasificarla. Dos restricciones definieron el diseño: la viscosidad debía inferirse a partir de la corriente del motor del husillo, sin viscosímetro comercial, y el control se repartió entre estaciones con PLC (suministro y clasificación) y una estación con ESP32 (medición), que se comunican entre sí.

**Mi aporte**

- **Diseño de PCB:** diseñé las tres placas de la estación de medición en Altium Designer — las placas maestra y esclava con ESP32 (dos capas, ancho de pistas según IPC-2221, fabricadas por JLCPCB) y la placa de amplificadores operacionales para medir la viscosidad, que armé en placa fenólica de cobre para poder depurar y ajustar el circuito
- **Acondicionamiento de señal:** codesarrollé la cadena de medición de corriente (shunt de 1 Ω, amplificación de dos etapas con UA741, ganancia de unas 400×), la simulé a 61 mA y 67 mA y la verifiqué en nuestro propio PCB
- **Embebidos** (codesarrollado con un compañero): rutinas de homing y medición, filtrado de promedio móvil de la señal de corriente, lectura de la etiqueta de color por I²C, enlace Bluetooth con la HMI en LabVIEW, UART entre los dos ESP32 y la canción que toca el buzzer de la placa esclava mientras se mueven los motores (se detiene durante las revisiones de vaso, color y viscosidad)
- **PLC y manufactura:** coconstruí las bandas transportadoras, coprogramé la lógica ladder y coloqué y calibré los sensores FC-51

Mis compañeros se encargaron del diseño mecánico de las estaciones, el diseño de la secuencia del PLC y la HMI en LabVIEW.

**Integración**

La integración completa en el banco, con la mayor parte de la secuencia automática funcionando: el carrusel, la estación de medición y la electrónica de control trabajando juntos.

<div class="vis-grid single">
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-integration-demo.mp4' | relative_url }}" muted playsinline controls preload="metadata"></video><figcaption>Demostración de la integración: la mayor parte de la secuencia automática funcionando en el banco.</figcaption></figure>
</div>

<div class="vis-grid single">
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-revolver.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>El revólver (portavasos giratorio) girando con los vasos de muestra cargados.</figcaption></figure>
</div>

**Diseño de PCB**

Todas las placas se diseñaron en Altium Designer. Las dos placas con ESP32 las fabricó JLCPCB. La placa de amplificadores operacionales, en cambio, se armó en placa fenólica de cobre: por practicidad y para depurar, esto nos permitió probar el circuito de acondicionamiento y cambiar valores de componentes según los resultados experimentales, algo que una placa fabricada no habría permitido tan rápido.

<div class="vis-grid">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-a.jpg' | relative_url }}" alt="Placa maestra con ESP32"><figcaption>Placa maestra con ESP32: controla los motores principales, incluido el motor a pasos del carrusel (terminales de motor a pasos y encoder, conector I²C, convertidor de nivel).</figcaption></figure>
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-esp32-board-b.jpg' | relative_url }}" alt="Placa esclava con ESP32"><figcaption>Placa esclava con ESP32: sensores y periféricos (señales del PLC, ventilador y bomba de agua), además del buzzer que toca la canción mientras se mueven los mecanismos.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-opamp-layout.jpg' | relative_url }}" alt="Layout de la placa de medición con amplificadores operacionales"><figcaption>Placa de medición con amplificadores operacionales: layout del PCB.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-opamp-board.jpg' | relative_url }}" alt="Placa de amplificadores operacionales fabricada y cableada"><figcaption>La misma placa, armada en placa fenólica de cobre para poder cambiar valores mientras se depuraba.</figcaption></figure>
</div>

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-master-schematic.png' | relative_url }}" alt="Esquemático de la placa maestra"><figcaption>Esquemático maestro: conectores del ESP32, STEP/DIR del motor a pasos y entradas del encoder y del sensor inductivo convertidas de 5 V a 3.3 V.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-slave-schematic.png' | relative_url }}" alt="Esquemático de la placa esclava"><figcaption>Esquemático esclavo: entradas de sensores, salidas de ventilador y bomba de agua, señales de color/arranque del PLC, UART, LED RGB, buzzer y botón.</figcaption></figure>
</div>

**Acondicionamiento de señal**

La viscosidad se infirió a partir de la corriente de alimentación del motor a través de un shunt de 1 Ω: unos 61 mV para jabón al 75 % y 67 mV para jabón puro a 30 RPM, una ventana de 6 mV. Una ganancia de unas 400 (×100 y luego una etapa diferencial de ×4) lleva esa ventana a 0–3.3 V, dividida en dos etapas para que la primera se mantenga dentro de las fuentes de ±12 V. A 130 RPM la salida aún llegaba a unos 4 V con solo un Zener de 3.3 V, así que se añadió un convertidor de nivel lógico de 5 V → 3.3 V para proteger el ADC del ESP32.

<div class="vis-grid">
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-sim-61ma.jpg' | relative_url }}" alt="Simulación en Multisim a 61 mA"><figcaption>Multisim a 61 mA: 61 mV en el shunt de 1 Ω se convierten en unos 250 mV a la entrada del ADC.</figcaption></figure>
  <figure class="vis-fig auto"><img data-zoomable src="{{ 'assets/img/visc-sim-67ma.jpg' | relative_url }}" alt="Simulación en Multisim a 67 mA"><figcaption>Multisim a 67 mA: 67 mV se convierten en unos 2.67 V, limitados por el Zener de 3.3 V.</figcaption></figure>
</div>

**Bandas transportadoras**

La idea original de clasificación (un motor a pasos con tornillo y resorte, como en una máquina expendedora) se descartó porque no había resortes con el espaciado exacto y la lógica ladder era compleja. Por practicidad y disponibilidad de material, la integración final usa pequeñas bandas transportadoras, controladas por un Arduino Mega con OpenPLC.

<div class="vis-grid">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-conveyors.jpg' | relative_url }}" alt="Bandas transportadoras con sensores FC-51"><figcaption>Bandas: las bandas de clasificación que coconstruí, con sensores FC-51 para detectar los vasos.</figcaption></figure>
  <figure class="vis-fig clip"><video src="{{ 'assets/img/visc-plc-validation.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Validación de mi lógica de PLC: un vaso avanzando por la banda con los sensores FC-51.</figcaption></figure>
</div>

**Herramientas y tecnologías**

- **Diseño de PCB (IPC-2221, JLCPCB):** placas maestra/esclava con ESP32, placa de medición con amplificadores operacionales
- **Multisim:** simulación del amplificador de dos etapas en el rango de 61–67 mA
- **ESP32 (C++, ESP-IDF):** rutinas de homing y medición, filtrado digital, sensor de color TCS34725 por I²C, Bluetooth, maestro/esclavo por UART
- **OpenPLC en Arduino Mega (ladder):** control de bandas en la estación de suministro
- **Sensores IR FC-51:** detección de vasos en las bandas
- **MDF cortado con láser, rodillos de aluminio, bandas de hule:** fabricación de las bandas transportadoras

## Resultados y aprendizajes

- **Medición de viscosidad:** una ventana de corriente de 6 mA, amplificada unas 400× hasta el rango del ADC del ESP32, dio una separación repetible entre jabón diluido y puro (252 frente a 1676 cP)
- **Dosificación de agua:** alimentar la bomba a 5 V la hizo controlable; entregó 19/26/36 ml frente a objetivos de 18/27/36 ml
- **Bandas transportadoras:** cargaron 5 kg (suministro) y 8 kg (clasificación) frente a un requisito menor a 1 kg
- **Resultado:** la secuencia automática funcionó en video, pero la demostración en vivo falló por errores de cableado y cortocircuitos — las placas del PLC se cambiaron por protoboards después de que los sensores FC-51 demandaron más corriente de la que podía dar la fuente de la placa
- **Aprendizajes de medición:** hubo que quitar el control PID para la medición a 30 RPM porque llevaba la corriente a 63–72 mA, fuera de la ventana de 61–67 mA; cambiar el UA741CN por el UA741CP resolvió una salida que se congelaba
- **Aprendizajes:** trazar una tierra común corta para el UART entre placas, ya que una confusión de RX/TX en la placa esclava costó tiempo de depuración; calcular la corriente de los sensores antes de rutear una placa y revisar la asignación de pines contra el software final (direccionamiento de OpenPLC) antes de fabricar

</details>

**Contexto:** Tec de Monterrey, ago.–dic. 2025, reto de Automatización Industrial con Endress+Hauser como socio industrial, equipo de 4.
**Resultado:** medición de viscosidad basada en corriente que distingue 252 cP de 1676 cP en un PCB propio.
**Stack:** ESP32/ESP-IDF, diseño de PCB propio (IPC-2221), Multisim, OpenPLC (Arduino Mega), I²C, UART, Bluetooth, HMI en LabVIEW

<div class="vis-grid single">
  <figure class="vis-fig full"><img data-zoomable src="{{ 'assets/img/visc-endress-visit.jpg' | relative_url }}" alt="El equipo en Endress+Hauser"><figcaption>El equipo en Endress+Hauser, frente a su instrumentación de procesos.</figcaption></figure>
</div>

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#academic' | relative_url }}">← Volver a proyectos</a>
</div>
