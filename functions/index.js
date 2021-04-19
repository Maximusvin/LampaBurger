const functions = require('firebase-functions');

const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pas: password,
  },
});

transporter.use('compile', htmlToText());

const sendOrderEmail = order => {
  const options = {
    from: `LampaBurger`,
    to: email,
    subject: `Ваш заказ из LampaBurger`,
    html: `
    <div>
        <h2>Здравствуйте!</h2>
        <h3>Ваш заказ: </h3>
    </div>`,
  };

  transporter.sendMail(options);
};

exports.sendUserEmail = functions.database
  .ref('orders/{pushID}')
  .onCreate(order => sendOrderEmail(order.val()));
