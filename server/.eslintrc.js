module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': "off"
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', `${__dirname}/src`]],
        extensions: ['.ts', '.js'],
      },
    },
  },
};
