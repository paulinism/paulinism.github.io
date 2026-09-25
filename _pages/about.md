---
layout: about
title: about
permalink: /
subtitle: Mechatronics Engineering Student · <a href='mailto:pruizservin27@gmail.com'>pruizservin27@gmail.com</a>

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

I am a Mechatronics Engineering student completing a DHIK double degree between *Tec de Monterrey* (Mexico) and *Hochschule Zittau/Görlitz* (Germany), specializing in Electrical Engineering, now based in Saxony.

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

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; margin-top:1.5rem;">
{% assign featured = site.projects | where: "featured", true | sort: "importance" %}
{% for project in featured %}
  <a href="{{ project.url | relative_url }}" style="display:block; border:1px solid currentColor; border-radius:8px; overflow:hidden; text-decoration:none;">
    {% if project.img %}
    <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" style="width:100%; height:150px; object-fit:cover; display:block;">
    {% endif %}
    <div style="padding:1rem;">
      <h3 style="font-weight:bold; margin:0 0 0.5rem 0;">{{ project.title }}</h3>
      <p style="font-size:0.9rem; opacity:0.8; margin:0;">{{ project.description }}</p>
    </div>
  </a>
{% endfor %}
</div>

[See all projects →](/projects/)
