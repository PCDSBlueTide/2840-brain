import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// "Edit this page on GitHub" link at the bottom of every note, so readers on the site
// land in the normal edit → pull request flow. Copied into quartz/components/ at build time.

const REPO = "https://github.com/PCDSBlueTide/2840-brain"
const BRANCH = "master"

const EditLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const rel = fileData.relativePath as string | undefined
  if (!rel || !rel.endsWith(".md")) return null
  const source = rel === "index.md" ? "README.md" : rel
  return (
    <p class="edit-link">
      <a href={`${REPO}/edit/${BRANCH}/${source}`}>✏️ Edit this page on GitHub</a>
      {" · "}
      <a href={`${REPO}/issues/new/choose`}>Report a problem</a>
    </p>
  )
}

EditLink.css = `
.edit-link {
  margin-top: 2.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--lightgray);
  font-size: 0.9rem;
  color: var(--darkgray);
}
`

export default (() => EditLink) satisfies QuartzComponentConstructor
