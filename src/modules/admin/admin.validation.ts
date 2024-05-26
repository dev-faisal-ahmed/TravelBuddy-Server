import { z } from 'zod';
import { userRoles, userStatus } from '../users/user.constants';

const updateUser = z.object({
  role: z.enum([...(userRoles as [string, ...string[]])]).optional(),
  status: z.enum([...(userStatus as [string, ...string[]])]).optional(),
});

export const adminValidation = { updateUser };

export type TUpdateUserPayload = z.infer<typeof updateUser>;
