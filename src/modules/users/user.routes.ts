import express from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import { authorize } from '../../middlewares/role.middleware';
import { blockUserController, getAllUsersController } from './usre.controller';


const router = express.Router();

router.get('/', authenticate, authorize(['admin']), getAllUsersController);
router.patch('/block/:id', authenticate, authorize(['admin']), blockUserController);

export default router;