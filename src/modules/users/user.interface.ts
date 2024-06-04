import { Schema } from 'mongoose';

export type TUserRoles = 'ADMIN' | 'USER';
export type TUserStatus = 'ACTIVE' | 'BLOCKED';
export type TUser = {
  _id: Schema.Types.ObjectId;
  email: string;
  phone: string;
  name: string;
  password: string;
  photoUrl: string;
  role: TUserRoles;
  status: TUserStatus;
};
