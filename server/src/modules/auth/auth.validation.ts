import { z } from 'zod';

const register = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide an valid email address' }),

  password: z.string({ required_error: 'Password is required' }),
});

export const login = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide an valid email address' }),

  password: z.string({ required_error: 'Password is required' }),
});

export const authValidation = { register, login };

export type TRegisterPayload = z.infer<typeof register>;
export type TLoginPayload = z.infer<typeof login>;
