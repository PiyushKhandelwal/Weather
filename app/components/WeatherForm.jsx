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
			<form onSubmit={this.onButtonClick}>
  				<div className="input-group">
  					<input type="text" placeholder="Enter city name" ref="cityname" className="form-control"/>
  					<span className="input-group-btn">
        				<button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
      				</span>
  				</div>
  			</form>
		);
	}
});

module.exports = WeatherForm;