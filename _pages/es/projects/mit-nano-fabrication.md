---
layout: page
permalink: /es/projects/mit-nano-fabrication/
lang: es
es_project: true
ref: mit-nano-fabrication
title: Microfabricación de semiconductores — MIT.nano
description: Curso intensivo en el cuarto limpio de MIT.nano — celda solar con PCE de 15.87 % (Voc 0.60 V), cantilevers MEMS funcionales y mezclador microfluídico — una semana, Clase 100/1K/10K
img: assets/img/mit-cover-wafer.jpg
importance: 4
category: Fabricación, Electrónica
featured: true
hide_from_grid: true
tools: ["Fotolitografía", "PECVD/PVD", "Grabado", "MEMS"]
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

**Tres dispositivos funcionales en una semana en MIT.nano (Cambridge, octubre de 2025): una celda solar de silicio con PCE de 15.87 % y Voc de 0.60 V, cantilevers MEMS que resistieron pruebas de fuerza–desplazamiento con una carga de 4 mg y un mezclador microfluídico de PDMS.** Un curso intensivo en cuarto limpio del programa MIT–Tec de Monterrey, realizado en equipo de 2 en cuartos limpios Clase 100/1K/10K con equipo de protección y protocolos de seguridad completos.

<div class="mit-pair">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-group-certificates.jpg' | relative_url }}" alt="Participantes del programa con sus certificados de MIT.nano"><figcaption>La generación MIT–Tec de Monterrey con nuestros certificados de MIT.nano, frente al laboratorio fab.nano.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-group-cleanroom.jpg' | relative_url }}" alt="La generación con trajes de cuarto limpio"><figcaption>La generación con trajes de cuarto limpio antes de entrar al laboratorio.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-solar-cell-probe.jpg' | relative_url }}" alt="Celda solar bajo la punta de medición" loading="lazy"><figcaption>Celda solar bajo la punta de medición</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-iv-curve.jpg' | relative_url }}" alt="Curva IV: Voc 0.60 V, PCE 15.87 %" loading="lazy"><figcaption>Curva IV: Voc 0.60 V, PCE 15.87 %</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-test-a.jpg' | relative_url }}" alt="Prueba de fuerza en un puente MEMS" loading="lazy"><figcaption>Prueba de fuerza en un puente MEMS</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/mit-coflow.jpg' | relative_url }}" alt="Coflujo laminar en el mezclador" loading="lazy"><figcaption>Coflujo laminar en el mezclador</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Comparar recubrimientos antirreflejantes de SiN de 80 nm y 100 nm</td><td>La reflexión es mínima cuando el recubrimiento mide alrededor de un cuarto de longitud de onda dentro de la película</td><td>Mejor celda: PCE de 15.87 %, Voc de 0.60 V; la segunda oblea, con ~2 %, mostró la sensibilidad del proceso</td></tr>
  <tr><td>SiN de bajo esfuerzo para las vigas MEMS</td><td>El esfuerzo residual dobla o rompe las vigas liberadas</td><td>Todos los cantilevers resistieron la flexión; los puentes se recuperaron tras una carga de 4 mg</td></tr>
  <tr><td>Observar el mezclado a microescala</td><td>Con número de Reynolds bajo el flujo es laminar, así que las corrientes avanzan lado a lado y solo se mezclan por difusión</td><td>Se observó el coflujo; las partículas se atascaron en las paredes, donde la velocidad &rarr; 0</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

Llevar tres dispositivos por el ciclo completo de microfabricación en una semana: depósito de películas delgadas, transferencia de patrones, grabado y liberación, empaquetado y pruebas funcionales. Cada módulo requería elegir parámetros de proceso (receta, energía de exposición, espesor de película) y verificar el resultado a microescala antes de pasar al siguiente paso.

**Mi aporte**

- **Fabricación:** realicé los pasos de depósito de películas delgadas, fotolitografía y grabado húmedo y seco en los tres módulos, en un equipo de dos personas
- **Validación física y caracterización de todos los dispositivos:** medí el espesor del recubrimiento por elipsometría, obtuve la curva IV de la celda solar con un simulador solar, probé las vigas MEMS en fuerza–desplazamiento e hice pruebas de flujo con partículas trazadoras en el mezclador microfluídico (detalles en cada módulo)
- **Seguridad:** trabajé con equipo de protección completo de cuarto limpio en los pasos con KOH y otros químicos peligrosos
- **Informe:** coescribí el informe técnico bajo la supervisión del Dr. Javier Izquierdo Reyes y el Dr. Arnoldo Salazar Soto

