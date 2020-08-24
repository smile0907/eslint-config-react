# @codepunkt/eslint-config-react

This package includes a fork of the shareable ESLint configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>

## Install

```sh
yarn add -D eslint @codepunkt/eslint-config-react
```

Then create a file named `.eslintrc.js` with following contents in the root folder of your project:

```json
(module.exports = {
  "extends": "react-app"
})
```

That's it! You can override the settings from `eslint-config-react-app` by editing the `.eslintrc.json` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

## Accessibility Checks

If you want to enable even more accessibility rules, you can create an `.eslintrc.js` file in the root of your project with this content:

```json
{
  "extends": ["react-app", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```
