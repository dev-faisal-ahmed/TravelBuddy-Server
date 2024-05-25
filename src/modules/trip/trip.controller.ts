import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { tripServices } from './services';

const createTrip = tryCatch(async (req, res) => {
  const newTrip = await tripServices.createTrip(req.user, req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip created successfully',
    data: newTrip,
  });
});

const getSingleTrip = tryCatch(async (req, res) => {
  const trip = await tripServices.getSingleTrip(req.params.tripId);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip Retrieved Successfully',
    data: trip,
  });
});

const deleteTrip = tryCatch(async (req, res) => {
  const deletedStatus = await tripServices.deleteTrip(
    req.user,
    req.params.tripId
  );

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip Deleted Successfully',
    data: deletedStatus,
  });
});

const updateTrip = tryCatch(async (req, res) => {
  const updatedTrip = await tripServices.updateTrip(
    req.user,
    req.body,
    req.params.tripId
  );

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip Updated Successfully',
    data: updatedTrip,
  });
});

export const tripController = {
  createTrip,
  getSingleTrip,
  deleteTrip,
  updateTrip,
};
