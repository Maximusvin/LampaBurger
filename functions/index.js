const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

//transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
  const options = {
    from: `LampaBurger ${email}`,
    to: data.email,
    subject: 'Ваш заказ из LampaBurger',
    html: `
    <div>
      <h2>Здравствуйте, ${data.nameClient}</h2>
      <h3>Ваш заказ:</h3>
      <ul>
        ${data.order
          .map(
            ({ name, count, price }) =>
              `<li>${name} - ${count}шт., стоимость ${price * count} грн.</li>`,
          )
          .join(' ')}
      </ul>
      <p>Итого: ${data.order.reduce(
        (sum, item) => sum + item.price * item.count,
        0,
      )} грн.</p>
        <p>Ожидайте курьера по адрессу: ${data.order.address}.</p> 
        <p>С уважением, <a href="https://lampaburger.web.app/">LampaBurger</a></p> 
    </div>
      `,
  };

  transporter.sendMail(options);
};

exports.sendUserEmail = functions.database
  .ref('orders/{pushID}')
  .onCreate(order => sendOrderEmail(order.val()));
