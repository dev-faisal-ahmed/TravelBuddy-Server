import { z } from 'zod';
import { tripTypes } from './trip.constants';

const createTrip = z.object({
  images: z.string({ required_error: 'images is required' }).array(),
  destination: z.string({ required_error: 'Destination is required' }),
  description: z.string({ required_error: 'Description is required' }),
  itinerary: z.string({ required_error: 'Itinerary is required' }),

  startDate: z
    .string({ required_error: 'Stating date is required' })
    .transform((date) => new Date(date)),

  endDate: z
    .string({ required_error: 'Ending date is required' })
    .transform((date) => new Date(date)),

  tripType: z.enum([...(tripTypes as [string, ...string[]])], {
    required_error: 'Trip Types is required',
    message: `Trip types has to be in '${tripTypes}'`,
  }),
});

const updateTrip = z.object({
  images: z.string().array().optional(),
  destination: z.string().optional(),
  description: z.string().optional(),
  itinerary: z.string().optional(),

  startDate: z
    .string()
    .transform((date) => new Date(date))
    .optional(),

  endDate: z
    .string()
    .transform((date) => new Date(date))
    .optional(),

  tripType: z
    .enum([...(tripTypes as [string, ...string[]])], {
      required_error: 'Trip Types is required',
      message: `Trip types has to be in '${tripTypes}'`,
    })
    .optional(),
});

export const tripValidation = { createTrip, updateTrip };

export type TCreateTripPayload = z.infer<typeof createTrip>;
export type TUpdateTripPayload = z.infer<typeof updateTrip>;
