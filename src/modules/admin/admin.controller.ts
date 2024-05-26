import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { adminServices } from './services';

const getAllTrips = tryCatch(async (req, res) => {
  const trips = await adminServices.getAllTrips();

  sendSuccessResponse(res, {
    status: 200,
    message: 'All Trips Retrieved Successfully',
    data: trips,
  });
});

const deleteTrip = tryCatch(async (req, res) => {
  const deletedTrip = await adminServices.deleteTrip(req.params.tripId);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip Deleted Successfully',
    data: deletedTrip,
  });
});

export const adminController = { getAllTrips, deleteTrip };
