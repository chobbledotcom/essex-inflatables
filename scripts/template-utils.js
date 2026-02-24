import { cpSync, existsSync, mkdtempSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { templateRepo } from "./consts.js";
import { bun, fs, git, path } from "./utils.js";

const rootExcludes = [
  ".git",
  "*.nix",
  "README.md",
  ".build",
  "scripts",
  "node_modules",
  "package.json",
  "bun.lock",
  "old_site",
];

const matchesExclude = (name, excludes) =>
  excludes.some((pattern) => {
    if (pattern.startsWith("*.")) {
      return name.endsWith(pattern.slice(1));
    }
    return name === pattern;
  });

const copyDir = (src, dest, excludes = []) => {
  if (!existsSync(src)) return;

  fs.mkdir(dest);

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const name = entry.name;
    if (matchesExclude(name, excludes)) continue;

    const srcPath = join(src, name);
    const destPath = join(dest, name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, excludes);
    } else {
      cpSync(srcPath, destPath);
    }
  }
};

const deleteByExt = (dir, ext) => {
  if (!existsSync(dir)) return;

  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      deleteByExt(fullPath, ext);
    } else if (entry.name.endsWith(ext)) {
      fs.rm(fullPath);
    }
  }
};

export const createTempDir = (prefix = "chobble-template-") =>
  mkdtempSync(join(tmpdir(), prefix));

export const cloneTemplate = (dest) => {
  console.log("Cloning chobble-template...");
  const result = git.clone(templateRepo, dest);
  if (result.exitCode !== 0) {
    throw new Error("Failed to clone chobble-template");
  }
  return true;
};

export const installDeps = (dir) => {
  console.log("Installing dependencies...");
  const result = bun.install(dir);
  if (result.exitCode !== 0) {
    throw new Error("Failed to install dependencies");
  }
  return true;
};

export const mergeSiteContent = (templateDir) => {
  console.log("Merging site content...");

  const srcDir = join(templateDir, "src");
  deleteByExt(srcDir, ".md");

  const root = path();
  copyDir(root, srcDir, rootExcludes);
};

export const cleanup = (dir) => {
  console.log("Cleaning up...");
  fs.rm(dir);
};

export const setupTemplate = async (opts = {}) => {
  const { prefix, installDeps: install = true, mergeSite = true } = opts;

  const tempDir = createTempDir(prefix);

  try {
    cloneTemplate(tempDir);

    if (mergeSite) {
      mergeSiteContent(tempDir);
    }

    if (install) {
      installDeps(tempDir);
    }

    return {
      tempDir,
      cleanup: () => cleanup(tempDir),
    };
  } catch (err) {
    cleanup(tempDir);
    throw err;
  }
};

export const runTemplateScript = async (tempDir, script, opts = {}) => {
  const proc = bun.spawn(script, tempDir, opts);
  return proc.exited;
};
