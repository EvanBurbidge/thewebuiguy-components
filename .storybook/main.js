const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'sass-loader', 'css-loader?modules&importLoaders',],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  }
}