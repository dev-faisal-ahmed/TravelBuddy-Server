import { Types } from 'mongoose';
import { TripModel } from '../trip.model';

export const getSingleTrip = async (tripId: string) => {
  const trip = await TripModel.aggregate([
    { $match: { isDeleted: false, _id: new Types.ObjectId(tripId) } },
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: { path: '$user' } },
    {
      $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'trip',
        as: 'reviews',
      },
    },
  ]);

  return trip;
};
