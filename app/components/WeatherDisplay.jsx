var React = require("react");
var weatherIcons = require("../repository/weatherIcon.js");

require('style!css!public/css/weather-icons.min.css');
require('style!css!public/css/weather-icons-wind.min.css');

var WeatherDisplay = React.createClass({
	
	handleWeather: function(weather){
		var prefix = 'wi wi-';
  		var code = weather[0].id;
  		var icon = weatherIcons[code].icon;

  		if(weather[0].icon.charAt(weather[0].icon.length-1)!=="n"){
  			icon = 'day-' + icon;
  		}

  		// If we are not in the ranges mentioned above, add a day/night prefix.
  		//if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    	//	icon = 'day-' + icon;
  		//}

  		// Finally tack on the prefix.
  		icon = prefix + icon;

  		return {"icon":icon, "label":weatherIcons[code].label};
	},	

	render: function(){
		var {cityname, temperature} = this.props;
		var weatherProperty =this.handleWeather(temperature.weather);
		return(
			<div>
				<p className="text-center">{temperature.name},{temperature.sys.country}</p>
				<p className="temperature text-center">
					<i className={weatherProperty.icon} title={weatherProperty.label}></i>{temperature.main.temp}
					<span>&deg;C</span>
				</p>

				<div>
					<div className="temperatureStats col-xs-3">
						<i className={"wi wi-wind towards-"+Math.round(temperature.wind.deg)+"-deg"} title={temperature.wind.deg}></i>
						<p>Wind</p>
						<p>{temperature.wind.speed} km/h</p>
					</div>
					<div className="temperatureStats col-xs-3">
						<i className="wi wi-humidity"></i>
						<p>humidity</p>
						<p>{temperature.main.humidity} %</p>
					</div>
					<div className="temperatureStats col-xs-3">
						<i className="wi wi-sunrise"></i>
						<p>Sunrise</p>
						<p>{new Date(temperature.sys.sunrise * 1000).toLocaleTimeString()}</p>
					</div>
					<div className="temperatureStats col-xs-3">
						<i className="wi wi-sunset"></i>
						<p>Sunset</p>
						<p>{new Date(temperature.sys.sunset * 1000).toLocaleTimeString()}</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = WeatherDisplay;