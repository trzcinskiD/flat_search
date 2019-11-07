// I will take id's from all flats including deleted flats
const { db } = require("./db");

const getFlatsUrls = async () => {
  try {
    const flatUrls = await db
      .collection("flats")
      .find({}, { projection: { url: 1 } })
      .toArray();
    const flatUrlsArray = flatUrls.map(e => e.url);

    const deletedFlatUrls = await db
      .collection("deletedFlats")
      .find({}, { projection: { url: 1 } })
      .toArray();
    const deletedFlatUrlsArray = deletedFlatUrls.map(e => e.url);

    const fullFlatUrlsArray = flatUrlsArray.concat(deletedFlatUrlsArray);
    return fullFlatUrlsArray;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getFlatsUrls;
