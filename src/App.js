// Uruchomienie Scraper.js i decyzja czy wysłać maila
require('dotenv').config()
const Scraper = require("./modules/Scraper");
const Mail = require("./modules/Mail");
const Config = require("./modules/Config");
const _ = require("lodash");
let offers = [];

function getOffers() {
  Scraper().then(newOffers => {
    const beforeScraperOffersLength = offers.length;
    //Filtrujemy unikalne obiekty na podstawie adresu url z olx.pl
    offers = _.uniqBy([...offers, ...newOffers], "url");
    //Jeśli pojawiły się nowe oferty
    if (offers.length > beforeScraperOffersLength) {
      const howManyNewOffers = offers.length - beforeScraperOffersLength;
      const onlyNewOffers = _.takeRight(offers, howManyNewOffers);
      //Wysyłamy maila
      Mail(onlyNewOffers);
    }
  });
}
console.log("Start running");
setInterval(getOffers, Config.refreshTime);
