import { z } from 'zod';

const updateProfile = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: 'Provide an valid email' }).optional(),
  phone: z.string().optional(),
});

const changePassword = z.object({
  oldPassword: z.string({ required_error: 'Old password is required' }),
  newPassword: z.string({ required_error: 'New Password is required' }),
});

export const profileValidation = { updateProfile, changePassword };
export type TUpdateProfilePayload = z.infer<typeof updateProfile>;
export type TChangePasswordPayload = z.infer<typeof changePassword>;
