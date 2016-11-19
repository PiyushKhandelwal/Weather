var React = require("react");

var WeatherDisplay = (props) => {
	var {cityname, temperature} = props;
	return(
			<div>
				<p>The temperature in {cityname} is {temperature}</p>
			</div>
		);
}

module.exports = WeatherDisplay;