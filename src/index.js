module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    jquery: true
  },
  rules: {
    'array-bracket-spacing': 'error',
    'brace-style': 'error',
    'comma-style': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'indent': [
      'error',
      2
    ],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'error',
          'warn'
        ]
      }
    ],
    'no-dupe-class-members': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-unneeded-ternary': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-spacing': 'error',
    'padded-blocks': [
      'error',
      'never'
    ],
    'quote-props': [
      'error',
      'consistent'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': 'error'
  }
};
