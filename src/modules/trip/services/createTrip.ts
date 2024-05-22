import { TUser } from '../../users/user.interface';
import { TripModel } from '../trip.model';
import { TCreateTripPayload } from '../trip.validation';

export const createTrip = async (user: TUser, payload: TCreateTripPayload) => {
  const newTravel = await TripModel.create({ ...payload, user: user._id });
  return newTravel;
};
