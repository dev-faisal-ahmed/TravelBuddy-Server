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

export const tripsController = { getTrips };
