import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppError } from '../../../utils/appError';
import { UserModel } from '../../users/user.model';
import { TLoginPayload } from '../auth.validation';
import { JWT_SECRET } from '../../../config';

export const login = async (payload: TLoginPayload) => {
  // checking if the user is already exist or not
  const isUserExist = await UserModel.findOne({
    email: payload.email,
    status: 'ACTIVE',
  });

  if (!isUserExist) throw new AppError('User not found', 404);

  // matching the user password
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist.password
  );

  // wrong password
  if (!isPasswordMatched) throw new AppError('Password does not match!', 400);

  // creating token
  const token = jwt.sign(
    {
      email: isUserExist.email,
      name: isUserExist.name,
      role: isUserExist.role,
    },
    JWT_SECRET!,
    { expiresIn: '30d' }
  );

  return token;
};
