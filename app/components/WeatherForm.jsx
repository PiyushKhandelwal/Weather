var React = require("react");

var WeatherForm = React.createClass({

	onButtonClick:function(e){
		e.preventDefault();
		var cityname = this.refs.cityname.value;
		var update = {};
		if(cityname.length > 0){
			this.refs.cityname.value ="";
			update.cityname = cityname;
		}

		this.props.onGetWeather(update);
	},

	render:function(){
		return(
			<div>
				<form onSubmit={this.onButtonClick}>
					<input type="text" placeholder="Enter city name" ref="cityname"/>
					<button>Get weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;