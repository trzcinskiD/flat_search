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
        addFlats(uniqOffers);
      });
    },
    err => console.log(err)
  );
};
