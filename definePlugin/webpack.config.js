const { DefinePlugin } = require('webpack')
const path = require('path')

const resolve = (p) => path.resolve(__dirname, p)

const isProd = process.argv.includes('production')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: resolve('./main.js'),
  output: {
    path: resolve('./dist'),
    filename: `bundle.${isProd ? 'prod' : 'dev'}.js`,
  },
  plugins: [
    new DefinePlugin({
      __DEV__: process.argv.includes('development'),
    }),
  ],
}
