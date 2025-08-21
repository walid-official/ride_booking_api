import { Request, Response, NextFunction } from 'express';
import { sendErrorResponse } from '../utils/error.utils';

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = (req as any).user.role;
    if (!roles.includes(userRole)) {
      return sendErrorResponse(res, 403, 'Access denied');
    }
    next();
  };
};