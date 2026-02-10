import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = new URL("..", import.meta.url).pathname;
const siteDir = path.join(rootDir, "src", "site");
const publicDir = path.join(rootDir, "public");
const distDir = path.join(rootDir, "dist");

async function ensureCleanDir(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
        return;
      }
      await fs.copyFile(srcPath, destPath);
    })
  );
}

async function main() {
  await ensureCleanDir(distDir);
  await copyDir(siteDir, distDir);
  await copyDir(publicDir, distDir);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
