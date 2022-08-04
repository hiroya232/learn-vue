module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  plugins: ['vue', '@typescript-eslint', 'import', 'unused-imports'],
  ignorePatterns: ['/src/vite-env.d.ts'],
  rules: {
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'indent': ['error', 2],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          [
            'parent',
            'sibling'
          ],
          'object',
          'type',
          'index'
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
      }
    ],
    'unused-imports/no-unused-imports': 'error'
  }
};
