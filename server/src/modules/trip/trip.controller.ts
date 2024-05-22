import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { tripServices } from './services';

const createTrip = tryCatch(async (req, res) => {
  const newTravel = await tripServices.createTrip(req.user, req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Travel created successfully',
    data: newTravel,
  });
});

export const tripController = { createTrip };
