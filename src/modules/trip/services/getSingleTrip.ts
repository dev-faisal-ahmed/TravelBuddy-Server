import { ReviewModel } from '../../review/review.model';
import { TripModel } from '../trip.model';

export const getSingleTrip = async (tripId: string) => {
  const trip = await TripModel.findOne({ _id: tripId }).populate('user');
  const reviews = await ReviewModel.find({ trip: tripId }).populate('user');

  return { trip, reviews };
};
