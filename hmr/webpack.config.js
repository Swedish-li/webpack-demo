const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = (p) => path.resolve(__dirname, p)

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: {
    app: {
      import: resolve('./src/index.js'),
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve('./dist'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
