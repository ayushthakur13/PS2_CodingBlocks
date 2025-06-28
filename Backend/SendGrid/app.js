require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid');

const mailer = nodemailer.createTransport(
  sgTransport({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

app.set('view engine','hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  const { email } = req.body;

  mailer.sendMail({
    to: email,
    from: 'ayushprataps135@gmail.com',
    subject: 'Hello there!',
    text: 'Welcome to my page...',
    html: '<b>Awesome! Signup done...</b>'
  })
    .then(() => {
        console.log('Email sent: ');
        res.send('Done');
    })
    .catch((err) => {
        console.error('Email send error:', err);
        res.send('Failed to send email');
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
