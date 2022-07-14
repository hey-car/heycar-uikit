const path = require('path');
const componentResolver = require('./utils/componentsResolver');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const cssModuleRegex = /\.module\.css$/;
const cssRegex = /\.css$/;

const addPackagesDir = config => {
  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(nestedRule => {
        if (nestedRule.loader && nestedRule.loader.includes('babel-loader')) {
          nestedRule.include.push(`${process.cwd()}/packages`);
        }
      });
    }
  });
};

module.exports = {
  core: {
    builder: 'webpack5',
  },
  staticDirs: [
    '../packages/fonts/src',
    '../.storybook/public',
  ],
  stories: [
    '../docs/**/*.stories.@(ts|md)x',
    '../packages/**/*.stories.@(ts|md)x',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    'storybook-addon-live-examples',
  ],
  webpackFinal: async config => {
    addPackagesDir(config);

    config.resolve.alias.storybook = path.resolve(__dirname);

    config.performance.hints = false;

    const group = config.module.rules.find(rule => rule.oneOf !== undefined);
    const cssRuleIndex = group.oneOf.findIndex(
      rule => rule.test.toString() === cssRegex.toString(),
    );
    const cssModuleRuleIndex = group.oneOf.findIndex(
      rule => rule.test.toString() === cssModuleRegex.toString(),
    );

    group.oneOf[cssRuleIndex] = {
      test: cssRegex,
      exclude: cssModuleRegex,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          // options: {
          //   hmr: true,
          // },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
          },
        },
        'css-loader',
        'postcss-loader',
      ],
    };
    group.oneOf[cssModuleRuleIndex] = {
      test: cssModuleRegex,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          // options: {
          //   hmr: true,
          // },
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:5]',
            },
            importLoaders: 1,
            sourceMap: true,
          },
        },
        'postcss-loader',
      ],
    };

    config.module.rules.push({
      test: /\.module\.tsx?$/,
      use: [
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin(),
      new CssMinimizerPlugin({
        parallel: true,
        test: cssRegex,
      }),

      // new OptimizeCSSAssetsPlugin({
      //   cssProcessorOptions: {
      //     map: {
      //       inline: false,
      //       annotation: true,
      //     },
      //   },
      //   cssProcessorPluginOptions: {
      //     preset: () => ({
      //       plugins: [require('postcss-discard-duplicates')],
      //     }),
      //   },
      // }),
    );

    return config;
  },
};
