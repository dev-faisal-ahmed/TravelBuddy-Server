import { TripModel } from '../../trip/trip.model';

export const getTrips = async (query: Record<string, string>) => {
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

  const trips = await TripModel.find(dbQuery);

  return trips;
};
