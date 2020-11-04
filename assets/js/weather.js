const settings = {
    "async": true,
    "crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/weather?q=London%2Cuk&&units=metric&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
    
    "method": "GET",
	"headers": {
		"x-rapidapi-key": "fb5430219bmshd4a41358e678d75p187a51jsn30d831ea960f",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response);
 });