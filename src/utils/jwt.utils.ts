import jwt from 'jsonwebtoken';
import { config } from '../config/db';

export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, config.jwtSecret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwtSecret) as { userId: string; role: string };
};