// 导入包路径
const path = require('path')

// 插件引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
// 入口文件
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/',
      './src/js/index.js'
    ]
  },
// 输出文件 build下bundle.js
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
// 使用loader模块
  module: {
    rules: [
      {test:/\.(scss|css)$/, use: [ 'style-loader', 'css-loader','sass-loader' ] }
    ]
  },
// 插件引入cl
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]

}
