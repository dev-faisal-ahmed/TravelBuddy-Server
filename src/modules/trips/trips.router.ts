import { Router } from 'express';
import { tripsController } from './trips.controller';
import { authGuard } from '../../middlewares/authGuard';

export const tripsRouter = Router();

tripsRouter.get('/', tripsController.getTrips);

tripsRouter.get(
  '/mine',
  authGuard('USER', 'ADMIN'),
  tripsController.getMyTrips
);

tripsRouter.get('/top', tripsController.getTopRequestedTrips);
tripsRouter.get('/upcoming', tripsController.getUpcomingTrips);
