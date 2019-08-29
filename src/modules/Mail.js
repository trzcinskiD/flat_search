const Config = require("./Config");
const secretConfig = require("./secretConfig");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

module.exports = newOffers => {
  const transporter = nodemailer.createTransport(
    sendgridTransport({ auth: { api_key: secretConfig.sendGridAPI } })
  );
  //Generuj treść HTML
  const html = generateMailHtml(newOffers);
  //Wysyłamy maila
  transporter.sendMail({ ...Config.mailMessage, html }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

//Funkcja generuje listę HTML
function generateMailHtml(newOffers) {
  return `<ul>${newOffers.map(renderListElement)}</ul>`;
}

//Funkcja generuje element listy
function renderListElement(offer) {
  return `<li><a href="${offer.url}">${offer.title}</a> - ${offer.location} za ${offer.price}. Dodany ${offer.time}</li>`;
}
