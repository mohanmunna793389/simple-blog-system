import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import { config } from 'dotenv';
config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(errorHandler(401, 'Unauthorized - No token provided'));
  }

  const token = authHeader.split(' ')[1]; 
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized - Invalid token'));
    }
    req.user = user; 
    next();
  });
};