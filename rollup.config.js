import path from 'path';

import json from '@rollup/plugin-json';
// import multiInput from '@rollup/plugin-multi-entry';
import copy from 'rollup-plugin-copy';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-ts';
import { ScriptTarget } from 'typescript';

import addCssImports from './tools/rollup/addCssImports';
import {
  coreComponentsResolver,
  coreComponentsRootPackageResolver,
} from './tools/rollup/coreComponentsResolver';
import coreComponentsTypingsResolver from './tools/rollup/coreComponentsTypingsResolver';
import createPackageJson from './tools/rollup/createPackageJson';
import generateClassNameHash from './tools/rollup/generateClassNameHash';
import ignoreCss from './tools/rollup/ignoreCss';
import processCss from './tools/rollup/processCss';

const currentPackageDir = process.cwd();

const currentPkgPath = path.join(currentPackageDir, 'package.json');
const rootPkgPath = path.resolve(currentPackageDir, '../../package.json');

const rootPkg = require(rootPkgPath);
const pkg = require(currentPkgPath);

const currentComponentName = pkg.name.replace('@hey-ui/', '');

const baseConfig = {
  input: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{test,stories}.{ts,tsx}',
    '!src/**/*.mdx',
    '!src/**/*.d.ts',
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

const multiInputPlugin = multiInput();

const copyPlugin = dest =>
  copy({
    flatten: false,
    targets: [
      {
        src: ['src/**/*.{png,svg,jpg,jpeg}', '!**/__image_snapshots__/**'],
        dest,
      },
    ],
  });

const postcssPlugin = postcss({
  modules: {
    generateScopedName: function (name, fileName) {
      const relativeFileName = path.relative(currentPackageDir, fileName);

      const hash = generateClassNameHash(
        pkg.name,
        rootPkg.version,
        relativeFileName,
      );

      return `${currentComponentName}__${name}_${hash}`;
    },
  },
  extract: true,
  separateCssFiles: true,
  packageName: pkg.name,
  packageVersion: pkg.version,
});

/**
 * ES5 build with commonjs modules.
 */
const es5 = {
  ...baseConfig,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      plugins: [addCssImports({ currentPackageDir })],
    },
  ],
  plugins: [
    multiInputPlugin,
    typescript({
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        tsBuildInfoFile: 'tsconfig.tsbuildinfo',
      }),
    }),
    json(),
    postcssPlugin,
    copyPlugin('dist'),
  ],
};

/**
 * Building ES2020 with esm modules.
 */
const modern = {
  ...baseConfig,
  output: [
    {
      dir: 'dist/modern',
      format: 'esm',
      plugins: [
        addCssImports({ currentPackageDir }),
        coreComponentsResolver({ importFrom: 'dist/modern' }),
      ],
    },
  ],
  plugins: [
    multiInputPlugin,
    typescript({
      outDir: 'dist/modern',
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        target: ScriptTarget.ES2020,
        tsBuildInfoFile: 'tsconfig.tsbuildinfo',
      }),
    }),
    json(),
    postcssPlugin,
    copyPlugin('dist/modern'),
  ],
};

/**
 * ES5 build with commonjs modules.
 * CSS modules are supplied as is, not compiled.
 */
const cssm = {
  ...baseConfig,
  output: [
    {
      dir: 'dist/cssm',
      format: 'cjs',
      plugins: [coreComponentsResolver({ importFrom: 'dist/cssm' })],
    },
  ],
  plugins: [
    multiInputPlugin,
    ignoreCss(),
    typescript({
      outDir: 'dist/cssm',
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        tsBuildInfoFile: 'tsconfig.tsbuildinfo',
      }),
    }),
    json(),
    processCss(),
    copyPlugin('dist/cssm'),
  ],
};

/**
 * Building ES5 with esm modules.
 */
const esm = {
  ...baseConfig,
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      plugins: [
        addCssImports({ currentPackageDir }),
        coreComponentsResolver({ importFrom: 'dist/esm' }),
      ],
    },
  ],
  plugins: [
    multiInputPlugin,
    typescript({
      outDir: 'dist/esm',
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        tsBuildInfoFile: 'tsconfig.tsbuildinfo',
      }),
    }),
    json(),
    postcssPlugin,
    copyPlugin('dist/esm'),
  ],
};

const rootDir = `../../dist/${currentComponentName}`;

/**
 * Building a root package
 */
const root = {
  input: ['dist/**/*.js'],
  external: baseConfig.external,
  plugins: [
    multiInput({
      relative: 'dist',
    }),
    copy({
      flatten: false,
      targets: [
        { src: ['dist/**/*', '!**/*.js'], dest: rootDir },
        {
          src: 'package.json',
          dest: `../../dist/${currentComponentName}`,
          transform: () => createPackageJson('./esm/index.js'),
        },
      ],
    }),
    coreComponentsRootPackageResolver({ currentPackageDir }),
  ],
  output: [
    {
      dir: rootDir,
      plugins: [coreComponentsTypingsResolver({ rootDir })],
    },
  ],
};

const configs = [
  es5,
  // modern,
  // esm,
  // currentComponentName !== 'themes' && cssm,
  // root,
].filter(Boolean);

export default configs;

// export default [
//   {
//     ...baseConfig,
//     input: '*.ts',
//     plugins: [typescript(), postcssPlugin],
//     output: {
//       file: 'dist/bundle.js',
//       format: 'cjs',
//     },
//   },
// ];
