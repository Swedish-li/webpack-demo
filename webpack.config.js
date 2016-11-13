const path = require('path'); //导入包路径

module.exports = {
	//入口文件
	entry: {
		app: [
                'webpack-dev-server/client?http://localhost:8080/',
                './src/js/index.js'
            ]
	} ,

	//输出文件 build下bundle.js
	output: {
		path: path.resolve(__dirname,'build'),
		filename: "bundle.js"
	},

	//使用loader模块
	module:{
		loaders:[
			{test:/\.css$/,loaer: "style!css"}
		],
		loaders: [
			{test: /\.scss$/,loader: "style!css!sass"}
		]
	},

}