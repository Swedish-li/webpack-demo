const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
            // , {
            //     test: require.resolve('velocity-animate/velocity'),
            //     use: [{
            //         loader: 'expose-loader',
            //         options: 'Velocity'
            //     }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
        })
    ]
}