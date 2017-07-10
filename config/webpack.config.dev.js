const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // eslint-disable-line 
const paths = require('./paths')

module.exports = {
  entry: ['whatwg-fetch', './src/integration.js'],
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=env'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.integrationHtml,
    }),
  ]
}
