import { NextFunction } from 'express';
import User from '../model/userModel';
import { user } from '../globalType/type';

export default async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, confirmPass } = req.body ? {};
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    else if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    else if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }
    else if (!confirmPass) {
        return res.status(400).json({ error: 'Confirm Password is required' });
    }
    else if (password !== confirmPass) {
        return res.status(400).json({ error: 'Password and Confirm Password must be the same' });
    }
    else {
        next();
    }
}