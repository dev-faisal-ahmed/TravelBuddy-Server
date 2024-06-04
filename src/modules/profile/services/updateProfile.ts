import { JWT_SECRET } from '../../../config';
import { TUser } from '../../users/user.interface';
import { UserModel } from '../../users/user.model';
import { TUpdateProfilePayload } from '../profile.validation';
import jwt from 'jsonwebtoken';

export const updateProfile = async (
  user: TUser,
  payload: TUpdateProfilePayload
) => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: user._id },
    { $set: payload },
    { new: true }
  );

  const token = jwt.sign(
    {
      _id: updatedUser?._id,
      email: updatedUser?.email,
      name: updatedUser?.name,
      phone: updatedUser?.phone,
      role: updatedUser?.role,
    },
    JWT_SECRET!,
    { expiresIn: '30d' }
  );

  return { token };
};
