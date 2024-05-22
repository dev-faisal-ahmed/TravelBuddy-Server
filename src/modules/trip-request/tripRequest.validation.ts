import { z } from 'zod';

const createTripRequest = z.object({
  trip: z.string({ required_error: 'Trip Id is required' }),
  phone: z.string({ required_error: 'Phone number is required' }),
  address: z.string({ required_error: 'User address is required' }),
});

export const tripRequestValidation = { createTripRequest };

export type TCreateTripRequestPayload = z.infer<typeof createTripRequest>;
