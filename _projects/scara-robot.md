---
layout: page
title: Vision-Guided SCARA Pick-and-Place Robot (4 DoF)
description: Firmware & electronics lead — 4-DOF SCARA with YOLOv11n vision (mAP 0.72), 5/6 picks at ~14 s/cycle, custom Altium PCB
img: assets/img/scara.jpg.jpg
importance: 3
category: Embedded, Computer Vision
featured: true
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

**5 out of 6 pieces picked and placed correctly in the final demonstration, at approximately 14 seconds per cycle.** The robot classifies pieces by shape and colour with a YOLOv11n model (mAP@0.5 = 0.72) running on my own computer, then picks and places them autonomously — coordinates flow from Python over MQTT to C++ firmware on an ESP32.

<div class="sc-grid single">
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-demo.mp4' | relative_url }}" poster="{{ 'assets/img/scara-demo-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Final project presentation: testing the gripper's grip, demonstrating joint control through the HMI and by sending commands directly to the MQTT broker, and explaining how the real-time vision system works.</figcaption></figure>
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

## Design at a glance

<div class="dag-grid">
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="CAD model (4 DoF)" loading="lazy"><figcaption>CAD model (4 DoF)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Reachable workspace 50&ndash;250 mm" loading="lazy"><figcaption>Reachable workspace 50&ndash;250 mm</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="Control PCB, 3D view (Altium)" loading="lazy"><figcaption>Control PCB, 3D view (Altium)</figcaption></figure>
  <figure class="dag-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Shape/colour detection" loading="lazy"><figcaption>Shape/colour detection</figcaption></figure>
</div>

**Design decisions, from first principles**

<table class="dag-table">
  <tr><th>Decision</th><th>Engineering reasoning</th><th>Result</th></tr>
  <tr><td>All joint axes vertical</td><td>Decouples the problem: planar position from shoulder and elbow, height from the Z stage; inverse kinematics in closed form with the law of cosines</td><td>Forward kinematics mean error 4.0 mm, inverse 6.9 mm</td></tr>
  <tr><td>L1 = 150 mm, L2 = 110 mm</td><td>Annular workspace from |L1&minus;L2| to L1+L2 covers the 25 cm task radius</td><td>Reachable area 50&ndash;250 mm from the base</td></tr>
  <tr><td>Steppers on J1/J2, absolute encoder on the wrist, limit-switch homing</td><td>Steppers give position without feedback, so accuracy depends on a correct home reference</td><td>Homing identified as the main error source</td></tr>
  <tr><td>YOLOv11n on top of the HSV pipeline</td><td>HSV thresholds shift with lighting; a trained detector is more robust</td><td>mAP@0.5 = 0.72; 5 of 6 parts sorted, ~14 s/cycle</td></tr>
</table>
<!-- DESIGN-AT-A-GLANCE:END -->

<details class="writeup" markdown="1" open>
<summary>Full technical write-up</summary>

**Challenge**

Identify, pick and place flat pieces that differ in shape, colour and orientation inside a 25 cm-radius workspace, and sort each one into its designated area without human intervention. The pieces come in five shapes (square, circle, triangle, cross, pentagon) and four colours. The arm has two revolute joints driven by NEMA 17 steppers (shoulder and elbow), a lead-screw vertical stage driven by a DC motor with encoder, a wrist closed around an AS5600 absolute encoder and a servo gripper, built in PETG with aluminium bars. Design and Development of Robots, Tec de Monterrey, team of four.

**My contribution**

- **Computer vision:** the classical OpenCV pipeline (edge detection, HSV segmentation, shape classification, grip angle) and its integration with the robot over MQTT
- **Pixel-to-robot coordinates:** the ArUco homography that converts image pixels into robot millimetres
- **Machine learning:** the YOLOv11n workflow: automatic pre-annotation, dataset split, training and evaluation
- **PCB design:** the single-layer control board in Altium Designer (ESP32, stepper and DC drivers, encoders, power distribution)
- **Kinematics:** my own forward and inverse kinematics in MATLAB (each member derived them individually)
- **With the team:** breadboard prototype, motor and driver selection, and the homing sensors — the Z-axis limit switch and the AS5600 on the wrist, validated against known reference angles; the MQTT link between the vision host, the broker and the ESP32; co-author of the robot datasheet

Teammates built the C++ kinematics and firmware architecture on the ESP32, the MATLAB App Designer HMI, the final Simscape model of the SCARA and the mechanical structure.

**Kinematics & mechanism**

