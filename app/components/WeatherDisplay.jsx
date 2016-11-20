var React = require("react");

var WeatherDisplay = (props) => {
	var {cityname, temperature} = props;
	return(
			<div className="container" style={{marginTop:'10px'}}>
				<div className="row">
					<div className="col-lg-3">
						<p className="alert alert-info">The temperature in {cityname} is {temperature}</p>
					</div>
				</div>
			</div>
		);
}

module.exports = WeatherDisplay;