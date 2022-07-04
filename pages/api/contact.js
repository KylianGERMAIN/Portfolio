/* eslint-disable import/no-anonymous-default-export */
export default async function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    secureConnection: false,
    port: 587,
    auth: {
      user: 'kylian.germain@hotmail.com',
      pass: process.env.PASSWORDMAIL,
    },
  })


  const mailData = {
    from: 'kylian.germain@hotmail.com',
    to: 'kylian.germain@hotmail.com',
    subject: `${req.body.Subject.length != 0 ? req.body.Subject : `Message From ${req.body.Name}`}`,
    text: req.body.Message + " | Sent from: " + req.body.Email + " | Phone number:" + req.body.Phone,
    html: `<div>
    ${req.body.Message}</div >
   <p>Sent from: ${req.body.Email}</p>
   <p>Phone from: ${req.body.Phone}</p>`
  }

  transporter.sendMail(mailData, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log('Email sent: ' + data.response);
      res.send(req);
    }
  });
}