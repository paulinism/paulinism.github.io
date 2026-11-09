---
layout: page
permalink: /es/projects/ecovolt-telemetry/
lang: es
es_project: true
ref: ecovolt-telemetry
title: Plataforma de telemetría y optimización energética
description: Líder de PCB y firmware — tres generaciones de telemetría para un auto de Shell Eco-marathon — 1.er (2025) y 2.º (2026) lugar en el Data & Telemetry Award
img: assets/img/ecovolt-telemetry.jpg
importance: 1
category: PCB, Embebidos, Electrónica
featured: true
hide_from_grid: true
tools: ["Altium", "ESP32", "C/C++", "CAN", "MQTT", "Python"]
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
  /* Ergonomics trio: tall Posture Monitor capture on the left (shown whole, never cropped), the other two stacked on the right. */
  .tel-grid.tel-grid-ergo { grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr); }
  .tel-grid.tel-grid-ergo .tel-fig img { height: auto; }
  .tel-grid.tel-grid-ergo .tel-fig.tall-shot { grid-row: span 2; }
  .tel-grid.tel-grid-ergo .tel-fig.tall-shot img { object-fit: contain; background: #fff; }
  @media (max-width: 767px) {
    .tel-grid.tel-grid-ergo { grid-template-columns: minmax(0, 1fr); }
    .tel-grid.tel-grid-ergo .tel-fig.tall-shot { grid-row: auto; width: 100%; max-width: 420px; margin: 0 auto; }
  }
  /* Board pair: both images share the layout's aspect ratio so the layout and the photo line up at the same size. */
  .tel-grid.tel-grid-pair .tel-fig img { aspect-ratio: 1202 / 1102; height: auto; object-fit: cover; }
</style>

**1.er lugar en el Data & Telemetry Award (2025) y 2.º lugar (2026) en Shell Eco-marathon.** Tres generaciones de PCB de telemetría y firmware para ESP32 en EcoVolt CCM: datos en vivo para los pits y para el piloto, registro de corriente a 1 kHz en tarjeta SD, una reserva de supercapacitores que mantiene el sistema funcionando después de un corte de energía y un lazo con simulador para la estrategia energética.

<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-wiring.jpg' | relative_url }}" alt="Paulina cableando la electrónica de telemetría en la competencia"><figcaption>Cableando la electrónica del vehículo durante la competencia.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-award-2025.jpg' | relative_url }}" alt="Data and Telemetry Award, Shell Eco-marathon Americas 2025"><figcaption>1.er lugar, Data &amp; Telemetry Award — Shell Eco-marathon Americas 2025.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="Placa US 2026, Altium 3D" loading="lazy"><figcaption>Placa US 2026, Altium 3D</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-purple.jpg' | relative_url }}" alt="Placa US 2026 fabricada" loading="lazy"><figcaption>Placa US 2026 fabricada</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Prototipo con INA240 grabado a mano" loading="lazy"><figcaption>Prototipo con INA240 grabado a mano</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Telemetría instalada en el auto" loading="lazy"><figcaption>Telemetría instalada en el auto</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Amplificador de medición de corriente INA240</td><td>Unos pocos milivolts en el shunt montados sobre una línea de 48 V: el INA240 (ganancia de 20 V/V) rechaza el modo común y es bidireccional, así que también lee la regeneración</td><td>Canal de corriente calibrado en lugar de un offset de 15 A</td></tr>
  <tr><td>Shunt reducido de 20 m&Omega; a 5 m&Omega;</td><td>El shunt de 20 m&Omega; saturaba el amplificador con la corriente pico real; un cuarto de la resistencia da cuatro veces el rango</td><td>Sin saturación en US 2026</td></tr>
  <tr><td>Primero guardar en SD, después transmitir</td><td>En Brazil 2025 solo cerca de una vuelta llegó al servidor por la conexión celular</td><td>Ningún dato perdido en la transmisión</td></tr>
  <tr><td>Antena externa en el parabrisas</td><td>El monocasco de fibra de carbono es conductor y atenúa el Wi-Fi como una jaula de Faraday parcial</td><td>Enlace de radio estable desde dentro del auto</td></tr>
  <tr><td>Reserva de energía con supercapacitores</td><td>Un corte de energía o apagar el auto interrumpiría el registro; ~80 s de reserva cubren ese hueco</td><td>La telemetría sigue funcionando después de un corte de energía</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

