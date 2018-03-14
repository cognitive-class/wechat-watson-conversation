'use strict';

module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    './rules/strict',
    './rules/style',
    './rules/error',
  ].map(require.resolve),
};
