import { Types } from 'mongoose';
import { TripRequestModel } from '../tripRequest.model';

export const getJoinRequests = async (userId: string) => {
  const [tripRequests] = await TripRequestModel.aggregate([
    {
      $lookup: {
        from: 'trips',
        localField: 'trip',
        foreignField: '_id',
        as: 'trip',
      },
    },

    {
      $unwind: {
        path: '$trip',
      },
    },

    {
      $match: {
        'trip.user': new Types.ObjectId(userId),
      },
    },

    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },

    {
      $unwind: {
        path: '$user',
      },
    },
  ]);

  return tripRequests;
};
