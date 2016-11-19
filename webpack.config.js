module.exports = {
	entry: './app/app.jsx',
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
		}
		]
	},
	devtool:"eval-source-map"
};