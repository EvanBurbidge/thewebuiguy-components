const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  }
}