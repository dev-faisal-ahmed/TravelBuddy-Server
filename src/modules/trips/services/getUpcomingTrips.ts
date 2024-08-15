import { TripModel } from '../../trip/trip.model';

export const getUpComingTrips = async () => {
  const today = new Date();
  today.setHours(0, 0, 0);

  const trips = await TripModel.find({ startDate: { $gte: today } }).limit(6);
  return trips;
};
