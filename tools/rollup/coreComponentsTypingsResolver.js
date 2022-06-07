import path from 'path';

import globby from 'globby';

import { checkOrCreateDir, readFile, writeFile } from './common';

const importTypesRegexp = /((?:from |import\()['"])@heycar-uikit\/(.+?)(['"])/;

async function transformTypings(source, rootDir) {
  const rootAbsDir = path.resolve(rootDir);
  const sourceAbs = path.resolve(source);

  let fileContent = await readFile(source, 'utf-8');

  let matches;

  while ((matches = importTypesRegexp.exec(fileContent))) {
    const componentName = matches[2];

    const componentRelativePath = path.relative(
      path.dirname(sourceAbs),
      componentName,
    );

    fileContent = fileContent.replace(
      importTypesRegexp,
      `$1${componentRelativePath}$3`,
    );
  }

  let dest = path.join(rootAbsDir, source.replace('dist/', ''));

  await checkOrCreateDir(path.dirname(dest));

  await writeFile(dest, fileContent);
}

/**
 * Replaces all core component type imports with relative paths.
 * Used to build an aggregation package.
 */
function coreComponentsTypingsResolver({ rootDir }) {
  return {
    name: 'core-components-typings-resolver',
    generateBundle: async () => {
      try {
        const matchedPaths = await globby('dist/**/*.d.ts');

        await Promise.all(
          matchedPaths.map(path => transformTypings(path, rootDir)),
        );
      } catch (error) {
        console.log(error);
      }
    },
  };
}

export default coreComponentsTypingsResolver;
