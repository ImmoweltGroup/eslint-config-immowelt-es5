const {linter} = require('eslint');
const config = require('./index.js');

const runEslint = str => linter.verify(str, config, {filename: 'foo.js'});

describe('eslint-config-immowelt-es5', () => {
  it('should export a valid eslint config object structure.', () => {
    expect(typeof config).toBe('object');
  });

  it('should not throw errors when checking a valid code fixture.', () => {
    const errors = runEslint(`var x = true;

if (x) {
  console.warn('warning');
}

`);

    expect(errors).toEqual([]);
  });
});
