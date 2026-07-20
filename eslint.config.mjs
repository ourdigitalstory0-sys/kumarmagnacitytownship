import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript"
    ],
  }),
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/out/**",
      "**/build/**",
      "**/public/**",
      "next-env.d.ts",
      "**/.vercel/**",
    ]
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@next/next/no-before-interactive-script-outside-document": "off",
      "react-hooks/exhaustive-deps": "off",
      "prefer-const": "off",
      "@next/next/no-img-element": "off"
    }
  },
];

export default eslintConfig;
