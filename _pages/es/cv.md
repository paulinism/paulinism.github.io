---
layout: page
permalink: /es/cv/
lang: es
title: CV
description: Currículum de Paulina L. Ruíz Servín.
toc:
  sidebar: left
---

<style>
  .pc-card { border: 1px solid rgba(128,128,128,.3); border-radius: 12px; overflow: hidden; }
  .pc-badge { display: inline-block; font-size: .72rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: .15rem .55rem; border-radius: 999px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .pc-tag { display: inline-block; font-size: .8rem; padding: .15rem .6rem; margin: 0 .3rem .3rem 0; border-radius: 999px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); }
  .pc-btns { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }
  .pc-btn { display: inline-flex; align-items: center; gap: .4rem; padding: .45rem .9rem; border-radius: 8px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color) !important; text-decoration: none !important; font-size: .88rem; font-weight: 600; background: transparent; cursor: pointer; }
  .pc-btn.primary { background: var(--global-theme-color); color: var(--global-bg-color) !important; }
  .pc-h { margin: 2rem 0 .8rem; }
  .post > .post-header { display: none !important; }
  .cv-top { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); gap: 1.5rem; align-items: center; margin: 1rem 0 1.5rem; }
  .cv-name { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 .3rem; }
  .cv-label { opacity: .85; margin: 0 0 .8rem; }
  .cv-summary { line-height: 1.6; margin: 0; }
  .cv-dl { border: 1px solid rgba(128,128,128,.3); border-left: 4px solid var(--global-theme-color); border-radius: 12px; padding: 1rem 1.1rem; }
  .cv-dl p { margin: 0 0 .6rem; }
  .cv-dl .pc-btn { width: 100%; justify-content: center; margin-bottom: .45rem; }
  .cv-tl { position: relative; margin: .5rem 0 0 .4rem; padding-left: 1.4rem; border-left: 2px solid rgba(128,128,128,.35); }
  .cv-tl-item { position: relative; margin-bottom: 1.1rem; }
  .cv-tl-item::before { content: ""; position: absolute; left: -1.85rem; top: .35rem; width: .8rem; height: .8rem; border-radius: 50%; background: var(--global-theme-color); }
  .cv-when { font-family: "Roboto Mono", ui-monospace, monospace; font-size: .8rem; opacity: .7; }
  .cv-what { font-weight: 700; margin: .1rem 0; }
  .cv-where { font-size: .92rem; opacity: .85; }
  .cv-card { padding: 1rem 1.1rem; margin-bottom: 1rem; }
  .cv-card ul { margin: .5rem 0 0; padding-left: 1.1rem; font-size: .93rem; }
  .cv-card li { margin-bottom: .25rem; }
  .cv-head { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; align-items: baseline; }
  .cv-head { flex-wrap: nowrap; } .cv-head > .cv-when { flex-shrink: 0; white-space: nowrap; }
  .cv-proj { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .cv-proj .cv-card { margin: 0; display: flex; flex-direction: column; }
  .cv-proj .cv-card ul { margin-bottom: .8rem; }
  .cv-card .pc-btn { align-self: flex-start; margin-top: auto; font-size: .85rem; padding: .35rem .8rem; }
  .cv-skills { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .9rem 1.5rem; }
  .cv-skills strong { display: block; font-size: .95rem; margin-bottom: .3rem; }
  .cv-two { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
  .cv-mini { list-style: none; padding: 0; margin: 0; }
  .cv-mini li { padding: .45rem 0; border-bottom: 1px solid rgba(128,128,128,.2); font-size: .93rem; }
  .cv-mini li span { opacity: .7; }
  .cv-h { color: var(--global-theme-color); display: flex; align-items: center; gap: .6rem; padding-bottom: .4rem; border-bottom: 2px solid var(--global-theme-color); }
  .cv-h i { font-size: .8em; }
  .cv-h a, .cv-what a { color: inherit !important; text-decoration: none !important; }
  .cv-h a:hover, .cv-what a:hover { text-decoration: underline !important; }
  .cv-h-arrow { font-size: .6em; opacity: .8; }
  .cv-more { display: inline-block; margin-top: .4rem; font-size: .88rem; font-weight: 600; }
  .cv-card .cv-what { color: var(--global-theme-color); }
  .cv-tl-item .cv-what { color: var(--global-theme-color); }
  .cv-mini li { border-left: 3px solid var(--global-theme-color); padding-left: .7rem; border-bottom: none; margin-bottom: .45rem; background: rgba(128,128,128,.06); border-radius: 0 8px 8px 0; }
  .cv-lang { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
  .cv-lang .pc-card { padding: .9rem 1rem; }
  .cv-lang strong { display: block; }
  .cv-lang span { font-size: .88rem; opacity: .8; }
  .cv-bar { height: 6px; border-radius: 999px; background: rgba(128,128,128,.25); margin-top: .55rem; overflow: hidden; }
  .cv-bar i { display: block; height: 100%; background: var(--global-theme-color); border-radius: 999px; }
  @media (max-width: 760px) { .cv-lang { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 760px) { .cv-top, .cv-proj, .cv-skills, .cv-two { grid-template-columns: minmax(0, 1fr); } .cv-card > .cv-head { flex-wrap: wrap; } }
</style>
<div class="cv-top">
  <div>
    <p class="cv-name">Currículum</p>
    <p class="cv-label">Estudiante de Ingeniería Eléctrica y Mecatrónica — Sistemas embebidos, electrónica, control y automatización</p>
    <p class="cv-summary">Estudiante de Ingeniería en Mecatrónica cursando la doble titulación DHIK entre el Tecnológico de Monterrey (México) y la Hochschule Zittau/Görlitz (Alemania), con especialización en ingeniería eléctrica. Experiencia en sistemas embebidos (diseño de PCB, firmware ESP32/FreeRTOS, CAN/SPI/I2C/UART), control basado en modelos (MATLAB/Simulink/Simscape, PID) y automatización industrial (Siemens TIA Portal, Allen-Bradley, gemelos digitales con Process Simulate y cobots de Universal Robots), además de pruebas y caracterización de hardware electrónico en laboratorio. Disponible para prácticas profesionales y proyectos de tesis de licenciatura en Alemania a partir de marzo de 2027 (tiempo completo, hasta 6 meses).</p>
  </div>
  <div class="cv-dl">
    <p><strong>CV completo (PDF)</strong><br><span style="opacity:.8">Disponible a partir de febrero/marzo de 2027</span></p>
    <a class="pc-btn primary" href="{{ '/assets/pdf/CV_Paulina_EN.pdf' | relative_url }}?v=20261109" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> CV (inglés)</a>
    <a class="pc-btn" href="{{ '/assets/pdf/CV_Paulina_DE.pdf' | relative_url }}?v=20261109" target="_blank" rel="noopener"><i class="fa-solid fa-file-arrow-down"></i> Lebenslauf (alemán)</a>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-graduation-cap"></i> Formación</h2>
<div class="cv-tl">
  <div class="cv-tl-item">
    <div class="cv-when">ago. 2023 – dic. 2027</div>
    <div class="cv-what">Ingeniería en Mecatrónica (impartida completamente en inglés)</div>
    <div class="cv-where">Tecnológico de Monterrey · Ciudad de México, México</div>
    <div class="cv-where" style="margin-top:.2rem">Egreso previsto: diciembre de 2027 · Promedio: 92/100 (≈ 1.8 en la escala alemana) · Beca al mérito (30 %)</div>
  </div>
  <div class="cv-tl-item">
    <div class="cv-when">sep. 2026 – dic. 2027</div>
    <div class="cv-what">B.Eng. Ingeniería Eléctrica (doble titulación DHIK)</div>
    <div class="cv-where">Hochschule Zittau/Görlitz · Zittau, Alemania</div>
    <div class="cv-where" style="margin-top:.2rem">Egreso previsto: diciembre de 2027<br>Materias: Sistemas robóticos colaborativos, Redes neuronales artificiales, Microcontroladores, Procesamiento de imágenes, Teoría de control avanzado</div>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-briefcase"></i> Experiencia</h2>
<div class="pc-card cv-card">
  <div class="cv-head"><div><div class="cv-what"><a href="{{ '/es/projects/ecovolt-telemetry/#my-contribution' | relative_url }}">Capitana del equipo, líder de electrónica y mentora</a></div><div class="cv-where">Escudería EcoVolt CCM EV Racing Team (Shell Eco-marathon) · Ciudad de México, México</div></div><div class="cv-when">ago. 2023 – ago. 2026</div></div>
  <p style="margin:.4rem 0 0;font-size:.93rem">Dirigí y fui mentora de un equipo multidisciplinario de más de 30 personas en sistemas mecánicos, eléctricos, de telemetría y de análisis de datos para Shell Eco-marathon Americas, Brazil y United States 2025–2026, desarrollando un vehículo eléctrico de alta eficiencia que alcanzó ~200 km/kWh a ~28 km/h.</p>
  <ul><li>Diseñé los PCB de telemetría en Altium Designer (esquemático, layout, BOM) — la placa de Brazil 2025, principal contribuidora en la de US 2026 y codiseñadora de la de Brazil 2026 — y los puse en marcha y depuré en el vehículo</li><li>Conecté el controlador de motor propio del equipo con el sistema de telemetría implementando la comunicación CAN (incluido el circuito transceptor) y escribiendo firmware para ESP32 en C++ con drivers de SPI, I2C, UART y SD, registrando corriente, voltaje y posición GPS en tiempo real</li><li>Desarrollé un sensor de corriente bidireccional con shunt e INA240, desde un prototipo grabado a mano hasta una placa fabricada, verificado con osciloscopio y multímetro</li><li>Realicé mediciones del accionamiento BLDC y contribuí a las funciones de transferencia de sus lazos de corriente y velocidad en MATLAB/Simulink</li><li>Caractericé en laboratorio transistores y diodos Zener, Schottky y rectificadores para seleccionar los componentes de un sistema de respaldo de energía con supercapacitores</li><li>Construí con el equipo un banco de pruebas HiL en Python (motor de tracción real y simulador de manejo) que mostró con datos medidos que el acelerador constante es más eficiente que pulse-and-glide</li><li>Validé la distribución de la cabina y la posición del piloto con un análisis ergonómico RULA (modelo humano virtual en Tecnomatix Process Simulate), contribuyendo al Vehicle Design Award 2026</li><li>Propuse un sistema de inventario con códigos QR para herramientas y equipo de protección personal y programé su primera versión en Python/OpenCV (generación de códigos QR, detección automática, registro de escaneos) para controlar el material en las competencias</li></ul>
  <a class="pc-btn" href="{{ '/es/projects/ecovolt-telemetry/#my-contribution' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Ver proyecto</a>
</div>
<div class="pc-card cv-card">
  <div class="cv-head"><div><div class="cv-what"><a href="{{ '/es/projects/mit-nano-fabrication/' | relative_url }}">Estudiante visitante — Curso intensivo de fabricación de semiconductores</a></div><div class="cv-where">MIT.nano Lab, Massachusetts Institute of Technology · Cambridge, MA, EE. UU.</div></div><div class="cv-when">oct. 2025</div></div>
  <ul><li>Fabricación práctica de dispositivos (semiconductores, celdas solares, microfluídica) mediante depósito de películas delgadas (PECVD/PVD) y grabado químico</li><li>Realicé procesos de fotolitografía y caracterización en cuartos limpios Clase 100/1K/10K bajo estrictos protocolos de seguridad</li><li>Caractericé los dispositivos fabricados: curva IV de la celda solar, prueba de fuerza–desplazamiento del cantilever MEMS y pruebas de flujo del mezclador microfluídico</li></ul>
  <a class="pc-btn" href="{{ '/es/projects/mit-nano-fabrication/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Ver proyecto</a>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-diagram-project"></i> Proyectos</h2>
<div class="cv-proj">
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/es/projects/orza-digital-twin/' | relative_url }}">Gemelo digital de una celda flexible de manufactura CNC</a></div>
    <div class="cv-when">feb. 2026 – jun. 2026 · Equipo de 3, una estación por integrante · puesta en marcha virtual sin hardware físico</div>
    <ul><li>Puse en marcha mi estación completamente en simulación: gemelo digital en Process Simulate (3 cobots UR5, AGV, transportadores, fresadora CNC, cámara) controlado por un S7-1500 virtual (PLCSIM Advanced)</li><li>Programé la lógica ladder en TIA Portal (secuencia de pasos, enclavamientos, modo manual, ruteo por calidad) y la HMI en WinCC</li><li>Desarrollé la pantalla SCADA de toda la planta (OEE, tiempo de ciclo, tasa de desperdicio), un sensor Modbus TCP en C# y un enlace S7 GET/PUT con alarma por pérdida de conexión</li></ul>
    <a class="pc-btn" href="{{ '/es/projects/orza-digital-twin/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Ver proyecto</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/es/projects/scara-robot/' | relative_url }}">Robot SCARA pick-and-place guiado por visión (4 GDL)</a></div>
    <div class="cv-when">feb. 2026 – jun. 2026 · Equipo de 4 · firmware, electrónica e integración de visión por computadora</div>
    <ul><li>Desarrollé el pipeline de visión: clasificación de forma y color con YOLOv11n (mAP@0.5 = 0.72) y homografía de píxeles a mm con ArUco, publicando las coordenadas de recogida por MQTT al firmware del ESP32 (C++, ESP-IDF, FreeRTOS)</li><li>Diseñé la placa de control en Altium Designer (ESP32, drivers de motores a pasos y DC, encoders, distribución de energía); seleccioné motores y drivers e integré los sensores de homing (interruptor de límite, encoder magnético AS5600)</li><li>Modelé la cinemática directa e inversa y el control PID de las articulaciones en MATLAB/Simulink; en la demostración final colocó <strong>5 de 6 piezas</strong> correctamente a ~14 s por ciclo</li></ul>
    <a class="pc-btn" href="{{ '/es/projects/scara-robot/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Ver proyecto</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/es/projects/endress-viscosity/' | relative_url }}">Sistema automatizado de medición de viscosidad</a></div>
    <div class="cv-when">ago. 2025 – dic. 2025 · Equipo de 4 · líder de PCB y embebidos</div>
    <ul><li>Diseñé las tres placas en Altium Designer: ESP32 maestro y esclavo (ancho de pistas según IPC-2221, fabricadas por JLCPCB) y la placa de medición con amplificadores operacionales</li><li>Codesarrollé una cadena de señal de dos etapas con amplificadores operacionales (shunt de 1 Ω, ganancia de ~400×) que lleva una ventana de corriente de 6 mA al rango del ADC del ESP32, <strong>distinguiendo 252 cP de 1676 cP</strong>; verificada en Multisim y en hardware</li><li>Coescribí el firmware del ESP32 (rutinas de homing y medición, filtrado, sensor de color I²C, Bluetooth a una HMI en LabVIEW, UART entre placas) y coprogramé la lógica ladder en OpenPLC para las bandas de clasificación</li></ul>
    <a class="pc-btn" href="{{ '/es/projects/endress-viscosity/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Ver proyecto</a>
  </div>
  <div class="pc-card cv-card">
    <div class="cv-what"><a href="{{ '/es/projects/agv-platform/' | relative_url }}">Mesa de tijera y AGV</a></div>
    <div class="cv-when">feb. 2025 – jun. 2025 · Equipo de 5 · diseño mecánico y electrónica de la celda de carga</div>
    <ul><li>Construí el ensamble completo en SolidWorks; realicé estudios de movimiento en NX y estáticos en SolidWorks (deflexión máx. del brazo 0.28 mm); diseñé e imprimí en 3D la leva de volteo (ángulo de descarga ≥30° frente a ≥25° requerido)</li><li>Diseñé un PCB de acondicionamiento para la celda de carga (puente de Wheatstone, etapas con amplificadores operacionales, filtro pasa bajas RC) sin HX711, con salida lineal de 0–3 V para 0–5 kg hacia el ADC del ESP32</li><li>Torneé y fresé el acoplamiento del motor y la biela de aluminio; la estructura se probó con <strong>más de 100 kg</strong> y cargó 7 kg en la demostración final (se pedían 5 kg)</li></ul>
    <a class="pc-btn" href="{{ '/es/projects/agv-platform/' | relative_url }}"><i class="fa-solid fa-arrow-right"></i> Ver proyecto</a>
  </div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-screwdriver-wrench"></i> Habilidades</h2>
<div class="cv-skills">
  <div><strong><i class="fa-solid fa-microchip" style="color:var(--global-theme-color)"></i> Sistemas embebidos y firmware</strong><span class="pc-tag">ESP32</span><span class="pc-tag">FreeRTOS</span><span class="pc-tag">PlatformIO</span><span class="pc-tag">CAN/SPI/I2C/UART</span><span class="pc-tag">MQTT</span><span class="pc-tag">Simulación Hardware-in-the-Loop (HiL)</span></div>
  <div><strong><i class="fa-solid fa-bolt" style="color:var(--global-theme-color)"></i> Diseño de PCB e instrumentación</strong><span class="pc-tag">Altium Designer</span><span class="pc-tag">Diseño de esquemáticos y layout</span><span class="pc-tag">Acondicionamiento de señal</span><span class="pc-tag">Amplificadores de instrumentación</span><span class="pc-tag">Electrónica analógica/digital</span><span class="pc-tag">NI Multisim</span></div>
  <div><strong><i class="fa-solid fa-sliders" style="color:var(--global-theme-color)"></i> Sistemas de control y diseño basado en modelos</strong><span class="pc-tag">Control PID y no lineal</span><span class="pc-tag">MATLAB</span><span class="pc-tag">Simulink</span><span class="pc-tag">Simscape</span><span class="pc-tag">Diseño basado en modelos</span></div>
  <div><strong><i class="fa-solid fa-industry" style="color:var(--global-theme-color)"></i> Automatización industrial y PLC</strong><span class="pc-tag">Siemens TIA Portal (S7-1500, LOGO!)</span><span class="pc-tag">Allen-Bradley ControlLogix 5570</span><span class="pc-tag">Rockwell Automation Studio 5000</span><span class="pc-tag">WinCC</span><span class="pc-tag">PLCSIM Advanced</span><span class="pc-tag">Programación en lógica ladder</span></div>
  <div><strong><i class="fa-solid fa-robot" style="color:var(--global-theme-color)"></i> Gemelos digitales, robótica y visión artificial</strong><span class="pc-tag">Tecnomatix Process Simulate</span><span class="pc-tag">Universal Robots (PolyScope)</span><span class="pc-tag">Cognex In-Sight</span><span class="pc-tag">OpenCV</span><span class="pc-tag">YOLOv11n</span></div>
  <div><strong><i class="fa-solid fa-cube" style="color:var(--global-theme-color)"></i> Diseño mecánico (CAD/CAM)</strong><span class="pc-tag">SolidWorks CAD/CAM</span><span class="pc-tag">NX CAD</span><span class="pc-tag">Fusion CAM</span><span class="pc-tag">Maquinado (torneado, fresado)</span><span class="pc-tag">Soldadura MIG</span><span class="pc-tag">Impresión 3D</span></div>
  <div><strong><i class="fa-solid fa-file-lines" style="color:var(--global-theme-color)"></i> Métodos y documentación</strong><span class="pc-tag">Design thinking</span><span class="pc-tag">Informes técnicos</span><span class="pc-tag">Documentación de pruebas</span><span class="pc-tag">LaTeX</span><span class="pc-tag">MS Office</span></div>
  <div><strong><i class="fa-solid fa-code" style="color:var(--global-theme-color)"></i> Programación</strong><span class="pc-tag">C</span><span class="pc-tag">C++</span><span class="pc-tag">Python</span><span class="pc-tag">SQL</span></div>
</div>
<div class="cv-two">
  <div><h2 class="pc-h cv-h"><i class="fa-solid fa-trophy"></i> <a href="{{ '/es/achievements/' | relative_url }}#awards">Premios <span class="cv-h-arrow">→</span></a></h2><ul class="cv-mini"><li>Vehicle Design Award – categoría Prototype <span>· Shell Eco-marathon (United States 2026)</span></li><li>Data &amp; Telemetry Award — 1.er lugar <span>· Shell Eco-marathon (Americas 2025)</span></li><li>Data &amp; Telemetry Award — 2.º lugar <span>· Shell Eco-marathon (United States 2026)</span></li><li>Mención honorífica <span>· Altair Global Student Contest 2025</span></li></ul><p style="margin-top:.6rem"><a href="{{ '/es/achievements/' | relative_url }}">Todos los logros →</a></p></div>
  <div><h2 class="pc-h cv-h"><i class="fa-solid fa-certificate"></i> <a href="{{ '/es/achievements/' | relative_url }}#certifications">Certificaciones <span class="cv-h-arrow">→</span></a></h2><ul class="cv-mini"><li>Process Simulate Standalone Associate <span>· Siemens</span></li><li>Educational Robotics Training – Core <span>· Universal Robots</span></li><li>Certified SolidWorks Associate (CSWA) <span>· Dassault Systèmes</span></li><li>MATLAB, Simulink and Simscape Onramp <span>· MathWorks</span></li><li>Educational PCB Basic Design <span>· Altium Designer</span></li></ul>
</div>
</div>
<h2 class="pc-h cv-h"><i class="fa-solid fa-language"></i> Idiomas</h2>
<div class="cv-lang"><div class="pc-card"><strong>Español</strong><span>Nativo</span><div class="cv-bar"><i style="width:100%"></i></div></div><div class="pc-card"><strong>Inglés</strong><span>Avanzado (C1)</span><div class="cv-bar"><i style="width:85%"></i></div></div><div class="pc-card"><strong>Francés</strong><span>Intermedio (B1)</span><div class="cv-bar"><i style="width:55%"></i></div></div><div class="pc-card"><strong>Alemán</strong><span>Intermedio (B1)</span><div class="cv-bar"><i style="width:55%"></i></div></div></div>
<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/repositories/' | relative_url }}">← Anterior: Repositorios</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/contact/' | relative_url }}">Siguiente: Contacto →</a>
</div>
