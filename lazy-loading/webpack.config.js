const path = require('path')

const resolve = (fileName) => path.resolve(__dirname, fileName)

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: {
    index: resolve('./src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: resolve('./dist'),
  },
}
