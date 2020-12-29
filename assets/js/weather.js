let locations = ["dublin", "london", "belfast", "cardiff"];
locations.forEach(location => {
    $('#' + location).click(function () {
        getWeather(location);
    });
});

function setBackgroundImage(location) {

    if(location === 'dublin') {
        $('.modal-content').css('background-image', 'url("./assets/images/dublin.jpg")');
        $('.modal-content').css('background-repeat', 'repeat-x');
    } else if(location === 'london') {
        $('.modal-content').css('background-image', 'url("./assets/images/london.jpg")');
        $('.modal-content').css('background-repeat', 'repeat-x');
    } else if(location === 'belfast') {
        $('.modal-content').css('background-image', 'url("./assets/images/belfast.jpg")');
        $('.modal-content').css('background-repeat', 'repeat-x');
    } else if(location === 'cardiff') {
        $('.modal-content').css('background-image', 'url("./assets/images/cardiff.jpg")');
        $('.modal-content').css('background-repeat', 'repeat-x');
    }

}

function getWeather(location) {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://rapidapi.p.rapidapi.com/forecast.json?q=' + location +'&days=3',
        "contentType": "application/json",
        "dataType": 'json',
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fb5430219bmshd4a41358e678d75p187a51jsn30d831ea960f",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {

        var currentWeatherCelsius = response.current.temp_c;
        var currentWindSpeed = response.current.wind_kph;
        var currentLastupdate = response.current.last_updated;
        var currentConditionIcon = response.current.condition.icon;
        var currentConditionText = response.current.condition.text;
        var currentFeel = response.current.feelslike_c;
        var currentCity = response.location.name;

        setBackgroundImage(location);

        // TODO
        var currentLocalTime = response.location.localtime;
        var currentCountry = response.location.country;
        
        let tempeture = document.querySelector(".modal-api-temp");
        tempeture.textContent = currentWeatherCelsius + '°C';

        let condition = document.querySelector(".modal-api-condition-text");
        condition.textContent = currentConditionText;

        document.getElementById("modal-api-condition-icon").src= "https:" + currentConditionIcon;

        let modalTitle = document.querySelector("#weatherModalTitle");
        modalTitle.textContent = currentCountry; 

        let modalCityName = document.querySelector(".modalCityName");
        modalCityName.textContent = currentCity; 

        let modalCurrentTime = document.querySelector(".modal-api-current-time");
        modalCurrentTime.textContent = currentLocalTime;

        let windSpeed = document.querySelector(".modal-api-wind-speed");
        windSpeed.textContent = currentWindSpeed + 'km/h';
    });
}

