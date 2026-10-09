---
layout: page
title: Vision-Guided SCARA Pick-and-Place Robot (4 DoF)
description: 83% success rate — ESP32 firmware and real-time vision for a 4-DOF SCARA robot
img: assets/img/scara.jpg.jpg
importance: 3
category: Embedded
featured: true
---

<div class="construction-notice" style="border:2px solid #f9a825;border-radius:4px;padding:0.7rem 1rem;margin-bottom:1.25rem;font-size:0.9rem;color:#f9a825;">
  🚧 <strong>Page under construction</strong> — more details, diagrams, and media are being added soon.
</div>

Full perception-to-actuation loop on a physical 4-degree-of-freedom SCARA robot, validated first in Model-in-the-Loop before deployment on hardware.

**My contribution**

- ESP32 firmware under FreeRTOS (C++), communicating over MQTT
- Vision pipeline: YOLOv11n object detection + HSV/contour segmentation for real-time coordinate handoff
- Joint and Cartesian PID controller design and implementation in MATLAB/Simulink (Model-in-the-Loop)
- Simulink HMI for monitoring and control

**Context:** Tec de Monterrey, Feb–Jun 2026.
**Result:** 83% success rate in pick-and-place operation.
**Stack:** ESP32, FreeRTOS, PlatformIO, MQTT, YOLOv11n, OpenCV, MATLAB/Simulink, PID control
