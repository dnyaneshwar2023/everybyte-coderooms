require("dotenv").config({ path: "../.env" });
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.MAILCLIENT,
    clientSecret: process.env.MAILCLIENT_SECRET,
    refreshToken: process.env.MAILREFRESH_TOKEN,
  },
});

module.exports = transporter;
