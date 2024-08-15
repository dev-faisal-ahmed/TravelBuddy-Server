import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { reviewServices } from './services';

const addReview = tryCatch(async (req, res) => {
  const review = await reviewServices.addReview(req.user, req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Review Added',
    data: review,
  });
});

export const reviewController = { addReview };
