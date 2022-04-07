#HeyCar

[![Tests](https://github.com/hey-car/hey-ui/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/hey-ui/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/hey-ui/badge.svg)](https://coveralls.io/github/hey-car/hey-ui)

## Get started with the storybook

```bash
$ npm i
$ npm run start
```

## Building packages

```bash
$ npm i
$ npm run build
```

#### Building result

Build results in the `dist` folder on the root and in the folder `dist` in each package in the packages folder.

#### Build format support

- `es5` - `ES5` build with CommonJS modules
- `modern` - `ES2020` build with esm modules.
- `cssm` - `ES5` build with commonjs modules. `CSS modules` are supplied as is, not compiled.
- `esm` - `ES5` build with esm modules.
