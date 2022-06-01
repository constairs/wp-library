const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        },
        {
          loader: 'resolve-url-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sourceMap: true,
          }
        }
      ],
    })
// 'resolve-url-loader',
    return config;
  }
}
