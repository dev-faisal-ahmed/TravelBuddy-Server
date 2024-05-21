import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

export const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photoUrl: { type: String },
});

export const UserModel = model('user', UserSchema);
