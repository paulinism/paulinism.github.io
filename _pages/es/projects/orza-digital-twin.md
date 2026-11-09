---
layout: page
permalink: /es/projects/orza-digital-twin/
lang: es
es_project: true
ref: orza-digital-twin
title: Gemelo digital de una celda flexible de manufactura CNC
description: "Reto industrial con ORZA Tech — celda CNC virtual puesta en marcha 100 % en software (programación de PLC S7-1500 en TIA Portal, UR5 VRC, CAM y código G, visión Cognex, SCADA/KPIs)"
img: assets/img/orza.png
importance: 2
category: Automatización
featured: true
tools: ["TIA Portal", "S7-1500", "WinCC", "Process Simulate", "UR5", "Cognex"]
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

**Una celda de fresado CNC completamente virtual, puesta en marcha sin ningún hardware físico.** Un S7-1500 virtual ejecuta el programa ladder, Process Simulate mueve la celda en 3D, un Virtual Robot Controller ejecuta el programa de pick-and-place del UR5, un inspector Cognex clasifica cada pieza (aprobada / retrabajo / desecho), una HMI en WinCC le da al operador control automático y manual, y un dashboard SCADA da seguimiento al OEE y los KPIs en tiempo real. Detrás del maquinado hay un programa de fresado con seis herramientas para el cuerpo de un pistón de aluminio que analicé hasta la carga de viruta y el tiempo de ciclo (≈ 12.8 min); la misma materia incluyó un examen de inspección con Cognex y un ejercicio de CAM de torno que llevé desde la definición del material hasta el código G.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-general-dt.mp4' | relative_url }}" poster="{{ 'assets/img/orza-general-dt-poster.jpg' | relative_url }}" controls preload="metadata" playsinline></video><figcaption>Recorrido narrado: desecho de una pieza, la celda CNC funcionando en Process Simulate y una explicación de cómo la HMI y la lógica del PLC trabajan junto con la simulación.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-layout-iso.jpg' | relative_url }}" alt="Layout de la celda en Process Simulate" loading="lazy"><figcaption>Layout de la celda en Process Simulate</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="Pieza P2 en SOLIDWORKS CAM" loading="lazy"><figcaption>Pieza P2 en SOLIDWORKS CAM</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="Mi estación de fresado CNC" loading="lazy"><figcaption>Mi estación de fresado CNC</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA: OEE, tiempo de ciclo, desecho" loading="lazy"><figcaption>SCADA: OEE, tiempo de ciclo, desecho</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Enclavar cada movimiento con sensores del gemelo, sin temporizadores</td><td>El programa del PLC es lo que pasaría sin cambios a la máquina real, así que debe reaccionar a la planta y no a tiempos supuestos</td><td>Ciclos completos, incluidas las ramas de retrabajo y desecho</td></tr>
  <tr><td>Revisar la carga de viruta a mano</td><td>f<sub>z</sub> = 1645.9 / (12 000 &times; 2) &asymp; 0.069 mm/diente, dentro de 0.05&ndash;0.13 mm para aluminio</td><td>Ciclo &asymp; 12.8 min; velocidad del husillo marcada como demasiado alta para la máquina del laboratorio</td></tr>
  <tr><td>Puntear antes de los barrenos pequeños</td><td>Una broca de punteo corta y rígida evita que la broca delgada de &Oslash;1.75 mm se desvíe</td><td>Posición correcta de los barrenos en la simulación</td></tr>
  <tr><td>Validar la inspección Cognex contra el vernier</td><td>El empaque metalizado crea bordes brillantes que la herramienta de contorno interpreta como bordes de la pieza</td><td>Se detectó un sobredimensionamiento de 3.7&ndash;3.9 % y se documentó la corrección</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

Diseñar, implementar y validar un gemelo digital virtual de una celda de manufactura flexible — proveedor, tres estaciones CNC, intralogística, inspección de calidad, ensamble y almacén — con comunicación industrial simulada, dos modos de operación, trazabilidad y KPIs. Todo es virtual: no hay PLC, robots ni AGV físicos. Materia Automatización de Sistemas de Manufactura, Tec de Monterrey, reto propuesto por ORZA Tech; equipo de tres, una estación CNC por integrante.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-workflow.png' | relative_url }}" alt="Flujo de trabajo de la celda de manufactura"><figcaption>Flujo de material: proveedor, transporte, maquinado CNC, inspección de calidad (aprobada, retrabajo o desecho), ensamble y almacén.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-network.jpg' | relative_url }}" alt="Diagrama de red de las tres estaciones de trabajo"><figcaption>Red real: tres estaciones de trabajo en un switch Ethernet, cada una con Process Simulate, un servidor Tecnomatix en VMware, un sensor Modbus y una instancia de PLCSIM Advanced.</figcaption></figure>
</div>

