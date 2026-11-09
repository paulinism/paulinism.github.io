---
layout: page
permalink: /es/projects/scara-robot/
lang: es
es_project: true
ref: scara-robot
title: Robot SCARA pick-and-place guiado por visión (4 GDL)
description: Líder de firmware y electrónica — SCARA de 4 GDL con visión YOLOv11n (mAP 0.72), 5 de 6 piezas a ~14 s por ciclo, PCB propio en Altium
img: assets/img/scara.jpg.jpg
importance: 3
category: Embebidos, Visión por computadora
featured: true
tools: ["ESP32", "Altium", "Python", "YOLOv11n", "OpenCV", "MQTT"]
---

<style>
  img[data-zoomable] { cursor: zoom-in; }
  .medium-zoom-image--opened { object-fit: contain !important; background: transparent !important; }
  .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 1050; }
</style>

<style>
  .sc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .sc-grid.single { grid-template-columns: minmax(0, 860px); justify-content: center; }
  .sc-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .sc-fig img, .sc-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .sc-fig.tall img, .sc-fig.tall video { height: 460px; object-fit: contain; }
  .sc-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .sc-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .sc-table th, .sc-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .sc-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**5 de 6 piezas tomadas y colocadas correctamente en la demostración final, a unos 14 segundos por ciclo.** El robot clasifica las piezas por forma y color con un modelo YOLOv11n (mAP@0.5 = 0.72) que corre en mi propia computadora, y luego las toma y las coloca de forma autónoma — las coordenadas viajan de Python por MQTT al firmware en C++ de un ESP32.

<div class="sc-grid single">
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-demo.mp4' | relative_url }}" poster="{{ 'assets/img/scara-demo-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Presentación final del proyecto: prueba del agarre del gripper, control de las articulaciones desde la HMI y enviando comandos directamente al broker MQTT, y explicación de cómo funciona el sistema de visión en tiempo real.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="Modelo CAD (4 GDL)" loading="lazy"><figcaption>Modelo CAD (4 GDL)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Espacio de trabajo alcanzable de 50&ndash;250 mm" loading="lazy"><figcaption>Espacio de trabajo alcanzable de 50&ndash;250 mm</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="PCB de control, vista 3D (Altium)" loading="lazy"><figcaption>PCB de control, vista 3D (Altium)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Detección de forma y color" loading="lazy"><figcaption>Detección de forma y color</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Todos los ejes de las articulaciones verticales</td><td>Desacopla el problema: la posición en el plano depende del hombro y el codo, la altura de la etapa Z; cinemática inversa en forma cerrada con la ley de cosenos</td><td>Error medio de la cinemática directa 4.0 mm, inversa 6.9 mm</td></tr>
  <tr><td>L1 = 150 mm, L2 = 110 mm</td><td>Espacio de trabajo anular de |L1&minus;L2| a L1+L2 que cubre el radio de 25 cm de la tarea</td><td>Área alcanzable de 50&ndash;250 mm desde la base</td></tr>
  <tr><td>Motores a pasos en J1/J2, encoder absoluto en la muñeca, homing con interruptor de límite</td><td>Los motores a pasos dan posición sin retroalimentación, así que la precisión depende de una referencia de home correcta</td><td>El homing resultó la principal fuente de error</td></tr>
  <tr><td>YOLOv11n sobre el pipeline HSV</td><td>Los umbrales HSV cambian con la iluminación; un detector entrenado es más robusto</td><td>mAP@0.5 = 0.72; 5 de 6 piezas clasificadas, ~14 s por ciclo</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

Identificar, tomar y colocar piezas planas que difieren en forma, color y orientación dentro de un espacio de trabajo de 25 cm de radio, y clasificar cada una en su área asignada sin intervención humana. Las piezas tienen cinco formas (cuadrado, círculo, triángulo, cruz, pentágono) y cuatro colores. El brazo tiene dos articulaciones rotacionales movidas por motores a pasos NEMA 17 (hombro y codo), una etapa vertical con tornillo de potencia movida por un motor DC con encoder, una muñeca montada alrededor de un encoder absoluto AS5600 y un gripper con servo, construido en PETG con barras de aluminio. Materia Diseño y Desarrollo de Robots, Tec de Monterrey, equipo de cuatro.

