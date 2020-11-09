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
    var secnews2 = response.articles[1].title;
    var secnews2a = response.articles[1].summary;
    var secnews2b = response.articles[1].link;
    var thirdnews3 = response.articles[2].title;
    var thirdnews3a = response.articles[2].summary;
    var thirdnews3b = response.articles[2].link;
    var fourthnews4 = response.articles[3].title;
    var fourthnews4a = response.articles[3].summary;
    var fourthnews4b = response.articles[3].link;
    
    //first api news
    let news1 = document.querySelector(".news1");
    news1.textContent = firstnews;

    let news1a = document.querySelector(".news1a");
    news1a.textContent = secnews;

    let news1b = document.querySelector(".news-api-link");
    news1b.textContent = linknews;

    document.getElementById("news-api-link").href=  linknews;
    

    //second api news
    let news2 = document.querySelector(".news2");
    news2.textContent = secnews2;

    let news2a = document.querySelector(".news2a");
    news2a.textContent = secnews2a;

    let news2b = document.querySelector(".news2b");
    news2b.textContent = secnews2b;

    document.getElementById("news2b").href=  secnews2b;

    //third api news
    let news3 = document.querySelector(".news3");
    news3.textContent = thirdnews3;

    let news3a = document.querySelector(".news3a");
    news3a.textContent = thirdnews3a;

    let news3b = document.querySelector(".news3b");
    news3b.textContent = thirdnews3b;

    document.getElementById("news3b").href=  thirdnews3b;

    //fourth api news
    let news4 = document.querySelector(".news4");
    news4.textContent = fourthnews4;

    let news4a = document.querySelector(".news4a");
    news4a.textContent = fourthnews4a;

    let news4b = document.querySelector(".news4b");
    news4b.textContent = fourthnews4b;

    document.getElementById("news4b").href=  fourthnews4b;

   
});