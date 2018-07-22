const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMajorVersion = require('webpack/package.json').version.split('.')[0];
const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist/webpack-' + webpackMajorVersion),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            // importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

// 设置 mode