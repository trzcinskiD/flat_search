const Config = require("./Config");
// Jeśli masz ten kod z mojego GitLab -> utwórz plik .env z API do Sendgrid "SENDGRIDAPI"
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

module.exports = newOffers => {
  const transporter = nodemailer.createTransport(sendgridTransport({ auth: { api_key: process.env.SEND_GRID_API } }));
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
