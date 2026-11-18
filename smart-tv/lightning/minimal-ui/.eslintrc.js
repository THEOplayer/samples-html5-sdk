module.exports = {
  root: true,
  env: {
    browser: true,
    es6: false,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'always'],
    'no-extra-boolean-cast': 'off',
    'no-unused-vars': [
      1,
      {
        'ignoreSiblings': true,
        'argsIgnorePattern': 'res|next|^err'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: false,
        singleQuote: true,
        tabWidth: 4,
        semi: true,
        printWidth: 150,
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
