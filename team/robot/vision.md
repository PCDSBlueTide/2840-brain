# Vision System

tags: #robot #vision

## Hardware
| Camera | Qty | Location |
|---|---|---|
| Limelight 4 | 2 | Field-facing (robot body) |
| Limelight 3A | 1 | Turret swivel (shooter cam) |
| Limelight 2 | 1 | TBD |

## Software
- AprilTag pose estimation for field localization
- Shooter cam transform to robot must account for turret swivel angle
- Targeting system: projectile trajectory equations (Kotlin) — see [[targeting]]

## Notes
- Limelight 3A chosen for turret because the two robot-mounted cams are both LL4 (same type)
- Vision constant file needs updating for all 3 active cameras

---
*See also: [[shooter]] · [[targeting]] · [[software-overview]]*
