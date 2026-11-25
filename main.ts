// Unsent: The Micro-Confession Sprint
// Entry: a two-part micro-confession — a To: line and the unsent line itself,
// written exactly as it was typed, with no explanation after it.
//
// The confession text is held here as a constant, so this session owns every
// word of it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "To: my best friend, who married the girl I loved first\n" +
  "I rehearsed telling you for three years, then stood at your wedding and toasted your happiness instead.\n";

function main(): void {
  // The entry must be exactly two parts: a To: line, then the unsent line.
  const lines = ENTRY.split("\n");
  const toLine = lines[0] ?? "";
  const messageLine = lines[1] ?? "";
  const trailing = lines.slice(2);

  if (!toLine.startsWith("To: ")) {
    throw new Error("entry must open with a 'To: ' line");
  }
  if (messageLine.trim().length === 0) {
    throw new Error("entry must carry one non-empty message line");
  }
  if (trailing.some((line) => line.trim().length > 0)) {
    throw new Error("entry must be exactly two lines, no explanation after the message");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.length < 1 || ENTRY.length > 260) {
    throw new Error(`entry must be 1-260 characters, got ${ENTRY.length}`);
  }
  if (messageLine.length > 200) {
    throw new Error(`message line must be at most 200 characters, got ${messageLine.length}`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
}

main();
