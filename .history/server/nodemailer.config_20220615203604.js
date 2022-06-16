var nodemailer = require('nodemailer');




 exports.executeEmail = (data, callBack) => {
    transport.sendMail(data, (error, info) => {
        if (error) {
          return console.log(error);
        }
        return callBack();
      });
  }
  