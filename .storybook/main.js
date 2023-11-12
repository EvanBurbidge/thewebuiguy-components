const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import remarkGfm from 'remark-gfm';

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
    {
      name: '@storybook/addon-docs',
      // options: {
      //   mdxPluginOptions: {
      //     mdxCompileOptions: {
      //       remarkPlugins: [remarkGfm],
      //     },
      //   },
      // },
    }
  ],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },

  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },

  docs: {
    autodocs: false
  },
  staticDirs: ['../public'],
}