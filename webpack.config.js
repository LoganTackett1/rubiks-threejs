const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clears dist before each build
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // make sure you have this file in src/
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/blender', to: 'blender' }, // copies models into dist/blender
      ],
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 8080,
    open: true,
  },
};
