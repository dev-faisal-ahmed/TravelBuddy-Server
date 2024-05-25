import { TripModel } from '../../trip/trip.model';
import { TUser } from '../../users/user.interface';

export const getMyTrips = async (user: TUser) => {
  const myTrips = await TripModel.find({ user: user._id });
  return myTrips;
};
