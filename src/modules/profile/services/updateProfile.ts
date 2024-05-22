import { TUser } from '../../users/user.interface';
import { UserModel } from '../../users/user.model';
import { TUpdateProfilePayload } from '../profile.validation';

export const updateProfile = async (
  user: TUser,
  payload: TUpdateProfilePayload
) => {
  const updatedUser = await UserModel.updateOne(
    { _id: user._id },
    { $set: payload }
  );

  return updatedUser;
};
