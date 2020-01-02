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
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': 'off',
      'linebreak-style': 'off',
      'no-use-before-define': 'off',
      'no-plusplus':'off',
      'consistent-return':'off',
      'no-param-reassign':'off',
      'no-console':'off',
      'no-restricted-globals':'off',
      'max-len':'off'
    },
  };
  