---
layout: page
title: Vision-Guided SCARA Pick-and-Place Robot (4 DoF)
description: 83% success rate — ESP32 firmware and real-time vision for a 4-DOF SCARA robot
img: assets/img/scara.jpg.jpg
importance: 1
category: Embedded
featured: true
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

Full perception-to-actuation loop on a physical 4-degree-of-freedom SCARA robot, validated first in Model-in-the-Loop before deployment on hardware.

**My contribution**
- ESP32 firmware under FreeRTOS (C++), communicating over MQTT
- Vision pipeline: YOLOv11n object detection + HSV/contour segmentation for real-time coordinate handoff
- Joint and Cartesian PID controller design and implementation in MATLAB/Simulink (Model-in-the-Loop)
- Simulink HMI for monitoring and control

**Context:** Tec de Monterrey, Feb–Jun 2026.
**Result:** 83% success rate in pick-and-place operation.
**Stack:** ESP32, FreeRTOS, PlatformIO, MQTT, YOLOv11n, OpenCV, MATLAB/Simulink, PID control
