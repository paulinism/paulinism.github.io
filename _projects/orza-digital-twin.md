---
layout: page
title: Digital Twin of a Flexible CNC Manufacturing Cell
description: "Industry challenge with ORZA Tech — virtual CNC cell commissioned 100 % in software (S7-1500 PLC, UR5 VRC, CAM and G-code, Cognex vision, SCADA/KPIs)"
img: assets/img/orza.png
importance: 2
category: Automation
featured: true
---

<style>
  .oz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; align-items: start; }
  .oz-grid.single { grid-template-columns: minmax(0, 900px); justify-content: center; }
  .oz-fig { margin: 0; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
  .oz-fig img, .oz-fig video { display: block; width: 100%; height: auto; background: rgba(128, 128, 128, 0.06); }
  .oz-fig figcaption { padding: 0.6rem 0.9rem; font-size: 0.85rem; line-height: 1.4; opacity: 0.85; border-top: 1px solid rgba(128, 128, 128, 0.2); }
  .oz-table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-size: 0.92rem; }
  .oz-table th, .oz-table td { border: 1px solid rgba(128, 128, 128, 0.3); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
  .oz-table th { background: rgba(128, 128, 128, 0.08); }
</style>

**A fully virtual CNC milling cell commissioned with zero physical hardware.** A virtual S7-1500 runs the ladder program, Process Simulate drives the 3D cell, a Virtual Robot Controller runs the UR5 pick-and-place program, a Cognex inspector classifies each part (pass / rework / scrap), a WinCC HMI gives the operator automatic and manual control, and a SCADA dashboard tracks OEE and KPIs in real time. Behind the machining step is a six-tool milling program for an aluminium piston body that I analysed down to chip load and cycle time (≈ 12.8 min), and the same course added a Cognex inspection exam and a lathe CAM exercise that I carried from stock definition to G-code.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cell-loop.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cell-loop-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>My CNC cell running in Process Simulate under PLC control: machining and unloading by the UR5 robot (1.5× speed).</figcaption></figure>
</div>

## Project overview

**Context:** Automation of Manufacturing Systems, Tecnológico de Monterrey (Mexico City), Feb – Jun 2026. Academic challenge proposed by the industry partner ORZA Tech; team of three, with one CNC station per member.

**Challenge:** design, implement and validate a virtual digital twin of a flexible manufacturing cell (supplier, three CNC stations, intralogistics, quality inspection, assembly and warehouse) with simulated industrial communication, two operating modes, traceability and KPIs. Everything is virtual: no physical PLCs, robots or AGVs.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-layout-iso.jpg' | relative_url }}" alt="Isometric view of the flexible manufacturing system"><figcaption>The full flexible manufacturing system in Process Simulate: three CNC cells in parallel along a shared conveyor and AGV backbone.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-workflow.png' | relative_url }}" alt="Manufacturing cell workflow"><figcaption>Material flow: supplier, transport, CNC machining, quality inspection (pass, rework or scrap), assembly and warehouse.</figcaption></figure>
</div>

## My role & responsibilities

**What I did directly — my CNC milling cell (Station 3)**

