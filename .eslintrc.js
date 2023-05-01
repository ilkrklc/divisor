module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/extensions': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/prefer-default-export': 'off',
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 110,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
