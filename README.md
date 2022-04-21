# HeyCar

[![Tests](https://github.com/hey-car/hey-ui/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/hey-ui/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/hey-ui/badge.svg)](https://coveralls.io/github/hey-car/hey-ui)
[![Demo build](https://github.com/hey-car/hey-ui/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/hey-ui/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Storybook](https://hey-car.github.io/hey-ui/master/) documentation and sandbox

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

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the AngularJS change log**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)).
To use the wizard, run `npm run cm` in your terminal after staging your changes in git.

Follow this commands:

```bash
$ git add .
$ npm run cm # run the commitizen utility to create a commit
$ git push
```

### Commit Message Scope

The scope could be following the name of the package of the commit change. For example `button`, `input`, etc...
