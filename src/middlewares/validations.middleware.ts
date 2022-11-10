import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from '../utils/constants';
import { HttpException } from '../utils/functions';

import JoiSchemas from '../validations/joi.schemas';

export default class MiddlewareValidations {
  private readonly schemas = new JoiSchemas();

  validateBodyLogin = (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = this.schemas.loginSchema.validate(req.body);

    if (error != null) throw new HttpException(StatusCodes.BadRequest, error.message);

    next();
  };
}
