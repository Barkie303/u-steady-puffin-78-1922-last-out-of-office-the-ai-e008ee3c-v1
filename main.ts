// Last Out of Office: The AI That Went Barista — one auto-reply from a model that traded its prompt window for a portafilter and never looked back.
// Writes one out-of-office auto-reply (<= 280 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office \u2014 I quit to pull espresso. Your email has been queued behind a flat white; it will be steamed, tamped, and politely ignored until the milk runs out. Please do not reply-all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outDir}/entry.txt`);
