import { AppError } from '../../../utils/appError';
import { ReviewModel } from '../review.model';

export const deleteReview = async (reviewId: string) => {
  const deletedStatus = await ReviewModel.deleteOne({ _id: reviewId });
  if (!deletedStatus.acknowledged)
    throw new AppError('Failed to delete the review', 400);

  return 'Review Deleted';
};
