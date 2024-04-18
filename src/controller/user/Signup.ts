import User from "../../model/userModel.js";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import crypto from "crypto";
import SendEmail from "../../helper/mailer.js";

const Signup = async (req: Request, res: Response) => {
    const { name, email, password, confirmPass } = req.body;
    try {
        const id = crypto.randomBytes(8).toString("hex")
        const pass = await bcrypt.hash(password, 10);
        const oldUser = await User.findOne({ where: { email: email } });
        if (oldUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        const newUser = await User.create({
            id: id,
            username: name,
            email: email,
            password: pass,
        });
        if (newUser) {
            const Mail = await SendEmail({ email, id });
            if (Mail) {
                return res.status(201).json({ message: 'User created successfully' });
            }
            else {
                await User.destroy({ where: { email: email } });
                return res.status(400).json({ error: 'User not created' });
            }
        }
        else {
            return res.status(400).json({ error: 'User not created' });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
export default Signup;