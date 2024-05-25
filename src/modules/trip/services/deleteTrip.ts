import { AppError } from '../../../utils/appError';
import { TUser } from '../../users/user.interface';
import { TripModel } from '../trip.model';

export const deleteTrip = async (user: TUser, tripId: string) => {
  // checking if the user is the owner or not
  const isOwner = await TripModel.findOne({ user: user._id });
  if (!isOwner) throw new AppError('You are not owner of this trip', 400);

  const deletedStatus = await TripModel.updateOne(
    { _id: tripId },
    { $set: { isDeleted: true } }
  );

  return deletedStatus;
};
