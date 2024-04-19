import jwt from "jsonwebtoken";
import { Request, Response } from "express";


const Verify = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET!);
        if (!verified) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        return res.status(200).json({ message: 'User verified', user: verified });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
export default Verify;