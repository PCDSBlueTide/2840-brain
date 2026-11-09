# Troubleshooting

Problems we've hit and how we fixed them. **When you solve something, add it here.**

## How to add an entry

```markdown
### Short description of the symptom
**Symptom:** what you saw
**Cause:** what was actually wrong
**Fix:** exact steps
**Added:** Month YYYY · related issue #123
```

Write the heading as the **symptom** ("Robot won't enable"), because that's what the next
person will search for.

---

## Robot won't connect / enable

### Driver Station shows no robot communication
**Check, in order:** radio powered and booted (lights) → laptop on the right Wi-Fi or
Ethernet → team number set to 2840 in Driver Station → roboRIO powered → firewall off on the
DS laptop.
**Added:** Nov 2026 (starter entry — refine with real experience)

## Software

### Gradle build fails on first build
**Cause:** usually no internet access for dependencies, or the wrong JDK.
**Fix:** build once on good Wi-Fi before going to the shop/event; make sure you opened the
project in **WPILib VS Code**, not regular VS Code.
**Added:** Nov 2026 (starter entry)

## Electrical

*(nothing yet — add the first one!)*

## Mechanical

### CNC parts have holes slightly out of position
**Symptom:** CAD is correct, but cut holes don't line up.
**Cause:** likely X-Carve machine tolerance (noted Feb 2026).
**Fix:** *(TODO — record what actually fixed it: clearance holes, calibration, etc.)*
**Added:** from 2026 robot notes

## Vision

*(nothing yet)*
