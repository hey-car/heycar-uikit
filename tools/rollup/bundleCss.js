import path from 'path';

import glob from 'glob';
import postcss from 'rollup-plugin-postcss';

import generateClassNameHash from './generateClassNameHash';

const currentPackageDir = process.cwd();

const bundleCss = (packageName, packageVersion, currentComponentName, dist) => {
  const config = [];
  const files = glob.sync(path.resolve(__dirname, '**/*.css'));

  files.forEach(file => {
    const filename = file
      .substring(file.lastIndexOf('/') + 1, file.length)
      .toLowerCase()
      .replace('.module', '');
    const folderName = path.basename(file.substring(0, file.lastIndexOf('/')));

    config.push(
      postcss({
        include: file,
        extract: path.resolve(`${dist}/${folderName}/${filename}`),
        modules: {
          generateScopedName: function (name, fileName) {
            const relativeFileName = path.relative(currentPackageDir, fileName);
            const hash = generateClassNameHash(
              packageName,
              packageVersion,
              relativeFileName,
            );

            return `${currentComponentName}__${name}_${hash}`;
          },
          getJSON(filepath, json) {
            json.cssfilepath = filepath
              .replace('src', 'dist')
              .replace('.module', '');
          },
        },
      }),
    );
  });

  return config;
};

export default bundleCss;
