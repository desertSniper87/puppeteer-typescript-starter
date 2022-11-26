import puppeteer, {Browser} from 'puppeteer'

//Start browser
const startBrowser = async (): Promise<Browser | null> => {
    try {
        console.log("Opening the browser......");
        //Return an instance of the browser
        return await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
        return null;
    }
}

export default startBrowser;
