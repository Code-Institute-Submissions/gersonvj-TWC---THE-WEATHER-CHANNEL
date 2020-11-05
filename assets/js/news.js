const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://newscatcher.p.rapidapi.com/v1/search_free?q=weather&media=True&lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fb5430219bmshd4a41358e678d75p187a51jsn30d831ea960f",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    var parsed = JSON.parse(response);
    var firstnews = parsed.articles[0].title;
    
    
   
    var secnews = response.current.last_updated;
    var linknews = response.current.condition.icon;
    console.log(firstnews);
    
    let news1 = document.querySelector(".news1");
    news1.textContent = firstnews;

    let news1a = document.querySelector(".news1a");
    news1a.textContent = currentlastupdate;

    let news1b = document.querySelector(".news1b");
    news1b.textContent = currentcondition;

    let feelDublin = document.querySelector(".feelDublin");
    feelDublin.textContent = currentfeel;
});