---
layout: page
permalink: /es/projects/agv-platform/
lang: es
es_project: true
ref: agv-platform
title: Mesa de tijera y AGV — plataforma automatizada de manejo de materiales
description: Líder de diseño mecánico y electrónica — mesa de tijera (probada con >100 kg, 40 × 30 × 76 cm) con PCB propio para celda de carga (sin HX711) y piezas de aluminio maquinadas
img: assets/img/agv-cover-pair.jpg
importance: 6
category: Mecánica, Electrónica
featured: true
tools: ["SolidWorks", "NX", "Impresión 3D", "Maquinado", "Celda de carga"]
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

**Mesa de tijera funcional (40 × 30 × 76 cm) probada con más de 100 kg, que cargó 7 kg en la demostración final — 40 % por encima del requisito de 5 kg — con un PCB propio de acondicionamiento para la celda de carga que lee 0–5 kg sin un HX711 comercial.** Reto integrador de cuarto semestre (equipo de 5) en el Tec de Monterrey: del diseño y estudio de movimiento en SolidWorks al maquinado CNC, la soldadura y el control embebido.

<div class="agv-grid">
  <figure class="agv-fig"><img data-zoomable src="{{ 'assets/img/agv-cover.jpg' | relative_url }}" alt="Ensamble en SolidWorks de la mesa de tijera con charola basculante"><figcaption>Ensamble completo en SolidWorks de la mesa de tijera y la charola basculante.</figcaption></figure>
  <figure class="agv-fig"><img data-zoomable src="{{ 'assets/img/agv-prototype.jpg' | relative_url }}" alt="Prototipo ensamblado con la mesa basculante y la leva impresa"><figcaption>Prototipo ensamblado: mesa basculante, leva impresa en ABS y motorreductor.</figcaption></figure>
  <figure class="agv-fig"><img data-zoomable src="{{ 'assets/img/agv-final-build.jpg' | relative_url }}" alt="Mesa final con báscula de celda de carga y electrónica sobre la charola"><figcaption>Versión final: báscula con celda de carga y electrónica sobre la charola, base soldada.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-loadcell-circuit.png' | relative_url }}" alt="Circuito amplificador de la celda de carga" loading="lazy"><figcaption>Circuito amplificador de la celda de carga</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-displacement.png' | relative_url }}" alt="Estudio estático: deflexión máx. del brazo 0.28 mm" loading="lazy"><figcaption>Estudio estático: deflexión máx. del brazo 0.28 mm</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-lathe-2.jpg' | relative_url }}" alt="Torneado del acoplamiento de aluminio" loading="lazy"><figcaption>Torneado del acoplamiento de aluminio</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/agv-force-voltage.png' | relative_url }}" alt="Salida medida de la báscula: lineal de 0 a 5 kg" loading="lazy"><figcaption>Salida medida de la báscula: lineal de 0 a 5 kg</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Base de tubo de acero, brazos de tijera de aluminio</td><td>Rigidez donde se concentran las cargas y poca masa en movimiento en el mecanismo; verificado con un estudio estático antes de cortar metal</td><td>La estructura soportó &gt;100 kg; carga de 7 kg frente a 5 kg requeridos</td></tr>
  <tr><td>Elevación con tornillo de potencia</td><td>Un tornillo de potencia sostiene la carga sin energía; se probó primero con un taladro como actuador para separar la validación mecánica de la eléctrica</td><td>Mecanismo de elevación validado con carga antes de integrar el motor</td></tr>
  <tr><td>Leva diseñada para &ge;30&deg; de inclinación</td><td>Margen sobre el requisito de 25&deg; para cubrir fricción y tolerancias</td><td>Movimiento de descarga demostrado; la leva de ABS que se agrietó se resolvió con una flecha de aluminio apoyada en rodamiento</td></tr>
  <tr><td>Amplificador propio para la celda de carga (sin HX711)</td><td>Un puente de Wheatstone solo entrega milivolts: una etapa diferencial + una no inversora y un pasa bajas RC lo llevan al rango del ADC de 3.3 V</td><td>Lineal: 0&ndash;5 kg &rarr; 0&ndash;3 V</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

