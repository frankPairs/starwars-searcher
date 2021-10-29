const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  output: {
    publicPath: process.env.PUBLIC_PATH,
    filename: '[name].[contenthash].js',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: '../configs/typescript/production.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(),
  ],
};
