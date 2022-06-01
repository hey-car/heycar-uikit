import path from 'path';

// replace css absolute path to require
const addCssImports = ({ currentPackageDir }) => {
  return {
    name: 'add-css-imports',
    generateBundle: (options, bundles) => {
      Object.keys(bundles).forEach(bundleName => {
        let { code } = bundles[bundleName];
        const cssFilePathRegExp = new RegExp(/,"cssfilepath":"(.*)"/g);
        const searchResult = code.match(cssFilePathRegExp);

        if (searchResult && searchResult.length) {
          searchResult.forEach(match => {
            const cssFileName = match.replace(/,"cssfilepath":"(.*?)"/g, '$1');
            const distDir = path.resolve(currentPackageDir, 'dist');
            const bundleAbsPath = path.join(distDir, bundleName);
            const bundleDir = path.dirname(bundleAbsPath);
            const cssRelativePath = path.relative(bundleDir, cssFileName);

            code = code.replace(
              new RegExp(/,"cssfilepath":"(.*?)"};/),
              `};\n require('./${cssRelativePath}')`,
            );
          });
        }

        bundles[bundleName].code = code;
      });

      return bundles;
    },
  };
};

export default addCssImports;
