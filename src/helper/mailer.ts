import nodemailer from "nodemailer"
import { email } from "../globalType/type";
import { v4 as uuidv4 } from 'uuid';


export const sendEmail = async ({ email, id }: email) => {

    console.log(email)
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const Mail = {
        from: {
            name: "Alik laha",
            address: process.env.EMAIL_USER!
        },
        to: email,
        subject: "Verify Your Email",
        text: "Hello world?",
        html: "<h1>Verify Your Email</h1>" +
            "<p>For confirming your email click in this link</p> <br/>" +
            `<a href=${process.env.VERIFY_EMAIL_LINK}>${process.env.VERIFY_EMAIL_LINK}</a> <br/>` +
            "<p>if link is not working copy the link and paste on your browser <br/> link is valid for only 1 hour</p>",
    }

    return await transport.sendMail(Mail)

}

export default sendEmail;

