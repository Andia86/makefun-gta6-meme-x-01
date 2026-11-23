// Entry program for make.fun's gta6-meme-x-01 bounty (Post a GTA 6 meme on X).
//
// The house runs this file with MAKEFUN_BOT_DIR pointing at the
// repository and MAKEFUN_OUTPUT_DIR at the output directory.
// Its whole job: hand the post's address to the grader by copying
// POST.json into the output directory, byte for byte, and print
// nothing. POST.json is a one-line JSON object, {"url": "..."},
// naming the X post that is the entry. No network, no clock, no
// other files: two runs of this program on the same repository
// write the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
