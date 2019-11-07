const { db } = require("./db");

const addFlats = flats => {
  db.collection("flats")
    .insertMany(flats)
    .then(docs => {
      console.log(`Added ${Object.keys(docs.insertedIds).length} documents`);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = addFlats;
