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

const login = tryCatch(async (req, res) => {
  const token = await authServices.login(req.body);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Login was successful',
    data: { token },
  });
});

export const authController = { register, login };
