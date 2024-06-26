import User from "../../model/userModel.js";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user: any = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        return res.status(200).json({ message: 'Login successful' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

export default Login;