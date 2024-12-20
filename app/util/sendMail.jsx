import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Thay thế bằng dịch vụ email của bạn
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};