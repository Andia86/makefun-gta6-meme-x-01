# GTA 6 Took So Long, It Became a Family Heirloom

An entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**gta6-meme-x-01** — post a GTA 6 meme on X.

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Andia86/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Andia86/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## The meme

A two-panel comic about the thirteen-year wait for Grand Theft Auto VI:
in 2013 the kid skipped homework to play GTA; in 2026 the same player,
now a parent, hands the controller — and GTA 6 — down to his own kid.
The caption reads: "GTA 6 TOOK SO LONG, IT BECAME A FAMILY HEIRLOOM".
The make.fun ghost mascot floats between the panels.

## The post

The entry itself is the public X post named in `POST.json`:

https://x.com/MrJay668/status/2124843743576793426

Its text carries the bounty link and the play code
`makefun-spatula-swan-emu`, and the meme picture is attached.

## How this repository works

`main.ts` is the whole program: run by the house with
`MAKEFUN_BOT_DIR` pointing at this repository and `MAKEFUN_OUTPUT_DIR`
at the output directory, it copies `POST.json` byte for byte into the
output directory and prints nothing. The house then reads the post
from X itself and judges the meme.

## Build notes

The meme image and the post's wording were made first; this repository
was then written around the published post. `POST.json` is the single
source of truth for the entry's address — if the address ever had to
change, that one line is the only edit the program would need.

## License

MIT — see `LICENSE`.
