const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './main.jsx',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new Webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template:'./index.html'})
  ]
}