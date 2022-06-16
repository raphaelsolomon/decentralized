var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7b4f82cef3daab",
      pass: "2967cc70aa4402"
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
  