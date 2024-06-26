import { Router } from 'express';
import { authGuard } from '../../middlewares/authGuard';
import { validationHandler } from '../../middlewares/validationHandler';
import { tripValidation } from './trip.validation';
import { tripController } from './trip.controller';

export const tripRouter = Router();

tripRouter.post(
  '/',
  authGuard('USER', 'ADMIN'),
  validationHandler(tripValidation.createTrip),
  tripController.createTrip
);

tripRouter.get('/:tripId', tripController.getSingleTrip);
tripRouter.delete(
  '/:tripId',
  authGuard('USER', 'ADMIN'),
  tripController.deleteTrip
);
tripRouter.patch(
  '/:tripId',
  authGuard('USER', 'ADMIN'),
  tripController.updateTrip
);
