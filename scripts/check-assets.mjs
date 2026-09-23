// Fails the build if a file the site links to is missing from /public.
// The CV download is a real link on the splash, so a missing PDF would ship
// as a 404 on the one page the site has.
import { existsSync } from "node:fs";

// Mirrors CV_PATH in src/system/filesystem.ts.
const REQUIRED = ["public/cv.pdf"];

const missing = REQUIRED.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error("Missing files that the site links to:\n");
  for (const file of missing) console.error(`  ${file}`);
  console.error(
    "\nDrop your CV PDFs in at those paths, or remove the CV link from" +
      "\nthe splash in src/system/filesystem.ts."
  );
  process.exit(1);
}

console.log("check-assets: all linked files present");
