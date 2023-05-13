// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/** @type {ConfigData['rules']} */
const unicornRules = {
  'unicorn/filename-case': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-useless-undefined': 'off',
  'unicorn/numeric-separators-style': 'off',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-spread': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/switch-case-braces': ['error', 'avoid']
}

/** @type {ConfigData['rules']} */
const importRules = {
  'sort-imports': 'off',
  'import/order': ['error', {
    alphabetize: {
      order: 'asc',
      caseInsensitive: true
    }
  }],
  'import-newlines/enforce': ['error', {
    items: 1,
    semi: false
  }]
}

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    '@eslint-recommended/eslint-config-typescript'
  ],
  plugins: [
    'import-newlines'
  ],
  rules: {
    ...unicornRules,
    ...importRules
  }
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
