import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "dist");

const publicPaths = [
  "index.html",
  "assets",
  "about",
  "contact",
  "faq",
  "gallery",
  "privacy-policy",
  "reviews",
  "service-areas",
  "services",
  "terms",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml"
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const publicPath of publicPaths) {
  const source = join(root, publicPath);
  if (!existsSync(source)) continue;
  cpSync(source, join(outDir, publicPath), { recursive: true });
}

console.log(`Static site copied to ${outDir}`);