- **Digital twin:** my cell in Tecnomatix Process Simulate (supplier rack with pneumatic actuator, AGV, two conveyors, three UR5 robots, CNC milling machine and inspection camera), with every actuator and sensor mapped to PLC I/O.
- **PLC program:** the complete ladder program in TIA Portal for a virtual S7-1500 (CPU 1511-1 PN) running in PLCSIM Advanced: step sequence, interlocks, manual mode, quality routing, KPIs and data logging.
- **Robot integration:** a UR5 in Virtual Robot Controller mode (URSim in VMware) running its own PolyScope pick-and-place program, synchronised with the PLC through a digital I/O handshake.
- **HMI:** the WinCC Runtime Advanced operator interface for the cell.
- **Machining:** the SOLIDWORKS CAM model and toolpath simulation for part P2 (an aluminium piston body), and a block-by-block analysis of its G-code program: tools, cutting data, canned cycles, cutter compensation and an estimated cycle time ([details below](#cnc-machining-part-p2-and-its-g-code)).
- **Global SCADA:** the supervisory screen that consolidates production counts and KPI trends for the whole system.
- **Modbus TCP sensor:** my C# simulated field sensor exchanging holding registers with the PLC (each team member built one for their own station).
- **Communication with the team:** the S7 GET/PUT link from my PLC to the assembly station on PC-1, with an alarm when that link fails.
- **FMS layout concept:** I proposed the ladder-type layout of the full system.

**What we did as a team**

- Building the full FMS layout in Process Simulate from that proposal.
- The three-PC integration over a shared Ethernet switch.

**Individual work in the same course**

- **Cognex practical exam:** a complete In-Sight inspection, from image acquisition and calibration to pass/fail logic and physical validation ([details below](#quality-inspection-cognex-in-sight-practical-exam)).
- **Lathe CAM exercise:** a turned AISI 304 shaft programmed in SOLIDWORKS CAM, from stock and tool crib to post-processed G-code ([details below](#reinforcing-cam-and-g-code-a-turning-program-in-solidworks-cam)).
- **Physical UR robot:** besides running the UR5 virtually, I learned PolyScope on the lab's physical Universal Robots arm and built hands-on applications with it to learn its real limitations.

## System architecture

<table class="oz-table">
  <tr><th>Layer</th><th>Tool</th><th>Role</th></tr>
  <tr><td>3D plant</td><td>Tecnomatix Process Simulate</td><td>Kinematics of robots, conveyors, AGV and CNC; virtual sensors fed back to the PLC</td></tr>
  <tr><td>Control</td><td>TIA Portal + PLCSIM Advanced (S7-1500)</td><td>Ladder program; virtual Ethernet adapter seen as a real PROFINET device</td></tr>
  <tr><td>Robot</td><td>URSim (UR5 VRC) in VMware</td><td>PolyScope program; joint positions streamed to Process Simulate</td></tr>
  <tr><td>Operator</td><td>WinCC Runtime Advanced</td><td>Station HMI: modes, manual commands, alarms, recipes, trends</td></tr>
  <tr><td>Network</td><td>S7 GET/PUT, Modbus TCP</td><td>Data exchange between the three team PCs and the simulated sensor</td></tr>
</table>

<div class="oz-grid single">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-network.jpg' | relative_url }}" alt="Network diagram of the three workstations"><figcaption>Real network: three workstations on one Ethernet switch, each running Process Simulate, a VMware Tecnomatix server, a Modbus sensor and a PLCSIM Advanced instance.</figcaption></figure>
</div>

## The station sequence

The cell runs as a chain of PLC step flags (K1 … K35). Each transition only fires when the digital twin confirms the previous action really finished, so the PLC never moves on based on a timer alone.

1. **Supply:** a proximity sensor detects a blank on the rack; a pneumatic actuator deploys it onto the AGV.
2. **Transport:** the AGV carries the blank to the VRC robot, which picks it and places it on the inlet conveyor.
3. **Loading:** the conveyor stops at the CNC; a UR5 loads the part and the CNC door closes.
4. **Machining:** the spindle head rises and the tool magazine starts the cycle; the step only ends on the machine's done signal.
5. **Unloading and inspection:** the door opens and a second UR5 holds the part in front of the inspection camera.
6. **Routing:** OK parts go to the exit conveyor and the assembly station; rework parts go back through the CNC and are inspected again; scrap goes to the disposal bin.
7. **Cycle close:** counters, cycle time and the log entry are updated, and the order quantity counts down.

<table class="oz-table">
  <tr><th>State</th><th>Entry condition</th><th>Exit condition</th></tr>
  <tr><td>Idle</td><td>Reset or cycle start</td><td>Part present at the supplier</td></tr>
  <tr><td>Loading</td><td>Part present</td><td>Part inside the CNC</td></tr>
  <tr><td>Machining</td><td>CNC ready, door closed</td><td>Machining done</td></tr>
  <tr><td>Unloading</td><td>Machining done</td><td>Robot done</td></tr>
  <tr><td>Quality inspection</td><td>Part at the camera</td><td>Result locked (OK, rework or scrap)</td></tr>
  <tr><td>Fault</td><td>Any alarm bit active</td><td>Reset from the HMI</td></tr>
</table>

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-layout-top.jpg' | relative_url }}" alt="Top view of the cell layout"><figcaption>Top view of the line operation in Process Simulate: conveyors, AGV path, CNC cells and robots.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-cnc-station.jpg' | relative_url }}" alt="CNC station with UR5 robots"><figcaption>CNC station: two UR5 robots load and unload the milling machine and present the part to the camera.</figcaption></figure>
</div>

## CNC machining: part P2 and its G-code

**Result:** a six-tool milling program (O0001) for part P2 that I verified block by block. The roughing passes take about 72 % of the estimated 12.8 min cycle, and the contour uses cutter radius compensation, so tool wear is corrected with one offset value instead of a new program.

**The part.** P2 is an aluminium piston body of 32 × 20 × 20 mm with a Ø16 mm central bore, a pocket and two pairs of small mounting holes. I modelled it and its billet in SOLIDWORKS CAM, generated and simulated the toolpaths, and in the twin it is machined on a simulated Haas VF-2. The PLC only leaves the machining step when the machine reports its done signal.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-p2-drawing.png' | relative_url }}" alt="Technical drawing of part P2"><figcaption>Technical drawing of P2 (SOLIDWORKS, scale 2:1): Ø16 bore, Ø3.57 and Ø1.78 mounting holes.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-p2-cam-model.jpg' | relative_url }}" alt="P2 inside its billet in SOLIDWORKS CAM"><figcaption>P2 inside the initial billet in SOLIDWORKS CAM: machined face, central pocket and mounting holes.</figcaption></figure>
</div>

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-cam.mp4' | relative_url }}" poster="{{ 'assets/img/orza-cam-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>CAM toolpath simulation of P2 (2× speed).</figcaption></figure>
</div>

**Operation sequence.** The program follows a spot-drill-before-drill rule and moves from the largest to the most delicate features:

1. **Spot + main hole:** a Ø20 mm carbide spot drill (G82, dwell cycle) marks the centre, then a Ø16 mm drill makes the main hole with a G83 peck cycle (Q = 2 mm) so chips clear.
2. **Mounting holes:** a Ø6 mm HSS centre drill spots both positions, then Ø3.5 mm and Ø1.75 mm drills follow with G83. Spotting first matters most for the Ø1.75 mm drill, which would wander and break without it.
3. **Roughing (Desbaste1):** a Ø6 mm two-flute carbide end mill clears the pocket in eight Z levels: about 2.79 mm per pass, then a 0.25 mm skim to reach the 20 mm floor, followed by two clean-up loops on the walls and floor.
4. **Contour (Contorneado1):** seven passes of 2.83 mm on the outer profile with G41 D21 (left cutter compensation). Compensation starts on a tangent G03 arc and is cancelled with G40 before each retract.

<table class="oz-table">
  <tr><th>Tool</th><th>Operation</th><th>Ø (mm)</th><th>n (rpm)</th><th>v<sub>c</sub> (m/min)</th><th>v<sub>f</sub> (mm/min)</th></tr>
  <tr><td>T15 carbide spot drill</td><td>Spot, G82</td><td>20</td><td>4 957</td><td>311.5</td><td>1 183.7</td></tr>
  <tr><td>T16 carbide drill</td><td>Main hole, G83</td><td>16</td><td>5 942</td><td>298.7</td><td>800.0</td></tr>
  <tr><td>T06 HSS centre drill</td><td>Spots, G82</td><td>6</td><td>12 000</td><td>226.2</td><td>731.5</td></tr>
  <tr><td>T17 jobber drill</td><td>Holes, G83</td><td>3.5</td><td>12 000</td><td>131.9</td><td>1 097.3</td></tr>
  <tr><td>T18 jobber drill</td><td>Holes, G83</td><td>1.75</td><td>12 000</td><td>66.0</td><td>762.0</td></tr>
  <tr><td>T01 carbide end mill, 2 flutes</td><td>Roughing / contour</td><td>6</td><td>12 000</td><td>226.2</td><td>411.5 plunge / 1 645.9 lateral</td></tr>
</table>

**Checking the cutting data.** I recalculated every surface speed from the spindle speed (v<sub>c</sub> = π·D·n / 1000) and the chip load of the end mill from the lateral feed: f<sub>z</sub> = 1 645.9 / (12 000 × 2) ≈ 0.069 mm per tooth, inside the 0.05–0.13 mm range for aluminium. The cycle-time estimate comes from toolpath length ÷ feed for each group of operations:

<table class="oz-table">
  <tr><th>Group</th><th>Time (s)</th><th>Share</th></tr>
  <tr><td>Drilling (all holes)</td><td>≈ 4</td><td>&lt; 1 %</td></tr>
  <tr><td>Roughing, 8 passes</td><td>≈ 554</td><td>72 %</td></tr>
  <tr><td>Clean-up of walls and floor</td><td>≈ 139</td><td>18 %</td></tr>
  <tr><td>Contour, 7 passes</td><td>≈ 41</td><td>5 %</td></tr>
  <tr><td>5 tool changes + rapids</td><td>≈ 30</td><td>4 %</td></tr>
  <tr><th>Total</th><th>≈ 768 s ≈ 12.8 min</th><th></th></tr>
</table>

**What reading the G-code taught me.** The program is metric (G21), returns to home with G91 G28 before tool changes, and keeps tool-length compensation (G43) on in every cut. Canned cycles (G82 for a dwell at the bottom, G83 for pecking) keep the drilling short and readable. G41 with offset register D21 means a worn or replaced end mill is corrected on the control, with no change to the program. The weak point is the spindle speed: 12 000 rpm with these feeds works in simulation, but it is above what the lab machine can run on aluminium 6061, so the program would need lower speeds and feeds before real machining.

## Reinforcing CAM and G-code: a turning program in SOLIDWORKS CAM

**Result:** after the challenge, I programmed a full lathe job on my own, from stock definition to post-processed G-code: 8 operations, 9.0 min of machine time, for a turned AISI 304 shaft. The CAM's machine limits flagged a drilling speed the lathe cannot reach, and I could trace that problem into the G-code.

**Why this exercise.** The milling analysis above showed my weak spot: parameters that run in simulation but not on the real machine. This extra activity, on a lathe instead of a mill, was where I set up every parameter myself (machine, stock, tools, cutting data) and then read the G-code the post-processor produced. It built on the turning practice we did in class on a 6061-T6 bar.

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/cam-turn-practice.mp4' | relative_url }}" poster="{{ 'assets/img/cam-turn-practice-poster.jpg' | relative_url }}" autoplay muted loop playsinline></video><figcaption>Class turning practice in SOLIDWORKS CAM on a 6061-T6 bar: rough and finish turning, then cut-off.</figcaption></figure>
</div>

**Setup.**

- **Machine:** Turn Single Turret – Metric, rear 12-station tool crib, maximum spindle speed 5 000 rpm.
- **Stock:** Ø51 × 200 mm AISI 304 bar, defined in the Stock Manager.
- **Part:** a 150 mm stepped shaft (Ø20, Ø30 and Ø50 mm) with a 3 × 45° chamfer, two fillets (R5.4 and R4.6), an OD groove and a Ø6.35 mm centre hole, 10 mm deep. Finished mass: 1 120.6 g.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/cam-turn-stock.jpg' | relative_url }}" alt="Stock Manager with the bar stock"><figcaption>Stock Manager: Ø51 × 200 mm bar around the finished shaft.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cam-turn-ops.jpg' | relative_url }}" alt="Operation tree in SOLIDWORKS CAM"><figcaption>Operation tree: facing, centre drill, drill, turning, groove and cut-off, each with its tool station.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cam-turn-toolcrib.jpg' | relative_url }}" alt="Tool crib configuration"><figcaption>Tool crib: inserts, drills and blades assigned to the turret stations.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cam-turn-sim.jpg' | relative_url }}" alt="Toolpath simulation of the turned shaft"><figcaption>Toolpath simulation with the stock in the chuck.</figcaption></figure>
</div>

