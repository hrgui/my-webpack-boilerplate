import fs from "fs";
import * as path from "path";
import { getPublicUrlOrPath } from "./env";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === "development",
  require(resolveApp("package.json")).homepage,
  process.env.PUBLIC_URL
);

export const paths = {
  appSrc: resolveApp("./src/index.tsx"),
  appPath: resolveApp("."),
  appHtml: resolveApp("public/index.html"),
  appPublic: resolveApp("public"),
  publicUrlOrPath,
};

console.log(paths);

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
