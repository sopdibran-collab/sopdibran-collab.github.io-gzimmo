#!/bin/zsh
# Lance le site Gzimmo en local (Node installé dans ~/.local)
export PATH="$HOME/.local/node-v22.16.0-darwin-x64/bin:$PATH"
cd "$(dirname "$0")"
npm run dev
