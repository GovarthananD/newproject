const nodemailer = require("nodemailer");

exports.sendEmail = async (email, subject, payload) => {
  console.log("Sending Email...");
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
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
        console.log("Error in sending Mail");
        return false;
      }
      console.log("Email send successfully!");
      return true;
    });
  } catch (error) {
    console.log("Error while sending mail", error);
  }
};
