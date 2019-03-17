module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      2,
      "single",
    ],
    "comma-dangle": [
      2,
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "operator-linebreak": [
      2,
      "before",
      {
        "overrides": {
          "&&": "after",
          "?": "after",
          ":": "after"
        }
      }
    ],
    "no-console": "error",
    "arrow-parens": [
      "error",
      "as-needed"
    ]
  },
};
