import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { profileServices } from './services';

const updateProfile = tryCatch(async (req, res) => {
  const updateProfile = await profileServices.updateProfile(req.user, req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Profile updated successfully',
    data: updateProfile,
  });
});

const changePassword = tryCatch(async (req, res) => {
  const updatedUser = await profileServices.changePassword(req.user, req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Password changed successfully',
    data: updatedUser,
  });
});

export const profileController = { updateProfile, changePassword };
