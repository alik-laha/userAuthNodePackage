import User from "../../model/userModel.js";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import crypto from "crypto";

const Signup = async (req: Request, res: Response) => {
    const { name, email, password, confirmPass } = req.body;
    try {
        const id = crypto.randomBytes(8).toString("hex")
        const pass = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            id: id,
            username: name,
            email: email,
            password: pass,
        });
        if (newUser) {
            res.status(201).json({ message: 'User created successfully' });
        }
        else {
            res.status(400).json({ error: 'User not created' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
export default Signup;