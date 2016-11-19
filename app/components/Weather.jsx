var React = require("react");
var WeatherDisplay =require("WeatherDisplay");
var WeatherForm = require("WeatherForm");
var openWeatherApi = require("openWeatherApi");

var Weather = React.createClass({

	getInitialState:function(){
		return {
			isLoading :false
		}
	},

	handleGetWeather: function(weather){
		var that = this;
		this.setState({isLoading :true});
		openWeatherApi.getTemperature(weather.cityname).then(function(temperature){
			that.setState({
				cityname : weather.cityname,
				temperature: temperature,
				isLoading: false
			});
		},function(err){
			that.setState({isLoading :false});
			alert(err);
		});
	},

	render: function(){
		var {isLoading, cityname, temperature} = this.state;
		function loadWeatherMessage (){
			if(isLoading){
				return <h3>Fetching Weather ...</h3>;
			}
			else if (cityname && temperature){
				return <WeatherDisplay cityname= {cityname} temperature={temperature}/>;
			}
		}

		return(
			<div>
				<WeatherForm onGetWeather={this.handleGetWeather}/>
				{loadWeatherMessage()}
			</div>
		);
	}
});

module.exports = Weather;