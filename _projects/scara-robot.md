---
layout: page
title: Vision-Guided SCARA Pick-and-Place Robot (4 DoF)
description: 4-DOF SCARA robot with an OpenCV + YOLOv11n vision pipeline, MQTT integration with ESP32 firmware and a custom Altium PCB
img: assets/img/scara.jpg.jpg
importance: 3
category: Embedded, Computer Vision
featured: true
---

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

A 4-degree-of-freedom SCARA robot that finds pieces on its workspace with a camera, classifies them by shape and colour, and picks and places them on its own. The perception-to-actuation loop runs from a Python vision pipeline, through an MQTT broker, to C++ firmware on an ESP32.

<div class="sc-grid single">
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-demo.mp4' | relative_url }}" poster="{{ 'assets/img/scara-demo-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Final demonstration: the robot working on the ArUco-marked workspace with the test pieces.</figcaption></figure>
</div>

## Project overview

**Context:** Design and Development of Robots, Tecnológico de Monterrey (Mexico City), Feb – Jun 2026. Team of four.

**Task:** identify, pick and place flat pieces that differ in shape, colour and orientation inside a 25 cm-radius workspace, and sort each one into its designated area without human intervention.

- **Arm:** shoulder and elbow (revolute, NEMA 17 steppers), a lead-screw vertical stage (prismatic, brushed DC motor with encoder) and a wrist (revolute, closed around an AS5600 absolute encoder), plus a servo gripper.
- **Pieces:** five shapes (square, circle, triangle, cross, pentagon) in four colours.
- **Structure:** 3D-printed PETG with aluminium bars; links of 150 mm and 100 mm.

## My role & responsibilities

**What I did directly**

- **Computer vision:** the classical OpenCV pipeline (edge detection, Harris corners, HSV segmentation, shape classification, grip angle) and its integration with the robot over MQTT.
- **Pixel-to-robot coordinates:** the ArUco homography that converts image pixels into robot millimetres.
- **Machine learning:** the YOLOv11n workflow: automatic pre-annotation, dataset split, training and evaluation.
- **PCB design:** the single-layer control board in Altium Designer (ESP32, stepper and DC drivers, encoders, power distribution).
- **Kinematics in MATLAB:** my own forward and inverse kinematics of the arm (each team member derived and implemented them individually).

**What I did with the team**

- **Electronic subsystem:** breadboard prototype, motor and driver selection, and sensor integration. For homing and base-position setup I integrated the Z-axis mechanical limit switch and the AS5600 absolute magnetic encoder on joint 4, wired them to the ESP32 and validated the triggering logic against known reference angles before the full kinematics were in place.
- **MQTT and embedded integration:** the link between the vision host, the Mosquitto broker and the ESP32 firmware.
- **Simulation:** Simscape Multibody models of a gantry and an industrial arm as team coursework, and the SCARA model, whose final version was built by a teammate.

**Contributed to**

- **Robot datasheet:** co-authored the team's official datasheet, documenting mechanical specs (links, workspace, payload, materials), joint parameters (type, range, actuator, voltage), electrical supply, controller and firmware, feedback sensors and performance figures.

**Built by other team members (shown here for context)**

- The C++ kinematics and the firmware architecture on the ESP32, the MATLAB App Designer HMI (teach pendant), the final Simscape model of the SCARA and the mechanical structure.

## Robot specifications

Key figures from the team datasheet (co-authored).

<table class="sc-table">
  <tr><th>Parameter</th><th>Value</th></tr>
  <tr><td>Degrees of freedom</td><td>4 (J1 shoulder revolute, J2 elbow revolute, J3 Z prismatic, J4 wrist revolute)</td></tr>
  <tr><td>Link lengths</td><td>L1 = 150 mm · L2 = 110 mm · total arm reach 260 mm</td></tr>
  <tr><td>Workspace radius</td><td>50 – 250 mm from base (≈ 0.196 m²)</td></tr>
  <tr><td>Payload</td><td>30 g</td></tr>
  <tr><td>Arm weight</td><td>218 g</td></tr>
  <tr><td>J1 / J2 actuators</td><td>NEMA 17 stepper, 12 V / 0.5 A, 0 – 360°</td></tr>
  <tr><td>J3 actuator</td><td>Brushed DC motor, 12 V / 0.5 A, 0 – 270°</td></tr>
  <tr><td>J4 / gripper</td><td>Servo (SG90), 5 V / 20 mA, 0 – 180°; AS5600 absolute encoder feedback</td></tr>
  <tr><td>Feedback sensors</td><td>2 × quadrature encoders, 1 × AS5600 absolute encoder, 1 × Z-axis limit switch</td></tr>
  <tr><td>Controller</td><td>ESP32 (C++, ESP-IDF, PlatformIO); I²C, UART, MQTT over Wi-Fi</td></tr>
  <tr><td>Supply</td><td>12 V / 3.3 V logic; optional 12 V battery</td></tr>
  <tr><td>Max joint speed</td><td>529 °/s (≈ 9.23 rad/s)</td></tr>
  <tr><td>Material</td><td>Elegoo Rapid PETG, aluminium bars</td></tr>
  <tr><td>Base footprint</td><td>127 × 171 × 25 mm</td></tr>
