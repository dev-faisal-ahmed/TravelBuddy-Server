import { Schema } from 'mongoose';

export type TTripType = 'ADVENTURE' | 'LEISURE' | 'BUSINESS' | 'STUDY_TOUR';

export type TTrip = {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  images: string;
  destination: string;
  description: string;
  itinerary: string;
  startDate: Date;
  endDate: Date;
  tripType: TTripType;
  isDeleted: boolean;
};