<table class="oz-table">
  <tr><th>#</th><th>Operation</th><th>Tool (station)</th><th>Speed</th><th>Feed (mm/rev)</th><th>Time (min)</th></tr>
  <tr><td>1</td><td>Face rough</td><td>CNMG 120404, 80° (T1)</td><td>130 m/min</td><td>0.68</td><td>0.22</td></tr>
  <tr><td>2</td><td>Face finish</td><td>DNMG 150404, 55° (T3)</td><td>160 m/min</td><td>0.35</td><td>0.08</td></tr>
  <tr><td>3</td><td>Centre drill</td><td>6 mm × 60° HSS (T11)</td><td>120 m/min</td><td>0.04</td><td>0.06</td></tr>
  <tr><td>4</td><td>Drill Ø6.35</td><td>Jobber drill (T12)</td><td>120 m/min</td><td>0.04</td><td>0.12</td></tr>
  <tr><td>5</td><td>Turn rough</td><td>CNMG 120404 (T1)</td><td>130 m/min</td><td>0.68</td><td>2.54</td></tr>
  <tr><td>6</td><td>Turn finish</td><td>DNMG 150404 (T3)</td><td>160 m/min</td><td>0.35</td><td>0.35</td></tr>
  <tr><td>7</td><td>Groove rough</td><td>Groove insert (T7)</td><td>110 m/min</td><td>0.26</td><td>0.07</td></tr>
  <tr><td>8</td><td>Cut-off</td><td>3 mm blade (T9)</td><td>700 rpm (fixed)</td><td>0.03</td><td>5.56</td></tr>
  <tr><th></th><th>Total</th><th></th><th></th><th></th><th>9.00</th></tr>
