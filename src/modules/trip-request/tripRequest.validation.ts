import { z } from 'zod';

const createTripRequest = z.object({
  trip: z.string({ required_error: 'Trip id is required' }),
  phone: z.string({ required_error: 'Phone number is required' }),
  address: z.string({ required_error: 'User address is required' }),
});

const respondTripRequest = z.object({
  _id: z.string({ required_error: 'TripRequest id is required' }),
  isAccepted: z.boolean({ required_error: 'Accepted Status is required' }),
});

export const tripRequestValidation = { createTripRequest, respondTripRequest };

export type TCreateTripRequestPayload = z.infer<typeof createTripRequest>;
export type TRespondTripRequest = z.infer<typeof respondTripRequest>;
