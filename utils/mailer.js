const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false  // 
  }
});

const sendMail = async (to, subject, text) => {
  await transporter.sendMail({
    from: `"Viaja Ya" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text
  });
};

module.exports = sendMail;