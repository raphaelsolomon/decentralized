var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "darkdeveloper54@outlook.com",
      pass: "Available1.",
    },
  });


 exports.executeEmail = (data, callBack) => {
    transport.sendMail(data, (error, info) => {
        if (error) {
          return console.log(error);
        }
        return callBack();
      });
  }
  