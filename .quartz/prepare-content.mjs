// Copy the repo's notes into a Quartz content folder, ready to build.
//
//   node prepare-content.mjs <repo-root> <content-dir>
//
// - README.md (repo root) becomes the site home page (index.md); links to it are rewritten.
// - A note's first "# Heading" becomes its page title (and is removed from the body so the
//   title isn't shown twice). Notes that already have a frontmatter title are left alone.
// - "modified" comes from the file's last git commit so pages show a real "last updated" date.
// Nothing in the repo is changed; this only writes to <content-dir>.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const [repoRoot, outDir] = process.argv.slice(2).map((p) => path.resolve(p))
if (!repoRoot || !outDir) {
  console.error("usage: node prepare-content.mjs <repo-root> <content-dir>")
  process.exit(1)
}

const SKIP = new Set([".git", ".github", ".quartz", ".foam", ".vscode", "node_modules", "_site"])

function lastCommitDate(rel) {
  try {
    return execFileSync("git", ["-C", repoRoot, "log", "-1", "--format=%cI", "--", rel], {
      encoding: "utf8",
    }).trim()
  } catch {
    return ""
  }
}

function transformMarkdown(text, rel) {
  // Links to the README point at the home page on the site.
  text = text.replace(/\]\(((?:\.\.\/)*)README\.md(#[^)]*)?\)/g, "]($1index.md$2)")

  let frontmatter = {}
  let body = text
  const hasFrontmatter = text.startsWith("---\n")
  if (hasFrontmatter) {
    // Leave existing frontmatter untouched; just add a modified date if missing.
    const end = text.indexOf("\n---", 4)
    const fm = text.slice(4, end)
    body = text.slice(end + 4)
    const date = lastCommitDate(rel)
    const extra = !/^modified:/m.test(fm) && date ? `\nmodified: ${date}` : ""
    return `---\n${fm}${extra}\n---${body}`
  }

  const h1 = body.match(/^# (.+)$/m)
  if (h1) {
    frontmatter.title = h1[1].trim()
    body = body.replace(h1[0] + "\n", "").replace(h1[0], "")
  }
  // Foam-style "tags: #robot #vision" line → real page tags (shown once, above the title)
  const tagLine = body.match(/^tags:((?:\s+#[\w/-]+)+)\s*$/m)
  if (tagLine) {
    frontmatter.tags = tagLine[1].trim().split(/\s+/).map((t) => t.slice(1))
    body = body.replace(tagLine[0] + "\n", "").replace(tagLine[0], "")
  }
  const date = lastCommitDate(rel)
  if (date) frontmatter.modified = date

  const yaml = Object.entries(frontmatter)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join("\n")
  return yaml ? `---\n${yaml}\n---\n${body.replace(/^\n+/, "\n")}` : body
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue
    const src = path.join(dir, entry.name)
    const rel = path.relative(repoRoot, src)
    if (entry.isDirectory()) {
      walk(src)
      continue
    }
    let destRel = rel
    if (rel === "README.md") destRel = "index.md"
    else if (rel === ".gitignore" || rel === "CLAUDE.md" || rel === "AGENTS.md") continue
    const dest = path.join(outDir, destRel)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    if (rel.endsWith(".md")) {
      fs.writeFileSync(dest, transformMarkdown(fs.readFileSync(src, "utf8"), rel))
    } else {
      fs.copyFileSync(src, dest)
    }
  }
}

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })
walk(repoRoot)
console.log(`Prepared content in ${outDir}`)
