
const cheerio = require('cheerio');
const fs = require('fs');
const { default: puppeteer } = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250");

    await page.waitForTimeout(5000);

    const Showdata = [];
    const $ = cheerio.load(await page.content());
    $(".ipc-metadata-list-summary-item").each((index,el) => {
        const name = $('.ipc-title__text', el).text();
        const year = $('.cli-title-metadata > span:nth-child(1)', el).text();
        const episode = $('.cli-title-metadata > span:nth-child(2)', el).text();
        const image = $(el).find('img').attr('src');
        const rating = $('.ratingGroup--imdb-rating', el).text();

        Showdata.push({
            name: name,
            rating: rating,
            year: year,
            episode:episode,
            image: image,
        });
    });
    fs.writeFile("shows.json", JSON.stringify(Showdata, null, 4), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File saved successfully!");
        }
    });

    await browser.close();
    console.log(Showdata);
})();
