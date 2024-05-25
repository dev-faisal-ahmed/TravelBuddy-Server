import { TripModel } from '../../trip/trip.model';

export const getTrips = async (query: Record<string, any>) => {
  const dbQuery: Record<string, any> = {};
  if (query.destination)
    dbQuery.destination = { $regex: query.destination, $options: 'i' };

  if (query.startDate) dbQuery.startDate = { $gte: new Date(query.startDate) };
  if (query.endDate) dbQuery.endDate = { $lte: new Date(query.endDate) };
  if (query.tripType) dbQuery.tripType = query.tripType;

  if (query.key) {
    const keys = query.key.split(',').join('|');
    dbQuery.description = { $regex: new RegExp(keys, 'i') };
  }

  const page = Number(query.page || '1');
  const limit = Number(query.limit || '12');

  const total = await TripModel.countDocuments(dbQuery);

  const trips = await TripModel.find({ ...dbQuery, isDeleted: false })
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    trips: trips.reverse(),
  };
};
