import nextConfig from "eslint-config-next";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextConfig,
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      ".next/*",
      "node_modules/*",
      "out/*",
      "build/*",
      "public/*",
      "next-env.d.ts",
      ".vercel/*",
    ],
  },
];

export default eslintConfig;