En Shell Eco-marathon los equipos compiten por eficiencia energética, no por velocidad: gana quien recorre la distancia con menos energía. Dos cosas deciden el resultado — cómo usa el piloto el acelerador y si el equipo puede ver lo que está haciendo el tren motriz. Cuando entré al equipo de electrónica, EcoVolt CCM no tenía telemetría. Los objetivos: medir el voltaje de la batería y la corriente bidireccional del motor, además de posición, aceleración y las entradas del piloto; sacar los datos de un auto de fibra de carbono en movimiento; no perder nunca los datos de una corrida; y convertir los datos en decisiones de manejo.

<a id="my-contribution"></a>

**Mi aporte**

Colíder de electrónica y piloto de reserva (2024–25), capitana del equipo, líder de telemetría y piloto principal (2025–26) y mentora (2026).

- **Diseño de PCB:** el breakout de medición de corriente con INA240 y la placa de telemetría de Brazil 2025; principal contribuidora en la placa de US 2026 y codiseñadora de la revisión de Brazil 2026
- **Medición de corriente:** el sensor bidireccional con shunt, desde un prototipo grabado a mano hasta una placa fabricada
- **Firmware:** CAN con el controlador de motor propio del equipo (incluido el circuito transceptor), drivers de tarjeta SD, SPI, I²C y UART, adquisición de corriente y voltaje
- **GPS:** configuré el receptor NEO-6M en u-blox u-center
- **Pantalla del piloto y análisis de pista:** definí lo que ve el piloto; reconstrucción 3D en MATLAB de los circuitos de Indianápolis y Río de Janeiro a partir de datos GPS
- **Con otros:** supervisé el módulo de supercapacitores (construido por José Diego González), el análisis de datos en Altair, las pruebas en el banco con simulador y los requisitos de la plataforma web

Mis compañeros construyeron la plataforma web y los dashboards; la revisión de hardware de Brazil 2026 la dirigió José Diego González bajo mi supervisión.

**Hardware eléctrico del vehículo**

Antes y a la par de la telemetría, trabajé en el resto de la electrónica del auto: soldadura y depuración de circuitos SMD y THT, caracterización de transistores y diodos Zener, Schottky y rectificadores en el controlador de motor propio del equipo, y armado del paquete de baterías de 48 V — interconexión de celdas, instalación del BMS y el fusible, aislamiento y revisión del voltaje de cada celda.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-mc-assembled.jpg' | relative_url }}" alt="Controlador de motor SEM armado con Raspberry Pi Pico"><figcaption>Controlador de motor armado (placa SEM): Raspberry Pi Pico, gate drivers, seis MOSFET y sección de medición de corriente. Se usó para caracterizar transistores y diodos y validar la electrónica de potencia.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-mc-bare.jpg' | relative_url }}" alt="PCB del controlador de motor SEM sin componentes, con el esquemático en el celular"><figcaption>PCB sin componentes junto al esquemático: pads SMD para los gate drivers, footprints de los MOSFET y el zócalo de la Raspberry Pi Pico.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-mc-test.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Controlador de motor en prueba en el banco, con firmware escrito en C.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-battery-pack.jpg' | relative_url }}" alt="Paquete de baterías de 48 V con BMS durante el armado"><figcaption>Armado del paquete de baterías de 48 V: celdas en sus soportes, placa del BMS y cableado de salida antes de instalarlo en el vehículo.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-comp-assembly.jpg' | relative_url }}" alt="Paulina y José Diego trabajando en el vehículo en la competencia"><figcaption>En la competencia con José Diego González — trabajando en la electrónica del vehículo entre revisiones técnicas.</figcaption></figure>
</div>

**V0 — Prototipo en protoboard (Americas 2025)**

Un ESP32 en protoboard con un módulo de corriente de efecto Hall, un divisor de voltaje, GPS e IMU, publicando por MQTT. Los datos en vivo llegaron a los pits durante una corrida, pero el canal de corriente tenía un offset de calibración de ~15 A, así que el cálculo de eficiencia estaba mal desde el origen. Aun así ganó el 1.er lugar en el Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-breadboard-2025.jpg' | relative_url }}" alt="Prototipo en protoboard con ESP32 y GPS NEO-6M"><figcaption>Primer prototipo: ESP32 DevKit y GPS NEO-6M en protoboard.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-proto-hall-2025.jpg' | relative_url }}" alt="Placa perforada con ESP32 y módulo de corriente de efecto Hall"><figcaption>Versión en placa perforada con un módulo de corriente de efecto Hall, usada en Americas 2025.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-indy-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>El auto en la pista del Indianapolis Motor Speedway, Americas 2025.</figcaption></figure>
</div>
<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-thingspeak-2025.jpg' | relative_url }}" alt="Gráficas de corriente y voltaje en ThingSpeak, 2025"><figcaption>Visualización de datos en vivo en ThingSpeak durante Shell Eco-marathon Americas 2025: las lecturas de corriente del motor iban de 14.5 a 17.6 A, con un offset de calibración de unos 15 A. La traza de voltaje era correcta, de 57.0 V, coherente con el voltaje nominal de operación de la batería de unos 60 V.</figcaption></figure>
</div>

