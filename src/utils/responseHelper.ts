import { Response } from 'express';

type SuccessResponseType = {
  data: any;
  message: string;
  status: number;
  meta?: { page: number; limit: number; total: number; totalPages: number };
};
type ErrorResponseType = { error: any; message: string; status: number };

export const sendSuccessResponse = (
  res: Response,
  { status, data, message, meta }: SuccessResponseType
) => {
  res
    .status(status)
    .json({ ok: true, message, statusCode: status, meta, data });
};

export const sendErrorResponse = (
  res: Response,
  { status, message, error }: ErrorResponseType
) => {
  res.status(status).json({ ok: false, message, error });
};
