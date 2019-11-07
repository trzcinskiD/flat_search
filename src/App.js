// Uruchomienie Scraper.js i decyzja czy wysłać maila
require("dotenv").config();
const Config = require("./modules/Config");
const getOffers = require("./services/getOffers");

console.log("Start running");
setInterval(getOffers, Config.refreshTime);
