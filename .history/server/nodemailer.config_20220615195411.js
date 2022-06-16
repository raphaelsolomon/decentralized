var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1a2b3c4d5e6f7g",
      pass: "1a2b3c4d5e6f7g"
    }
  });


 exports executeEmail(data) {

  }
  