<div class="tel-grid wide">
  <figure class="tel-fig auto photo"><img data-zoomable src="{{ 'assets/img/tel-car-americas-2025.jpg' | relative_url }}" width="1800" height="703" alt="Xibalbá, prototipo EcoVolt CCM, en la pista de Shell Eco-marathon Americas 2025"><figcaption><strong>Xibalbá</strong> · SEM Americas 2025</figcaption></figure>
</div>

**V1 — Primera placa propia (Brazil 2025)**

Reemplacé el módulo Hall con mi propio diseño con shunt: un INA240A1 sobre un shunt de 20 mΩ con filtro RC, desde una placa grabada a mano hasta un breakout en Altium y un PCB fabricado, en una sola placa con un ESP32-C3, GPS e IMU. El voltaje del shunt es de solo unos milivolts sobre una línea de 48 V, así que el INA240 (ganancia de 20 V/V) rechaza el modo común y lee tanto el consumo como la regeneración. En la pista aparecieron dos problemas: el shunt de 20 mΩ saturaba el amplificador con la corriente real del auto, y la latencia de un hotspot celular dejó cerca de una vuelta de datos utilizables.

<div class="tel-grid">
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-ina240-handmade.jpg' | relative_url }}" alt="Prototipo de medición de corriente con INA240 grabado a mano"><figcaption>Julio de 2025: prototipo de medición de corriente con INA240 grabado a mano.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-ina240-breakout.jpg' | relative_url }}" alt="Render en Altium del breakout con INA240"><figcaption>El mismo circuito como breakout en Altium: shunt, INA240A1, filtro RC y conector.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-brazil25.jpg' | relative_url }}" alt="Placa de telemetría de Brazil 2025 con GPS e IMU"><figcaption>Placa de telemetría de Brazil 2025, fabricada, con los módulos de GPS e IMU.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-sch-brazil25.png' | relative_url }}" alt="Esquemático de telemetría, Brazil 2025"><figcaption>Esquemático de Brazil 2025: shunt de 20 mΩ con INA240A1, divisor de 1 MΩ / 56 kΩ, MPU6050, NEO-6M y ESP32-C3 SuperMini.</figcaption></figure>
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-pcb-brazil25-layout.jpg' | relative_url }}" alt="Layout del PCB de Brazil 2025 en Altium"><figcaption>Layout de Brazil 2025 en Altium, con la sección del shunt (pads IN/OUT) a la derecha.</figcaption></figure>
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-brazil-2025-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>En la pista como piloto en Pier Mauá, Río de Janeiro — Brazil 2025.</figcaption></figure>
</div>

<div class="tel-grid wide">
  <figure class="tel-fig auto photo"><img data-zoomable src="{{ 'assets/img/tel-car-brazil-2025.jpg' | relative_url }}" width="1800" height="703" alt="Macuilli, prototipo EcoVolt CCM, en la pista de Shell Eco-marathon Brazil 2025"><figcaption><strong>Macuilli</strong> · SEM Brazil 2025</figcaption></figure>
</div>

Entre temporadas comparamos ocho modelos de regresión en Altair AI Studio. Con tan pocos datos ningún modelo fue confiable (36–80 % de error relativo), pero la jerarquía de variables — con la velocidad como factor dominante — orientó la siguiente temporada hacia la estrategia de velocidad y obtuvo una Mención honorífica en el Altair Global Student Contest 2025.

<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-altair.png' | relative_url }}" alt="Comparación de modelos y jerarquía de factores en Altair AI Studio"><figcaption>Altair AI Studio: ocho modelos comparados por error relativo y tiempo de ejecución (arriba); jerarquía de variables con la velocidad como factor dominante (abajo a la derecha).</figcaption></figure>
</div>

**V2 — Rediseño completo (US 2026)**

