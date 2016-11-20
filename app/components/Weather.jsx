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
		openWeatherApi.getTemperature(weather.cityname).then(function(weatherRes){
			that.setState({
				cityname : weather.cityname,
				temperature: weatherRes,
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
			<div style={{margin:'auto',maxWidth:'400px'}}>
  				<div className="panel panel-default">
  					<div className="panel-heading">
  						<WeatherForm onGetWeather={this.handleGetWeather}/>
  					</div>
  					<div className="panel-body">
    					{loadWeatherMessage()}
  					</div>
				</div>
  			</div>
		);
	}
});

module.exports = Weather;