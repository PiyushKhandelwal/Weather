var React = require("react");

var WeatherDisplay = (props) => {
	var {cityname, temperature} = props;
	return(
			<div>
				<p className="text-center">{temperature.name},{temperature.sys.country}</p>
				<p className="temperature text-center">
					{temperature.main.temp}
					<span>&deg;C</span>
				</p>

				<div>
					<div className="temperatureStats">
						<i className="glyphicon glyphicon-transfer"></i>
						<p>Wind</p>
						<p>{temperature.wind.speed} km/h</p>
					</div>
					<div className="temperatureStats">
						<i className="glyphicon glyphicon-tint"></i>
						<p>humidity</p>
						<p>{temperature.main.humidity} %</p>
					</div>
					<div className="temperatureStats">
						<i className="glyphicon glyphicon-upload"></i>
						<p>Sunrise</p>
						<p>{new Date(temperature.sys.sunrise * 1000).toLocaleTimeString()}</p>
					</div>
					<div className="temperatureStats">
						<i className="glyphicon glyphicon-download"></i>
						<p>Sunset</p>
						<p>{new Date(temperature.sys.sunset * 1000).toLocaleTimeString()}</p>
					</div>
				</div>
			</div>
		);
}

module.exports = WeatherDisplay;