Construir una mesa de tijera que eleve, pese y descargue una carga de 1–5 kg, transportada entre estaciones por un AGV seguidor de línea. Dos restricciones definieron el diseño: la inclinación de descarga debía llegar a ≥25° y la celda de carga debía leerse sin un acondicionador comercial (no se permitía el HX711).

**Mi aporte**

- **Diseño mecánico:** hice el ensamble completo de la mesa; remodelé, validé e imprimí en 3D la leva de volteo; realicé los estudios de movimiento del mecanismo
- **Electrónica:** hice el PCB de la cadena de medición de la celda de carga (puente de Wheatstone → amplificadores → filtro pasa bajas → ADC)
- **Embebidos:** propuse repartir el control entre tres ESP32; programé la pantalla LCD de 16×2; puse en marcha el accionamiento a pasos de la elevación
- **Manufactura:** torneé y fresé el acoplamiento del motor y la biela de aluminio

<div class="agv-grid">
  <figure class="agv-fig photo tall"><img data-zoomable src="{{ 'assets/img/agv-lathe-2.jpg' | relative_url }}" alt="Paulina trabajando en el torno"><figcaption>Torneando una pieza, con el lector digital del torno.</figcaption></figure>
  <figure class="agv-fig clip tall">
    <video src="{{ 'assets/img/agv-coupler.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Acoplamiento de aluminio maquinado, montado en el motor NEMA 17 de la elevación.</figcaption>
  </figure>
</div>

Mis compañeros se encargaron del firmware de control del AGV y de la mesa, la calibración de la báscula y la soldadura de la base.

**Diseño y simulación**

Antes de construir, revisé el mecanismo en simulación: un estudio de movimiento en NX del mecanismo de tijera, una revisión de desplazamiento estático en un brazo y una animación en SolidWorks de la charola basculante accionada por la leva.

<div class="agv-grid">
  <figure class="agv-fig clip">
    <video src="{{ 'assets/img/agv-nx-motion.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Simulación de movimiento en Siemens NX del mecanismo de tijera (pivotes y correderas).</figcaption>
  </figure>
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-displacement.png' | relative_url }}" alt="Gráfica de desplazamiento estático en SolidWorks de un brazo de la tijera"><figcaption>Estudio de movimiento en SolidWorks, desplazamiento estático de un brazo de la tijera: máximo de 0.28 mm en el extremo libre.</figcaption></figure>
</div>

<div class="agv-grid single"><figure class="agv-fig auto">
  <video src="{{ 'assets/img/agv-cam-tilt.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
  <figcaption>Animación en SolidWorks de la charola basculante: la leva levanta un lado de la charola para descargar.</figcaption>
</figure></div>

**Electrónica**

El circuito de acondicionamiento de la celda de carga (amplificador diferencial, amplificador no inversor, pasa bajas RC) y la pantalla LCD de 16×2 puestos en marcha en protoboard con el ESP32.

<div class="agv-grid">
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-loadcell-circuit.png' | relative_url }}" alt="Circuito de acondicionamiento de la celda de carga"><figcaption>Cadena de acondicionamiento de la celda de carga: amplificador diferencial → amplificador no inversor → pasa bajas RC → ADC del ESP32 (retroalimentación de 102 kΩ, 1 µF).</figcaption></figure>
  <figure class="agv-fig clip">
    <video src="{{ 'assets/img/agv-lcd.mp4' | relative_url }}" autoplay loop muted playsinline controls></video>
    <figcaption>Puesta en marcha de la LCD de 16×2 en protoboard con el ESP32.</figcaption>
  </figure>
</div>

**Herramientas y tecnologías**

- **SolidWorks:** ensamble completo, modelado de la leva, estudio de movimiento
- **Siemens NX:** modelado paramétrico, simulación de movimiento
- **ESP32 / ESP-IDF (C++):** control de la LCD de 16×2, puesta en marcha del motor a pasos (NEMA 17, DRV8825)
- **Acondicionamiento con amplificadores operacionales + PCB propio:** cadena de medición de la celda de carga
- **Impresión FDM (ABS):** fabricación de la leva
- **Torno, fresadora, machueleado:** acoplamiento y biela de aluminio
- **Estimación de costos:** modelo de costo por operación con tarifas estimadas de máquina, además del cálculo de datos de corte

**Resultados y aprendizajes**

