const Scraper = require("../modules/Scraper");
const addFlats = require("../mongo/addFlats");
const toUniqOffers = require("./toUniqOffers");
const { AnonymousCredential } = require("mongodb-stitch-server-sdk");
const { client } = require("../mongo/db");

module.exports = () => {
  Scraper().then(
    newOffers => {
      client.auth.loginWithCredential(new AnonymousCredential()).then(async () => {
        const uniqOffers = await toUniqOffers(newOffers);
        uniqOffers.length > 0 ? addFlats(uniqOffers) : console.log(`0 documents added`);
      });
    },
    err => console.log(err)
  );
};