**Mi aporte — celda de fresado CNC (estación 3)**

- **Programa del PLC (el núcleo del reto):** el programa ladder completo en TIA Portal para un S7-1500 virtual en PLCSIM Advanced: secuencia de 35 pasos, enclavamientos, paro de seguridad, modo manual, ruteo por calidad, recetas, KPIs y registro
- **Gemelo digital:** mi celda en Process Simulate (rack del proveedor con actuador neumático, AGV, dos transportadores, tres robots UR5, fresadora CNC y cámara de inspección), con cada actuador y sensor mapeado a las E/S del PLC
- **Integración del robot:** un UR5 en modo Virtual Robot Controller que ejecuta su propio programa en PolyScope, sincronizado con el PLC mediante un handshake digital
- **HMI y SCADA:** las pantallas de operador en WinCC de la celda y la pantalla de KPIs de toda la planta
- **Maquinado:** el modelo en SOLIDWORKS CAM de la pieza P2 y un análisis bloque por bloque de su código G
- **Comunicación:** un sensor de campo Modbus TCP en C# y el enlace S7 GET/PUT con la estación de ensamble, con una alarma si el enlace falla
- **Concepto del layout:** propuse el layout tipo escalera del sistema completo

El equipo construyó el layout completo en Process Simulate e integró las tres PC en un switch Ethernet.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-layout-top.jpg' | relative_url }}" alt="Vista superior del layout de la celda"><figcaption>Vista superior de la operación de la línea en Process Simulate: transportadores, trayectoria del AGV, celdas CNC y robots.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="Estación CNC con robots UR5"><figcaption>Estación CNC: dos robots UR5 cargan y descargan la fresadora y presentan la pieza a la cámara.</figcaption></figure>
</div>

**Programa del PLC**

La celda funciona como una cadena de banderas de paso (K1 … K35): suministro, transporte en AGV, carga con un UR5, maquinado, descarga e inspección, ruteo y cierre de ciclo. Un paso avanza solo cuando el gemelo confirma que la acción anterior realmente terminó — un sensor, una puerta, la señal de fin de la máquina —, nunca por un temporizador. En una puesta en marcha virtual el PLC es la parte que pasaría sin cambios a la máquina real, así que cualquier suposición equivocada aparecía como una pieza atorada, una colisión o una celda que nunca terminaba.

- **Enclavamientos:** un bloque de función convierte las señales crudas de los sensores en bits con nombre (pieza presente, CNC lista, transportador libre), para que el cableado y la secuencia queden desacoplados
- **Seguridad:** un contacto de paro global está en cada escalón de paso; cualquier alarma pone la celda en falla hasta que se restablece desde la HMI
- **Modo manual:** cada paso puede accionarse desde la HMI, pero solo en modo manual, así que los comandos manuales y automáticos no pueden contradecirse
- **Ruteo y recetas:** el resultado de la inspección (OK, retrabajo, desecho) lo fija el PLC y decide el siguiente transportador; una cola FIFO de recetas define qué estaciones necesita cada tipo de pieza y el tamaño del lote
- **KPIs:** rendimiento, tasa de desecho y Micro OEE calculados en el PLC en cada ciclo, con un registro retentivo de 100 entradas que sobrevive a un reinicio

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-menu.jpg' | relative_url }}" alt="Menú principal de la HMI"><figcaption>Menú principal.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-monitor.jpg' | relative_url }}" alt="Pantalla de monitoreo de la estación"><figcaption>Monitoreo de la estación: modo, proceso actual, avance de la estación y cantidad del lote.</figcaption></figure>
</div>
<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-supply.jpg' | relative_url }}" alt="Pantalla del proveedor y el transportador"><figcaption>Pantalla del proveedor y el transportador con comandos manuales.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-hmi-cnc-qi.jpg' | relative_url }}" alt="Pantalla de CNC e inspección de calidad"><figcaption>CNC e inspección de calidad: comandos manuales de maquinado y el resultado OK / retrabajo / desecho.</figcaption></figure>
</div>
<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-db22.png' | relative_url }}" alt="Bloque de datos DATA_LOG"><figcaption>El bloque retentivo DATA_LOG con contadores, KPIs, bits de alarma y el registro de 100 entradas.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="Contadores y tendencias en el SCADA"><figcaption>Pantalla SCADA global al final de una demostración: 11 piezas, 11 OK, 0 desechos, con tendencias de rendimiento, desecho y Micro OEE.</figcaption></figure>
</div>

**CAM y código G**

