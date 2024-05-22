import { AppError } from '../../../utils/appError';
import { TripModel } from '../../trip/trip.model';
import { TUser } from '../../users/user.interface';
import { TripRequestModel } from '../tripRequest.model';
import { TCreateTripRequestPayload } from '../tripRequest.validation';

export const createTripRequest = async (
  user: TUser,
  payload: TCreateTripRequestPayload
) => {
  // checking if that trip exist or not
  const isTripExist = await TripModel.findOne({ _id: payload.trip });
  if (!isTripExist) throw new AppError('No trip found', 400);

  // checking if user already requested for this trip
  const isTripRequestExist = await TripRequestModel.findOne({
    user: user._id,
    trip: payload.trip,
  });
  if (isTripRequestExist) throw new AppError('You have already requested', 400);

  const newTripRequest = await TripRequestModel.create({
    ...payload,
    user: user._id,
  });

  return newTripRequest;
};
