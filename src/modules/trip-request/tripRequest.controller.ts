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

const respondTripRequest = tryCatch(async (req, res) => {
  const responseDetails = await tripRequestServices.respondTripRequest(
    req.user,
    req.body
  );

  sendSuccessResponse(res, {
    status: 200,
    message: 'Successfully responded',
    data: responseDetails,
  });
});

const getRequestedTrips = tryCatch(async (req, res) => {
  const requestedTrips = await tripRequestServices.getRequestedTrips(req.user);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Requested Trips retrieved successfully',
    data: requestedTrips,
  });
});

export const tripRequestController = {
  createTripRequest,
  respondTripRequest,
  getRequestedTrips,
};
