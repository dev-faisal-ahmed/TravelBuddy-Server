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

const deleteReview = tryCatch(async (req, res) => {
  const { reviewId } = req.params;
  const message = await reviewServices.deleteReview(reviewId);

  sendSuccessResponse(res, {
    status: 200,
    message: message,
    data: null,
  });
});

export const reviewController = { addReview, deleteReview };
