import { Router } from 'express';
import { authRouter } from './modules/auth/auth.router';
import { tripRouter } from './modules/trip/trip.router';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/trip', tripRouter);
