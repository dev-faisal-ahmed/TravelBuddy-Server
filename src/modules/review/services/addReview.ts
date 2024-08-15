import { TUser } from '../../users/user.interface';
import { ReviewModel } from '../review.model';
import { TAddReviewPayload } from '../review.validation';

export const addReview = async (user: TUser, payload: TAddReviewPayload) => {
  const review = await ReviewModel.create({ ...payload, user: user._id });
  return review;
};
