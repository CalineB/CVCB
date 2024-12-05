const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.laposte.net", 
  port: 587,     
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  debug: true,
});

app.post('/send-email', async (req, res) => {
  console.log(req.body)
  const { name, email, subject, message, phone } = req.body;

  try {

    const emailContent = `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
    <p><strong>Sujet:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: subject,
      text: message,
      html: emailContent,
      replyTo: email,
    });

    console.log("Message envoyé : %s", info.messageId);
    res.status(200).send({ success: true, message: 'Email was sent, I\'ll answer you ASAP!' });
  } catch (error) {
    console.error("Erreur d'envoi du message : ", error);
    res.status(500).send({ success: false, message: 'Your message failed being send' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
