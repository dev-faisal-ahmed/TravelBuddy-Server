import { model, Schema } from 'mongoose';
import { TReview } from './review.interface';

const ReviewSchema = new Schema<TReview>({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  trip: { type: Schema.Types.ObjectId, required: true, ref: 'trips' },
  details: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
});

export const ReviewModel = model('review', ReviewSchema);