</table>

## System architecture

The vision host, the ESP32 and the HMI never talk to each other directly. They all publish and subscribe through a Mosquitto broker, so each part can run on a different machine. During integration tests the broker was even exposed through an ngrok tunnel to operate the robot from another city.

<table class="sc-table">
  <tr><th>Topic</th><th>Publisher → subscriber</th><th>Content</th></tr>
  <tr><td><code>esp32/CV</code></td><td>Vision host → HMI, ESP32</td><td>Detected pieces: shape, colour, position in mm and grip angle</td></tr>
  <tr><td><code>esp32/commands</code></td><td>HMI → ESP32</td><td>Joint move, Cartesian move, Z homing, set zeros, pick-and-place</td></tr>
  <tr><td><code>esp32/status</code></td><td>ESP32 → HMI, vision host</td><td>Joint values, end-effector position and velocity, gripper state (10 Hz)</td></tr>
</table>

**Pick-and-place sequence.** The vision system detects the pieces and publishes them. The HMI selects the target and sends a pick-and-place command. The ESP32 solves the inverse kinematics, moves to an approach point 30 mm above the piece, descends, closes the gripper, lifts, moves to the place position, descends, opens and lifts again.

## Computer vision

The vision subsystem reports, for every piece, its shape, colour, position in millimetres and the angle the gripper needs. It runs in Python on a host PC.

**Camera and calibration.** A smartphone (Samsung Galaxy S25, main lens) is mounted 500 mm above the workspace with its optical axis vertical, and streamed to the PC through DroidCam. A capture script saves a single frame at 1280 × 720 px. Four ArUco markers (`DICT_4X4_50`, IDs 0–3) at known corners of a 562 × 562 mm area define a homography that maps image pixels to robot coordinates in millimetres.

<div class="sc-grid">
  <figure class="sc-fig tall"><img src="{{ 'assets/img/scara-camera.jpg' | relative_url }}" alt="Overhead camera setup"><figcaption>Overhead camera 500 mm above the workspace, with the ArUco markers at the corners.</figcaption></figure>
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-cv-homography.jpg' | relative_url }}" alt="ArUco markers detected for the homography"><figcaption>ArUco detection: the marker centroids (red) define the pixel-to-millimetre homography.</figcaption></figure>
</div>

**Classical pipeline**

1. **Load** the captured frame.
2. **Edge map:** greyscale, 5 × 5 Gaussian blur, 3 × 3 Laplacian kernel, Otsu threshold and a one-pixel dilation. The map is later subtracted from the colour masks to remove edge artefacts.
3. **Harris corners:** a visual check that the vertices of every piece stand out.
4. **HSV segmentation:** one mask per colour (red needs two hue ranges because hue wraps around), cleaned with morphological opening and closing. Touching pieces of the same colour are split with a watershed on the distance transform.
5. **Shape classification:** solidity, convexity deficit and circularity per contour. The cross is caught first by a hard rule, because it is the only non-convex piece; the other shapes are decided by a vote of `approxPolyDP` at three tolerances.
6. **Grip angle:** from `minAreaRect`, normalised and adjusted to each shape's symmetry so the wrist turns as little as possible.
7. **Homography:** pixel centroids converted to robot millimetres; pieces outside the calibrated area are discarded.
8. **MQTT:** pieces sorted by colour priority and published as compact strings, `shape, colour, x, y, angle`.
9. **CSV log:** every detection saved with its geometric descriptors for later debugging.

```python
if solidity < 0.72 and convex_deficit > 0.18:
    return "Cross", approx, solidity          # the only non-convex piece

votes = {}
for eps in [0.02, 0.035, 0.05]:
    approx = cv2.approxPolyDP(cnt, eps * peri, True)
    n = len(approx)
    if circ > 0.82 and solidity > 0.90:  candidate = "Circle"
    elif n == 3 and solidity >= 0.82:    candidate = "Triangle"
    elif n == 4 and solidity >= 0.88:    candidate = "Square"
    elif n == 5 and solidity >= 0.85:    candidate = "Pentagon"
    else:                                candidate = "Unknown"
    votes[candidate] = votes.get(candidate, 0) + 1
winner = max(votes, key=votes.get)
```

