---
layout: page
permalink: /es/projects/ecovolt-inventory/
lang: es
es_project: true
ref: ecovolt-inventory
title: Sistema automatizado de inventario y equipo de protección personal
description: "Proyecto individual — seguimiento con códigos QR para la logística del paddock en Shell Eco-marathon — exportación a Excel lista para aduanas, lectura de QR en menos de 80 ms y dashboard web con control de préstamos"
img: assets/img/inv-cover-composite.jpg
importance: 1
category: Visión por computadora, Web
featured: false
hide_from_grid: true
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

**Usado en Shell Eco-marathon Brazil 2026: un sistema de inventario con códigos QR que simplificó la declaración aduanal de decenas de herramientas y componentes y permitió al equipo cerrar su lista de préstamos del paddock en minutos.** Cada artículo lleva una etiqueta QR física ligada a un registro en la base de datos — la lectura toma menos de 80 ms y el sistema exporta un Excel listo para aduanas con un clic.

<div class="inv-grid single">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-dashboard.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-dashboard-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Dashboard del inventario: totales, resumen de estados, artículos que requieren atención y el flujo de exportación a Excel.</figcaption></figure>
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
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Etapa 1: registro en Excel (prototipo del modelo de datos)" loading="lazy"><figcaption>Etapa 1: registro en Excel (prototipo del modelo de datos)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="Etapa 2: detección de QR con OpenCV y validación del ID" loading="lazy"><figcaption>Etapa 2: detección de QR con OpenCV y validación del ID</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Benchmark de latencia del piloto" loading="lazy"><figcaption>Benchmark de latencia del piloto</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Etapa 3: plataforma web, vista rápida del artículo" loading="lazy"><figcaption>Etapa 3: plataforma web, vista rápida del artículo</figcaption></figure>
</div>

**Decisiones de diseño, desde los fundamentos**

<table class="dag-table">
  <tr><th>Decisión</th><th>Razonamiento de ingeniería</th><th>Resultado</th></tr>
  <tr><td>Registro en Excel antes de escribir código</td><td>Validar qué campos necesita realmente el equipo antes de construir software</td><td>Se convirtió en el modelo de la base de datos y en la exportación a Excel para aduanas con un clic</td></tr>
  <tr><td>Cinco variantes de imagen; gana la primera lectura exitosa</td><td>El bajo contraste, el desenfoque y los códigos pequeños impiden detectar el QR: CLAHE sube el contraste local, el enfoque recupera bordes y el escalado 2&times; agranda los módulos pequeños; detenerse en el primer acierto mantiene baja la latencia</td><td>Lectura en menos de 80 ms por imagen</td></tr>
  <tr><td>Separar &ldquo;legible&rdquo; de &ldquo;válido&rdquo;</td><td>Un QR puede decodificarse perfecto y aun así contener el texto equivocado, así que el contenido se valida contra el formato del ID</td><td>Contorno verde para IDs válidos, rojo para los mal formados</td></tr>
  <tr><td>Captura separada del procesamiento</td><td>Probar el algoritmo con fotos guardadas aísla los problemas de cámara y hace las pruebas repetibles</td><td>Benchmark con tasa de acierto, latencia media y p95, registrado en JSONL</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Descripción técnica completa</summary>

**Reto**

Viajar de México a una competencia internacional implica pasar la aduana con decenas de herramientas, equipo de protección y componentes electrónicos — un proceso que le había costado al equipo tiempo y estrés en ediciones anteriores — y luego no perderles la pista en un paddock muy concurrido. Propuse un inventario con códigos QR con cuatro objetivos: una etiqueta física por artículo, un registro en la base de datos detrás de cada una, préstamos a otros equipos bajo control y cada caja de herramientas localizable de un vistazo. Se construyó en tres etapas y formó parte de la postulación del equipo al Safety Leadership Award.

**Mi aporte**

- **Concepto y modelo de datos:** propuse el sistema y definí qué contiene cada registro del inventario
- **Etapa 1 — Registro en Excel:** el primer inventario, con foto, enlace a Drive y una casilla de "etiqueta colocada" para cada artículo
- **Etapa 2 — Piloto en Python:** el pipeline en OpenCV que carga una foto, la preprocesa, decodifica el QR, valida el ID, mide la latencia y guarda un respaldo en JSONL
- **Generación de QR:** un script en Python que genera las etiquetas
- **Con el equipo:** la plataforma web en TypeScript que reemplazó al piloto, con la base de datos integrada

