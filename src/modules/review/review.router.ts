import { Router } from 'express';
import { authGuard } from '../../middlewares/authGuard';
import { validationHandler } from '../../middlewares/validationHandler';
import { reviewValidation } from './review.validation';
import { reviewController } from './review.controller';

export const reviewRouter = Router();

reviewRouter.post(
  '/',
  authGuard('USER', 'ADMIN'),
  validationHandler(reviewValidation.addReview),
  reviewController.addReview
);

reviewRouter.delete(
  '/:reviewId',
  authGuard('USER', 'ADMIN'),
  reviewController.deleteReview
);
