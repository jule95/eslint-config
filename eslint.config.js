import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import importQuotes from 'eslint-plugin-import-quotes';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactRefresh.configs.recommended,
  reactHooks.configs[`recommended-latest`],
  { ignores: [`dist`] },
  {
    files: [`**/*.ts`, `**/*.tsx`, `**/*.js`],
    languageOptions: {
      globals: {
        document: `readonly`,
        navigator: `readonly`,
        window: `readonly`,
      },
      parser: tseslint.parser,
    },
    plugins: {
      'import-quotes': importQuotes,
      react,
    },
    rules: {
      "arrow-body-style": [1, `as-needed`],
      "comma-dangle": [`error`, {
        arrays: `always-multiline`,
        exports: `never`,
        functions: `never`,
        imports: `never`,
        objects: `always-multiline`,
      }],
      "eol-last": [2, `always`] ,
      "import-quotes/import-quotes": [2, `single`],
      indent: [2, 2, { SwitchCase: 1 }],
      "no-console": 1,
      "object-curly-spacing": [2, `always`],
      "prefer-const": 2,
      "quote-props" :[2, `as-needed`],
      quotes: [2, `backtick`],
      'react-refresh/only-export-components': [
        `warn`,
        { allowConstantExport: true },
      ],
      "react/function-component-definition": [2, {
        namedComponents: `arrow-function`,
      }],
      "react/jsx-closing-bracket-location": [2, `after-props`],
      "react/jsx-first-prop-new-line": [2, `multiline-multiprop`],
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      "react/jsx-max-props-per-line": [2, { maximum: { multi: 1, single: 1 } }],
      "react/jsx-sort-props": [2, {
        callbacksLast: true,
        ignoreCase: true,
        locale: `auto`,
        multiline: `ignore`,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      }],
      "react/jsx-tag-spacing": [2],
      semi: [2, `always`],
      "sort-keys": [2],
    },
    settings: {
      react: { version: `detect` },
    },
  },
];