El shunt pasó de 20 mΩ a 5 mΩ: un cuarto de la señal por ampere y cuatro veces el rango. Un ESP32-C5 con antena externa en el parabrisas evita el monocasco de carbono, que atenúa el Wi-Fi como una jaula de Faraday parcial. Nuevas interfaces: un ADS1115 para las entradas del piloto, CAN al controlador del motor y registro en tarjeta SD, todo en una carcasa impresa en 3D. Resultado: 2.º lugar en el Data & Telemetry Award.

<div class="tel-grid">
  <figure class="tel-fig sq"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-render.jpg' | relative_url }}" alt="Render 3D en Altium de la placa US 2026"><figcaption>Placa US 2026, render 3D en Altium: footprint del ESP32-C5, conectores de sensores y la sección del shunt.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-purple.jpg' | relative_url }}" alt="Placa US 2026 fabricada, vista ¾"><figcaption>La placa US 2026 fabricada: ESP32-C5, IMU, sección del shunt y conectores de sensores.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26-enclosure.jpg' | relative_url }}" alt="Placa US 2026 en su carcasa impresa en 3D"><figcaption>En su carcasa impresa en 3D, lista para el auto.</figcaption></figure>
</div>
<div class="tel-grid single">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-sch-us26.png' | relative_url }}" alt="Esquemático de telemetría, US 2026"><figcaption>Esquemático de US 2026: medición de corriente con INA240A1, divisor de voltaje, MPU6050, GPS NEO-6M, ADS1115 para las entradas del piloto, microSD por SPI, transceptor CAN y el ESP32-C5.</figcaption></figure>
</div>

**V3 — Revisión de robustez (Brazil 2026)**

El mismo circuito, la placa reruteada, mejor soldadura y un conector de alimentación con seguro para eliminar fallas intermitentes y ruido. La integridad de los datos se volvió la regla de diseño: cada trama se guarda primero en la tarjeta SD y se transmite después, las tramas no enviadas se guardan en un búfer y se reintentan, y un módulo de supercapacitores mantiene el sistema funcionando unos 80 s después de un corte de energía. Fui mentora de José Diego González en esta reserva de energía con supercapacitores, que él construyó bajo mi supervisión.

<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-pcb-br26-layout.png' | relative_url }}" alt="Layout del PCB de Brazil 2026 en Altium"><figcaption>Layout de Brazil 2026 en Altium, con crédito a Paulina Ruíz Servín y José Diego González Fernández.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-pcb-us26.jpg' | relative_url }}" alt="Placa de Brazil 2026 fabricada con ranura microSD"><figcaption>La placa de Brazil 2026 fabricada, con la ranura microSD y el conector de alimentación con seguro.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-supercap.jpg' | relative_url }}" alt="Módulo de reserva de energía con supercapacitores"><figcaption>Módulo de reserva de energía con supercapacitores: unos 80 s de operación después de un corte de energía.</figcaption></figure>
  <figure class="tel-fig"><img data-zoomable src="{{ 'assets/img/tel-supercap-render.jpg' | relative_url }}" alt="Render 3D de la placa de reserva de energía"><figcaption>Render 3D de la placa de reserva de energía.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-installed.jpg' | relative_url }}" alt="Telemetría instalada en el vehículo"><figcaption>Telemetría instalada en el vehículo, junto a la batería.</figcaption></figure>
</div>

En la pista de Río de Janeiro con el sistema V3 — una de las tres sesiones registradas como datos de entrenamiento para un futuro modelo energético.

<div class="tel-grid single">
  <figure class="tel-fig tall"><video src="{{ 'assets/img/tel-brazil-2026-track.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>En la pista de Río de Janeiro, Brazil 2026 — una de las tres sesiones registradas.</figcaption></figure>
</div>

<div class="tel-grid wide">
  <figure class="tel-fig auto photo"><img data-zoomable src="{{ 'assets/img/tel-car-317-2026.jpg' | relative_url }}" width="1800" height="703" alt="Axolotl, prototipo EcoVolt CCM, en una pista de pruebas antes de Shell Eco-marathon Brazil 2026"><figcaption><strong>Axolotl</strong> · SEM United States y Brazil 2026</figcaption></figure>
</div>

**Prueba en el banco con simulador**

