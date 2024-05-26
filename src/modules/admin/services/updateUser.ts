import { UserModel } from '../../users/user.model';
import { TUpdateUserPayload } from '../admin.validation';

export const updateUser = (userId: string, payload: TUpdateUserPayload) => {
  const updatedUser = UserModel.updateOne({ _id: userId }, { $set: payload });
  return updatedUser;
};