<div class="agv-grid">
  <figure class="agv-fig tall">
    <video src="{{ 'assets/img/agv-lift-demo.mp4' | relative_url }}" autoplay loop muted playsinline controls style="height: 480px"></video>
    <figcaption>La mesa de tijera construida bajando durante las pruebas.</figcaption>
  </figure>
  <figure class="agv-fig tall">
    <video src="{{ 'assets/img/agv-moving.mp4' | relative_url }}" autoplay loop muted playsinline controls style="height: 480px"></video>
    <figcaption>El AGV seguidor de línea avanzando sobre la pista de cinta negra.</figcaption>
  </figure>
</div>

- **Estructura:** la base soportó >100 kg sin deformación visible — confirma la elección de materiales (base de tubo rectangular de acero bajo una tijera ligera de aluminio), con un gran margen sobre la carga de 5 kg
- **Carga útil:** la plataforma cargó 7 kg en la demostración final, 40 % por encima del requisito de 5 kg — el mecanismo de tijera y el tornillo de potencia funcionaron por encima de la especificación
- **Dimensiones:** la mesa final mide 40 × 30 × 76 cm, cumple con el tamaño mínimo y además incluye una plataforma basculante y una báscula
- **Elevación:** el mecanismo de tornillo de potencia se validó con carga usando un taladro como actuador rotativo antes de integrar el motor, separando la validación mecánica de la eléctrica
- **Mecanismo de volteo:** la leva se diseñó para ≥30° frente a un requisito de ≥25°; el movimiento de descarga se demostró en una prueba a tamaño real y en un prototipo a escala. Cuando la leva de ABS se agrietó en la flecha del motor, una flecha de aluminio apoyada en rodamiento del lado opuesto lo resolvió
- **Báscula:** la salida fue lineal de 0–5 kg a 0–3 V, medida en pasos de 1 kg, sin acondicionador comercial — se mantiene dentro del rango del ADC del ESP32, y pasar de protoboard a PCB eliminó cortos y conexiones flojas
- **Resultado:** no se completó la integración autónoma total — los drivers de los motores fallaron por un cortocircuito y un motor del AGV venía defectuoso

## Aprendizajes

- **El aislamiento eléctrico es una restricción de diseño, no un detalle de último momento:** la falla del driver vino de un cortocircuito que no se detectó durante la integración. El aislamiento y los límites de corriente deben estar en la lista de verificación del diseño antes de hacer cualquier conector.
- **Dimensionar actuadores con cálculos:** el motor defectuoso del AGV se eligió por recomendación y no por un cálculo de torque y velocidad. Hacer las cuentas desde el inicio habría detectado el problema antes de la demostración.
- **Primero validación mecánica, después eléctrica:** separar la prueba del tornillo de potencia (con un taladro como actuador) de la integración del motor funcionó bien — encontró problemas mecánicos sin sumar riesgo eléctrico. Vale la pena mantener esa secuencia en cualquier proyecto futuro.
- **Pasar de protoboard a PCB antes:** la precisión de la báscula mejoró notablemente cuando el acondicionamiento pasó de protoboard a PCB. Hacerlo antes habría dejado más tiempo para la calibración.

<div class="agv-grid">
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-voltage-time.png' | relative_url }}" alt="Voltaje de salida de la báscula contra el tiempo en pasos de 1 kg"><figcaption>Salida de la báscula en el tiempo, cargada en pasos de 1 kg (voltaje en mV; la etiqueta del eje de la gráfica tiene un error).</figcaption></figure>
  <figure class="agv-fig auto"><img data-zoomable src="{{ 'assets/img/agv-force-voltage.png' | relative_url }}" alt="Fuerza contra voltaje de la báscula"><figcaption>Fuerza (N) contra voltaje (mV) para 1–5 kg: monótona y cercana a lineal.</figcaption></figure>
</div>

</details>

**Contexto:** Tec de Monterrey, feb.–jun. 2025, reto integrador de 4.º semestre, equipo de 5.
**Resultado:** mesa de tijera funcional, 40 × 30 × 76 cm, base probada con >100 kg.
**Stack:** SolidWorks, Siemens NX, ESP32/ESP-IDF, acondicionamiento con amplificadores operacionales, PCB propio, impresión FDM, torno/fresadora

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#academic' | relative_url }}">← Volver a proyectos</a>
</div>
