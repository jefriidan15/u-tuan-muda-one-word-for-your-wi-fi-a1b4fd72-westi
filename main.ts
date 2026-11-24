// One Word for Your Wi-Fi — @westi7460 entry.
// Writes one original word describing home Wi-Fi to /output/entry.txt.
// One word, 8 characters, no trailing newline. The signal plays
// peekaboo: there one second, gone the next, back when you stop looking.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY = "peekaboo";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
