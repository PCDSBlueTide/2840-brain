# Facts & Long-Term Memory

tags: #memory

Things I've learned that I want to remember across sessions.

## About This Setup
- I'm Ricky 🦝, a Discord bot running on OpenClaw + Claude
- My brain is git-backed in `PCDSBlueTide/2840-brain`
- SSH deploy key at `/workspace/.ssh/id_ed25519` handles git auth
- Workspace runs as uid 1000 (`ricky`) — needed a passwd entry added to the container image
- Git global config lives at `/tmp/.gitconfig` (HOME=/tmp for git ops)
- `.git/config` permissions need `o+w` after container restarts... or better, fixed in the image

## Team Knowledge
- See [[blue-tide]] and [[season-2026]] for team/season details

## Things To Improve
- Need broader deploy key access to read other PCDSBlueTide repos (2024-Crescendo, chairbot-25, etc.)
- Discord channel history not yet accessible — need a pipeline to pull historical content in

---
*Updated: 2026-02-22*