Antes de que existiera el auto de 2026, el equipo conectó el motor y el controlador reales al simulador Assetto Corsa en lazo cerrado mientras la placa de telemetría registraba corriente y voltaje. Los dos flujos de datos no compartían reloj, así que se alinearon haciendo coincidir los momentos en que se soltaba el acelerador con las caídas de corriente y con correlación cruzada. En 15 vueltas a Indianápolis, el acelerador constante alcanzó **347.2 km/kWh** frente a **304.3 km/kWh** de pulse-and-glide — que resultó 14.1 % menos eficiente —, y la temperatura del motor se mantuvo en 47.7 °C.

<div class="tel-grid single">
  <figure class="tel-fig photo auto"><img data-zoomable src="{{ 'assets/img/tel-sim-setup.jpg' | relative_url }}" alt="Prueba en el banco con simulador y el motor físico en el lazo"><figcaption>Prueba en el banco con simulador: Assetto Corsa con volante y pedales, el motor y el controlador físicos en el lazo y el dashboard de telemetría en vivo.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig sq"><video src="{{ 'assets/img/tel-sim-bench.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Manejando el circuito de Indianápolis en el simulador.</figcaption></figure>
  <figure class="tel-fig sq photo"><img data-zoomable src="{{ 'assets/img/tel-motor-temp.jpg' | relative_url }}" alt="Lectura con termómetro infrarrojo del motor durante la prueba en el banco"><figcaption>Temperatura del motor durante la prueba en el banco (47.7 °C): revisando el comportamiento dentro del auto y si haría falta enfriamiento después de un intento válido.</figcaption></figure>
</div>

**Pantalla del piloto, dashboards y análisis de pista**

Como piloto principal, probé la pantalla del piloto desde la cabina y decidí qué muestra. El equipo web construyó los dashboards y el archivo de corridas con las variables que definimos juntos; yo reconstruí en 3D el circuito de Indianápolis a partir de 2,696 puntos GPS.

<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-dashboard.png' | relative_url }}" alt="Dashboard de pits en tiempo real"><figcaption>Dashboard de pits en tiempo real, US 2026 (hecho por el equipo web).</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-track-map.png' | relative_url }}" alt="Mapa de la pista coloreado por la telemetría"><figcaption>Trazo de una vuelta sobre el trazado de Indianápolis, coloreado según los valores de telemetría.</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-indy-3d.png' | relative_url }}" alt="Reconstrucción 3D en MATLAB del circuito de Indianápolis"><figcaption>Mi reconstrucción 3D en MATLAB del circuito de Indianápolis a partir de 2,696 puntos GPS (latitud, longitud, altitud); la elevación varía unos 3.8 m a lo largo de la vuelta.</figcaption></figure>
</div>
<div class="tel-grid single wide">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-driver-display.png' | relative_url }}" alt="Pantalla del piloto durante una sesión en el simulador"><figcaption>Pantalla del piloto durante una sesión en el simulador: tiempo de sesión, velocidad, velocidad objetivo y eficiencia.</figcaption></figure>
</div>
<div class="tel-grid">
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-run-archive.png' | relative_url }}" alt="Archivo de corridas de la plataforma web de Brazil 2026"><figcaption>Archivo de corridas, Brazil 2026: 14 sesiones y 55.1 K registros de telemetría (hecho por el equipo web).</figcaption></figure>
  <figure class="tel-fig auto"><video src="{{ 'assets/img/tel-web-platform.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Análisis de sesiones en la plataforma web.</figcaption></figure>
</div>

<a id="driver-ergonomics-vehicle-design-award"></a>

**Ergonomía del piloto (Vehicle Design Award)**

Construí en Process Simulate un modelo virtual del piloto con mis propias medidas corporales antes de que empezara el trabajo de CAD. La evaluación RULA dio una puntuación de 3 (riesgo bajo), y el modelo se importó a la cabina en SolidWorks para que el monocasco cumpliera el perfil aerodinámico y el espacio del piloto en una sola iteración — un aporte al Vehicle Design Award 2026.

