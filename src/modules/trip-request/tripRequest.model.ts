import { Schema, model } from 'mongoose';
import { TTripRequest } from './tripRequest.interface';
import { tripStatus } from './tripRequest.constants';

const TripRequestSchema = new Schema<TTripRequest>({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  trip: { type: Schema.Types.ObjectId, required: true, ref: 'trip' },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, enum: tripStatus, default: 'PENDING' },
});

export const TripRequestModel = model('trip-request', TripRequestSchema);
