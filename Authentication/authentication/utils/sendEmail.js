const { JsonWebTokenError } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.sendEmail = async (email, subject, payload) => {
  console.log("Sending Email...");
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: subject,
      text: JSON.stringify(payload),
    };

    await transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("Mail not sended!");
        return false;
      }
      console.log("Mail send Successfully");
      return true;
    });
  } catch (error) {
    console.log("Error while sending mail", error);
    return false;
  }
};
