const path = require('path')
const resolve = (p) => path.resolve(__dirname, p)

module.exports = {
  mode: 'development',
  entry: resolve('./main.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
  },
}