**En el cuarto limpio**

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-photolitho-track.jpg' | relative_url }}" alt="Línea de fotolitografía"><figcaption>Línea de fotolitografía (aplicación y revelado de resina) en el cuarto de luz amarilla.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-asher.jpg' | relative_url }}" alt="Pantalla de control del plasma asher"><figcaption>Pantalla de control del plasma asher (receta ash thin, 250 °C, cerca de 1.2 Torr, flujo de O₂ y N₂).</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-wet-bench-acid.jpg' | relative_url }}" alt="Cargando un portaobleas en el Spin Rinse Dryer"><figcaption>Con equipo de protección contra ácidos: después de la limpieza con solución piraña, las obleas pasan al Spin Rinse Dryer (SRD).</figcaption></figure>
</div>

**Módulo 1 · Celda solar**

_Proceso._ Deposité el recubrimiento antirreflejante de nitruro de silicio con dos espesores (80 nm y 100 nm, medidos por elipsometría) para compararlos. Definí los contactos frontales por fotolitografía y RIE, deposité Ti/Al por sputtering (50 nm / 1 µm), retiré el metal sobrante con grabado húmedo, corté las celdas y medí la curva IV.

_Lo que demostró._

- El mejor dispositivo (dedos de 30 µm, 25 líneas, paso de 160 µm) dio una curva IV clara de diodo bajo iluminación, con Voc = 0.60 V y una eficiencia de conversión de 15.87 % (factor de llenado de 47.25 %) según el software de barrido IV
- La segunda oblea falló y solo llegó a cerca de 2 % de eficiencia, lo que muestra qué tan sensible es el resultado a la calidad del recubrimiento y la metalización

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-nitride-wafer.jpg' | relative_url }}" alt="Oblea recubierta de nitruro de silicio"><figcaption>Oblea recubierta con la capa antirreflejante de nitruro de silicio.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-thickness-station.jpg' | relative_url }}" alt="Estación de medición de espesor de película"><figcaption>Medición del espesor de película del recubrimiento.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-metallized-wafer.jpg' | relative_url }}" alt="Oblea con los patrones de contacto metálico"><figcaption>Oblea con los patrones de contacto frontal, con distintas densidades de dedos en las celdas.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-wafer-cleaving.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Corte de la oblea en celdas individuales.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-solar-cell-probe.jpg' | relative_url }}" alt="Celda solar en la platina de medición"><figcaption>Una celda terminada, conectada para la medición IV.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-iv-curve.jpg' | relative_url }}" alt="Barrido IV del mejor dispositivo"><figcaption>Barrido IV del mejor dispositivo bajo iluminación; el software indica PCE de 15.87 %, Voc de 0.60 V y FF de 47.25 %.</figcaption></figure>
</div>

**Módulo 2 · Cantilevers y puentes MEMS**

_Proceso._ Deposité cerca de 1.2 µm de nitruro de silicio de bajo esfuerzo y frecuencia mixta después de una limpieza RCA. Fijé la exposición en cerca de 130 mJ/cm² para un ancho de viga de 15 µm. Estimé el punto final del grabado con SF₆ por interferencia, liberé las vigas en KOH y las probé en fuerza–desplazamiento.

_Lo que demostró._

- Los puentes llegaron al fondo de la cavidad con una carga de 4 mg y regresaron a su posición inicial
- Todos los cantilevers resistieron las pruebas de flexión sin romperse
- Un puente salió incompleto; se documentó como defecto de proceso

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-profilometer-stage.jpg' | relative_url }}" alt="Equipo de prueba mecánica con la oblea con patrones"><figcaption>Equipo de prueba mecánica, que aplica fuerzas controladas a microescala, con la oblea en la platina.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-profilometer-scan.jpg' | relative_url }}" alt="Gráfica de fuerza–desplazamiento de la prueba del puente"><figcaption>Gráfica de fuerza–desplazamiento de una prueba de 4 mg en un puente angosto: el puente baja hasta tocar el fondo de la cavidad y luego regresa a su posición inicial.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-view.jpg' | relative_url }}" alt="Vista de cámara en tiempo real durante la prueba del puente"><figcaption>Vista de cámara en tiempo real del puente, con la punta del equipo colocada sobre él.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-test-a.jpg' | relative_url }}" alt="Puente bien fabricado"><figcaption>Puente bien fabricado: una estructura continua de un lado a otro de la abertura.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-bridge-test-b.jpg' | relative_url }}" alt="Puente defectuoso"><figcaption>Puente defectuoso: la estructura está incompleta, probablemente por variaciones del proceso durante la fabricación.</figcaption></figure>
</div>

