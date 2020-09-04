'use strict'

const eslintConfigReactApp = require('eslint-config-react-app')

// remove flowtype plugin and set ecmaVersion to 2020
module.exports = {
  ...eslintConfigReactApp,
  plugins: eslintConfigReactApp.plugins.filter((p) => p !== 'flowtype'),
  parserOptions: {
    ...eslintConfigReactApp.parserOptions,
    ecmaVersion: 2020,
  },
  overrides: [
    {
      ...eslintConfigReactApp.overrides[0],
      parserOptions: {
        ...eslintConfigReactApp.overrides[0].parserOptions,
        ecmaVersion: 2020,
      },
    },
  ],
  // remove all keys that start with "flowtype/"
  rules: {
    ...Object.entries(eslintConfigReactApp.rules).reduce((acc, [key, val]) => {
      return key.startsWith('flowtype/') ? acc : { ...acc, [key]: val }
    }, {}),
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
  },
}