**Mi aporte**

- **Visión por computadora:** el pipeline clásico en OpenCV (detección de bordes, segmentación HSV, clasificación de formas, ángulo de agarre) y su integración con el robot por MQTT
- **Coordenadas de píxel a robot:** la homografía con ArUco que convierte píxeles de la imagen en milímetros del robot
- **Machine learning:** el flujo de trabajo de YOLOv11n: preanotación automática, división del dataset, entrenamiento y evaluación
- **Diseño de PCB:** la placa de control de una capa en Altium Designer (ESP32, drivers de motores a pasos y DC, encoders, distribución de energía)
- **Cinemática:** mi propia cinemática directa e inversa en MATLAB (cada integrante la derivó por separado)
- **Con el equipo:** prototipo en protoboard, selección de motores y drivers, y los sensores de homing — el interruptor de límite del eje Z y el AS5600 de la muñeca, validados contra ángulos de referencia conocidos; el enlace MQTT entre la computadora de visión, el broker y el ESP32; coautora de la hoja de datos del robot

Mis compañeros desarrollaron la cinemática en C++ y la arquitectura del firmware en el ESP32, la HMI en MATLAB App Designer, el modelo final del SCARA en Simscape y la estructura mecánica.

**Cinemática y mecanismo**

Los cuatro ejes de las articulaciones son verticales, así que el problema se separa limpiamente: la posición en el plano depende solo del hombro y el codo, la altura solo de la etapa vertical, y el ángulo de la herramienta es la suma de las tres rotaciones. La cinemática directa encadena cuatro transformaciones de Denavit–Hartenberg; la inversa usa la ley de cosenos para el brazo de dos eslabones (L1 = 150 mm, L2 = 110 mm), da una solución codo arriba y otra codo abajo y conserva la más cercana a la pose actual. Un objetivo solo es alcanzable entre 50 y 250 mm desde la base.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="Modelo CAD del robot SCARA"><figcaption>Modelo CAD del robot.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Espacio de trabajo alcanzable"><figcaption>Vista superior del espacio de trabajo alcanzable (radio de 250 mm).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-simscape.mp4' | relative_url }}" poster="{{ 'assets/img/scara-simscape-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Modelo del SCARA en Simscape Multibody, construido a partir de la geometría CAD, con control PID de las dos articulaciones del plano (versión final de un compañero).</figcaption></figure>
</div>

Antes del SCARA, el equipo modeló otros manipuladores para estudiar movimiento y control. Para un gantry con un brazo de 1 GDL derivamos las ecuaciones de movimiento con Euler–Lagrange y construimos el modelo dos veces — a partir de las ecuaciones en Simulink y en Simscape Multibody — con lazos PID para la posición del carro y el ángulo del brazo. Ambos coincidieron en el comportamiento general, incluida la pequeña oscilación al final de cada movimiento causada por el acoplamiento entre el carro y el brazo.

<div class="sc-grid">
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-gantry.mp4' | relative_url }}" poster="{{ 'assets/img/sim-gantry-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simulación del robot gantry (trabajo del equipo en la materia).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-arm.mp4' | relative_url }}" poster="{{ 'assets/img/sim-arm-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simulación de un brazo industrial (trabajo del equipo en la materia).</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simulink.jpg' | relative_url }}" alt="Diagrama de bloques en Simulink del modelo del robot gantry"><figcaption>Modelo del gantry en Simulink: las ecuaciones de estado no lineales en un bloque MATLAB Function, dos lazos PID (x y θ) y osciloscopios, con referencias escalón (izquierda) y senoidales (derecha).</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-top.jpg' | relative_url }}" alt="Nivel superior del modelo en Simscape con los subsistemas del gantry y del brazo"><figcaption>Nivel superior del modelo en Simscape: el subsistema del gantry (riel, carro y brazo) y el subsistema del brazo robótico, cada uno con su referencia de movimiento y registrado en osciloscopios.</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-diagram.jpg' | relative_url }}" alt="Diagrama de conexiones en Simscape Multibody del robot gantry"><figcaption>Diagrama de conexiones en Simscape Multibody: los subsistemas del gantry y del brazo, las referencias de movimiento y los mismos lazos PID que el modelo analítico, para compararlos.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-outputs.jpg' | relative_url }}" alt="Salidas de Simscape: ángulo, velocidad angular, torque y señal de control"><figcaption>Salidas de Simscape: ángulo del brazo θ contra su referencia, velocidad angular, torque de salida y señal de control del PID. La señal de control tiene un sobrepaso al inicio de cada escalón y luego se estabiliza.</figcaption></figure>
</div>

