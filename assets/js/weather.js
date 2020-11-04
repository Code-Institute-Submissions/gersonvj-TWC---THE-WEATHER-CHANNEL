const settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://rapidapi.p.rapidapi.com/forecast.json?q=London&days=3",
    "contentType": "application/json",
    "dataType": 'json',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fb5430219bmshd4a41358e678d75p187a51jsn30d831ea960f",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
};


dataType: 'json'

$.ajax(settings).done(function (response) {
    console.log(response);
    var currentWeatherCelsos = response.current.temp_c;
   console.log(currentWeatherCelsos);

 });





