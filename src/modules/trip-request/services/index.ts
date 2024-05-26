import { createTripRequest } from './createTripRequest';
import { getJoinRequests } from './getJoinRequest';
import { getRequestedTrips } from './getRequestedTrips';
import { respondTripRequest } from './respondTripRequest';

export const tripRequestServices = {
  createTripRequest,
  respondTripRequest,
  getRequestedTrips,
  getJoinRequests,
};
