<h1>TWC - The Weather Channel</h1>

Welcome,

The channel broadcasts weather forecasts and weather-related news, along with a newsletter. The rapidAPI update the information of the weather and weather-related news.

## Ux Structure

As the user opens the home page, will see a jumbotrom that highlights the page the user is into. With four cards having a brief describle of the cities and a button that open a popup card to show some weather information of the city connected via API. Our latest news are conected via API aswell showing the last 4 weather-related news and the link for the user to see the news from the original website. The newsletter is a emailJS that send to the user a email with the temperature of the cities (not connected with an API).

## Features

<ul>Existing Features:
  <li>Home page: The ideia is to make the user to click on the weather forecast buttons to see the forecast weather.</li>
  <li>Newsletter: Make the user connected with the page, receiving a basic email that will lead him to get back to the website to see more abou the weather forecast.</li>
  <li>Latest News: Show for the user the last 4 weather-related news of the API.</li>
</ul>

<ul>Future Features:
  <li>Home page: A search button for the user to see more weather of another cities in the world</li>
  <li>Newsletter: make it connected with the weather API, so when the user receive the newsletter this will be updated with the latest forecast.</li>
  <li>Latest News: a country/city search button for the latest weather-related news </li>
</ul>

## Technologies Used

<H4>HTML5: https://en.wikipedia.org/wiki/HTML5</H4>
<ul>
    <li>The main structure to create the webpage</li>
  </ul>


<h4>CSS3: https://en.wikipedia.org/wiki/Cascading_Style_Sheets</H4>
<ul>
    <li>The design to create a good user experience</li>
  </ul>


<h4>Bootstrap: https://getbootstrap.com/docs/4.4/getting-started/introduction/</h4>
  <ul>
    <li>Responsive framework</li>
  </ul>

<h4>Hoover Library: https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css</h4>
<ul>
    <li>Library used to hoover the buttons </li>
  </ul>

<h4>Fontawewsome: https://fontawesome.com/</h4>
<ul>
    <li>Used to show awsome icons</li>
  </ul>
  
  <h4>JavaScript: https://en.wikipedia.org/wiki/JavaScript</h4>
<ul>
    <li>presenting the pictures user friendly</li>
  </ul>
  
   <h4>RapidAPI: https://rapidapi.com/marketplace</h4>
<ul>
    <li>API that bring the latest weather forecast and weather-related news</li>
  </ul>
    <h4>EmailJS: https://www.emailjs.com/</h4>
<ul>
    <li>Connect email service to send emails via JavaScript</li>
  </ul>
  
  

## Test
<ul>
<li>05/11/2020 - Not reponsive for phone devices, background pictures for jumbotrom not working, h1 headers need more margin.
<li>06/11/2020 - Homepage responsive for all devices, newsletter and latest news not responsive for phone devices.
<li>08/11/2020 - Weather cards background not working, weather icon from API not showing in the cards. 
<li>09/11/2020 - Newsletter responsive for phone devices
<li>09/11/2020 - Latest news link are outside the row, making not responsive.
<li>10/11/2020 - All pages are responsive. Some images are streching.

Actual devices used for the test: iPhone 6s, Motorola and G5, Samsung S20 5g, Samsung Note 10 - Latest news not fully responsive.

No broken links in the images, buttons or social networks.
Web Browsers - Chrome and Firefox - working perfectly.


## Deployment

Deployed using GitHub Pages accessed via the link below
 - https://gersonvj.github.io/TWC---THE-WEATHER-CHANNEL/
 index.html is main content page - all other navigatable via this webpage

  **Process**
   1. Created a Github account at https://github.com My account: https://github.com/gersonvj

   2. Synced folder on local machine to Github Repo via VsCode: https://github.com/gersonvj/TWC---THE-WEATHER-CHANNEL

   3. To publish the project to see it on the web go to Settings on Repo , scroll down to the heading, GitHub Pages. Under the Source setting, Use drop-down menu to select master branch as a publishing source and save. Refreshed the github page, and you are then given a url where your page is published; The site is now published on gitHub pages at https://gersonvj.github.io/TWC---THE-WEATHER-CHANNEL/

   4. To run this code on your local machine, you would go to my respository at https://github.com/gersonvj/TWC---THE-WEATHER-CHANNEL and on the home page on the right hand side just above all the files, you will see a green button that says, "Clone or download", this button will give you options to clone with HTTPS, open in desktop or download as a zip file. Then --> click the clipboard item to copy the Https address of the repo.
   
   5. Open Git Bash/Terminal: 
   CD the working directory to the location where you want the cloned directory to be made.you can use mkdir command to make a new directory, then cd into it.Type git clone, and then paste the URL: https://github.com/gersonvj/TWC---THE-WEATHER-CHANNEL.git Press Enter. The clone is created.
   For more information about the above process; https://help.github.com/en/github/using-git/which-remote-url-should-i-use



## Credits

<h5>Content</h5>
<ul>
  <li>The description of the cities were taking from: www.google.com
</ul>

<h5>Media</h5>
<ul>
  <li>The artwork used in this site were obtained from: https://www.instagram.com/artworkbyshane/</li>
</ul>

<h5>Acknowledgements</h5>
<ul>
  <li>This project is thinking to show the users the forecast and weather-related news from API as the newsletter using mailJS.
</ul>
