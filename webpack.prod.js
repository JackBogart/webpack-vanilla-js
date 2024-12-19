const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // Extracts the CSS from a JS file into it's own CSS file
  plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Loader for babel transpiling
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // Minifies CSS for faster load time
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
});
