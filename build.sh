#!/usr/bin/env bash
set -e

build_with_cache() {
  if [[ -d "$XDG_CACHE_HOME"/next ]]; then
    echo "Copying cached .next/cache"
    mkdir -p .next
    rsync -a "$XDG_CACHE_HOME"/next/ .next/cache
  else
    echo "No cached .next/cache found"
  fi

  echo "Building"
  yarn build

  echo "Done, caching .next/cache"
  rsync -a .next/cache/ "$XDG_CACHE_HOME"/next
}

if [[ "$RENDER" ]]; then
  build_with_cache
else
  yarn build
fi
