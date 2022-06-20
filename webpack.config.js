const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const scssDtsBanner = `
/* eslint-disable */
// prettier-ignore
// This file is automatically generated by typings-for-css-modules.
// Don't change it directly!
`;

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
    assetModuleFilename: 'assets/[name].[hash][ext][query]'
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              banner: scssDtsBanner
            }
          },
          {
            loader: 'css-loader',
            options: {
              // esModule: false,
              modules: true,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
        exclude: ['/src/components/', /node_modules/]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ],
        exclude: ['/components/', /node_modules/],
        include: /main\.scss/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new ForkTsCheckerWebpackPlugin()],
};
