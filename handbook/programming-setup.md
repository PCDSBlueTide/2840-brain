# Programming Setup

Get a laptop ready to build and deploy Blue Tide robot code.

> As of the 2026 season: **AdvantageKit v26**, Java/Kotlin (Kotlin preferred for new code),
> WPILib toolchain. Details in [software overview](../team/software/software-overview.md).
> **Update the versions on this page every kickoff.**

## 1. Install

1. **WPILib installer** for the current season — [docs.wpilib.org → Installation](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html).
   This installs VS Code (WPILib edition), the JDK, and tools.
2. **Git** — [git-scm.com/downloads](https://git-scm.com/downloads). On Windows, accept the defaults.
3. **FRC Game Tools** *(Windows only — Driver Station)* — [NI FRC Game Tools](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/frc-game-tools.html).
4. **Vendor tools as needed:** Phoenix Tuner X (CTRE), REV Hardware Client, Limelight/PhotonVision.

> 🏫 **School laptop?** Some installs may be blocked. Tell a mentor — don't try to bypass school controls.

## 2. Configure Git (once)

```bash
git config --global user.name "Your GitHub username"
git config --global user.email "your-github-noreply-email"
```

Use your GitHub **noreply** address (GitHub → Settings → Emails) so your email isn't public.

## 3. Get the code

1. Ask a lead which repo is this season's robot code in [`PCDSBlueTide`](https://github.com/PCDSBlueTide).
2. In WPILib VS Code: **Ctrl/Cmd+Shift+P** → `Git: Clone` → paste the repo URL.
3. Open the folder. Let Gradle finish its first build (can take several minutes the first time —
   do this **on good Wi-Fi before** going to the shop or an event).

## 4. Build, simulate, deploy

| Do | How |
|---|---|
| Build | Ctrl/Cmd+Shift+P → `WPILib: Build Robot Code` |
| Simulate | `WPILib: Simulate Robot Code` (great for testing without the robot) |
| Deploy | Connect to the robot (USB/Ethernet/radio) → `WPILib: Deploy Robot Code` |

## 5. Our workflow

1. Pick or create a **GitHub issue** for what you're doing.
2. Make a branch: `turret-homing`, `fix-auto-path`, etc.
3. Commit small and often with clear messages.
4. Open a **pull request**; a software lead reviews it.
5. Code on `master` should **always build**. Test in sim or on the robot before merging.

## Common setup problems

Add yours to [Troubleshooting](troubleshooting.md#software).
