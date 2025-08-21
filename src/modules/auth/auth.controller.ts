import { Request, Response } from 'express';
import { register, login } from './auth.service';
import { sendErrorResponse } from '../../utils/error.utils';

export const registerController = async (req: Request, res: Response) => {
  try {
    const user = await register(req.body);
    res.status(201).json({ message: 'User registered', user });
  } catch (err: any) {
    sendErrorResponse(res, 400, err.message);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await login(email, password);
    res.json({ user, token });
  } catch (err: any) {
    sendErrorResponse(res, 401, err.message);
  }
};