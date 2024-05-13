import nodemailer from "nodemailer";
import dotenv from "dotenv";

import creationNotificationEmail from "../emails/creationNotificationEmail.js";

dotenv.config();

const sendMail = async (to, subject, message) => {
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    auth: {
      user: user,
      pass: pass,
    },
  });

  const htmlTemplate = creationNotificationEmail(to, subject, message);

  try {
    const mailOptions = {
      from: user,
      to: to,
      subject: subject,
      html: htmlTemplate,
    };

    const result = await transporter.sendMail(mailOptions);

    if (result) {
      return { status: "OK", message: "E-posta başarıyla gönderildi." };
    } else {
      return {
        status: "ERROR",
        message: "E-posta gönderilirken bir hata oluştu.",
      };
    }
  } catch (error) {
    console.error("E-posta gönderme hatası: ", error);
  }
};

export default sendMail;