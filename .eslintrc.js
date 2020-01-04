module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "quotes": ["error", "double"],
    "indent": ["error", 4],
    "semi": ["error", "always"],
    "no-console": 1,
    "no-irregular-whitespace": "off",
    "no-case-declarations": "off",
    "arrow-body-style": ["off"],
    "class-methods-use-this": ["off"],
    "no-param-reassign": ["off"],
    "linebreak-style": [0, "error", "windows"],
    "comma-dangle": "off"
  },
};
