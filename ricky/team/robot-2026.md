# Robot 2026

tags: #team #frc #season-2026 #robot

## Drivetrain
- **Type:** Swerve drive
- **Motors:** 17 total (including swerve modules)
- **CAN:** Considering CANivore due to motor count

## Shooter / Scoring
- Hooded turret shooter
- Turret swivels side-to-side; Limelight mounted on swivel
- Turret base plate CNC'd (Inventables X-Carve / Easel)
- AndyMark Launcher-in-a-Box considered for prototyping
- 2" compliance wheels (REV ION)
- HTD timing belt/pulley system
- Linear servos map desired flywheel angle to position

## Vision
- **Limelight 4** × 2 — field-side cameras
- **Limelight 3A** × 1 — mounted on turret swivel
- **Limelight 2** × 1
- AprilTag pose estimation
- Projectile trajectory equations in Kotlin (targeting system)
- Decision tree: linear move vs. turret angle adjust

## Software
- **Framework:** AdvantageKit v26
- **Language:** Java / Kotlin (Kotlin preferred for new code)
- **Vision subsystem:** transform to robot accounts for turret angle
- **Turret subsystem:** in progress (branch)
- **Template base:** TalonFX swerve (once released for 2026)

## Manufacturing
- CNC router (X-Carve / Easel post-processor via Fusion 360)
- 3D printing: turret spacers, 2" mecanum wheels (test parts)
- Laser cutting: plates, prototypes

## Known Issues / In Progress (as of Feb 22, 2026)
- CNC hole alignment slightly off — CAD looks correct, likely machine tolerance
- Turret CAD fix in progress
- Turret subsystem branch being developed

---
*See also: [[season-2026]] · [[members]]*
