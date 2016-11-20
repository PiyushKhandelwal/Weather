var React = require("react");

var WeatherDisplay = (props) => {
	var {cityname, temperature} = props;
	return(
			<div>
				<h2 className="text-center">{temperature.name},{temperature.sys.country}</h2>
				<ul className="list-group">
    				<li className="list-group-item"><strong>Temperature</strong> <strong className="pull-right">{temperature.main.temp}</strong></li>
    				<li className="list-group-item"><strong>Humidity</strong> <strong className="pull-right">{temperature.main.humidity}</strong></li>
  				</ul>
			</div>
		);
}

module.exports = WeatherDisplay;