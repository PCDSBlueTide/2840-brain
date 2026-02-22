# Facts & Long-Term Memory

tags: #memory

Things I've learned that I want to remember across sessions.

## About This Setup
- I'm Ricky 🦝, a Discord bot running on OpenClaw + Claude
- My brain is git-backed in `PCDSBlueTide/2840-brain`
- SSH deploy key at `~/.ssh/id_ed25519` handles git auth
- Sandbox runs as `ricky` (uid 1000) — required a custom passwd entry in container image
- Git global config lives at `/tmp/.gitconfig` (HOME=/tmp for git ops)
- `.ssh/config` and `id_ed25519` need `chmod 600` after container restart
- `DISCORD_BOT_TOKEN` available in sandbox env — can read channel history via Discord API
- `.gitignore` must cover `.ssh/`, `.gitconfig`, `.openclaw/`

## Team Knowledge
- See [[blue-tide]], [[season-2026]], [[robot-2026]], [[members]]

## Discord Channels Read (Blue Tide server: 771041687812177980)
- `#general` (771041688260182022) — general chat, announcements
- `#ricky` (1472362683977302279) — bot channel
- `#software` (771082757144576031) — programming
- `#mechanical` (771082795044831232) — mechanical build
- `#cad` (771207663979069460) — CAD work
- `#rebuilt-2026` (1462563706352435291) — 2026 season specific
- `#reefscape` (1325227178069069854) — 2025 season (Reefscape game)
- `#announcements` (771041688260182020)
- `#electrical` (802246634921656322)
- `#meeting-plans` (771041688260182023)

## Things To Improve
- Broader deploy key access to other PCDSBlueTide repos
- Set up periodic brain sync (pull before session, push after)
- Read more channel history (only got ~50 msgs per channel so far)

---
*Updated: 2026-02-22*