**Módulo 3 · Mezclador microfluídico**

_Proceso._ Hice un molde de SU-8 2025 de ~30 µm por centrifugado, vacié el PDMS, lo uní al vidrio con plasma de O₂ e hice pruebas de flujo con partículas trazadoras de 3 µm.

_Lo que demostró._

- Las dos corrientes avanzaron lado a lado en coflujo laminar, y las partículas trazadoras hicieron visibles remolinos locales
- Las partículas trazadoras se acumularon en las paredes, donde la velocidad del flujo es casi cero, hasta bloquear por completo el canal, un modo de falla real de los dispositivos microfluídicos

<div class="mit-grid">
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-su8-mold.jpg' | relative_url }}" alt="Oblea del molde de SU-8"><figcaption>Oblea del molde de SU-8 con los diseños de los canales del mezclador.</figcaption></figure>
  <figure class="mit-fig"><video src="{{ 'assets/img/mit-pdms-casting.mp4' | relative_url }}" autoplay loop muted playsinline controls></video><figcaption>Vaciado de PDMS sobre el molde de SU-8 para formar el dispositivo microfluídico.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-flow-setup.jpg' | relative_url }}" alt="Montaje de la prueba de flujo microfluídico"><figcaption>Montaje de la prueba de flujo: estereomicroscopio, controlador de presión, mangueras y el dispositivo de PDMS sobre vidrio.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-coflow.jpg' | relative_url }}" alt="Dos corrientes en coflujo laminar"><figcaption>Dos corrientes avanzando lado a lado en coflujo laminar en la unión de los canales.</figcaption></figure>
  <figure class="mit-fig"><img data-zoomable src="{{ 'assets/img/mit-particle-clog.jpg' | relative_url }}" alt="Partículas trazadoras acumuladas en la unión de los canales"><figcaption>Partículas trazadoras acumulándose en la unión de los canales hasta bloquear el canal.</figcaption></figure>
</div>

**Herramientas y tecnologías**

- **Depósito de nitruro de silicio (recetas de frecuencia mixta y alta frecuencia):** recubrimiento antirreflejante y capa estructural
- **Elipsometría:** medición del espesor de película
- **Fotolitografía (resina positiva con primer de HMDS; resina negativa SU-8):** rejillas de contacto, geometría de las vigas, molde microfluídico
- **RIE (SF₆) con punto final interferométrico:** definición de patrones en nitruro de silicio
- **Grabado húmedo (KOH, HF, grabador de aluminio):** liberación de vigas, remoción de Ti y Al
- **Sputtering (Ti/Al):** metalización de la celda solar
- **Litografía suave con PDMS y unión con plasma de O₂:** dispositivo microfluídico
- **Equipo de prueba de fuerza–desplazamiento, microscopio óptico, simulador solar con barrido IV:** caracterización

**Aprendizajes**

- **Control de contaminación:** una oblea se rompió durante el corte porque la estación de trabajo no estaba limpia. El control de contaminación aplica a cada paso, no solo al cuarto limpio.
- **Modos de falla:** el canal microfluídico se bloqueó porque las partículas trazadoras se juntaron en las paredes, así que las condiciones de prueba deben planearse con eso en mente.

</details>

**Contexto:** MIT.nano, Cambridge, EE. UU. — curso intensivo de una semana en cuarto limpio, fabricación de semiconductores (oct. 2025).
**Stack:** LPCVD/PECVD, fotolitografía, RIE/grabado húmedo con KOH, litografía suave con PDMS, protocolos de cuarto limpio (Clase 100/1K/10K)

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#extracurricular' | relative_url }}">← Volver a proyectos</a>
</div>
