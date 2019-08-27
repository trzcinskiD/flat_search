module.exports = {
  refreshTime: 600000,
  pageURL:
    "https://www.olx.pl/nieruchomosci/mieszkania/wynajem/krakow/?min_id=551105012&search%5Bfilter_float_price%3Ato%5D=1600&search%5Bdist%5D=0&search%5Bfilter_float_m%3Afrom%5D=25",
  mailConnection: {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "XX",
      pass: "XX"
    }
  },
  mailMessage: {
    from: "trzcinskid0@gmail.com",
    to: "trzcinskid0@gmail.com",
    subject: "Nowe oferty mieszkań w Krk z olx"
  }
};

//Skrypt uruchamiasz node ./src/App.js
