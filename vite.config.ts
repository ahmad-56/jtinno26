import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Changed files get new URLs so cached downloads stay up to date.
const assetVersions: Record<string, string> = {};
for (const directory of ["StudyGuides", "rules", "sponsors"]) {
  const folder = new URL(`./public/${directory}/`, import.meta.url);
  for (const file of readdirSync(folder, { withFileTypes: true })) {
    if (!file.isFile()) continue;
    const bytes = readFileSync(new URL(file.name, folder));
    assetVersions[`/${directory}/${file.name}`] = createHash("sha256")
      .update(bytes)
      .digest("hex")
      .slice(0, 12);
  }
}

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: ["@fillout/react"],
  },
  define: {
    "import.meta.env.ASSET_VERSIONS": JSON.stringify(assetVersions),
  },
});
