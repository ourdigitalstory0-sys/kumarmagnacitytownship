import { defineConfig, globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next/dist/index.js";
import nextVitals from "eslint-config-next/dist/core-web-vitals.js";
import nextTs from "eslint-config-next/dist/typescript.js";

const eslintConfig = defineConfig([
  ...nextConfig,
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/*",
    "node_modules/*",
    "out/*",
    "build/*",
    "public/*",
    "next-env.d.ts",
    ".vercel/*",
  ]),
]);

export default eslintConfig;