</table>

**Reading the post-processed G-code.**

- **Tool calls and spindle:** `T0101` loads tool 1 with offset 1. `G96 S130 M03` sets a constant surface speed of 130 m/min, so the rpm rises as the diameter shrinks. `M08`/`M09` switch coolant on and off, and `M01` adds an optional stop between tools.
- **Roughing cycles:** `G72` (facing) and `G71` (turning) rough the whole profile from one block range (`P…Q…`), leave 0.15 mm for finishing (`U.15 W.15`) and cut 0.8 mm per pass (`D800`). The finishing tool then follows that profile once, with `G02`/`G03` arcs for the fillets.
- **Drilling and cut-off:** the centre drill uses a `G74` peck cycle. The Ø6.35 drill pecks with plain moves (cut to Z−5, retract, cut to Z−10). The cut-off switches to `G97 S700`, a fixed rpm, because constant surface speed would push the spindle to its limit as the blade reaches the centre.

**What I would fix before running it on a real lathe.**

- **Spindle clamp:** facing and drilling run with `G96` down to the centre line, and the program has no `G50` spindle-speed limit. The CAM already warned that 120 m/min on a Ø6.35 mm drill needs about 6 000 rpm on a 5 000 rpm machine. I would add a `G50` clamp, or drill at a fixed rpm with `G97` as the cut-off does.
- **Tool-change position:** the post-processor sends the turret to X508 Z127, which is exactly 20 × 5 inches, an inch-machine default. It has to be checked against the real lathe's safe position.
- **Cycle time:** the cut-off alone takes 62 % of the 9 min, at 0.03 mm/rev. That is the first operation to optimise. I would also check the 0.68 mm/rev roughing feed against the insert maker's range for stainless steel with a 0.4 mm nose radius.

