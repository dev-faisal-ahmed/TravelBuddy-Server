import { sendSuccessResponse } from '../../utils/responseHelper';
import { tryCatch } from '../../utils/tryCatch';
import { authServices } from './services';

const register = tryCatch(async (req, res) => {
  const newUser = await authServices.register(req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'User created successfully',
    data: newUser,
  });
});

export const authController = { register };