**Etapa 1 — Registro en Excel**

Antes de que existiera cualquier software, el registro incluía el ID del QR, el código del artículo, la descripción, la cantidad, el tipo, el área, la caja a la que pertenece, un enlace a la foto y si ya tenía la etiqueta. Se convirtió en el prototipo de la base de datos.

<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-excel-prototype.png' | relative_url }}" alt="Registro de inventario en Excel con fotos e IDs de QR"><figcaption>Registro inicial en Excel: una fila por artículo, con su caja, enlace a la foto y estado de la etiqueta.</figcaption></figure>
</div>

**Etapa 2 — Piloto en Python / OpenCV**

El piloto trabaja con fotos capturadas aparte (cámara del celular con DroidCam), así que los problemas de cámara y los del algoritmo quedan separados. Cada foto se prueba en cinco variantes — original, escala de grises, CLAHE, con enfoque y escalada 2× — y gana la primera que se decodifica, lo que mantiene baja la latencia. Después, el texto decodificado se valida contra el formato del ID, porque un QR puede ser legible y aun así tener el contenido equivocado; la imagen se marca en verde o rojo con la variante usada y el tiempo de procesamiento, y cada ejecución se registra en JSONL con tasa de acierto, latencia media y p95.

<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-python-detection.png' | relative_url }}" alt="Detección de QR con OpenCV y contorno marcado"><figcaption>Prueba con un QR que no es una etiqueta de herramienta: se decodifica con la variante en escala de grises en 73 ms y se marca correctamente como ID mal formado.</figcaption></figure>
</div>
<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-python-benchmark.png' | relative_url }}" alt="Resultado del benchmark de latencia"><figcaption>Benchmark de latencia (5 ejecuciones sobre una imagen): 100 % de aciertos, media de 76.1 ms, p95 de 79.4 ms, guardado en el registro JSONL.</figcaption></figure>
</div>

**Etapa 3 — Plataforma web**

La versión web integra la base de datos en la plataforma. El dashboard muestra el estado de los artículos (disponible, prestado, reservado, mantenimiento, faltante) y un panel de "requiere atención". Los artículos se registran desde el celular con una foto de la cámara; el ID (`EV-######`) se asigna automáticamente, el número de serie se revisa para evitar duplicados y el tamaño de la etiqueta QR se elige entre opciones que mantienen una proporción de 2:3. Las etiquetas se imprimen una por una o en lote, y todo el registro se exporta a Excel para aduanas con un clic.

<div class="inv-grid">
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-add-item.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-add-item-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Alta de un artículo: formulario, captura con cámara, tamaño de etiqueta e ID automático (velocidad 2.5×).</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-label.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-label-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>El nuevo artículo recibe su etiqueta QR, lista para imprimir.</figcaption></figure>
  <figure class="inv-fig phone"><video src="{{ 'assets/img/inv-mobile-handoff.mp4' | relative_url }}" poster="{{ 'assets/img/inv-mobile-handoff-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Detalle y entrega del artículo: escanear una etiqueta registra un movimiento con su nuevo lugar, estado y nota.</figcaption></figure>
</div>
<div class="inv-grid">
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-print-labels.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-print-labels-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Impresión de etiquetas en lote y vista de una sola etiqueta (tamaño, ID del artículo y número de serie).</figcaption></figure>
  <figure class="inv-fig"><video src="{{ 'assets/img/inv-web-export.mp4' | relative_url }}" poster="{{ 'assets/img/inv-web-export-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Exportación desde la plataforma web al registro de inventario en Excel.</figcaption></figure>
</div>

Cada artículo tiene una vista rápida con su foto, estado, área responsable y bitácora de actividad. Un equipo que quiere pedir prestado un artículo llena una solicitud de préstamo (artículo, equipo, fechas, propósito) que un administrador aprueba antes de registrarla, y la foto del registro confirma el estado del artículo al momento del préstamo.

