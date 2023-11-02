var express = require("express");
var nodemailer = require("nodemailer");
var dotenv = require("dotenv");
dotenv.config();

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hello", function (req, res, next) {
  res.json({ message: "HELLO" });
});

module.exports = router;

const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // sendmail: true,
  });

  const options = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    text,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
};

sendEmail("elizamlee5@gmail.com", "Test email!", "HELLO");
