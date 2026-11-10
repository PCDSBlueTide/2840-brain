#!/usr/bin/env bash
# Build the team handbook website with Quartz.
#
#   .quartz/build.sh          → builds into _site/
#   .quartz/build.sh --serve  → builds and serves at http://localhost:8080 (local preview)
#
# Quartz itself isn't stored in this repo: a pinned version is downloaded into
# .quartz/.work/ (git-ignored), our config is copied over it, and the notes are copied
# into its content folder. Bump QUARTZ_VERSION to upgrade.
set -euo pipefail

QUARTZ_VERSION="v4.5.2"
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$HERE/.." && pwd)"
WORK="$HERE/.work"

if [ ! -f "$WORK/.version" ] || [ "$(cat "$WORK/.version")" != "$QUARTZ_VERSION" ]; then
  echo "→ Fetching Quartz $QUARTZ_VERSION"
  rm -rf "$WORK"
  git -c advice.detachedHead=false clone -q --depth 1 --branch "$QUARTZ_VERSION" \
    https://github.com/jackyzha0/quartz.git "$WORK"
  (cd "$WORK" && npm ci --no-audit --no-fund --loglevel=error)
  echo "$QUARTZ_VERSION" > "$WORK/.version"
fi

cp "$HERE/quartz.config.ts" "$HERE/quartz.layout.ts" "$WORK/"
cp "$HERE/EditLink.tsx" "$WORK/quartz/components/EditLink.tsx"

echo "→ Preparing content"
node "$HERE/prepare-content.mjs" "$REPO_ROOT" "$WORK/content"

cd "$WORK"
if [ "${1:-}" = "--serve" ]; then
  npx quartz build -d content --serve
  exit 0
fi

echo "→ Building site"
npx quartz build -d content -o public

# Keep the site out of search engines (robots.txt can't do this for a
# project site on *.github.io, so tag every page instead).
find public -name '*.html' -print0 | xargs -0 perl -pi -e \
  's#<head>#<head><meta name="robots" content="noindex, nofollow">#'

rm -rf "$REPO_ROOT/_site"
cp -R public "$REPO_ROOT/_site"
echo "✓ Site built in _site/"
