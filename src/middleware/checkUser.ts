import { Request, Response, NextFunction } from 'express';

const CheckUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, confirmPass } = req.body || {}; // Adjusted destructuring assignment

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ error: 'Email is invalid' });
    }
    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }
    if (!confirmPass) {
        return res.status(400).json({ error: 'Confirm Password is required' });
    }
    if (confirmPass.length < 8) {
        return res.status(400).json({ error: 'Confirm Password must be at least 8 characters' });
    }
    if (password !== confirmPass) {
        return res.status(400).json({ error: 'Password and Confirm Password must be the same' });
    }
    // If all validations pass, continue to the next middleware or route handler
    next();

};

export default CheckUser;