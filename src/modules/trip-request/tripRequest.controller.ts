import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { tripRequestServices } from './services';

const createTripRequest = tryCatch(async (req, res) => {
  const newTripRequest = await tripRequestServices.createTripRequest(
    req.user,
    req.body
  );

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip request sent successfully',
    data: newTripRequest,
  });
});

export const tripRequestController = { createTripRequest };
