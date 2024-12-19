const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    // Allows webpack to handle HTML and inject script tag
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    // Forces browsers to load updated content instead of cache by using hash
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // Loader for images imported in JS
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Loader for font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // Loader for images in HTML
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
