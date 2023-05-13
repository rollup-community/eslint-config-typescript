const unicornRules = {
  'unicorn/filename-case': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-useless-undefined': 'off',
  'unicorn/numeric-separators-style': 'off',
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-spread': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/switch-case-braces': ['error', 'avoid']
}

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

module.exports = {
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
