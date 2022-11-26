import puppeteer, {Browser} from 'puppeteer'

const startBrowser = async (): Promise<Browser | null> => {
    try {
        console.log("Opening the browser......");
        return await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            slowMo: 20,
            timeout: 60000,
            args: [
                '--disable-setuid-sandbox',
                '--no-sandbox',
                '--disable-infobars',
                '--window-size=680,480',
                '--disable-dev-shm-usage',
                '--disable-gpu',
            ],
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
        return null;
    }
}

export default startBrowser;
