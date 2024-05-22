import { Types } from 'mongoose';
import { AppError } from '../../../utils/appError';
import { TUser } from '../../users/user.interface';
import { TripRequestModel } from '../tripRequest.model';
import { TRespondTripRequest } from '../tripRequest.validation';

export const respondTripRequest = async (
  user: TUser,
  payload: TRespondTripRequest
) => {
  // checking if the trip request exist or not
  const isRequestExist = await TripRequestModel.findOne({ _id: payload._id });
  if (!isRequestExist) throw new AppError('TripRequest not found', 400);

  // checking if the current logged in user is the owner of the trip
  const [tripRequestInfo] = await TripRequestModel.aggregate([
    {
      $match: {
        _id: new Types.ObjectId(payload._id),
      },
    },
    {
      $lookup: {
        from: 'trips',
        localField: 'trip',
        foreignField: '_id',
        as: 'trip',
      },
    },
  ]);

  // now checking if the use is the owner or not
  /* to do so we have to convert userId and the user if found from trip owner into a string , 
  if we don't convert that into a string this will return as new ObjectId(_id)
   */

  if (user._id.toString() !== tripRequestInfo.trip?.[0].user?.toString())
    throw new AppError('You are not authorized to respond to the request', 400);

  // updating the request
  if (payload.isAccepted) {
    const requestStatus = await TripRequestModel.updateOne(
      { _id: payload._id },
      { $set: { status: 'ACCEPTED' } }
    );

    return requestStatus;
  } else {
    // deleting the trip request
    const requestStatus = await TripRequestModel.deleteOne({
      _id: payload._id,
    });

    return requestStatus;
  }
};
