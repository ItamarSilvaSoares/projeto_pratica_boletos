import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from '../utils/constants';
import { HttpException } from '../utils/httpException';
import { Jwt } from '../utils/jwt';

import JoiSchemas from '../validations/joi.schemas';

class MiddlewareValidations {
  private readonly schemas = new JoiSchemas();

  validateBodyLogin = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.loginSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyNewUser: any = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.newUserSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyNewCell = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.newCellSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyNewEmail = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.newEmailSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  tokenValidate = (req: Request, _res: Response, next: NextFunction): void => {
    const jwt = new Jwt();

    const data = jwt.validateToken(req.headers.authorization as string);

    req.body.user = data;

    next();
  };

  validateBodyUserUpdate = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.userUpdateSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyEmailUpdate = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.emailUpdateSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyCellUpdate = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.cellUpdateSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyCellDelete = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.cellDeleteSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };

  validateBodyEmailDelete = (req: Request, _res: Response,
    next: NextFunction): void => {
    const { error } = this.schemas.emailDeleteSchema.validate(req.body);

    if (error != null) {
      throw new HttpException(StatusCodes.BadRequest,
        error.message);
    }

    next();
  };
};

export default new MiddlewareValidations();
