import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const versions = {};

// Keep public URLs compatible with previously shared links. The version changes
// whenever the bytes change, so browser caches cannot hide an updated download.
for (const directory of ["StudyGuides", "rules", "sponsors"]) {
  const files = await readdir(new URL(`public/${directory}/`, root), {
    withFileTypes: true,
  });
  for (const file of files.sort((a, b) => a.name.localeCompare(b.name))) {
    if (!file.isFile()) continue;
    const path = `/${directory}/${file.name}`;
    const bytes = await readFile(new URL(`public${path}`, root));
    versions[path] = createHash("sha256").update(bytes).digest("hex").slice(0, 12);
  }
}

const output = new URL("app/assetVersions.json", root);
const content = `${JSON.stringify(versions, null, 2)}\n`;
const previous = await readFile(output, "utf8").catch(() => "");
if (previous !== content) await writeFile(output, content);
console.log(`Versioned ${Object.keys(versions).length} public assets.`);
