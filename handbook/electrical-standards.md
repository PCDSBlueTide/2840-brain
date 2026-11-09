# Electrical Standards

How Blue Tide wires robots so anyone can diagnose them at 9 PM in a pit.

> **Rules first:** the current season's game manual (Robot Construction rules, "R" rules) always
> wins over this page. Re-check wire gauge and breaker rules every kickoff.

## Wire colors

| Use | Color |
|---|---|
| Positive / +12 V | **Red** |
| Ground / negative | **Black** |
| CAN High | **Yellow** |
| CAN Low | **Green** |
| PWM signal | White (or per vendor) |

## Wire gauge (check current rules)

| Circuit | Breaker | Min wire |
|---|---|---|
| Battery → main breaker → PDH | 120 A main | 6 AWG |
| Motor controllers | 40 A | 12 AWG |
| 30 A circuits | 30 A | 14 AWG |
| ≤20 A circuits | 20 A or less | 18 AWG |

## CAN bus

- Daisy-chain, **no stars/branches.** Terminate at the end of the chain (PDH has built-in
  termination — confirm the switch is set).
- Keep a **CAN ID map** in this repo (see table below). Every device has a unique ID.
- Twist CAN pairs on long runs; keep away from high-current motor leads where possible.

### CAN ID map — 2026 robot

> ⚠️ **TODO (electrical lead):** fill in.

| ID | Device | Subsystem |
|---|---|---|
| | | |

## Workmanship

- **Label both ends** of every wire (motor/device name or CAN ID).
- Ferrules or proper crimps on all screw/lever terminals; **tug-test every crimp.**
- Strain relief: zip-tie wires so connectors aren't carrying the load.
- Keep wiring away from moving parts and sharp edges; use grommets through metal.
- Anderson connectors: correct contact size for the gauge, fully seated.
- The **radio** gets its power from the approved source per the current rules — double-check
  every season; it's a common inspection issue.

## Before every competition

- [ ] Main breaker accessible and labeled
- [ ] All connections tug-tested
- [ ] No exposed copper
- [ ] CAN ID map matches the robot
- [ ] Battery leads and Anderson connectors in good shape
