const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://newscatcher.p.rapidapi.com/v1/search?q=weather&media=True&sort_by=relevancy&lang=en&country=gb&page=1",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fb5430219bmshd4a41358e678d75p187a51jsn30d831ea960f",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    
    
    var firstnews = response.articles[0].title;
    var secnews = response.articles[0].summary;
    var linknews = response.articles[0].link;
    
    console.log(firstnews);
    
    let news1 = document.querySelector(".news1");
    news1.textContent = firstnews;

    let news1a = document.querySelector(".news1a");
    news1a.textContent = secnews;

   let news1b = document.querySelector(".news-api-link");
news1b.textContent = linknews;

document.getElementById("news-api-link").href=  linknews;

   
});