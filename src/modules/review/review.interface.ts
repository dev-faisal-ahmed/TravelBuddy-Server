import { Schema } from 'mongoose';

export type TReview = {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  trip: Schema.Types.ObjectId;
  details: string;
  rating: number;
};