<div class="sc-grid">
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-cv-detection.jpg' | relative_url }}" alt="Classified shapes on the workspace"><figcaption>Final detection: each piece labelled with its ID, shape and colour.</figcaption></figure>
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-cv-grip.jpg' | relative_url }}" alt="Grip angles overlaid on the workspace"><figcaption>Grip angles computed for each piece, using its symmetry to minimise wrist travel.</figcaption></figure>
</div>

**Machine-learning stage: YOLOv11n.** The HSV pipeline is fast and easy to interpret, but it is sensitive to lighting and to colours that sit close together. To make detection more robust, I trained a YOLOv11n detector on images of the real workspace.

- **Pre-annotation:** the classical pipeline wrote a YOLO label file for every image automatically, and I only corrected the mistakes in LabelImg. Annotation took about 30 minutes instead of an estimated 3–4 hours by hand.
- **Dataset:** 16 classes (four colours × four shapes), split 80/20 into training and validation by a script that also writes the `data.yaml`.
- **Training:** COCO pre-trained `yolo11n.pt`, 50 epochs, 640 px images, batch 8, on CPU (3.75 h), with HSV jitter, flips, mosaic and scale augmentation.

<table class="sc-table">
  <tr><th>Metric (validation, epoch 50)</th><th>Value</th></tr>
  <tr><td>mAP@0.5</td><td>0.722</td></tr>
  <tr><td>mAP@0.5:0.95</td><td>0.623</td></tr>
  <tr><td>Precision / Recall</td><td>0.524 / 0.728</td></tr>
  <tr><td>Best F1</td><td>0.68 at confidence 0.331</td></tr>
</table>

The weakest classes were the crosses (yellow cross AP 0.45, green cross AP 0.51), which also had the fewest examples: 62 and 94 instances against 1,580 for the blue square. The class imbalance, not the model, is the main limit.

<div class="sc-grid">
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-yolo-preannot.jpg' | relative_url }}" alt="Training image of the workspace"><figcaption>Training image captured on the real workspace, with pieces in varied positions, orientations and colours.</figcaption></figure>
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-yolo-loss.png' | relative_url }}" alt="YOLOv11n loss and mAP curves"><figcaption>Training and validation losses and mAP over 50 epochs.</figcaption></figure>
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-yolo-confusion.png' | relative_url }}" alt="Normalised confusion matrix"><figcaption>Normalised confusion matrix: green pieces are recognised best, crosses worst.</figcaption></figure>
</div>

## Electronics & PCB

<table class="sc-table">
  <tr><th>Function</th><th>Component</th></tr>
  <tr><td>Controller</td><td>ESP32 DevKit v1</td></tr>
  <tr><td>Shoulder and elbow</td><td>2 × NEMA 17 steppers with DRV8825 drivers</td></tr>
  <tr><td>Vertical stage and wrist</td><td>12 V and 6 V brushed DC motors with quadrature encoders, TB6612FNG driver</td></tr>
  <tr><td>Wrist feedback</td><td>AS5600 absolute magnetic encoder (I²C, 400 kHz)</td></tr>
  <tr><td>Homing</td><td>Limit switch on the vertical stage</td></tr>
  <tr><td>Gripper</td><td>SG90 servo</td></tr>
</table>

**Control board.** I designed a single-layer board in Altium Designer that integrates the ESP32, the stepper and DC motor drivers, the encoder and sensor connectors and the power distribution. Single-layer was a manufacturing constraint, so placement and routing were planned to avoid crossings, and polygon pours carry power and ground to reduce voltage drop between the drivers and the supply.

The board was completed but not integrated into the final prototype: in the last weeks the team prioritised debugging the mechanics, control and vision for the demonstration, and the robot ran from the breadboard electronics.

<div class="sc-grid">
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-schematic.png' | relative_url }}" alt="Control board schematic"><figcaption>Schematic: ESP32, stepper drivers, DC motor driver and connectors.</figcaption></figure>
  <figure class="sc-fig tall"><img src="{{ 'assets/img/scara-pcb-layout.png' | relative_url }}" alt="Single-layer PCB layout"><figcaption>Single-layer layout with power polygon pours.</figcaption></figure>
  <figure class="sc-fig tall"><img src="{{ 'assets/img/scara-pcb-3d.png' | relative_url }}" alt="3D view of the PCB"><figcaption>3D view of the board.</figcaption></figure>
</div>

## Kinematics & simulation

All four joint axes are vertical, so the problem splits cleanly: the planar position depends only on the shoulder and elbow, the height only on the vertical stage, and the tool angle is the sum of the three rotations. Forward kinematics chain the four Denavit–Hartenberg transforms; inverse kinematics use the law of cosines for the two-link arm, give an elbow-up and an elbow-down solution, and keep the one closest to the current pose. A target is reachable only between 50 and 250 mm from the base.