<style>
  @media (min-width: 768px) {
    .inv-grid.inv-stack { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr); grid-template-rows: 1fr 1fr; align-items: stretch; }
    .inv-grid.inv-stack .inv-fig:first-child { grid-row: span 2; }
    .inv-grid.inv-stack .inv-fig { display: flex; flex-direction: column; }
    .inv-grid.inv-stack .inv-fig img { flex: 1 1 auto; height: 0; min-height: 200px; width: 100%; object-fit: contain; }
  }
</style>

<div class="inv-grid inv-stack">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-quickview.png' | relative_url }}" alt="Panel de vista rápida del artículo"><figcaption>Vista rápida: foto, estado, detalles y botones de acción del artículo — solicitar préstamo, registrar movimiento, imprimir QR y editar — con la bitácora completa debajo.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-item-photo.png' | relative_url }}" alt="Vista de inspección de la foto"><figcaption>Inspección de la foto: la foto tomada en el registro, ampliable a resolución completa, para que el estado del artículo al prestarse siempre quede documentado.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-web-loans-request.png' | relative_url }}" alt="Ventana de solicitud de préstamo"><figcaption>Formulario de solicitud de préstamo: artículo, equipo solicitante, fechas de inicio y devolución y propósito — se envía para aprobación de un administrador antes de registrarse.</figcaption></figure>
</div>

**Presentado en Shell Eco-marathon Brazil 2026**

Presentamos el sistema al equipo de seguridad del evento en el paddock como parte de la postulación al Safety Leadership Award; el código QR "Try it!" del póster permitía a los jueces abrir la plataforma en su propio celular.

<div class="inv-grid">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-explaining.jpg' | relative_url }}" alt="Explicando el sistema a un miembro del equipo de seguridad de Shell"><figcaption>Mostrando la plataforma en su celular a un miembro del equipo de seguridad de Shell.</figcaption></figure>
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-safety-team.jpg' | relative_url }}" alt="Presentación del póster al equipo de seguridad de Shell en el paddock"><figcaption>Presentación del póster al equipo de seguridad en el paddock de EcoVolt CCM.</figcaption></figure>
</div>
<div class="inv-grid single">
  <figure class="inv-fig"><img data-zoomable src="{{ 'assets/img/inv-sem-poster.png' | relative_url }}" alt="Póster: Automated PPE and Inventory Management System"><figcaption>Póster presentado en Shell Eco-marathon Brazil 2026: problema, objetivo, flujo de préstamos y resumen.</figcaption></figure>
</div>

**Herramientas y tecnologías**

- **Python, OpenCV, NumPy, Matplotlib, JSONL:** piloto de lectura de QR y benchmark
- **Plataforma web en TypeScript con base de datos Convex (equipo):** inventario, préstamos, etiquetas, exportación
- **Excel:** primer registro y exportación para aduanas

**Resultados y aprendizajes**

- **Usado en Brazil 2026:** simplificó la declaración aduanal y permitió al equipo cerrar su lista de préstamos del paddock en minutos
- **Lectura rápida:** menos de 80 ms por imagen en una laptop, separando IDs válidos e inválidos
- **Medir con honestidad:** los 80 ms salen de 5 ejecuciones sobre una imagen; las fotos reales del paddock (luz, ángulo, distancia) son la siguiente prueba
- **Primero el modelo de datos:** el formato del ID cambió entre etapas (`TL-####` → `EV-######`); definirlo desde el inicio habría evitado la migración
- **La adopción es un problema de experiencia de usuario:** un escaneo obligatorio al entregar el material reforzaría el proceso mejor que uno opcional
- **Siguiente paso:** una revisión del estado con cámara al entregar el material, para detectar equipo de protección desgastado o dañado

</details>

**Contexto:** EcoVolt CCM, Shell Eco-marathon (logística del paddock), 2025–2026; parte de la postulación del equipo al Safety Leadership Award.
**Stack:** Python, OpenCV, NumPy, Matplotlib, JSONL · plataforma web en TypeScript, base de datos Convex · Excel · etiquetas QR

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/es/projects/#extracurricular' | relative_url }}">← Volver a proyectos</a>
</div>
