import { z } from 'zod';

const register = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide an valid email address' }),

  password: z.string({ required_error: 'Password is required' }),
});
export const authValidation = { register };

export type TRegisterPayload = z.infer<typeof register>;
