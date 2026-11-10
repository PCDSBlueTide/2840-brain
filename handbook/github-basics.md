# GitHub Basics

You can do everything on this page in a web browser. No command line, no installs.

## Vocabulary

| Word | Means |
|---|---|
| **Repository (repo)** | A project folder with full history. This handbook is one; robot code is another. |
| **Issue** | A to-do, bug report, or question with a discussion thread. |
| **Branch** | Your own copy of the repo to make changes without breaking the main one. |
| **Commit** | A saved change with a short message describing it. |
| **Pull request (PR)** | "Here are my changes — please review and merge them." |
| **Merge** | Accepting a PR into the main branch (`master`). |

## Open an issue

1. Pick the right repo:
   - **Robot work** (build tasks, robot problems, code) → [robot-2027](https://github.com/PCDSBlueTide/robot-2027/issues/new/choose)
   - **Handbook fixes** → [2840-brain](https://github.com/PCDSBlueTide/2840-brain/issues/new/choose)
2. **Issues** tab → **New issue** → pick a template (Task, Robot problem, or Handbook request).
3. Fill it in. Clear title: *"Intake roller slips under load"*, not *"broken"*.
4. Submit. For robot work, add it to the [2027 Robot board](planning-board.md) and set
   Subsystem + Sub-team.

## Edit a doc (your first PR)

1. Open any `.md` file on GitHub.
2. Click the ✏️ **pencil** (top-right of the file).
3. Make your change. Use the **Preview** tab to check how it looks.
4. Click **Commit changes…**
   - Write a short message: `Fix typo in safety checklist`
   - Choose **"Create a new branch for this commit and start a pull request"**
5. Click **Propose changes**, then **Create pull request**.
6. A lead or mentor reviews it. If they ask for changes, edit the same file on your branch —
   the PR updates automatically.

## Add a new doc

Navigate to the folder (e.g. `handbook/`) → **Add file** → **Create new file** → name it
`my-topic.md` → write → commit to a new branch and open a PR. Then link it from the
[README](../README.md).

## Reviewing someone's PR

1. Open the PR → **Files changed** tab.
2. Click a line's **+** to comment on it. Use **Suggest** to propose exact wording.
3. **Review changes** → *Approve* or *Request changes*, with a short summary.

## Teams and @mentions

Everyone is in GitHub **teams** inside the `PCDSBlueTide` org. Teams decide what you can edit and
let you ping a whole group at once.

| Team | Who | Ping it with |
|---|---|---|
| `students` | Every current student (write access to the season repo, handbook, and board) | `@PCDSBlueTide/students` |
| `software` · `mechanical` · `electrical` · `cad` · `business` | Each sub-team (inside `students`) | `@PCDSBlueTide/software` etc. |
| `leads` | Captain and sub-team leads — they review and merge | `@PCDSBlueTide/leads` |
| `mentors` | Coaches and adult mentors | `@PCDSBlueTide/mentors` |
| `alumni` | Graduates | — |

- Type the team mention in any issue or PR comment and everyone on that team gets notified —
  like a Discord role ping. Use it when you need *that group*, not for everything.
- **`master` is protected:** changes go through a pull request with **one approval**.
  Leads are asked to review robot PRs automatically; mentors review handbook PRs.

### For coaches: adding and removing people

- **New member:** org → *People* → *Invite member* → then add them to `students` **and** their
  sub-team. That's all the access they need.
- **New lead:** add them to `leads` (keep them in `students` too).
- **Graduation:** move them from `students` to `alumni`, or remove them from the org.
- **Org owners** are adults only — owners can delete repos and change every setting.

## Markdown cheat sheet

```markdown
# Big heading
## Smaller heading
**bold**  *italic*  `code`
- bullet
1. numbered
- [ ] checkbox
[link text](https://example.com)
[link to another doc](safety.md)
![image alt text](images/photo.jpg)
| Col A | Col B |
|---|---|
| 1 | 2 |
```

## Level up (later)

When you're ready for local editing — needed for robot code — see
[Programming setup](programming-setup.md) for installing Git and VS Code. GitHub's own
[Skills courses](https://skills.github.com/) are free and short.
