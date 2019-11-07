const _ = require("lodash");
const getFlatsUrls = require("../mongo/getFlatsUrls");

module.exports = async newOffers => {
  const urls = await getFlatsUrls();
  const newUniqOferrs = _.filter(newOffers, element => {
    const uniq = _.includes(urls, element.url);
    return !uniq;
  });
  return newUniqOferrs;
};
