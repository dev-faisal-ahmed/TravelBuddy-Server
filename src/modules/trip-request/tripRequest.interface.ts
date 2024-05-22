import { Schema } from 'mongoose';

export type TTripRequestStatus = 'PENDING' | 'ACCEPTED';

export type TTripRequest = {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  trip: Schema.Types.ObjectId;
  phone: string;
  address: string;
  status: TTripRequestStatus;
};
