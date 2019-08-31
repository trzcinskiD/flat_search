module.exports = {
  refreshTime: 18000,
  pageURL:
    "https://www.olx.pl/nieruchomosci/mieszkania/wynajem/krakow/?min_id=551516536&search%5Bfilter_float_price%3Ato%5D=1600&search%5Bdist%5D=0&search%5Bfilter_float_m%3Afrom%5D=25",
  mailMessage: {
    from: "trzcinskid0@gmail.com",
    to: "trzcinskid0@gmail.com",
    subject: "Nowe oferty mieszkań w Krk z olx"
  },
  filters: {
    notWantedLocalizations: [
      "Kraków, Dębniki ",
      "Kraków, Podgórze Duchackie ",
      "Kraków, Podgórze ",
      "Kraków, Wzgórza Krzesławickie ",
      "Kraków, Bieżanów-Prokocim ",
      "Kraków, Bronowice ",
      "Kraków, Łagiewniki-Borek Fałęcki ",
      "Kraków, Swoszowice ",
      "Kraków, Zwierzyniec "
    ]
  }
};

//Skrypt uruchamiasz node ./src/App.js
