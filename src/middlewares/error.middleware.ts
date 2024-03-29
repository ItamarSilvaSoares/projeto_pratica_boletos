import { NextFunction, Request, Response } from 'express';

import { HttpException } from '../utils/httpException';

const errorMiddleware = (err: Error, _req: Request,
  res: Response, _next: NextFunction): void => {
  const { status, message } = err as HttpException;
  res.status(status ?? 500).json({ message });
};

export default errorMiddleware;
