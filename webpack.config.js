var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'./app/app.jsx'
	],
	externals:{
		jquery: 'jQuery'
	},
	plugins:[
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output:{
		path: __dirname,
		filename: "./public/bundle.js"
	},
	resolve: {
		root: __dirname,
		alias :{
			Home: "app/components/Home.jsx",
			NavBox:"app/components/NavBox.jsx",
			Weather: "app/components/Weather.jsx",
			About: "app/components/About.jsx",
			Example: "app/components/Example.jsx",
			WeatherForm:"app/components/WeatherForm.jsx",
			WeatherDisplay:"app/components/WeatherDisplay.jsx",
			openWeatherApi:"app/api/openWeatherApi.jsx"
		},
		extensions : ['','.js','.jsx']
	},
	module:{
		loaders:[
		{
			loader:"babel-loader",
			query:{
				presets: ["react","es2015"]
			},
			exclude: /(node_modules)|(bower_components)/,
			test:/\.jsx?$/
		},
		{
			loader:"url-loader",
			test:/\.(png|woff|woff2|eot|ttf|svg)$/
		}
		]
	},
	devtool:"eval-source-map"
};