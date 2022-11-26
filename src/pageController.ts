import pageScraper from './pageScraper';
import {Browser} from "puppeteer";

const scrapeAll = async (browserInstance: Browser) => {
    try{
        await pageScraper.scraper(browserInstance);
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

export default scrapeAll;
