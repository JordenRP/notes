const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pug = {
  test: /\.pug$/,
  use: ['pug-loader']
};

const sass = {
  test: /\.sass$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
  })
}

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/layout.pug'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    rules: [pug, sass]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {}
   if (argv.mode === 'production') {}
  return config;
  }