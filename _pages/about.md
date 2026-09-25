---
layout: about
title: about
permalink: /
subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  image: Bewerbungsbild.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Zittau, Sachsen</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm a Mechatronics Engineering student completing a DHIK double degree between *Tec de Monterrey* (Mexico) and *Hochschule Zittau/Görlitz* (Germany), specializing in Electrical Engineering, now based in Saxony.

**I turn engineering concepts into working systems** — integrating electronics, embedded software, control, simulation, and physical testing from design to validation.

During my studies I've led a 30-person engineering team at [EcoVolt CCM](/experience/), our university's team at Shell Eco-marathon, developed embedded telemetry and vehicle systems, fabricated semiconductor devices in [MIT Cleanrooms](/experience/),, built vision-guided robotic systems and digital twins.

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

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
{% assign featured = site.projects | where: "featured", true | sort: "importance" %}
{% for project in featured %}
  <a href="{{ project.url | relative_url }}" class="block border rounded-lg p-4 hover:shadow-lg transition">
    <h3 class="font-bold">{{ project.title }}</h3>
    <p class="text-sm opacity-80">{{ project.description }}</p>
  </a>
{% endfor %}
</div>

[See all projects →](/projects/)
