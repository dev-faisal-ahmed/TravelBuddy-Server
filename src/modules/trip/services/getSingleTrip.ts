import { TripModel } from '../trip.model';

export const getSingleTrip = async (tripId: string) => {
  const trip = await TripModel.findOne({ _id: tripId });
  return trip;
};
