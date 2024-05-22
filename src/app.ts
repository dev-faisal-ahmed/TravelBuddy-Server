import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { appRouter } from './router';

export const app = express();

// parser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1', appRouter);

app.get('/', (_, res) => {
  res.status(200).json({ hi: 'Hello From Travel Buddy' });
});

app.use(globalErrorHandler);
