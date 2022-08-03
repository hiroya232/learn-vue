module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "import", "unused-imports"],
  ignorePatterns: ["/src/vite-env.d.ts"],
  rules: {
    "indent": ["error", 2],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          [
            "parent",
            "sibling"
          ],
          "object",
          "type",
          "index"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
      }
    ],
    "unused-imports/no-unused-imports": "error"
  }
};
