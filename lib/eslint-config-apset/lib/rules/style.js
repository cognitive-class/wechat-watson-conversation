'use strict';

module.exports = {
  rules: {
    /**
     * enforce spaces inside of brackets
     * @see http://eslint.org/docs/rules/array-bracket-spacing
     */
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
      singleValue: false,
    }],

    /**
     * enforce spaces inside of single line blocks
     * @see http://eslint.org/docs/rules/block-spacing
     */
    'block-spacing': [ 'error', 'always' ],

    /**
     * not require a capital letter for constructors
     * @see http://eslint.org/docs/rules/new-cap
     */
    'new-cap': 'off',

    /**
     * Disallow unused expressions
     * @see http://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'off',

    /**
     * Doesn't require `return` statements to either always or never specify values
     * @see http://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'off',

    /**
     * allow use of unary operators, ++ and --
     * @see http://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 'off',

    /**
     * not require function expressions to have a name
     * @see http://eslint.org/docs/rules/func-names
     */
    'func-names': 'off',

    /**
     * specify the maximum depth that blocks can be nested
     * @see http://eslint.org/docs/rules/max-depth
     */
    'max-depth': 'off',

    /**
     * not specify the maximum length of a line in your program
     * @see http://eslint.org/docs/rules/max-len
     */
    'max-len': 'off',

    /**
     * allow multi assign
     * @see http://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'off',

    /**
     * not require consistent line break in function parentheses
     * @see http://eslint.org/docs/rules/function-paren-newline
     */
    'function-paren-newline': 'off',

    /**
     * Allow reassignment of function parameters
     * @see http://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'off',

    /**
     * allow underscore dangle
     * @see http://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': 'off',

    /**
     * not require space before function
     * @see http://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': 'off',
  },
};
