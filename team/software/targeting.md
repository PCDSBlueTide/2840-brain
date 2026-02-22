# Targeting System

tags: #software #vision #targeting

## Approach
Projectile trajectory equations implemented in Kotlin. Takes Limelight distance estimates as inputs (assuming AprilTag on basket).

## Logic
- Decision tree: should robot move linearly, or just adjust turret angle?
- Input: `Pose2d` from vision
- Process: `transform2d` with basket position constant → compute distance → plug into trajectory equation
- Output: flywheel speed + turret angle → mapped to linear servo positions

## Key Notes
- Shooter cam is on the turret swivel, so the camera→robot transform must include the current turret angle dynamically
- Only Limelight distance estimates used as inputs (not full pose) in initial implementation

## Status (Feb 22, 2026)
- Basic implementation working
- Turret subsystem branch in progress
- Vision constants need updating for 3-camera setup

---
*See also: [[vision]] · [[shooter]] · [[software-overview]]*
