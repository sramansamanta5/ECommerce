import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Protect Routes Middleware
export const protect = async (req, res, next) => {
    let token = req.cookies?.refresh_token; // Get refresh token from cookies

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        // Verify the refresh token
        const decoded = jwt.verify(token, process.env.REFRESH_SECRET);

        // Fetch user from DB (excluding password)
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next(); // Allow access to the protected route
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};


// Admin Middleware
export const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res.status(403).json({ message: 'Not authorized as admin' });
    }
};
