import { TripModel } from '../../trip/trip.model';

export const getAllTrips = async () => {
  const trips = await TripModel.find().populate({
    path: 'user',
    select: 'name',
  });
  return trips;
};
