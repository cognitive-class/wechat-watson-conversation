'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    /**
     * This rule disallows the use of parens when they are no required
     * @see http://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': [ 'error', 'as-needed' ],
  },
};
