const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const glob = require('glob');
const appDirectory = path.resolve(__dirname, '../');
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

const getStories = () => {
  const files = glob.sync(
    `${appDirectory}/{docs,packages}/**/*.stories.@(ts|md)x`,
  );

  return files.filter(file => !file.includes('node_modules'));
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  staticDirs: [
    '../packages/fonts/src',
    '../.storybook/public',
  ],
  stories: async list => [...list, ...getStories()],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    '@storybook/addon-controls',
    'storybook-addon-live-examples',
    '@storybook/addon-viewport'
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
      exclude: [cssModuleRegex],
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
        'postcss-loader',
      ],
    };
    group.oneOf[cssModuleRuleIndex] = {
      test: cssModuleRegex,
      exclude: /node_modules/,
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
