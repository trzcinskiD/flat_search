// Pobranie danych ze strony i zwrócenie informacji do dalszego przetwarzania
const _ = require("lodash");
const puppeteer = require("puppeteer");
const Config = require("./Config");

module.exports = async () => {
  console.log('Scraper starts')
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(Config.pageURL, { waitUntil: "domcontentloaded" });
  // evaulate uruchamia callbacka zawierającego context strony
  const fetchedOffers = await page.evaluate(() => {
    const offers = Array.from(document.querySelectorAll(".offer-wrapper"));
    const offersTitles = offers.map(offer => {
      return {
        title: offer.querySelector("strong").innerText,
        url: offer.querySelector(".link").getAttribute("href"),
        price: offer.querySelector(".price strong").innerText,
        location: offer.querySelectorAll(".breadcrumb")["1"].innerText,
        time: offer.querySelectorAll(".breadcrumb")["2"].innerText
      };
    });
    return offersTitles;
  });
  await browser.close();
  const filteredFetchetOffers = _.filter(
    fetchedOffers,
    o => !Config.filters.notWantedLocalizations.includes(o.location)
  );
  console.log('Scraper return offers')
  return filteredFetchetOffers;
};
