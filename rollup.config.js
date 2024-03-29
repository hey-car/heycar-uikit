import path from 'path';

import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-ts';
import { ScriptTarget } from 'typescript';

import addCssImports from './tools/rollup/addCssImports';
import bundleCss from './tools/rollup/bundleCss';
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
const tsBuildInfoFile = 'tsconfig.tsbuildinfo';
const rootPkg = require(rootPkgPath);
const pkg = require(currentPkgPath);
const currentComponentName = pkg.name.replace('@heycar-uikit/', '');
const baseDist = 'dist';
const modernDist = `${baseDist}/modern`;
const cssmDist = `${baseDist}/cssm`;
const esmDist = `${baseDist}/esm`;
const rootDir = `../../${baseDist}/${currentComponentName}`;

const baseConfig = {
  input: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{test,types,stories}.{ts,tsx}',
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
        src: [
          'src/**/*.{png,svg,jpg,jpeg,woff,woff2}',
          '!**/__image_snapshots__/**',
        ],
        dest,
      },
    ],
  });

/**
 * `ES5` build with CommonJS modules
 */
const es5 = {
  ...baseConfig,
  output: [
    {
      dir: baseDist,
      format: 'cjs',
      plugins: [addCssImports({ currentPackageDir })],
    },
  ],
  plugins: [
    image(),
    multiInputPlugin,
    typescript({
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        tsBuildInfoFile,
      }),
    }),
    json(),
    ...bundleCss(pkg.name, rootPkg.version, currentComponentName, baseDist),
    copyPlugin(baseDist),
  ],
};

/**
 * `ES2020` build with esm modules.
 */
const modern = {
  ...baseConfig,
  output: [
    {
      dir: modernDist,
      format: 'esm',
      plugins: [
        addCssImports({ currentPackageDir }),
        coreComponentsResolver({ importFrom: modernDist }),
      ],
    },
  ],
  plugins: [
    image(),
    multiInputPlugin,
    typescript({
      outDir: modernDist,
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        target: ScriptTarget.ES2020,
        tsBuildInfoFile,
      }),
    }),
    json(),
    ...bundleCss(pkg.name, rootPkg.version, currentComponentName, modernDist),
    copyPlugin(modernDist),
  ],
};

/**
 * `ES5` build with commonjs modules.
 * `CSS` modules are supplied as is, not compiled.
 */
const cssm = {
  ...baseConfig,
  output: [
    {
      dir: cssmDist,
      format: 'cjs',
      plugins: [coreComponentsResolver({ importFrom: cssmDist })],
    },
  ],
  plugins: [
    image(),
    multiInputPlugin,
    ignoreCss(),
    typescript({
      outDir: cssmDist,
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        tsBuildInfoFile,
      }),
    }),
    json(),
    processCss(),
    copyPlugin(cssmDist),
  ],
};

/**
 * `ES5` build with esm modules.
 */
const esm = {
  ...baseConfig,
  external: baseConfig.external,
  output: [
    {
      dir: esmDist,
      format: 'es',
    },
  ],
  plugins: [
    image(),
    nodeResolve(),
    multiInputPlugin,
    typescript({
      outDir: esmDist,
      tsconfig: resolvedConfig => ({
        ...resolvedConfig,
        tsBuildInfoFile,
      }),
    }),
    json(),
    postcss({
      plugins: [],
      sourceMap: true,
      extract: true,
      minimize: true,
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
      autoModules: false,
    }),
    copyPlugin(esmDist),
  ],
};

/**
 * Building a root package
 */
const root = {
  input: [`${baseDist}/**/*.js`],
  external: baseConfig.external,
  plugins: [
    multiInput({
      relative: baseDist,
    }),
    copy({
      flatten: false,
      targets: [
        { src: [`${baseDist}/**/*`, '!**/*.js'], dest: rootDir },
        {
          src: 'package.json',
          dest: rootDir,
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
  modern,
  esm,
  currentComponentName !== 'themes' && cssm,
  root,
].filter(Boolean);

export default configs;
