import jwt from 'jsonwebtoken';

import { IUser } from '../interfaces/models/user/IUser';
import { StatusCodes } from './constants';
import { HttpException } from './httpException';

export class Jwt {
  generateToken = (user: IUser): string => {
    const token = jwt.sign(
      user,
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' }
    );
    return token;
  };

  validateToken = (token: string): jwt.JwtPayload | string => {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);

      return data;
    } catch (error) {
      throw new HttpException(StatusCodes.Unauthorized, 'invalid token');
    }
  };
}
