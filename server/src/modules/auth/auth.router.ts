import { Router } from 'express';
import { validationHandler } from '../../middlewares/validationHandler';
import { authValidation } from './auth.validation';
import { authController } from './auth.controller';

export const authRouter = Router();

authRouter.post(
  '/register',
  validationHandler(authValidation.register),
  authController.register
);
