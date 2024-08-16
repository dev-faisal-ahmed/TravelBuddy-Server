import { AppError } from '../../../utils/appError';
import { TripModel } from '../../trip/trip.model';
import { TUser } from '../../users/user.interface';
import { ReviewModel } from '../review.model';
import { TAddReviewPayload } from '../review.validation';

export const addReview = async (user: TUser, payload: TAddReviewPayload) => {
  const tripDetails = await TripModel.findOne({
    _id: payload.trip,
    user: user._id,
  });

  if (tripDetails)
    throw new AppError('You can not review on your own trip', 400);

  const review = await ReviewModel.create({ ...payload, user: user._id });

  return review;
};
