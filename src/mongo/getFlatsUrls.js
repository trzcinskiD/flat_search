// I will take id's from all flats including deleted flats
const { db } = require("./db");

const getFlatsUrls = async () => {
  try {
    const flatUrls = await db
      .collection("flats")
      .find({}, { projection: { _id: 0, title: 0, price: 0, location: 0, time: 0 } })
      .toArray();
    const flatUrlsArray = flatUrls.map(e => e.url);
    return flatUrlsArray;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getFlatsUrls;
