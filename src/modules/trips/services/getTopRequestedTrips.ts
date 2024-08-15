import { TripModel } from '../../trip/trip.model';

export const getTopRequestedTrips = async () => {
  const trips = await TripModel.aggregate([
    { $match: { isDeleted: false } },
    {
      $lookup: {
        from: 'trip-requests',
        localField: '_id',
        foreignField: 'trip',
        as: 'tripRequests',
      },
    },
    { $sort: { tripRequests: -1 } },
  ]).limit(6);

  return trips;
};
