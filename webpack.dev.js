const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // Creates source maps to match errors to correct lines/files
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // Forces dev server to auto-restart when HTML updates as well
    watchFiles: ['./src/index.html'],
  },
  module: {
    rules: [
      // Loads CSS and adds the javascript to apply those styles
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
