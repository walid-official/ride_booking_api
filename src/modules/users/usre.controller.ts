import { Request, Response } from 'express';
import { getAllUsers, blockUser } from './user.service';
import { sendErrorResponse } from '../../utils/error.utils';

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err: any) {
    sendErrorResponse(res, 500, err.message);
  }
};

export const blockUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isBlocked } = req.body;
    const user = await blockUser(id, isBlocked);
    res.json({ message: `User ${isBlocked ? 'blocked' : 'unblocked'}`, user });
  } catch (err: any) {
    sendErrorResponse(res, 404, err.message);
  }
};