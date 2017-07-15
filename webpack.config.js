var webpack = require('webpack');
var path = require('path');

module.exports = {
	//页面入口文件配置
	entry:{
		index:'./src/index.js'
	},
	output:{
		path:path.join(__dirname, 'build'),
		filename:"[name].js"
	},
	resolve: {
        extensions: ['.js', '.jsx']
    },
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
		        	presets: ['es2015','react']
		    	}
		    }
		]
	},
	//插件项
	plugins:[
		// new webpack.BannerPlugin('This file is created by yangzhong')
	]
}