All four joint axes are vertical, so the problem splits cleanly: the planar position depends only on the shoulder and elbow, the height only on the vertical stage, and the tool angle is the sum of the three rotations. Forward kinematics chain four Denavit–Hartenberg transforms; inverse kinematics use the law of cosines for the two-link arm (L1 = 150 mm, L2 = 110 mm), give an elbow-up and an elbow-down solution and keep the one closest to the current pose. A target is reachable only between 50 and 250 mm from the base.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="CAD model of the SCARA robot"><figcaption>CAD model of the robot.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Reachable workspace"><figcaption>Top view of the reachable workspace (250 mm radius).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-simscape.mp4' | relative_url }}" poster="{{ 'assets/img/scara-simscape-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simscape Multibody model of the SCARA, built from the CAD geometry, with PID control of the two planar joints (final version by a teammate).</figcaption></figure>
</div>

Before the SCARA, the team modelled other manipulators to study motion and control. For a gantry with a 1-DOF arm we derived the equations of motion with Euler–Lagrange and built the model twice — from the equations in Simulink and in Simscape Multibody — with PID loops for the cart position and the arm angle. Both agreed on the overall behaviour, including the small jiggle at the end of each move caused by the coupling between cart and arm.

<div class="sc-grid">
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-gantry.mp4' | relative_url }}" poster="{{ 'assets/img/sim-gantry-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Gantry robot simulation (team coursework).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-arm.mp4' | relative_url }}" poster="{{ 'assets/img/sim-arm-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Industrial arm simulation (team coursework).</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simulink.jpg' | relative_url }}" alt="Simulink block diagram of the gantry robot model"><figcaption>Simulink model of the gantry: the nonlinear state equations in a MATLAB Function block, two PID loops (x and θ) and scopes, with step references (left) and sinusoidal references (right).</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-top.jpg' | relative_url }}" alt="Top-level Simscape model with the gantry and arm subsystems"><figcaption>Top level of the Simscape model: the gantry subsystem (rail, cart and arm) and the robot arm subsystem, each driven by a motion reference and logged to scopes.</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-diagram.jpg' | relative_url }}" alt="Simscape Multibody connection diagram for the gantry robot"><figcaption>Simscape Multibody connection diagram: the gantry and arm subsystems, the motion references, and the same PID loops as the analytical model for comparison.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/gantry-simscape-outputs.jpg' | relative_url }}" alt="Simscape outputs: angle, angular velocity, torque and control signal"><figcaption>Simscape outputs: arm angle θ against its reference, angular velocity, output torque and PID control signal. The control signal overshoots at the start of each step and then settles.</figcaption></figure>
</div>

**Computer vision**

A smartphone mounted 500 mm above the workspace, optical axis vertical, streams to the PC; a script captures one frame at 1280 × 720 px. Four ArUco markers at known corners of a 562 × 562 mm area define a homography from image pixels to robot millimetres.

<div class="sc-grid">
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-camera.jpg' | relative_url }}" alt="Overhead camera setup"><figcaption>Overhead camera 500 mm above the workspace, with the ArUco markers at the corners.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-homography.jpg' | relative_url }}" alt="ArUco markers detected for the homography"><figcaption>ArUco detection: the marker centroids (red) define the pixel-to-millimetre homography.</figcaption></figure>
</div>

The classical pipeline builds an edge map (Gaussian blur, Laplacian, Otsu), segments each colour in HSV (red needs two hue ranges because hue wraps around) and splits touching pieces with a watershed. Shapes are classified by solidity, convexity deficit and circularity: the cross is caught first because it is the only non-convex piece, and the others are decided by a vote of `approxPolyDP` at three tolerances. The grip angle comes from the minimum-area rectangle, adjusted to each shape's symmetry so the wrist turns as little as possible, and every piece is published over MQTT as `shape, colour, x, y, angle`.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Classified shapes on the workspace"><figcaption>Final detection: each piece labelled with its ID, shape and colour.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-cv-grip.jpg' | relative_url }}" alt="Grip angles overlaid on the workspace"><figcaption>Grip angles computed for each piece, using its symmetry to minimise wrist travel.</figcaption></figure>
</div>

