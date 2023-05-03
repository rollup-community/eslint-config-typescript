[![npm version](https://badge.fury.io/js/%40rollupjs%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40rollupjs%2Feslint-config-typescript)
[![lint](https://github.com/rollup-community/eslint-config-typescript/actions/workflows/lint.yml/badge.svg)](https://github.com/rollup-community/eslint-config-typescript/actions/workflows/lint.yml)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# @rollupjs/eslint-config-typescript

ESLint Shareable Config for TypeScript

## Installation

npm:

```sh
npm i -D @rollupjs/eslint-config-typescript
```

Yarn:

```sh
yarn add -D @rollupjs/eslint-config-typescript
```

## Usage

Add `@rollupjs/eslint-config-typescript` to `extends` of your ESLint config.

```js
module.exports = {
  extends: [
    '@rollupjs/eslint-config-typescript'
    // add other rulesets here if needed
  ],
  rules: {
    // override/add rules settings here if needed
  }
}
```
