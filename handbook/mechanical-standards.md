# Mechanical Standards

Conventions so parts fit, robots are repairable, and CAD matches reality.

> ⚠️ **TODO (mechanical lead / captain):** confirm or correct these defaults for our team.

## CAD

- **Where:** *(Onshape / Fusion 360 — fill in team workspace and how to get access)*
- **Naming:** `2026-Subsystem-Part` (e.g. `2026-Turret-SpacerPlate`). Version in the CAD tool,
  not in the filename.
- **Every manufactured part has a CAD model** before it's cut. If you change a part in the shop,
  update the CAD the same day.
- **Design for the machine:** the X-Carve has some hole-position error (noted Feb 2026) —
  design clearance holes accordingly and spot-check the first part. See
  [robot notes](../team/robot/blue-tide-2026.md).

## Hardware

| Thing | Team default |
|---|---|
| Structure fasteners | #10-32 *(confirm)* |
| Small fasteners | #8-32 / #6-32 *(confirm)* |
| Thread locker | Blue (removable) on anything that vibrates; **never** on plastic |
| Rivets | 3/16" POP rivets for tube-to-gusset *(confirm)* |
| Box tube | 2×1 aluminum *(confirm wall thickness)* |
| Shafts | 1/2" hex standard *(confirm)* |

- **Nyloc nuts or thread locker** on every bolt that can vibrate loose.
- Keep a labeled bin of every fastener size the robot uses in the pit.

## Build quality

- Deburr every cut edge and drilled hole.
- Belts/chains: check tension and alignment after every match day.
- Bearings press-fit or retained — never just "sitting there".
- Leave tool access: if you can't reach a bolt with a hex key, redesign.

## Manufacturing

| Process | Use for | Notes |
|---|---|---|
| CNC (X-Carve, Easel + Fusion post) | Aluminum/poly plates | Spot-check first part dimensions |
| Laser | Prototypes, thin plates | No PVC/vinyl |
| 3D print | Spacers, mounts, test parts | PETG/ABS for strength; note infill in the CAD part name/notes |

## Design decisions

When the team chooses between options (e.g. turret vs. fixed shooter), record **what we chose
and why** in a GitHub issue or in the subsystem's `team/robot/` note. Future you will want it.
