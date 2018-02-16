# @immowelt/eslint-config-immowelt-es5

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)
[![Build Status](https://travis-ci.org/ImmoweltGroup/eslint-config-immowelt-es5.svg?branch=master)](https://travis-ci.org/ImmoweltGroup/eslint-config-immowelt-es5)
[![dependencies Status](https://david-dm.org/ImmoweltGroup/eslint-config-immowelt-es5/status.svg)](https://david-dm.org/ImmoweltGroup/eslint-config-immowelt-es5)
[![devDependencies Status](https://david-dm.org/ImmoweltGroup/eslint-config-immowelt-es5/dev-status.svg)](https://david-dm.org/ImmoweltGroup/eslint-config-immowelt-es5?type=dev)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This package servers as the basis for the JavaScript standards of the Immowelt GmbH.

It sets a bunch of rules and warnings for best practices on how to write a maintainable JavaScript code base, as well as hints on how to write a good performing es5 application.

## Usage

If you want to use the `@immowelt/eslint-config-immowelt-es5` config, you can install it by executing:

```bash
npm i -D @immowelt/eslint-config-immowelt-es5
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": "@immowelt/eslint-config-immowelt-es5"
}
```

# Commit guidelines and semantic release

Our repositories make great use of semantic-release. This tool automatically creates releases once the code is pushed to our master branch and the commits signal a release-worthy CI run.

All commits must contain a prefix of one of the following values, e.g.

Prefix	Description	Release type
!!!	Breaking change	Major
FEATURE	Feature	Minor
BUGFIX	Bugfix	Patch
SECURITY	Security change	Patch
TASK	Other changes	No release

So in case you want to submit a bugfix, you should execute git commit -m "BUGFIX: A short description of what this commit solves - solves #21" where 21 is the issue number of the bug you fix.

## Licensing
See the `LICENSE` file at the root of the repository.
