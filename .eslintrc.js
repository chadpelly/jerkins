module.exports = {

  extends: ['standard-with-typescript', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    "project": ["./tsconfig.json"],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
  ignorePatterns: ['.eslintrc.js']
}