**Visión por computadora**

Un celular montado 500 mm sobre el espacio de trabajo, con el eje óptico vertical, transmite a la PC; un script captura un cuadro de 1280 × 720 px. Cuatro marcadores ArUco en esquinas conocidas de un área de 562 × 562 mm definen una homografía de píxeles de la imagen a milímetros del robot.

<div class="sc-grid">
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-camera.jpg' | relative_url }}" alt="Montaje de la cámara cenital"><figcaption>Cámara cenital a 500 mm sobre el espacio de trabajo, con los marcadores ArUco en las esquinas.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-homography.jpg' | relative_url }}" alt="Marcadores ArUco detectados para la homografía"><figcaption>Detección de ArUco: los centroides de los marcadores (rojo) definen la homografía de píxeles a milímetros.</figcaption></figure>
</div>

El pipeline clásico genera un mapa de bordes (desenfoque gaussiano, laplaciano, Otsu), segmenta cada color en HSV (el rojo necesita dos rangos de tono porque el tono da la vuelta) y separa las piezas que se tocan con watershed. Las formas se clasifican por solidez, déficit de convexidad y circularidad: la cruz se detecta primero porque es la única pieza no convexa, y las demás se deciden con una votación de `approxPolyDP` en tres tolerancias. El ángulo de agarre sale del rectángulo de área mínima, ajustado a la simetría de cada forma para que la muñeca gire lo menos posible, y cada pieza se publica por MQTT como `forma, color, x, y, ángulo`.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Formas clasificadas en el espacio de trabajo"><figcaption>Detección final: cada pieza etiquetada con su ID, forma y color.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-grip.jpg' | relative_url }}" alt="Ángulos de agarre sobre el espacio de trabajo"><figcaption>Ángulos de agarre calculados para cada pieza, usando su simetría para minimizar el giro de la muñeca.</figcaption></figure>
</div>

Como los umbrales HSV son sensibles a la iluminación y a colores parecidos, entrené un detector YOLOv11n con imágenes del espacio de trabajo real (16 clases, división 80/20, 50 épocas). El pipeline clásico preanotó todas las imágenes, así que el etiquetado tomó unos 30 minutos en vez de 3–4 horas. El modelo alcanzó mAP@0.5 = 0.72; las clases más débiles fueron las cruces, que tenían solo 62–94 ejemplos frente a 1,580 del cuadrado azul — el desbalance de clases, no el modelo, es el principal límite.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-preannot.jpg' | relative_url }}" alt="Imagen de entrenamiento del espacio de trabajo"><figcaption>Imagen de entrenamiento capturada en el espacio de trabajo real, con piezas en distintas posiciones, orientaciones y colores.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-loss.png' | relative_url }}" alt="Curvas de pérdida y mAP de YOLOv11n"><figcaption>Pérdidas de entrenamiento y validación y mAP a lo largo de 50 épocas.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-confusion.png' | relative_url }}" alt="Matriz de confusión normalizada"><figcaption>Matriz de confusión normalizada: las piezas verdes se reconocen mejor, las cruces peor.</figcaption></figure>
</div>

**Electrónica y PCB**