La pieza P2 es el cuerpo de un pistón de aluminio de 32 × 20 × 20 mm con un barreno de Ø16, un bolsillo y dos pares de barrenos pequeños, maquinada con seis herramientas: broca de punteo y taladrado por picoteo de Ø16, una broca de centros antes de los barrenos pequeños para que la broca delgada no se desvíe, desbaste del bolsillo en ocho niveles de Z y siete pasadas de contorno con compensación de radio (G41), para que el desgaste de la herramienta se corrija con un solo valor de offset. Recalculé cada velocidad de corte (v<sub>c</sub> = π·D·n/1000) y la carga de viruta, f<sub>z</sub> ≈ 0.069 mm/diente, dentro del rango de 0.05–0.13 mm para aluminio. El ciclo estimado es de 12.8 min, 72 % de ellos de desbaste; el punto débil es la velocidad del husillo de 12 000 rpm, válida en simulación pero por encima de lo que maneja la máquina del laboratorio.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-drawing.png' | relative_url }}" alt="Plano técnico de la pieza P2"><figcaption>Plano técnico de P2 (SOLIDWORKS, escala 2:1).</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="P2 dentro de su bloque en SOLIDWORKS CAM"><figcaption>P2 dentro del bloque de material en SOLIDWORKS CAM.</figcaption></figure>
</div>
<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cam.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cam-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simulación de las trayectorias CAM de P2 (velocidad 2×).</figcaption></figure>
</div>

En un segundo ejercicio programé una flecha torneada de AISI 304 desde el material en bruto hasta el código G posprocesado (8 operaciones, 9.0 min) y encontré lo que corregiría antes de usar un torno real: falta el límite de velocidad del husillo (G50) y el tronzado ocupa 62 % del ciclo.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cam-turn-ops.jpg' | relative_url }}" alt="Árbol de operaciones en SOLIDWORKS CAM"><figcaption>Árbol de operaciones: careado, taladrado, torneado, ranura y tronzado.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cam-turn-sim.jpg' | relative_url }}" alt="Simulación de trayectorias de la flecha torneada"><figcaption>Simulación de trayectorias con el material en el chuck.</figcaption></figure>
</div>

**Robot: de lo virtual a lo real**

El UR5 que pasa piezas del AGV al transportador ejecuta su propio programa en PolyScope dentro de URSim, el emulador oficial de Universal Robots, así que el programa es real y portable en lugar de una trayectoria que solo existe en la simulación. El PLC lo trata como un dispositivo externo y solo intercambia siete señales de handshake acordadas (inicio, sujeción confirmada, liberación confirmada, toma en curso, colocación terminada). Antes de confiar en el robot virtual, programé el UR5e físico del laboratorio — aquí, un pick-and-place con gripper de vacío en un patrón de 2 × 2.

<div class="oz-grid">
  <figure class="oz-fig" style="max-width: 640px; margin: 0 auto"><img data-zoomable src="{{ 'assets/img/orza-polyscope.png' | relative_url }}" alt="Programa de pick-and-place en PolyScope"><figcaption>Programa en PolyScope dentro de URSim: BeforeStart, el ciclo de disparo y las rutinas de toma y colocación con sus pasos de espera de confirmación.</figcaption></figure>
  <figure class="oz-fig" style="max-width: 420px; margin: 0 auto"><video src="{{ 'assets/img/ur5e-physical-pnp.mp4' | relative_url }}" poster="{{ 'assets/img/ur5e-physical-pnp-poster.jpg' | relative_url }}" autoplay muted loop playsinline style="max-height: 640px; object-fit: contain"></video><figcaption>UR5e físico en el laboratorio: pick-and-place con gripper de vacío programado en PolyScope.</figcaption></figure>
</div>

**Comunicación**

S7 GET/PUT conecta mi PLC con la estación de ensamble en otra PC, y un sensor Modbus TCP en C# intercambia holding registers con el PLC. Cuando se corta el enlace, el bloque GET reporta el error, la HMI activa una alarma y la estación deja de pasar datos obsoletos hacia adelante.

<div class="oz-grid">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-s7-get.png' | relative_url }}" alt="Bloque S7 GET"><figcaption>Bloque S7 GET leyendo un byte del PLC asociado, disparado a 10 Hz.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/orza-modbus-app.png' | relative_url }}" alt="Aplicación del sensor Modbus en C#"><figcaption>Simulador de sensor Modbus TCP en C# intercambiando con el PLC el valor de inventario del proveedor.</figcaption></figure>
</div>

**Inspección de calidad (Cognex In-Sight)**

Una inspección completa que construí por mi cuenta sobre una bolsa antiestática metalizada: 20 imágenes con errores deliberados, calibración con cuadrícula (error promedio de 0.33 px en 823 puntos), un marco de referencia PatMax que sigue a la pieza cuando se mueve, mediciones de círculos y calibradores en milímetros, lectura de QR, código de barras y OCR, y una hoja de cálculo que aprueba una pieza solo si todas sus características pasan. Los sellos y la etiqueta coincidieron con un vernier dentro de ±3 %; el contorno del empaque salió 3.7–3.9 % más grande, porque los brillos del metalizado se leyeron como bordes.

