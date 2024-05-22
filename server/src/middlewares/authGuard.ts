import { TUserRoles } from '../modules/users/user.interface';
import { AppError } from '../utils/appError';
import { tryCatch } from '../utils/tryCatch';
import { JWT_SECRET } from '../config';
import { UserModel } from '../modules/users/user.model';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authGuard = (...requiredRoles: TUserRoles[]) => {
  return tryCatch(async (req, _, next) => {
    const token = req.headers.authorization;
    if (!token) throw new AppError('Token not found', 404);

    const decodedUser = jwt.verify(token, JWT_SECRET!) as JwtPayload;
    if (!decodedUser) throw new AppError('Invalid Token', 404);

    const user = await UserModel.findOne({
      _id: decodedUser._id,
      status: 'ACTIVE',
    });

    if (!user) throw new AppError('User not found', 404);

    if (requiredRoles && !requiredRoles.includes(user.role))
      throw new AppError('You are not authorized', 401);

    req.user = user;
    next();
  });
};
