import { Router } from 'express';
import { authGuard } from '../../middlewares/authGuard';
import { validationHandler } from '../../middlewares/validationHandler';
import { tripRequestValidation } from './tripRequest.validation';
import { tripRequestController } from './tripRequest.controller';

export const tripRequestRouter = Router();

tripRequestRouter.post(
  '/',
  authGuard('USER', 'ADMIN'),
  validationHandler(tripRequestValidation.createTripRequest),
  tripRequestController.createTripRequest
);

tripRequestRouter.patch(
  '/',
  authGuard('USER', 'ADMIN'),
  validationHandler(tripRequestValidation.respondTripRequest),
  tripRequestController.respondTripRequest
);

tripRequestRouter.get(
  '/requested',
  authGuard('USER', 'ADMIN'),
  tripRequestController.getRequestedTrips
);

tripRequestRouter.get(
  '/join-requests',
  authGuard('USER', 'ADMIN'),
  tripRequestController.getJoinRequests
);
