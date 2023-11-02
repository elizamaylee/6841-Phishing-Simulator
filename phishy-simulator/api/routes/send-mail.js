var express = require("express");
var nodemailer = require("nodemailer");
var dotenv = require("dotenv");
var fs = require("fs");
var handlebars = require("handlebars");
dotenv.config();

var router = express.Router();

module.exports = router;

const sendEmail = (to, subject) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var htmlFile = fs.readFileSync("./emails/basic.html").toString();
  var template = handlebars.compile(htmlFile);
  var replacements = {
    username: "Eliza",
  };
  var htmlToSend = template(replacements);

  const options = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html: htmlToSend,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
};

sendEmail("elizamlee5@gmail.com", "Don't get phished!");
