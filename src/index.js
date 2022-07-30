// external packages
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
webApp.use(bodyParser.json());

// Server Port
const PORT = process.env.PORT;

const WA = require("../functions/send-message");

// Home route
webApp.get("/", (req, res) => {
  res.send(`Welcome.!`);
  WA.sendMessage("Bienvenue Mme. Je suis le ChatBot ONONO, l'assistant Whatsapp disponible pour vous accompagner. Taper 1 pour en savoir plus sur LA SANTE MARTERNELLE , 2 pour en savoir plus sur LA SANTE NEONATALE", "whatsapp:+22896791875");
});

// Route for WhatsApp
webApp.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(message);
    console.log(senderID);

    let message1;

    if(message === "1") {
      message1 = "Vous avez choisi de savoir plus sur la santé maternelle";
    }else if(message === "2") {
      message1 = "Vous avez choisi de savoir plus sur la santé néonatale";
    }else {
      message1 = "Bienvenue Mme. Je suis le ChatBot ONONO, l'assistant Whatsapp disponible pour vous accompagner. Taper 1 pour en savoir plus sur LA SANTE MARTERNELLE , 2 pour en savoir plus sur LA SANTE NEONATALE";
    }

    // Write a function to send message back to WhatsApp
    await WA.sendMessage(message1, senderID);

});

// webApp.post('/whatsapp', async (req, res) => {
//   console.log(req.body);
//   console.log(res);
// });

// Start the server
webApp.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
