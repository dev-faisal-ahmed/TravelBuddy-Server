import { Router } from 'express';
import { tripsController } from './trips.controller';

export const tripsRouter = Router();

tripsRouter.get('/', tripsController.getTrips);
