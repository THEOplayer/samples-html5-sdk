import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
    { ignores: ['build/', 'dist/', 'static/THEOplayer/'] },
    js.configs.recommended,
    prettierRecommended,
    {
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            globals: globals.browser
        },
        rules: {
            quotes: [2, 'single', 'avoid-escape'],
            semi: [2, 'always'],
            'no-extra-boolean-cast': 'off',
            'no-unused-vars': [1, { ignoreRestSiblings: true, argsIgnorePattern: 'res|next|^err' }],
            'prettier/prettier': [
                'error',
                { trailingComma: 'none', singleQuote: true, tabWidth: 4, semi: true, printWidth: 150, arrowParens: 'avoid' }
            ]
        }
    },
    {
        files: ['scripts/**', 'eslint.config.mjs'],
        languageOptions: { globals: globals.node }
    }
];
