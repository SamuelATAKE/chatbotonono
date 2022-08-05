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
  WA.sendMessage(
    "Bienvenue Mme. Je suis le ChatBot ONONO, l'assistant Whatsapp disponible pour vous accompagner. Taper A pour en savoir plus sur LA SANTE MARTERNELLE , B pour en savoir plus sur LA SANTE NEONATALE",
    "whatsapp:+22896791875"
  );
});

// Route for WhatsApp
webApp.post("/whatsapp", async (req, res) => {
  let message = req.body.Body;
  let senderID = req.body.From;

  console.log(message);
  console.log(senderID);

  let message1, message2;

  if (message === "A" || message === "a") {
    message1 = "Vous avez choisi de savoir plus sur la santé maternelle.\r\nAvez-vous un retard des règles ? \r\nTapez O pour OUI et N pour NON";
  } else if (message === "B" || message === "b") {
    message1 = "Vous avez choisi de savoir plus sur la santé néonatale. \r\nTaper B1 pour savoir comment effectuer le suivi du bébé après l'accouchement; \r\nB2 Pour des conseils";
  }else if (message === "O" || message === "o") {
    message1 = "Taper A1 pour savoir si on a des retards liés à un début de grossesse; \r\nTaper A2 pour savoir comment faire le test (DIG). \r\nTaper A3 pour savoir comment interpréter les résultats. \r\nTaper A4 pour le suivi de la grossesse.";
  }else if (message === "N" || message === "n") {
    message1 = "Vous avez choisi de savoir plus sur la santé néonatale";
  }else if (message === "A1" || message === "a1") {
    message1 = "\nSi la date prévue à laquelle les règles sont attendues est dépassée de 2 semaines \nSi vous avez des nausées, vomissements, fatigue, sommeil inexplicables. \nsi DIG (test de grossesse rapide) positif.";
  }else if (message === "A2" || message === "a2") {
    message1 = "Recueillir son urine dans un pot propre et sec \nOuvrir le test \nPlonger le bâtonnet  dans les urines jusqu’à la flèche perpendiculaire pendant 1 min. \nRetirer le bâtonnet puis patientez 3 à 5 min pour le résultat";
  }else if (message === "A3" || message === "a3") {
    message1 = "S’il y a une  barre : résultat négatif \r\nS’il y a 2 barres successives : résultat positif \r\nS’il y a deux barres éloignées : erreur";
    message2 = "Taper A21 pour savoir ce qu’on doit faire si positif; ";
  }else if (message === "A21" || message === "a21") {
    message1 = "Échographie pelvienne : pour connaitre l’emplacement de la grossesse et connaitre l’âge de la grossesse ";
    message2 = "Taper A22 pour savoir les différents emplacements de la grossesse ";
  }else if (message === "A22" || message === "a22") {
    message1 = "Grossesse intra utérine : A l’intérieur de l’utérus \r\nGrossesse extra utérine : en dehors de l’utérus ";
    message2 = "Taper A23 pour savoir quoi faire  si c’est une grossesse extra utérine; \r\nTaper A24  pour savoir quoi faire si c’est une grossesse intra utérine ";
  }else if (message === "A23" || message === "a23") {
    message1 = "Prendre conseil chez un professionnel de santé ";
  }else if (message === "A24" || message === "a24") {
    message1 = "Faire suivre la grossesse par des professionnels de santé dans un hôpital";
  }else if (message === "A4" || message === "a4") {
    message1 = "Tapez A41 pour savoir quoi faire; \r\nTaper A42 pour connaitre le nombre de Consultations PréNatales (CPN)  à faire; \r\nTaper A43 pour connaitre  les bilans  à faire selon  les mois  de grossesse; \r\nTaper A44 : pour connaitre les médicaments prescrits selon les mois de grossesse. ";
  }else if (message === "A41" || message === "a41") {
    message1 = "a. Faire  les consultations prénatales : consultations effectuées par une sage-femme \r\nb. Faire les bilans prénatals \r\nc. Acheter les  médicaments  prescrits";
  }else if (message === "A42" || message === "a42") {
    message1 = " - 1 consultation par mois  \r\n- Soit au maximum 8 consultations ";
  }else if (message === "A43" || message === "a43") {
    message1 = "1ere trimestre (début, de la grossesse), NFS, GE, GSNA, AgHBS, VIH, VDRL, PV, ECBU, chlamydias; glycémie, toxoplasmose, rubéole. \r\n2ème  trimestre : NFS, glycémie. 3ème trimestre : NFS, TP, TCK, urée.  \r\nN.B : Il est important de savoir qu’à chaque visite  on  évalue  l’état de la femme enceinte.  On peut  alors lui prescrire d’autres bilans selon les symptômes observés  ";
  }else if (message === "A44" || message === "a44") {
    message1 = "1er  trimestre : fer, Acide folique. \r\n2è  trimestre : fer, albendazole, fansidar. \r\n3e  trimestre : fer";
  }else if (message === "B1" || message === "b1") {
    message1 = "a.	visite chez le pédiatre au moins une fois par an, même si tout va bien b.	faire les bilans déjà 24h après l’accouchement c.	vaccination";
    message2 = "Taper 1B pour connaitre les bilans standard du nouveau-né; \r\nTaper 1C pour connaitre le calendrier vaccinal; \r\nTaper 11A pour savoir comment protéger le bébé contre les infections; \r\nTaper 11B pour savoir comment garder le bébé à température adaptée; \r\nTaper 11C Pour savoir comment éviter que le bébé s’asphyxie; \r\nTaper 11D Pour savoir comment éviter que le bébé fasse une hypoglycémie";
  }else if (message === "1B" || message === "1b") {
    message1 = "•	NFS: numération formule sanguine \r\n•	CRP: pour savoir s'il a une infection \r\n•	Bili: bilirubine •	GSRH: Groupe sanguin rhésus";
  }else if (message === "1C" || message === "1c") {
    message1 = "Calendrier vaccinal du bébé : 0 mois jusqu'à 5 ans  \r\n•	J1 jusqu'à J28 : BCG +Polio 0 \r\n•	6e  semaine: Penta1  + Polio1 \r\n•	10e  semaine : Penta 2 + Polio1 \r\n•	14è  semaine : Penta 3 + VPI \r\n•	6e  mois: Vit A 100 UI \r\n•	9e  mois : VAR \r\n•	12e  mois: Vit A 200 UI + Albendazole (à renouveler tous les 6 mois jusqu'à 5 ans) ";
    message2 = "Taper C2 Pour connaitre le rôle des vaccins; \r\nTaper C3 pour connaitre la prise en charge du bébé à la maison";
  }else if (message === "C2" || message === "c2") {
    message1 = "•	BCG: Vaccin contre la tuberculose \r\n•	Polio: Vaccin contre la poliomyélite \r\n•	Penta: association des vaccins contre l'Hépatite B ..... \r\n•	VAR: Vaccin contre la Rougeole \r\n•	Albendazole : médicament contre les parasites intestinaux";
  }else if (message === "C3" || message === "C3") {
    message1 = "a.	Chaine d'asepsie: Protection contre les microbes et les infections \r\nb.	Chaine de chaleur \r\nc.	Chaine respiratoire \r\nd.	Chaîne de glucose";
  }else if (message === "11A" || message === "11a") {
    message1 = "\r\n•	Laver les mains avant de le porter \r\n•	Changer son habit s'il vomit, urine ou fait caca \r\n•	Faire les soins du cordon chaque 3ème jour et le changer si ça se salit";
  }else if (message === "11B" || message === "11b") {
    message1 = "•	Faire le « peau à peau » (S'assoir ou s'allonger peau contre peau avec le bébé pour lui donner sa Chaleur) \r\n•	Couvrir le bébé s'il fait froid \r\n•	S'il fait chaud, éviter de le couvrir";
  }else if (message === "11C" || message === "11c") {
    message1 = "•	Surveiller le bébé quand il dort, car il peut mettre sa face contre le matelas et ne plus avoir la force de se retourner \r\n•	Contrôler quand il tète, pour qu’il ne fasse pas fausse route et faire un arrêt respiratoire";
  }else if (message === "11D" || message === "11d") {
    message1 = "•	Allaiter le bébé tous les 2 heures pendant 15 min maximum";
  }else if (message === "B2" || message === "b2") {
    message1 = "Il faut retourner à l’hôpital si : \r\n•	Le bébé a de la température \r\n•	Il convulse (tremblements, crise causée par la température) \r\n•	Le cordon sent mauvais \r\n•	Le ventre est ballonné \r\n•	La couleur de la peau devient jaune ou change de n’importe quelle couleur";
    message2 = "NB : \r\n•	Ne donner que le lait  maternel exclusivement au bébé jusqu’à ces 6 mois (ne rien donner aue le lait, même pas de l’eau ni médicament sauf si c’est le médecin qui te l’a  conseillé) \r\n•	Après 6 mois il faut commencer à donner à manger au bébé, c’est bien de changer l’alimentation chaque semaine pour contrôler et connaître les allergies alimentaire du bébé •	ne jamais secouer le bébé ";
  }else if (message === "B" || message === "b") {
    message1 = "Vous avez choisi de savoir plus sur la santé néonatale";
  } else {
    message1 =
      "Bienvenue Mme. Je suis le ChatBot ONONO, l'assistant Whatsapp disponible pour vous accompagner. \r\nTaper A pour en savoir plus sur *LA SANTE MARTERNELLE* \r\nB pour en savoir plus sur *LA SANTE NEONATALE* ";
  }

  // Write a function to send message back to WhatsApp
  
  await WA.sendMessage(message1, senderID);
  if(message2) {
    await WA.sendMessage(message2, senderID);
  }
});

// webApp.post('/whatsapp', async (req, res) => {
//   console.log(req.body);
//   console.log(res);
// });

// Start the server
webApp.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
