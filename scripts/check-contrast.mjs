// Fails the build if the palette drops below WCAG AA for normal text.
// Henrik's own site failing an accessibility check would be worse than most
// bugs, so the ratios are enforced rather than trusted.
import { readFileSync } from "node:fs";

const source = readFileSync("src/theme.ts", "utf8");
const palette = Object.fromEntries(
  [...source.matchAll(/(\w+):\s*"(#[0-9a-fA-F]{6})"/g)].map((m) => [m[1], m[2]])
);

const luminance = (hex) => {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// Every token that carries real text, and the reverse-video selection.
const REQUIRED = [
  ["dim", "screen", 4.5],
  ["text", "screen", 4.5],
  ["bright", "screen", 4.5],
  ["screen", "bright", 4.5],
];

const failures = [];
for (const [fg, bg, minimum] of REQUIRED) {
  if (!palette[fg] || !palette[bg]) {
    failures.push(`missing palette token: ${fg} or ${bg}`);
    continue;
  }
  const measured = ratio(palette[fg], palette[bg]);
  const line = `${fg} on ${bg}: ${measured.toFixed(2)}:1 (needs ${minimum}:1)`;
  if (measured < minimum) failures.push(line);
  else console.log(`  ok  ${line}`);
}

if (failures.length > 0) {
  console.error("\nContrast below WCAG AA:\n");
  for (const line of failures) console.error(`  ${line}`);
  process.exit(1);
}

console.log("check-contrast: palette clears WCAG AA for normal text");
