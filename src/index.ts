import startBrowser from './browser';
import scraperController from './pageController';

//Start the browser and create a browser instance
startBrowser().then(browser => {
    if (browser){
        scraperController(browser);
    } else {
        console.log("Browser instance not found")
    }
});

