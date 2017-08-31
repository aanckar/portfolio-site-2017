const webpack = require('webpack')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		'app': ['babel-polyfill', './app.js'],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] }
				}],
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader' 
					}, {
						loader: 'sass-loader',
						options: {
							includePaths: [
								path.resolve(__dirname, "./node_modules"),
							]
						}
					}
				]
			},
			{
        test: /\.vue$/,
        use: [
					{ 
						loader: 'vue-loader'
					}
				]
      }
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'vars': path.resolve(__dirname, './src/scss/_vars.scss')
		}
	}
}