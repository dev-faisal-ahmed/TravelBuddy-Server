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

export const tripController = { createTrip, getSingleTrip };
