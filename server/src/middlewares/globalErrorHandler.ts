import { ErrorRequestHandler } from 'express';
import { sendErrorResponse } from '../utils/responseHelper';

export const globalErrorHandler: ErrorRequestHandler = (err, _, res, __) => {
  let status: number = err.status || 500;
  let message: string = err.message || 'something went wrong';

  if (err.code === 11000) {
    console.log(err.errorResponse);
    let errMessage;
    Object.keys(err.errorResponse.keyValue).forEach((key) => {
      errMessage = `${key} : ${err.errorResponse.keyValue[key]} already Exist`;
    });

    if (errMessage) message = errMessage;
  }

  if (err.name === 'ZodError') {
    message = err.issues.reduce(
      (
        msg: string,
        issue: { message: string; path: any[]; received: string },
        index: number
      ) => {
        msg +=
          issue.received === 'undefined'
            ? issue.message
            : `In ${issue.path[0]} ${issue.message}`;
        msg += index !== err.issues.length - 1 ? ' || ' : '';
        return msg;
      },
      ''
    );
  }

  return sendErrorResponse(res, { message, status, error: err });
};
