// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "youremail@gmail.com",
//     pass: "yourapppassword",
//   },
// });

// const mailOptions = {
//   from: "youremail@gmail.com",
//   to: "recipient@example.com",
//   subject: "Hello from Node.js",
//   text: "This is a test email sent using Nodemailer.",
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) console.error(err);
//   else console.log("Email sent: " + info.response);
// });



// mail-template-ejs.js
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

const template = fs.readFileSync('./emailTemplate.ejs', 'utf-8');
const html = ejs.render(template, { name: 'John Doe' });

const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'you@gmail.com', pass: 'app-password' } });

transporter.sendMail({
  from: 'you@gmail.com',
  to: 'someone@example.com',
  subject: 'Welcome!',
  html,
}).then(() => console.log('Sent')).catch(console.error);
