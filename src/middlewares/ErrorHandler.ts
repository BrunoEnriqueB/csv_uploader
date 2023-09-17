import { HttpError } from '@/helpers/httpError';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  let status = error.status || 500;

  return res.status(status).json({
    success: false,
    status,
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : {}
  });
};

export default errorHandler;