La placa de control integra el ESP32, dos drivers DRV8825 para los motores a pasos, un TB6612FNG para los motores DC, los conectores de encoders y sensores y la distribución de energía. Hacerla de una sola capa era una restricción de manufactura, así que la colocación y el ruteo se planearon para evitar cruces, y los polígonos de cobre llevan la alimentación y la tierra para reducir la caída de voltaje entre los drivers y la fuente. La placa se terminó pero no se integró: en las últimas semanas el equipo priorizó depurar la mecánica, el control y la visión, y la demostración se hizo con la electrónica en protoboard.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-schematic.png' | relative_url }}" alt="Esquemático de la placa de control"><figcaption>Esquemático: ESP32, drivers de motores a pasos, driver de motores DC y conectores.</figcaption></figure>
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-pcb-layout.png' | relative_url }}" alt="Layout del PCB de una capa"><figcaption>Layout de una capa con polígonos de cobre para la alimentación.</figcaption></figure>
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="Vista 3D del PCB"><figcaption>Vista 3D de la placa.</figcaption></figure>
</div>

**HMI e integración**

La computadora de visión, el ESP32 y la HMI nunca se comunican directamente: publican y se suscriben a través de un broker Mosquitto, así que cada parte puede correr en una máquina distinta — durante las pruebas el robot incluso se operó desde otra ciudad. En modo pick-and-place el ESP32 resuelve la cinemática inversa, se acerca 30 mm por encima de la pieza, baja, la sujeta, la levanta y la coloca.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-hmi.png' | relative_url }}" alt="Teach pendant de la HMI"><figcaption>Teach pendant de la HMI (hecho por un compañero).</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-pick.mp4' | relative_url }}" poster="{{ 'assets/img/scara-pick-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>El gripper tomando un cuadrado azul.</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-joint.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-joint-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>La articulación del hombro girando con un comando MQTT al inicio de la integración — todavía sin los eslabones del brazo.</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-zaxis.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-zaxis-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Prueba de movimiento del eje Z durante la integración de sensores — en esta etapa se validó la activación del interruptor de límite y del encoder.</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-mqtt-hmi.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-hmi-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Sesión en el banco con la interfaz HMI del SCARA a la vista: comandos de movimiento de las articulaciones enviados por MQTT desde MATLAB al ESP32.</figcaption></figure>
</div>

**Herramientas y tecnologías**

- **Python, OpenCV, YOLOv11n, LabelImg:** pipeline de visión, homografía, herramientas para el dataset
- **ESP32 (C++, ESP-IDF, PlatformIO, FreeRTOS):** firmware; MQTT por Wi-Fi con un broker Mosquitto
- **Altium Designer:** placa de control de una capa
- **MATLAB, Simulink, Simscape Multibody:** cinemática, control PID de las articulaciones, simulación multicuerpo

**Resultados y aprendizajes**

- **Pick-and-place:** 5 de 6 piezas colocadas correctamente, unos 14 s por ciclo
- **Precisión:** error medio de la cinemática directa 4.0 mm (vernier, 3 poses); cinemática inversa 6.9 mm de media y 8.6 mm de máximo (5 objetivos); localización por visión de unos 15 mm
- **Enlace robusto:** el control se recuperó unos 2 s después de una caída del Wi-Fi
- **El homing domina la precisión:** los motores a pasos no tienen retroalimentación de posición, así que cada sesión dependía de una referencia de home correcta; el juego de las bandas y los acoplamientos impresos fueron las principales fuentes de error mecánico
- **Desfase entre visión y gripper:** la mayoría de las tomas fallidas vinieron del desfase entre el centro estimado de la pieza y el centro real del gripper; una mejor calibración del lente es la siguiente corrección
- **Conjunto de validación pequeño:** seis intentos son un indicio, no una tasa de éxito medida
- **Siguientes pasos:** más imágenes de las clases con pocos ejemplos, integrar el PCB y cerrar el lazo en las articulaciones con motores a pasos

</details>

**Stack:** Python, OpenCV, NumPy, Ultralytics YOLOv11n, LabelImg · ESP32, C++ (ESP-IDF, PlatformIO), FreeRTOS · MQTT (Mosquitto), I²C · Altium Designer · MATLAB, Simulink, Simscape Multibody

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#academic' | relative_url }}">← Volver a proyectos</a>
</div>
