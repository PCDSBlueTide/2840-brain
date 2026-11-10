# Contributing to the Team Handbook

Everyone on Blue Tide can — and should — improve this repo. You don't need to be on the
software team, and you don't need the command line.

## The short version

1. **Small fix?** Open the file on GitHub, click ✏️ **Edit**, make the change, and choose
   **"Create a new branch and start a pull request."**
2. **Not sure of the fix, or it's a bigger idea?** [Open an issue](https://github.com/PCDSBlueTide/2840-brain/issues/new/choose) first.
3. **Someone reviews your pull request** (a lead or mentor), maybe asks for tweaks, then merges it.

That's it. Step-by-step: [GitHub Basics](handbook/github-basics.md).

## What belongs here vs. elsewhere

| Put it here (GitHub) | Put it in Google Drive | Put it in Google Chat |
|---|---|---|
| How-tos, standards, checklists | Permission slips, forms, budgets | "Meeting moved to 4:00" |
| Troubleshooting fixes | Anything with student names or contact info | Quick questions |
| Robot design notes, decisions | Sponsor letters, school paperwork | Rides, food, logistics |
| Build tasks & bugs (as issues) | Photos/videos too big for git | Anything that won't matter next week |

Rule of thumb: **if it'll still be useful next season, it goes here.**

## Privacy rules

This repo is **public on the internet.** Before you commit, check:

- ✅ Refer to students by **initials** (e.g. "RW"), GitHub username, or role ("software lead")
- ❌ No student **names** — not first names, not full names
- ❌ No phone numbers, emails, home addresses, or birthdays
- ❌ No **room assignments, travel plans, or permission-slip / medical status** — those go in the
  coaches' Drive folder
- ❌ No photos of students without approval from a coach
- ❌ No passwords, API keys, team account logins, or Wi-Fi passwords
- ✅ Robot specs, code notes, part links, lessons learned, event results — all great

If you spot something that breaks these rules, **tell a coach right away** (don't just delete
it — git keeps history, and a coach may need to scrub it properly).

## Writing style

- **Lead with the answer.** Put the fix or the rule at the top; background below.
- **Date anything that can go stale:** "As of Feb 2026, we use…"
- **Link, don't copy.** Link to WPILib/vendor docs instead of pasting them.
- **One topic per file.** Name files in `kebab-case.md`.
- **Linking to another page:** either style works on the [website](https://pcdsbluetide.github.io/2840-brain/).
  - `[[shooter]]` — easiest; just the file name, no folders. (Shows as plain text in GitHub's file view.)
  - `[Shooter](../team/robot/shooter.md)` — standard Markdown; clickable on GitHub too.

## Reviews

- Pull requests need **one approval** from a student lead or mentor before merging — GitHub
  enforces this on `master`. Mentors are requested automatically (`.github/CODEOWNERS`).
- Reviewers: be kind, be specific, and suggest exact wording when you can.
- Authors: it's normal to get change requests. That's the process working, not a grade.

## Commit messages

Short and in the present tense: `Add CAN wiring color code`, `Fix swerve offset steps`.
