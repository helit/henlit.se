// Fails the build if an em dash (U+2014) reaches the repo. Henrik reads the
// character as a tell that text was machine-written, so it stays out.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src", "scripts", "README.md", "index.html"];
const EXTENSIONS = [".ts", ".tsx", ".md", ".html", ".css", ".mjs"];
const FORBIDDEN = String.fromCharCode(0x2014);

const walk = (target) => {
  if (statSync(target).isFile()) return [target];
  return readdirSync(target).flatMap((entry) => walk(join(target, entry)));
};

const offences = ROOTS.flatMap(walk)
  .filter((file) => EXTENSIONS.some((extension) => file.endsWith(extension)))
  .flatMap((file) =>
    readFileSync(file, "utf8")
      .split("\n")
      .map((line, index) => ({ file, line: index + 1, text: line }))
      .filter(({ text }) => text.includes(FORBIDDEN))
  );

if (offences.length > 0) {
  console.error(`Found ${offences.length} em dash(es) (U+2014):\n`);
  for (const { file, line, text } of offences) {
    console.error(`  ${file}:${line}  ${text.trim()}`);
  }
  console.error("\nUse a comma, a colon, parentheses or a full stop instead.");
  process.exit(1);
}

console.log("check-copy: no em dashes found");
