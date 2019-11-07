const _ = require("lodash");
const assert = require("assert");
const toUniqOffers = require("../services/toUniqOffers");

const newOffers = [
  {
    title: "Mieszkanie do wynajęcia 2 pokoje 45m Kraków ul. Brogi od grudnia",
    url:
      "https://www.olx.pl/oferta/okazja-55-m2-2-pokoje-komfortowe-mieszkanie-krowodrza-CID3-IDCkJMo.html#0539eb2b07;promoted",
    price: "1 600 zł",
    location: "Kraków, Grzegórzki ",
    time: "4 lis"
  },
  {
    title: "Wynajmę mieszkanie 42m przytulne",
    url: "https://www.olx.pl/oferta/wynajme-mieszkanie-42m-przytulne-CID3-IDCmtWx.html#0539eb2b07",
    price: "1 200 zł",
    location: "Kraków, Czyżyny ",
    time: "dzisiaj 07:09"
  },
  {
    title: "Kraków Śródmieście - mieszkanie do wynajęcia Fr.Nullo 10",
    url:
      "https://www.olx.pl/oferta/mieszkanie-do-wynajecia-2-pokoje-45m-krakow-ul-brogi-od-grudnia-CID3-IDCkrsq.html#0539eb2b07;promoted",
    price: "1 400 zł",
    location: "Kraków, Bieńczyce ",
    time: "wczoraj 23:52"
  },
  {
    title: "mieszkanie 36m2 (salon z kuchnią + sypialnia + łazienka + balkon 5m2)",
    url:
      "https://www.olx.pl/oferta/mieszkanie-36m2-salon-z-kuchnia-sypialnia-lazienka-balkon-5m2-CID3-IDCmrq0.html#0539eb2b07;promoted",
    price: "1 550 zł",
    location: "Kraków, Grzegórzki ",
    time: "wczoraj 23:15"
  },
  {
    title: "Pokój (15m2) w centrum Krakowa (przy Nowym Kleparzu) 1 200 zł",
    url: "https://www.olx.pl/oferta/do-wynajmu-2-pokoje-w-krakowie-od-zaraz-CID3-IDCgiZj.html#0539eb2b07;promoted",
    price: "1 200 zł",
    location: "Kraków, Krowodrza ",
    time: "wczoraj 21:34"
  },
  {
    title: "3-pokojowe mieszkanie Na Stoku",
    url: "https://www.olx.pl/oferta/3-pokojowe-mieszkanie-na-stoku-CID3-IDCmn5A.html#0539eb2b07",
    price: "1 000 zł",
    location: "Kraków, Nowa Huta ",
    time: "wczoraj 21:24"
  },
  {
    title: "mieszkanie 3 pokojowe/ Wola Duchacka/",
    url: "https://www.olx.pl/oferta/mieszkanie-3-pokojowe-wola-duchacka-CID3-IDCmmoP.html#0539eb2b07",
    price: "1 500 zł",
    location: "Kraków, Krowodrza ",
    time: "wczoraj 21:13"
  },
  {
    title: "kawalerka na wynajem",
    url: "https://www.olx.pl/oferta/kawalerka-na-wynajem-CID3-IDCmiuC.html#0539eb2b07",
    price: "1 350 zł",
    location: "Kraków, Grzegórzki ",
    time: "wczoraj 20:00"
  }
];

describe("toUniqOffers", () => {
  it("do not returns offers that exist in db", async () => {
    const uniqOffers = await toUniqOffers(newOffers);
    const existUrlsArray = newOffers.map(e => e.url);

    const compareArray = uniqOffers.map(element => {
      const compare1 = _.includes(element, existUrlsArray[0]);
      const compare2 = _.includes(element, existUrlsArray[4]);
      const compare3 = _.includes(element, existUrlsArray[2]);
      return compare1 || compare2 || compare3;
    });

    const finalCompare = _.includes(compareArray, true);

    assert.ok(!finalCompare);
  });
});
