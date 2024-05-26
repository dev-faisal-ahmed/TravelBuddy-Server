import { TUser } from '../../users/user.interface';
import { UserModel } from '../../users/user.model';

export const getAllUsers = async (user: TUser) => {
  const users = await UserModel.find({ _id: { $ne: user._id } });
  return users;
};
