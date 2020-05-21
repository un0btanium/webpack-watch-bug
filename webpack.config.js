const path = require('path');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname),
	entry: {
		index: path.join(__dirname, 'frontend', 'index.js')
	},
	output: {
		path: path.join(__dirname, 'backend', 'public'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: [/node_modules/, /bower_components/],
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						[
							"@babel/preset-env",
							{
								targets: {
									ie: 11
								},
								useBuiltIns: "usage",
								corejs: 3
							}
						]
					]
				}
			}
		}]
	},
	resolve: {
		extensions: ['.json', '.js'],
		alias: {
			'frontend': path.join(__dirname, 'frontend')
		}
	},
	watchOptions: {
		ignored: ['node_modules/**']
	},
	devtool: 'source-map'
};