# Planning Board (Tasks & Issues)

All robot work for the season lives on **one GitHub Project board**:
**[2027 Robot](https://github.com/orgs/PCDSBlueTide/projects/2)** (team members only).

> **One board, many views.** Don't make a separate project per subsystem — a shooter problem is
> often mechanical *and* electrical *and* code. Tag it once; every view that cares shows it.

## The fields

| Field | Values | Set by |
|---|---|---|
| **Status** | Backlog → Ready → In progress → In review → Done | Whoever is working on it |
| **Subsystem** | Drivetrain, Intake, Shooter, Climber, Vision, Electrical, Controls, Whole robot | Whoever opens the issue |
| **Sub-team** | Mechanical, Software, Electrical, CAD, Business | Whoever opens the issue |
| **Target** | Pre-season, Build wk 1-2, 3-4, 5-6, First event, Later events | A lead |
| **Assignee** | You! | Assign yourself when you pick it up |

*Subsystem names get updated at kickoff once we know the game.*

## The views (tabs on the board)

- **All work** — the whole robot, by status
- **One tab per subsystem** — e.g. *Shooter*: everything about the shooter, whoever does it
- **One tab per sub-team** — e.g. *Software*: everything the programmers own
- **Next event** — what has to be done before we load the trailer

## Lifecycle of a task

1. **Open an issue** with a template (*Task* or *Robot problem*). Clear title:
   "Intake roller slips under load", not "intake broken".
2. **Add it to the 2027 Robot project** (right sidebar → *Projects*) and set Subsystem + Sub-team.
3. **Pick it up:** assign yourself, move to *In progress*.
4. **Code?** Open a pull request with `Closes #12` in the description.
5. **Built/tested?** Move to *In review*; a lead checks it.
6. **Closed issues move to *Done* automatically.**
7. **Learned something?** Put it in [Troubleshooting](troubleshooting.md) or the subsystem's notes.

## Big pieces of work → sub-issues

For a whole subsystem milestone, open one **parent issue** ("Shooter v1 complete") and add
**sub-issues** for each step (CAD, cut plates, wire motors, write code, tune). The board shows a
progress bar on the parent.

## What does *not* go on the board

- Quick questions and logistics → Google Chat
- Handbook fixes → issues in the [handbook repo](https://github.com/PCDSBlueTide/2840-brain/issues)
- Anything with names, forms, or travel → coaches' Drive
