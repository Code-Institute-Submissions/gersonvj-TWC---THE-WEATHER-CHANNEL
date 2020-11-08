let locations = ["dublin", "london", "belfast","cardiff"]
locations.forEach(location => {
    $(`#${location}`).onclick(function(){
        getWeather(location)
    })
})

function getWeather(location){

const settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://rapidapi.p.rapidapi.com/forecast.json?q=${location}&days=3",
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

    var currentWeatherCelsius = response.current.temp_c;
    var currentlastupdate = response.current.last_updated;
    var currentcondition = response.current.condition.icon;
    var currentfeel = response.current.feelslike_c;
    console.log(currentcondition);
    
    let temperatureDublin = document.querySelector(".temperatureDublin");
    temperatureDublin.textContent = currentWeatherCelsius;

    let lastupdateDublin = document.querySelector(".lastupdateDublin");
    lastupdateDublin.textContent = currentlastupdate;

    let conditionDublin = document.querySelector(".conditionDublin");
    conditionDublin.textContent = currentcondition;

    let feelDublin = document.querySelector(".feelDublin");
    feelDublin.textContent = currentfeel;





    
 } });





