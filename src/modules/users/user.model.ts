import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import { userRoles, userStatus } from './user.constants';

export const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photoUrl: { type: String },
  role: { type: String, enum: userRoles, default: 'USER' },
  status: { type: String, enum: userStatus, default: 'ACTIVE' },
});

export const UserModel = model('user', UserSchema);
