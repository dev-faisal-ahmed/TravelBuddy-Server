import { TUser } from '../../users/user.interface';
import { TripRequestModel } from '../tripRequest.model';

export const getRequestedTrips = async (user: TUser) => {
  const trips = await TripRequestModel.find({ user: user._id }, { trip: 1 });
  return trips;
};
