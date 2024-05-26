import { TripModel } from '../../trip/trip.model';

export const getAllTrips = async () => {
  const trips = await TripModel.find();
  return trips;
};
