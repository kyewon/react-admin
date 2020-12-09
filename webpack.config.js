const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './build');

module.exports = {
  context: sourcePath,
  entry: {
    app: './main.tsx',
  },
    output: {
    path: outPath,
    filename: '[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, 'src/app/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: [
          {
              loader: 'ts-loader',
              options: {
                  transpileOnly: true,
                  experimentalWatchApi: true,
              },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ]
      },
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
            filename: '[hash].css',
            disable: false
          }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      },
    }),
  ],
};