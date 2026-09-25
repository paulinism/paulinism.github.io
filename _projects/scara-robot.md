---
layout: page
title: Vision-Guided SCARA Pick-and-Place Robot (4 DoF)
description: 83% success rate — ESP32 firmware and real-time vision for a 4-DOF SCARA robot
img: assets/img/scara.jpg.jpg
importance: 1
category: Embedded
featured: true
---

Full perception-to-actuation loop on a physical 4-degree-of-freedom SCARA robot, validated first in Model-in-the-Loop before deployment on hardware.

<img src="{{ 'assets/img/scara-bench.jpg' | relative_url }}" alt="SCARA robot bench setup with vision markers" style="width:100%; border-radius:8px; margin:1rem 0;">
<p style="font-size:0.85rem; opacity:0.7; margin-top:-0.5rem;">Bench setup: fiducial markers for the vision pipeline, breadboard wiring, and phone-as-camera streaming via droidcam.</p>

**My contribution**
- ESP32 firmware under FreeRTOS (C++), communicating over MQTT
- Vision pipeline: YOLOv11n object detection + HSV/contour segmentation for real-time coordinate handoff
- Joint and Cartesian PID controller design and implementation in MATLAB/Simulink (Model-in-the-Loop)
- Simulink HMI for monitoring and control

**Context:** Tec de Monterrey, Feb–Jun 2026.
**Result:** 83% success rate in pick-and-place operation.
**Stack:** ESP32, FreeRTOS, PlatformIO, MQTT, YOLOv11n, OpenCV, MATLAB/Simulink, PID control
