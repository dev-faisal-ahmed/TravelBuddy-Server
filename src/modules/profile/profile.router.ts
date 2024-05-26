import { Router } from 'express';
import { authGuard } from '../../middlewares/authGuard';
import { profileValidation } from './profile.validation';
import { validationHandler } from '../../middlewares/validationHandler';
import { profileController } from './profile.controller';

export const profileRouter = Router();

profileRouter.patch(
  '/',
  authGuard('USER', 'ADMIN'),
  validationHandler(profileValidation.updateProfile),
  profileController.updateProfile
);

profileRouter.patch(
  '/change-password',
  authGuard('USER', 'ADMIN'),
  validationHandler(profileValidation.changePassword),
  profileController.changePassword
);