<div class="oz-grid single">
  <figure class="oz-fig"><img src="{{ 'assets/img/cam-turn-warning.jpg' | relative_url }}" alt="SOLIDWORKS CAM spindle speed warning"><figcaption>The CAM warning that started the spindle-speed check: 120 m/min on the drill exceeds the 5 000 rpm machine limit.</figcaption></figure>
</div>

## PLC program

- **Structure:** the sequence engine, HMI interface, interlocks, quality inspection, latches and the production log each live in their own data block. Optimised block access is disabled so every tag maps to a fixed absolute address, which Process Simulate's signal mapping and the S7 exchange both need.
- **Interlocks:** a function block turns raw sensor signals into named interlock bits (part present, CNC ready, conveyor clear …). Step transitions only use these bits, never raw inputs, so wiring and sequence logic stay decoupled.
- **Safety:** a single global stop bit sits as a normally-closed contact in every step rung and freezes the whole sequence; reset clears all steps and returns the cell to idle.
- **Manual mode:** every step can be driven from the HMI (deploy part, load, start and finish machining, unload, conveyor start/stop/reverse, AGV return), only when the cell is in manual mode.
- **Recipes:** a FIFO production queue on the HMI; each recipe (A–D) sets which of the three CNC stations a part type needs and the batch quantity, which counts down every cycle.

## Virtual commissioning of the UR5 with the Virtual Robot Controller

**Result:** the AGV-to-conveyor robot runs its own PolyScope program in URSim, exactly as it would on a real controller, and stays synchronised with the S7-1500 through seven handshake signals. Process Simulate only shows the motion; the robot program itself is real.

**Why VRC mode.** The two UR5 arms inside the CNC cell run in Process Simulate's simpler pick-and-place mode, where the simulation plans the motion. For the third arm I used Virtual Robot Controller mode: URSim, Universal Robots' official emulator with the same PolyScope, URScript and I/O registers as the physical controller, runs inside a VMware virtual machine and streams its joint positions to Process Simulate through the Tecnomatix Server (TCP port 8523). That makes the program portable to a real robot instead of being a simulation-only path.

**Bridging the I/O.** URSim inside VMware cannot reach the PLC's virtual Ethernet adapter directly, so its digital I/O goes through Process Simulate's signal interface. Process Simulate maps PLC outputs to URSim inputs and URSim outputs back to PLC inputs.

**PolyScope program.**

- **BeforeStart:** move to a SAFE waypoint with MoveL, open the gripper (TO[0] off) and pressurise the vacuum (TO[1] on).
- **Pick:** wait for the PLC trigger (digital_in[2]), approach with MoveL, close the gripper, then wait until the PLC confirms the grip (DI[0]) before retracting.
- **Place:** a MoveJ via a waypoint that clears the two other robots, MoveL to the conveyor, release, wait for the PLC to confirm the release (DI[1]), then report "place complete" (DO[4]) and return to the initial pose.