Each of us first derived and implemented the forward and inverse kinematics in MATLAB. The version that runs on the robot is a teammate's C++ port inside the ESP32 firmware.

<div class="sc-grid">
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-cad.png' | relative_url }}" alt="CAD model of the SCARA robot"><figcaption>CAD model of the robot.</figcaption></figure>
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-workspace.png' | relative_url }}" alt="Reachable workspace"><figcaption>Top view of the reachable workspace (250 mm radius).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-simscape.mp4' | relative_url }}" poster="{{ 'assets/img/scara-simscape-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Simscape Multibody model of the SCARA, built from the CAD geometry, with PID control of the two planar joints (final version by a teammate).</figcaption></figure>
</div>

**Simulation coursework.** Before the SCARA model, the team built Simscape Multibody simulations of other manipulators to study their motion and control.

<div class="sc-grid">
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-gantry.mp4' | relative_url }}" poster="{{ 'assets/img/sim-gantry-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Gantry robot simulation (team coursework).</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/sim-arm.mp4' | relative_url }}" poster="{{ 'assets/img/sim-arm-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Industrial arm simulation (team coursework).</figcaption></figure>
</div>

## HMI and pick-and-place

The teach pendant, a MATLAB App Designer interface connected through Simulink's MQTT blocks, shows joint and Cartesian values with live plots and offers five modes: joint jog, Cartesian jog, home, set home and pick-and-place. In pick-and-place mode the operator chooses the shape, the colour if there are several, and the place coordinates.

<div class="sc-grid">
  <figure class="sc-fig"><img src="{{ 'assets/img/scara-hmi.png' | relative_url }}" alt="HMI teach pendant"><figcaption>HMI teach pendant (built by a teammate).</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-pick.mp4' | relative_url }}" poster="{{ 'assets/img/scara-pick-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Gripper picking up a blue square.</figcaption></figure>
</div>

The clips below show earlier integration stages: joint movement commanded from the HMI over MQTT before the arm links were assembled, Z-axis motion during sensor bring-up, and a full bench session with the HMI visible on-screen.

<div class="sc-grid">
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-joint.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-joint-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Shoulder joint rotating via MQTT command during early integration — arm links not yet attached.</figcaption></figure>
  <figure class="sc-fig tall"><video src="{{ 'assets/img/scara-mqtt-zaxis.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-zaxis-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Z-axis movement test during sensor integration — limit switch and encoder triggering validated at this stage.</figcaption></figure>
  <figure class="sc-fig"><video src="{{ 'assets/img/scara-mqtt-hmi.mp4' | relative_url }}" poster="{{ 'assets/img/scara-mqtt-hmi-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Bench session with HMI SCARA interface visible: joint jog commands sent over MQTT from MATLAB to the ESP32.</figcaption></figure>
</div>

## Results

<table class="sc-table">
  <tr><th>Test</th><th>Result</th></tr>
  <tr><td>Forward kinematics (3 configurations, measured with calipers)</td><td>Mean error 4.0 mm</td></tr>
  <tr><td>Inverse kinematics (5 targets, after careful homing)</td><td>Mean error 6.9 mm, maximum 8.6 mm</td></tr>
  <tr><td>Vision localisation</td><td>About 15 mm</td></tr>
  <tr><td>YOLOv11n detector</td><td>mAP@0.5 = 0.722</td></tr>
  <tr><td>Pick-and-place (2 trials × 3 pieces)</td><td>5 of 6 pieces placed, about 14 s per cycle</td></tr>
  <tr><td>MQTT link</td><td>Control restored about 2 s after a Wi-Fi drop; remote operation over ngrok</td></tr>
</table>

## Limitations & lessons

- **Homing dominates accuracy:** inverse kinematics only met the error above after a correct home reference, which had to be adjusted by hand before each session. The base belt transmission and backlash in the printed couplings were the main mechanical error sources.
- **Vision-to-gripper offset:** the main cause of failed picks was the residual offset between the piece centre estimated by the camera and the real gripper centre, especially for orientation. Better camera calibration (lens distortion, mounting) would reduce the 15 mm localisation error.
- **Small validation set:** the pick-and-place figure comes from six attempts, so it is an indication rather than a measured success rate.
- **Lighting:** HSV ranges had to be retuned whenever the light changed, which is what motivated the YOLO detector.
- **Next steps:** more images for the under-represented classes, integrating the PCB to replace the breadboard wiring, and closed-loop control on the stepper joints.

**Stack:** Python, OpenCV, NumPy, Ultralytics YOLOv11n, LabelImg · ESP32, C++ (ESP-IDF, PlatformIO), FreeRTOS · MQTT (Mosquitto), I²C · Altium Designer · MATLAB, Simulink, Simscape Multibody