<style>
  .tel-grid.wide { grid-template-columns: minmax(0, 1000px); }
  .tel-grid.wide .tel-fig video, .tel-grid.wide .tel-fig img { height: auto; }
  .tel-grid.wide .tel-fig img[width] { width: 100%; height: auto !important; max-height: none; aspect-ratio: 1800 / 703; object-fit: cover; }
  @media (min-width: 768px) {
    .tel-grid.tel-grid-ergo { align-items: stretch; grid-template-rows: 1fr 1fr; }
    .tel-grid.tel-grid-ergo .tel-fig:not(.tall-shot) { display: flex; flex-direction: column; }
    .tel-grid.tel-grid-ergo .tel-fig:not(.tall-shot) img { flex: 1 1 auto; height: 0; min-height: 220px; width: 100%; }
    .tel-grid.tel-grid-ergo .tel-fig:nth-child(2) img { object-fit: contain; background: #fff; }
    .tel-grid.tel-grid-ergo .tel-fig:nth-child(3) img { object-fit: cover; object-position: center 45%; }
  }
</style>

<div class="tel-grid tel-grid-ergo">
  <figure class="tel-fig tall-shot"><img data-zoomable src="{{ 'assets/img/tel-rula-monitor.png' | relative_url }}" alt="Posture Monitor de Tecnomatix con ángulos articulares y puntuaciones RULA"><figcaption>Posture Monitor en Tecnomatix Process Simulate: ángulos articulares del piloto virtual en la cabina de 2026. Flexión del cuello (47°, amarillo) y del tronco (84°, rojo) marcadas como ángulos a vigilar; codos a 45° de flexión, muñecas en posición neutra.</figcaption></figure>
  <figure class="tel-fig auto"><img data-zoomable src="{{ 'assets/img/tel-driver-model.png' | relative_url }}" alt="Modelo 3D del piloto dentro de la carrocería del vehículo EcoVolt 2026 en Tecnomatix"><figcaption>Modelo del piloto dentro de la carrocería del vehículo 2026 (Tecnomatix Process Simulate).</figcaption></figure>
  <figure class="tel-fig"><img data-zoomable src="{{ 'assets/img/tel-award-vehicle-design-us26.jpg' | relative_url }}" alt="El equipo EcoVolt CCM recibiendo el Vehicle Design Award en Shell Eco-marathon United States 2026"><figcaption>El equipo EcoVolt CCM recibiendo el 1.er lugar del Vehicle Design Award – Prototype en Shell Eco-marathon United States 2026, Indianapolis Motor Speedway.</figcaption></figure>
</div>

**Herramientas y tecnologías**

- **Altium Designer:** placas de telemetría y breakout con INA240
- **ESP32-C3/C5 (C++):** CAN (TWAI), SPI, I²C, UART, registro en SD, MQTT
- **MATLAB, Altair AI Studio, u-center:** reconstrucción de la pista, comparación de modelos, configuración del GPS
- **Laboratorio:** osciloscopio, fuente de alimentación DC, multímetro, generador de funciones

**Resultados y aprendizajes**

<div class="tel-grid">
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-soldering.jpg' | relative_url }}" alt="Soldando una placa de sensores"><figcaption>Depurando el acelerador en Shell Eco-marathon Brazil 2025.</figcaption></figure>
  <figure class="tel-fig photo"><img data-zoomable src="{{ 'assets/img/tel-trackside-brazil.jpg' | relative_url }}" alt="Explicando a los pilotos junto a la pista en Río de Janeiro"><figcaption>Explicando a los pilotos, junto a la pista en Río de Janeiro, la estrategia de manejo y los datos de telemetría.</figcaption></figure>
</div>

- **Premios:** 1.er lugar (2025) y 2.º lugar (2026) en el Data & Telemetry Award; Mención honorífica en el Altair Global Student Contest 2025
- **Evolución del hardware:** de un protoboard a tres generaciones de PCB propios integrados en el vehículo
- **Estrategia de manejo:** el acelerador constante se identificó como la estrategia más eficiente antes de que el auto llegara a la pista
- **Calibrar cada canal analógico antes de la competencia**
- **Dimensionar el shunt con la corriente pico medida, no con el consumo esperado**
- **El registro local es la fuente de verdad;** el enlace de radio es de mejor esfuerzo
- **Análisis honesto:** con pocos datos, el resultado útil fue la jerarquía de variables, no un modelo predictivo

</details>

**Contexto:** Escudería EcoVolt CCM EV Racing Team, Shell Eco-marathon, 2024–2026.
**Resultado:** 1.er lugar (2025) y 2.º lugar (2026), Data & Telemetry Award; Mención honorífica, Altair Global Student Contest 2025.
**Stack:** Altium Designer, ESP32-C3/C5, C++, INA240, ADS1115, CAN (TWAI), SPI, I²C, UART, MQTT, u-blox u-center, MATLAB, Altair AI Studio, pruebas en banco con Assetto Corsa

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#extracurricular' | relative_url }}">← Volver a proyectos</a>
</div>
