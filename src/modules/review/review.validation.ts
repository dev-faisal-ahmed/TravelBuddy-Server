import { z } from 'zod';

const addReview = z.object({
  rating: z.number({ required_error: 'Rating is required' }),
  details: z.string({ required_error: 'Details is required' }),
  trip: z.string({ required_error: 'TripId is required' }),
});

export const reviewValidation = { addReview };

export type TAddReviewPayload = z.infer<typeof addReview>;
