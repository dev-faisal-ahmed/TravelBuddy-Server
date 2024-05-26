import { TripRequestModel } from '../tripRequest.model';
import { TUser } from '../../users/user.interface';

export const getJoinRequests = async (user: TUser) => {
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
        'trip.user': user._id,
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
