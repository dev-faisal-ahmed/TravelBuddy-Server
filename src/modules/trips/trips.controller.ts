import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { tripsServices } from './services';

const getTrips = tryCatch(async (req, res) => {
  const tripsData = await tripsServices.getTrips(req.query);

  sendSuccessResponse(res, {
    status: 200,
    message: 'All Trips retrieved successfully',
    meta: tripsData.meta,
    data: tripsData.trips,
  });
});

const getMyTrips = tryCatch(async (req, res) => {
  const myTrips = await tripsServices.getMyTrips(req.user);

  sendSuccessResponse(res, {
    status: 200,
    message: 'My Trips retrieved successfully',
    data: myTrips,
  });
});

export const tripsController = { getTrips, getMyTrips };
