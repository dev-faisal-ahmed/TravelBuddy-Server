import { AppError } from '../../../utils/appError';
import { TUser } from '../../users/user.interface';
import { TripModel } from '../trip.model';
import { tripRouter } from '../trip.router';
import { TUpdateTripPayload } from '../trip.validation';

export const updateTrip = async (
  user: TUser,
  payload: TUpdateTripPayload,
  tripId: string
) => {
  // checking if the user is owner
  const isOwner = await TripModel.findOne({ user: user._id, _id: tripId });
  if (!isOwner) throw new AppError('You are not the owner', 400);

  const updatedTrip = await TripModel.updateOne(
    { _id: tripId },
    { $set: payload },
    { runValidators: true }
  );

  return updateTrip;
};
