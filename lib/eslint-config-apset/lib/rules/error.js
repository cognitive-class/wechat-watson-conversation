'use strict';

module.exports = {
  rules: {
    /**
     * require trailing commas in multiline object literals
     * @see http://eslint.org/docs/rules/comma-dangle
     * @see http://blog.hotoo.me/post/trailing-commas
     */
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],

    /**
     * This rule warns the usage of `console`
     * @see http://eslint.org/docs/rules/no-console
     */
    'no-console': 'off',
  },
};
