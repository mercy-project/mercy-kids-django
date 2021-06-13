import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '<EMAIL>@gmail.com',
        pass: '<PASSWORD>'
    }
});

const sendUserVerificationEmail = async (to, verificationCode) => {
    const info = await transporter.sendMail({
        from: 'Mercy Kids <mercykids@gmail.com>',
        to,
        subject: 'Welcome to Mercy Kids!',
        text: '',
        html: `<br><a href="http://localhost:3000/auth/activate?code=${verificationCode}">link</a>`
    });
};

export default {
    sendUserVerificationEmail
};