<div class="oz-grid single">
  <figure class="oz-fig" style="max-width: 640px; margin: 0 auto"><img src="{{ 'assets/img/orza-polyscope.png' | relative_url }}" alt="PolyScope program for pick and place"><figcaption>PolyScope program in URSim: BeforeStart, the trigger loop, and the pick and place routines with their wait-for-confirmation steps.</figcaption></figure>
</div>

**Robot handshake.** The VRC robot is treated as an asynchronous external device: the PLC only reads and writes agreed handshake bits, never individual waypoints. It also waits until both the gripper sensor and the simulation's attach event agree before telling the robot the grip is confirmed.

<table class="oz-table">
  <tr><th>Direction</th><th>Signal</th><th>Purpose</th></tr>
  <tr><td>PLC → robot</td><td>digital_in[2]</td><td>Start the pick-and-place cycle</td></tr>
  <tr><td>PLC → robot</td><td>digital_in[0] / [1]</td><td>Gripper close / open confirmed</td></tr>
  <tr><td>Robot → PLC</td><td>tool_digital_out[0] / [1]</td><td>Robot requests gripper close / open</td></tr>
  <tr><td>Robot → PLC</td><td>digital_out[3] / [4]</td><td>Pick in progress / place complete</td></tr>
</table>

**From the virtual robot to the real one.** Before relying on the virtual controller, I learned PolyScope on the lab's physical UR5e and programmed hands-on applications with it, to understand the real robot's limitations before trusting the simulated one. The video below is one of them: a pick-and-place routine with a vacuum gripper that takes blocks from a stack and places them in a 2 × 2 pattern on the table. This hands-on work is also covered by my Universal Robots _Educational Robotics Training – Core_ certificate.

<div class="oz-grid single">
  <figure class="oz-fig" style="max-width: 420px; margin: 0 auto"><video src="{{ 'assets/img/ur5e-physical-pnp.mp4' | relative_url }}" poster="{{ 'assets/img/ur5e-physical-pnp-poster.jpg' | relative_url }}" autoplay muted loop playsinline style="max-height: 640px; object-fit: contain"></video><figcaption>Physical UR5e in the lab: vacuum-gripper pick-and-place programmed in PolyScope.</figcaption></figure>
</div>

## HMI

The station HMI has a main menu, a station monitor, one screen per area with its own manual commands, status LEDs, fault indicator and error counter, plus alarms with acknowledge, recipes and trends.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-menu.jpg' | relative_url }}" alt="HMI main menu"><figcaption>Main menu.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-monitor.jpg' | relative_url }}" alt="Station monitor screen"><figcaption>Station monitor: mode, current process, station progress and batch quantity.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-supply.jpg' | relative_url }}" alt="Supplier and conveyor screen"><figcaption>Supplier and conveyor screen with manual commands.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-hmi-cnc-qi.jpg' | relative_url }}" alt="CNC and quality inspection screen"><figcaption>CNC and quality inspection: manual machining commands and the OK / rework / scrap result.</figcaption></figure>
</div>

## KPIs and data logging

All production statistics are computed inside the PLC at the end of every cycle and stored in a retentive data block, so they survive a PLC restart.

- **Yield** = good parts / total parts.
- **Scrap rate** = scrapped parts / total parts.
- **Micro OEE** = ideal cycle time × good parts / accumulated cycle time (performance × quality, assuming full availability in uninterrupted automatic mode).
- **Per-cycle log:** a 100-entry ring buffer stores the part type, operation, station state, quality result, cycle time and active alarms of every cycle.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-db22.png' | relative_url }}" alt="DATA_LOG data block"><figcaption>The retentive DATA_LOG block with counters, KPIs, alarm bits and the 100-entry log.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-scada-kpi.png' | relative_url }}" alt="SCADA counters and trends"><figcaption>Global SCADA screen at the end of a demonstration run: 11 parts, 11 OK, 0 scrap, with yield, scrap and Micro OEE trends.</figcaption></figure>
</div>

## Integration and results

