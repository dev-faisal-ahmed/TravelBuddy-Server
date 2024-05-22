import bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUND } from '../../../config';
import { TRegisterPayload } from '../auth.validation';
import { UserModel } from '../../users/user.model';

export const register = async (payload: TRegisterPayload) => {
  // encrypting password and creating new user
  const password = await bcrypt.hash(payload.password, BCRYPT_SALT_ROUND);
  const newUser = await UserModel.create({ ...payload, password });

  // detaching password form the response
  const { password: hashedPassword, ...restUserInfo } = newUser.toObject();
  return restUserInfo;
};
