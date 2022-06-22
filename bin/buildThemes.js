const shell = require('shelljs');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssColorMod = require('postcss-color-mod-function');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');

const replaceMixinToRoot = css => css.replace(/@define-mixin.*$/m, ':root {');

const processComponentTheme = cssFile => {
  const colors = glob.sync(
    path.resolve(__dirname, '../packages/vars/src/colors.css'),
  );

  const content = fs.readFileSync(cssFile, 'utf-8');

  return postcss([
    postcssImport({}),
    postcssColorMod({
      unresolved: 'throw',
      importFrom: colors,
    }),
  ])
    .process(content, { from: cssFile, to: cssFile })
    .then(result => result.css);
};

const processRootTheme = cssFile => {
  const getImports = () => {
    return glob
      .sync(path.resolve(__dirname, '../packages/vars/src/*.css'))
      .map(varFile => `@import '${varFile}';`);
  };

  const withImports = css => getImports().concat(css).join('\n');

  // Add variable imports, change mixin to :root
  const content = withImports(
    replaceMixinToRoot(fs.readFileSync(cssFile, 'utf-8')),
  );

  return postcss([postcssImport(), postcssMixins()])
    .process(content, { from: cssFile, to: cssFile })
    .then(result => result.css);
};

(async () => {
  // Go to the folder with missins and parse topics
  shell.cd('dist');

  const themes = glob.sync('./*.css', {});

  for (const themeFile of themes) {
    const cssFile = themeFile;
    const theme = path.basename(themeFile).replace('.css', '');
    const contentFileTheme = await processRootTheme(cssFile);

    shell.mkdir('-p', '../css');

    fs.writeFileSync(`../css/${theme}.css`, contentFileTheme);
  }

  // Move generated css files to /dist
  shell.cd('../');
  shell.cp('-R', './css/.', './dist');
  shell.rm('-rf', './css');
})();
