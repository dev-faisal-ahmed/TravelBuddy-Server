import { TripModel } from '../../trip/trip.model';

export const deleteTrip = async (tripId: string) => {
  const deletedResponse = await TripModel.updateOne(
    { _id: tripId },
    { $set: { isDeleted: true } }
  );

  return deletedResponse;
};
