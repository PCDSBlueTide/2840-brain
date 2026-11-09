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

1. Go to the repo's **Issues** tab → **New issue**.
2. Pick a template (Task, Robot problem, Doc request).
3. Fill it in. Clear title: *"Intake roller slips under load"*, not *"broken"*.
4. Submit. Add a sub-team **label** if the template didn't.

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
