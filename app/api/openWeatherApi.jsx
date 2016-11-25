var axios = require("axios");

const OPEN_WEB_WEATHER_APP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=3ebb9b64ce91135c54aeecdc4b8b7f7a&units=metric";

//3ebb9b64ce91135c54aeecdc4b8b7f7a

module.exports={
	
		getTemperature :function(location){
			var encodedlocation = encodeURIComponent(location);
			var requestWeatherURI = `${OPEN_WEB_WEATHER_APP_URL}&q=${encodedlocation}`;
			return axios.get(requestWeatherURI).then(function(res){
				if(res.data.cod && (res.message || res.data.message)){
					throw new Error(res.message);
				}else{
					return res.data;
				}
			},function(error){
				if(error.response){
					throw new Error(error.response.data);
				}
				else {
					throw new Error(error.message);
				}
			});

		}
}