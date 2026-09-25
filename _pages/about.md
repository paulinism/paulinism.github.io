---
layout: about
title: about
permalink: /
subtitle: Mechatronics Engineering Student · <a href='mailto:pruizservin27@gmail.com'>pruizservin27@gmail.com</a>. · <a href='https://www.linkedin.com/in/pruizservin27/'>LinkedIn</a>.

profile:
  align: right
  image: Bewerbungsbild.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Zittau, Sachsen</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items — off: these were only the theme's demo content
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # no blog posts yet, so this panel has nothing real to show
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Mechatronics Engineering student completing a DHIK double degree between _Tec de Monterrey_ (Mexico) and _Hochschule Zittau/Görlitz_ (Germany), specializing in Electrical Engineering, now based in Saxony.

**I turn engineering concepts into working systems** — integrating electronics, embedded software, control, simulation, and physical testing from design to validation.

During my studies I've led a 30-person engineering team at [EcoVolt CCM](/experience/), our university's team at Shell Eco-marathon, developed embedded telemetry and vehicle systems, fabricated semiconductor devices in [MIT Cleanrooms](/experience/), built vision-guided robotic systems and digital twins.

**Focus areas:**

- PCB design & instrumentation (Altium Designer)
- Embedded firmware & microcontrollers (C/C++, ESP32, Python)
- Control systems & model-based design (PID, MATLAB/Simulink/Simscape, HiL)
- Industrial automation & digital twins (Siemens PLC/HMI, UR cobots, Process Simulate, Rockwell Automation PLC/HMI)
- Machine vision (OpenCV, YOLO, Cognex)
- Mechanical design (SolidWorks CAD/CAM, NX CAD)
- Semiconductor fabrication (MIT.nano)

Seeking **Werkstudent / Praktikum / Thesis (Bachelorarbeit)** opportunities in embedded systems, hardware, and industrial automation.

## Featured projects

<style>
.projects img.card-img-top,
.projects .card-img-top {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>

<!-- Uses the theme's own projects.liquid card include, same as the /projects/ page,
     so the cards match exactly (markup, hover animation, image cropping). -->

<div class="projects">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
    {% assign featured = site.projects | where: "featured", true | sort: "importance" %}
    {% for project in featured %}
      {% include projects.liquid %}
    {% endfor %}
    </div>
  </div>
</div>

[See all projects →](/projects/)
