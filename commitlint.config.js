const {
  utils: { getPackages },
} = require('@commitlint/config-lerna-scopes');

const packageNamePrefixRegExp = /^heycar-uikit-/;

function deletePackagesPrefix(arr) {
  return arr.map(packageName =>
    packageName.replace(packageNamePrefixRegExp, ''),
  );
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': async ctx => [
      2,
      'always',
      [...deletePackagesPrefix(await getPackages(ctx))],
    ],
  },
};
