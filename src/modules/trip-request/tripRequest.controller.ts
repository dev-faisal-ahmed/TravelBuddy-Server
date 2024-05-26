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
    message: `Request ${req.body.isAccepted ? 'Accepted' : 'Rejected'}`,
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

const getJoinRequests = tryCatch(async (req, res) => {
  const joinRequests = await tripRequestServices.getJoinRequests(req.user);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Trip join requests retrieved successfully',
    data: joinRequests,
  });
});

export const tripRequestController = {
  createTripRequest,
  respondTripRequest,
  getRequestedTrips,
  getJoinRequests,
};
