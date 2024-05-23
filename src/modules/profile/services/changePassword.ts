import bcrypt from 'bcrypt';
import { AppError } from '../../../utils/appError';
import { TUser } from '../../users/user.interface';
import { UserModel } from '../../users/user.model';
import { TChangePasswordPayload } from '../profile.validation';
import { BCRYPT_SALT_ROUND } from '../../../config';

export const changePassword = async (
  user: TUser,
  payload: TChangePasswordPayload
) => {
  // checking if the old password is valid or not
  const isPasswordMatched = await bcrypt.compare(
    payload.oldPassword,
    user.password
  );

  if (!isPasswordMatched) throw new AppError('Password does not match!', 400);

  // updating user's password
  const hashedPassword = await bcrypt.hash(
    payload.newPassword,
    BCRYPT_SALT_ROUND
  );

  const updatedUser = await UserModel.updateOne(
    { _id: user._id },
    { $set: { password: hashedPassword } }
  );

  return updatedUser;
};
