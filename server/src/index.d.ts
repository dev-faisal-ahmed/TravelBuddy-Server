import { JwtPayload } from 'jsonwebtoken';
import { TUser } from './modules/users/user.interface';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload & TUser;
    }
  }
}
