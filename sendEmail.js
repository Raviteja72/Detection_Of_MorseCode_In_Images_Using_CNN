var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_key:
      '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',
  },
};

var client = nodemailer.createTransport(sgTransport(options));

const sendMail = (email_to, callback) => {
  var email = {
    from: 'sandilyakaravadi@gmail.com',
    to: email_to,
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>',
  };
  client.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ', info);
      callback();
    }
  });
};

module.exports = {
  sendMail,
};
