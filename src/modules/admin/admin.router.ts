import { Router } from 'express';
import { authGuard } from '../../middlewares/authGuard';
import { adminController } from './admin.controller';
import { validationHandler } from '../../middlewares/validationHandler';
import { adminValidation } from './admin.validation';

export const adminRouter = Router();

adminRouter.get('/trips', authGuard('ADMIN'), adminController.getAllTrips);

adminRouter.delete(
  '/trip/:tripId',
  authGuard('ADMIN'),
  adminController.deleteTrip
);

adminRouter.get('/users', authGuard('ADMIN'), adminController.getAllUsers);

adminRouter.patch(
  '/user/:userId',
  authGuard('ADMIN'),
  validationHandler(adminValidation.updateUser),
  adminController.updateUser
);
