import { Schema, model } from 'mongoose';
import { TTrip } from './trip.interface';
import { tripTypes } from './trip.constants';

const TripSchema = new Schema<TTrip>({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  images: [{ type: String, required: true }],
  description: { type: String, required: true },
  destination: { type: String, required: true },
  itinerary: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  tripType: { type: String, enum: tripTypes, required: true },
});

export const TripModel = model('trip', TripSchema);
