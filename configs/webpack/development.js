const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  output: {
    publicPath: `/`,
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: '../configs/typescript/development.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ForkTsCheckerWebpackPlugin()],
};