<div class="oz-grid oz-row3">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-golden.jpg' | relative_url }}" alt="Imagen de referencia del empaque"><figcaption>Imagen de referencia: dos sellos de color, código QR, código de barras, el texto "QTY" y la etiqueta.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-faulty.jpg' | relative_url }}" alt="Muestra con defectos deliberados"><figcaption>Muestra con defectos deliberados: un sello solo parcialmente presente y un código QR que no corresponde a la pieza que contiene.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-setup-vertical.jpg' | relative_url }}" alt="Montaje de adquisición de imágenes"><figcaption>Montaje de adquisición: celular fijo sobre una superficie negra mate, solo con la luz del techo y el tablero de calibración a un lado.</figcaption></figure>
</div>
<style>
  .oz-grid.oz-bw .oz-fig img { aspect-ratio: 4 / 3; object-fit: contain; background: #555; }
</style>

<div class="oz-grid oz-row3 oz-bw">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-pattern.jpg' | relative_url }}" alt="Marco de referencia PatMax sobre el empaque"><figcaption>Marco de referencia PatMax que ancla todas las herramientas de inspección.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-circle.jpg' | relative_url }}" alt="Herramienta de círculo sobre un sello"><figcaption>FindCircle midiendo el radio de un sello de color.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-reflection.jpg' | relative_url }}" alt="Falla del calibrador por un reflejo"><figcaption>Caso de falla: el calibrador toma como borde un brillo especular del metalizado.</figcaption></figure>
</div>
<div class="oz-grid oz-row2">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-calibration.jpg' | relative_url }}" alt="Resultado de la calibración"><figcaption>Calibración con cuadrícula: error promedio de 0.33 px en 823 puntos.</figcaption></figure>
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-caliper.jpg' | relative_url }}" alt="Medición de un sello con vernier"><figcaption>Validación física: midiendo un sello con el vernier.</figcaption></figure>
</div>
<div class="oz-grid single">
  <figure class="oz-fig"><img data-zoomable src="{{ 'assets/img/cognex-spreadsheet.jpg' | relative_url }}" alt="Hoja de cálculo de Cognex In-Sight"><figcaption>Hoja de cálculo de In-Sight: salidas crudas de las herramientas a la izquierda y, a la derecha, la tabla de control de calidad con nominales, límites e indicadores de aprobación.</figcaption></figure>
</div>

**Herramientas y tecnologías**

- **TIA Portal, S7-1500, PLCSIM Advanced, WinCC:** programa del PLC, HMI y SCADA
- **Tecnomatix Process Simulate:** gemelo digital y puesta en marcha virtual
- **URSim / PolyScope, UR5e físico:** programación del robot
- **SOLIDWORKS CAM:** trayectorias de fresado y torneado, análisis de código G
- **C# (Modbus TCP), S7 GET/PUT:** comunicación entre estaciones y sensores
- **Cognex In-Sight:** inspección por visión calibrada

**Resultados y aprendizajes**

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-full-demo.mp4' | relative_url }}" poster="{{ 'assets/img/orza-full-demo-poster.jpg' | relative_url }}" controls preload="none" playsinline></video><figcaption>Demostración completa de la celda CNC: Process Simulate, PLC y HMI funcionando juntos.</figcaption></figure>
</div>

- **Lazo cerrado:** cada salida del PLC mueve la escena 3D y cada sensor virtual retroalimenta; la celda completa ciclos automáticos enteros, incluidas las ramas de retrabajo y desecho
- **Comunicación:** Modbus TCP verificado en ambas direcciones; un enlace cortado activa una alarma y detiene los datos obsoletos
- **Integración:** cada enlace S7 funcionó por separado, pero la interconexión completa de las tres estaciones no se terminó por conflictos de IP, tags duplicados y conexiones obsoletas de PLCSIM
- **La integración es una tarea de ingeniería en sí misma:** acordar primero un plan de IP y un espacio de nombres de tags habría ahorrado la mayor parte del tiempo perdido
- **Los límites salen del requisito:** mis límites de aprobación de la inspección fueron de ±10 %, más amplios que el objetivo de ±3 %; la próxima vez los derivaría primero y construiría las herramientas a partir de ellos

</details>

**Stack:** Tecnomatix Process Simulate · TIA Portal, S7-1500, PLCSIM Advanced, lógica ladder · WinCC Runtime Advanced · URSim / PolyScope (UR5 VRC), UR5e físico · S7 GET/PUT, Modbus TCP · C# (simulador Modbus) · SOLIDWORKS CAM (fresado y torneado), código G (G71/G72, G82/G83, G41/G43, G96/G97) · Cognex In-Sight (PatMax RedLine, FindCircle, Caliper, ReadIDMax, OCRMax)

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#academic' | relative_url }}">← Volver a proyectos</a>
</div>
