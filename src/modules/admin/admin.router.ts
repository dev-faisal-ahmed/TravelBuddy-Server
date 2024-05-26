import { Router } from 'express';
import { authGuard } from '../../middlewares/authGuard';
import { adminController } from './admin.controller';

export const adminRouter = Router();

adminRouter.get('/trips', authGuard('ADMIN'), adminController.getAllTrips);
