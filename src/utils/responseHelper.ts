import { Response } from 'express';

type SuccessResponseType = { data: any; message: string; status: number };
type ErrorResponseType = { error: any; message: string; status: number };

export const sendSuccessResponse = (
  res: Response,
  { status, data, message }: SuccessResponseType
) => {
  res.status(status).json({ ok: true, message, statusCode: status, data });
};

export const sendErrorResponse = (
  res: Response,
  { status, message, error }: ErrorResponseType
) => {
  res.status(status).json({ ok: false, message, error });
};
