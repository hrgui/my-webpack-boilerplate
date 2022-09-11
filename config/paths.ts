import fs from "fs";
import * as path from "path";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export const paths = {
  appSrc: resolveApp("./src/index.tsx"),
  appPath: resolveApp("."),
  appHtml: resolveApp("public/index.html"),
  appPublic: resolveApp("public"),
};

export const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
];