Because HSV thresholds are sensitive to lighting and to close colours, I trained a YOLOv11n detector on images of the real workspace (16 classes, 80/20 split, 50 epochs). The classical pipeline pre-annotated every image, so labelling took about 30 minutes instead of 3–4 hours. The model reached mAP@0.5 = 0.72; the weakest classes were the crosses, which had only 62–94 examples against 1,580 for the blue square — the class imbalance, not the model, is the main limit.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-preannot.jpg' | relative_url }}" alt="Training image of the workspace"><figcaption>Training image captured on the real workspace, with pieces in varied positions, orientations and colours.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-loss.png' | relative_url }}" alt="YOLOv11n loss and mAP curves"><figcaption>Training and validation losses and mAP over 50 epochs.</figcaption></figure>
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-yolo-confusion.png' | relative_url }}" alt="Normalised confusion matrix"><figcaption>Normalised confusion matrix: green pieces are recognised best, crosses worst.</figcaption></figure>
</div>

**Electronics & PCB**

The control board integrates the ESP32, two DRV8825 drivers for the steppers, a TB6612FNG for the DC motors, the encoder and sensor connectors and the power distribution. Single-layer was a manufacturing constraint, so placement and routing were planned to avoid crossings, and polygon pours carry power and ground to reduce the voltage drop between drivers and supply. The board was completed but not integrated: in the last weeks the team prioritised debugging mechanics, control and vision, and the demo ran from the breadboard electronics.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-schematic.png' | relative_url }}" alt="Control board schematic"><figcaption>Schematic: ESP32, stepper drivers, DC motor driver and connectors.</figcaption></figure>
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-pcb-layout.png' | relative_url }}" alt="Single-layer PCB layout"><figcaption>Single-layer layout with power polygon pours.</figcaption></figure>
  <figure class="sc-fig tall"><img data-zoomable src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="3D view of the PCB"><figcaption>3D view of the board.</figcaption></figure>
</div>

**HMI & integration**

The vision host, the ESP32 and the HMI never talk directly: they publish and subscribe through a Mosquitto broker, so each part can run on a different machine — during tests the robot was even operated from another city. In pick-and-place mode the ESP32 solves the inverse kinematics, approaches 30 mm above the piece, descends, grips, lifts and places it.

<div class="sc-grid">
  <figure class="sc-fig"><img data-zoomable src="{{ 'assets/img/scara-hmi.png' | relative_url }}" alt="HMI teach pendant"><figcaption>HMI teach pendant (built by a teammate).</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-pick.mp4' | relative_url }}" poster="{{ 'assets/img/scara-pick-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Gripper picking up a blue square.</figcaption></figure>
</div>
<div class="sc-grid">
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-joint.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-joint-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Shoulder joint rotating via MQTT command during early integration — arm links not yet attached.</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-zaxis.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-zaxis-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Z-axis movement test during sensor integration — limit switch and encoder triggering validated at this stage.</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-mqtt-hmi.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-hmi-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Bench session with HMI SCARA interface visible: joint jog commands sent over MQTT from MATLAB to the ESP32.</figcaption></figure>
</div>

**Tools & technologies**

- **Python, OpenCV, YOLOv11n, LabelImg:** vision pipeline, homography, dataset tooling
- **ESP32 (C++, ESP-IDF, PlatformIO, FreeRTOS):** firmware; MQTT over Wi-Fi with a Mosquitto broker
- **Altium Designer:** single-layer control board
- **MATLAB, Simulink, Simscape Multibody:** kinematics, PID joint control, multibody simulation

**Results & lessons**

- **Pick-and-place:** 5 of 6 pieces placed correctly, about 14 s per cycle
- **Accuracy:** forward kinematics mean error 4.0 mm (calipers, 3 poses); inverse kinematics 6.9 mm mean, 8.6 mm max (5 targets); vision localisation about 15 mm
- **Robust link:** control restored about 2 s after a Wi-Fi drop
- **Homing dominates accuracy:** the steppers have no position feedback, so every session depended on a correct home reference; belt backlash and printed couplings were the main mechanical error sources
- **Vision-to-gripper offset:** most failed picks came from the offset between the estimated piece centre and the real gripper centre; better lens calibration is the next fix
- **Small validation set:** six attempts are an indication, not a measured success rate
- **Next steps:** more images for the under-represented classes, integrate the PCB and close the loop on the stepper joints

</details>

**Stack:** Python, OpenCV, NumPy, Ultralytics YOLOv11n, LabelImg · ESP32, C++ (ESP-IDF, PlatformIO), FreeRTOS · MQTT (Mosquitto), I²C · Altium Designer · MATLAB, Simulink, Simscape Multibody

<div class="back-to-projects" style="margin: 3rem 0 1rem; text-align: center">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/projects/#academic' | relative_url }}">← Back to projects</a>
</div>
