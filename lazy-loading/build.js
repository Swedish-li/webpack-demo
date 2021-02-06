const webpack = require('webpack')
const config = require('./webpack.config')
const rm = require('rimraf')
const path = require('path')

const resolve = (fileName) => path.resolve(__dirname, fileName)

rm(resolve('./dist'), (err) => {
  if (err) throw new Error(err)

  webpack(config, (error, stats) => {
    if (err) throw new Error(error)
    process.stdout.write(
      `${stats.toString({
        colors: true,
        modules: true,
        children: false,
        chunks: true,
        chunkModules: true,
      })}\n\n`
    )
  })
})
