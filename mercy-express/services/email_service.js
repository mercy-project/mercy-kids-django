import crypto from 'crypto';
import nodemailer from 'nodemailer';

(async function main() {
    const activationCode = crypto.createHash('sha256').update(Date.now().toString()).digest('hex');
    console.log('activation:', activationCode);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: '<MERCYKIDS>@gmail.com',
            pass: '<PASSWORD>'
        }
    });

    try {
        const info = await transporter.sendMail({
            from: 'Mercy Kids <mercykids@gmail.com>',
            to: '<RECEIVER>@naver.com',
            subject: 'Email test',
            text: 'hello world!',
            html: `<br><a href="http://localhost:8000/kids/auth/activate?code=${activationCode}">link</a>`
        });
        console.log('info:', info);    
    } catch (e) {
        console.error(e);
    }
})();