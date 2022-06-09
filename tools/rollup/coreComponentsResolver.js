import path from 'path';

import { requireRegExp } from './common';

/**
 * Replaces all imports of core components with relative paths.
 * Used to build an aggregation package.
 */
export const coreComponentsRootPackageResolver = ({ currentPackageDir }) => ({
  name: 'core-components-root-package-resolver',
  generateBundle: (_, bundles) => {
    Object.keys(bundles).forEach(bundleName => {
      let code = bundles[bundleName].code;

      let matches;

      while ((matches = requireRegExp.exec(code))) {
        const componentName = matches[2];

        const distDir = path.resolve(currentPackageDir, 'dist');
        const bundleAbsPath = path.join(distDir, bundleName);
        const bundleDir = path.dirname(bundleAbsPath);
        const componentRelativePath = path
          .relative(bundleDir, componentName)
          .replace('/dist', ''); // remove dist from the path, since it is not in the root package

        code = code.replace(requireRegExp, `$1${componentRelativePath}$3`);
      }

      bundles[bundleName].code = code;
    });

    return bundles;
  },
});

/**
 * Replaces component imports for building modern/cssm/esm
 */
export const coreComponentsResolver = ({ importFrom }) => ({
  name: 'core-components-resolver',
  generateBundle: (_, bundles) => {
    Object.keys(bundles).forEach(bundleName => {
      let code = bundles[bundleName].code;

      const requireRegExp = new RegExp(
        /(\b(?:require\(|import |from )['"])(@heycar-uikit\/[^\/\n]+)(['"])/,
      );

      while (requireRegExp.exec(code)) {
        code = code.replace(requireRegExp, `$1$2/${importFrom}$3`);
      }

      bundles[bundleName].code = code;
    });

    return bundles;
  },
});
