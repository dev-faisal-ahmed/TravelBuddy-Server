import { Router } from 'express';
import { authRouter } from './modules/auth/auth.router';
import { tripRouter } from './modules/trip/trip.router';
import { tripsRouter } from './modules/trips/trips.router';
import { tripRequestRouter } from './modules/trip-request/tripRequest.router';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/trip', tripRouter);
appRouter.use('/trips', tripsRouter);
appRouter.use('/trip-request', tripRequestRouter);