- **Digital twin closed loop:** every PLC output drives a body in the 3D scene and every virtual sensor feeds back into the PLC; the cell completes full cycles in automatic mode, including the rework and scrap branches.
- **Modbus TCP:** bidirectional exchange verified between the C# sensor simulator and the PLC (read holding registers and write multiple registers).
- **Communication failure:** when the link to a partner PC is cut, the GET block reports the error, an alarm is raised on the HMI and the station stops passing stale data downstream.
- **Protocols:** the challenge brief suggested OPC UA or EtherNet/IP; the partner accepted S7 GET/PUT between PLCs and Modbus TCP for the sensors, which proved simpler and more reliable in the virtual setup.
- **Three-PC integration:** each station's S7 link worked on its own, but the full interconnection of all three stations could not be completed in the integration window because of IP conflicts, duplicate tag references and stale PLCSIM connections between the individual projects.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-s7-get.png' | relative_url }}" alt="S7 GET block"><figcaption>S7 GET block reading a byte from the partner PLC, triggered at 10 Hz.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/orza-modbus-app.png' | relative_url }}" alt="C# Modbus sensor application"><figcaption>C# Modbus TCP sensor simulator exchanging the supplier stock value with the PLC.</figcaption></figure>
</div>

## Full demonstration

The complete run of the cell, with my explanation (7 min, with sound).

<div class="oz-grid single">
  <figure class="oz-fig"><video src="{{ 'assets/img/orza-full-demo.mp4' | relative_url }}" poster="{{ 'assets/img/orza-full-demo-poster.jpg' | relative_url }}" controls preload="none" playsinline></video><figcaption>Full demonstration of the CNC cell: Process Simulate, PLC and HMI running together.</figcaption></figure>
</div>

## Quality inspection: Cognex In-Sight practical exam

**Result:** a complete inspection built on my own in the Cognex In-Sight emulator. It reads the QR code, barcode and text on every image, measures two seals and the label in calibrated millimetres, and makes one pass/fail decision per part. Seal and label measurements matched a vernier caliper within ±3 %. The package outline did not, and that failure is the most useful part of the exam.

**How it connects to the twin.** In the digital twin a UR5 presents each machined part to an In-Sight camera, but Cognex cannot be connected to Process Simulate. So the camera's verdict is entered on the HMI and locked by the PLC. This exam is the real inspection work behind that step. The product was an LCSC anti-static bag holding a 0603 chip resistor: a reflective package, chosen as a hard case.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-golden.jpg' | relative_url }}" alt="Golden reference image of the package"><figcaption>Golden image: two colour seals, QR code, barcode, "QTY" text and the label.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-faulty.jpg' | relative_url }}" alt="Deliberately faulty sample"><figcaption>Deliberately faulty sample: one seal only partly present and a QR code that does not match the part inside.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-setup.jpg' | relative_url }}" alt="Image acquisition setup"><figcaption>Acquisition setup: phone fixed above a matte black surface, ceiling light only, calibration checkerboard at the side.</figcaption></figure>
</div>

**Steps I followed.**

1. **Acquisition:** 20 photos of the same product with varied position and rotation, plus deliberate errors (rotation, off-centre framing, reflections), taken over a matte black surface to reduce glare. I converted them to the resolution and .bmp format the emulator expects.
2. **Calibration:** CalibrateGrid on a checkerboard with fiducial (7 mm grid, radial lens model): 823 feature points, 0.33 px average error, 1.04 px maximum, so every result is in millimetres.
3. **Fixturing:** a PatMax RedLine pattern trained on a stable logo on the label, with the angle search widened to ±55°. It returns a reference frame (row, column, angle) that every other tool is anchored to, so the inspection follows the part when it moves or rotates.
4. **Measurement:** FindCircle on the two colour seals (radius), and Caliper edge-pair tools on the label and on the package width and length.
5. **Identification:** ReadIDMax decodes the QR code (the full LCSC part string) and the barcode, and OCRMax reads the "QTY" text character by character.
6. **Decision logic:** in the In-Sight spreadsheet each feature has a nominal value, upper and lower limits and a pass flag (1 or 0). A final indicator sums the flags, so a part passes only if every required feature does.
7. **Validation:** I measured the same features on the real package with a vernier caliper and compared them with the vision results against a ±3 % band.

<div class="oz-grid single">
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-spreadsheet.jpg' | relative_url }}" alt="Cognex In-Sight spreadsheet"><figcaption>In-Sight spreadsheet: raw tool outputs on the left, and the quality-control table with nominal, limits and pass flags on the right.</figcaption></figure>
</div>

