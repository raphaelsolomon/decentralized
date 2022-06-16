var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7b4f82cef3daab",
      pass: "1a2b3c4d5e6f7g"
    }
  });


 exports.executeEmail = (data, callBack) => {
    transport.sendMail(data, (error, info) => {
        if (error) {
          return console.log(error);
        }
        return callBack();
      });
  }
  