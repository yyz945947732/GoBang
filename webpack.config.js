const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'GoBang.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 9000,
    hot: true,
    watchContentBase: true,
    contentBase: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