<table class="oz-table">
  <tr><th>Feature</th><th>Vision</th><th>Caliper</th><th>Within ±3 %?</th></tr>
  <tr><td>Seal diameter</td><td>19.50 mm</td><td>≈ 19.5 mm</td><td>Yes</td></tr>
  <tr><td>Label length</td><td>80.00 mm</td><td>≈ 80 mm</td><td>Yes</td></tr>
  <tr><td>Package outline, long side</td><td>124.6 mm</td><td>120.0 mm</td><td>No (+3.8 %)</td></tr>
  <tr><td>Package outline, short side</td><td>82.9 mm</td><td>80.0 mm</td><td>No (+3.7 %)</td></tr>
  <tr><td>QR code, barcode, "QTY" text</td><td colspan="2">Read on every image (OCR scores 93–97 %)</td><td>—</td></tr>
</table>

**What did not work.** The reflective foil produced bright highlights that the outline calipers took as edges, so those readings came out 3.7–3.9 % too large, outside the ±3 % target. Only the 11 images with the smallest rotation passed the full check; in the most rotated ones the highlight moved into the caliper's search band. QR, barcode and OCR were unaffected because they do not rely on edge transitions. A light box or ring light would be the first fix.

**What I found reviewing it afterwards.** The pass limits in my spreadsheet were set to ±10 % of nominal (for example 8.055–9.945 mm on a 9 mm seal radius), much wider than the ±3 % validation target. A tighter gate would have rejected some readings the spreadsheet accepted. Next time I would derive the limits from the requirement first and build the tools around them.

<div class="oz-grid">
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-caliper.jpg' | relative_url }}" alt="Vernier caliper measurement of a seal"><figcaption>Physical validation: measuring a seal with the vernier caliper.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-pattern.jpg' | relative_url }}" alt="PatMax reference frame on the package"><figcaption>PatMax reference frame that anchors every inspection tool.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-circle.jpg' | relative_url }}" alt="Circle tool on a seal"><figcaption>FindCircle measuring the radius of a colour seal.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-calibration.jpg' | relative_url }}" alt="Calibration result"><figcaption>Grid calibration: 0.33 px average error over 823 points.</figcaption></figure>
  <figure class="oz-fig"><img src="{{ 'assets/img/cognex-reflection.jpg' | relative_url }}" alt="Caliper failure due to reflection"><figcaption>Failure case: a specular highlight on the foil is taken as an edge by the caliper.</figcaption></figure>
</div>

## Limitations & lessons

- **Integration is its own engineering task:** most lost time came from configuration consistency (one authoritative IP plan, namespaced tags, a clean start-up and shutdown routine for the virtual adapters), not from any single protocol.
- **Inspection result:** in a real cell an operator confirms the camera's verdict. Cognex cannot be connected to Process Simulate, so in the simulation that confirmation is given on the HMI (OK, rework or scrap) and the PLC locks it and routes the part.
- **Ideal cycle time:** the Micro OEE formula is implemented, but there was no time to calibrate the ideal cycle time against the real machining time, so the OEE values are relative rather than absolute.
- **HMI coverage:** the five machine states are handled in the logic but not all of them are shown explicitly on the HMI screens.
- **Machining parameters:** some cutting speeds suit the simulation but exceed what the lab machine can do on aluminium 6061; they would need to be reduced before real machining.
- **Machine limits belong in the CAM, not after it:** the lathe exercise showed the same pattern from the other side. Defining the real machine (maximum rpm, tool-change position) first lets the CAM flag problems such as a drill speed the spindle cannot reach, and reading the G-code shows where a `G50` clamp or a fixed rpm is still needed.
- **Inspection limits come from the requirement:** in the Cognex exam, lighting caused the visible failure, but the hidden one was a ±10 % pass gate against a ±3 % target. Tolerances should be fixed before the tools are tuned.
- **Simulation and the real robot complement each other:** the virtual controller runs the same PolyScope program as the physical UR, but only the physical UR5e shows how the real robot behaves, so I learned both.
- **Next steps:** recalculate the milling parameters for the lab machine and aluminium 6061, add a spindle clamp and a faster cut-off to the turning program, and repeat the Cognex inspection under diffuse lighting with limits taken from the ±3 % requirement.

**Stack:** Tecnomatix Process Simulate · TIA Portal, S7-1500, PLCSIM Advanced, ladder logic · WinCC Runtime Advanced · URSim / PolyScope (UR5 VRC), physical UR5e · S7 GET/PUT, Modbus TCP · C# (Modbus simulator) · SOLIDWORKS CAM (milling and turning), G-code (G71/G72, G82/G83, G41/G43, G96/G97) · Cognex In-Sight (PatMax RedLine, FindCircle, Caliper, ReadIDMax, OCRMax)
