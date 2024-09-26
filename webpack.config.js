const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'rest-api/functions/api-lambdalith/app': './src/rest-api/functions/api-lambdalith/app.ts',
    'ses/functions/incoming-email-processor/index': './src/ses/functions/incoming-email-processor/index.ts',
    // Add more entry points here if needed
  },
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  externals: [
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/lib-dynamodb',
  ],
  optimization: {
    usedExports: true,
    minimize: true,
  },
};