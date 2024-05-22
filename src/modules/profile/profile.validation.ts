import { z } from 'zod';

const updateProfile = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: 'Provide an valid email' }).optional(),
});

export const profileValidation = { updateProfile };
export type TUpdateProfilePayload = z.infer<typeof updateProfile>;
