import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { IUser } from '../interfaces/IUser';

dotenv.config();

export class FuncUseful {
  excludePassword(users: IUser[]): IUser[] {
    users.forEach(user => delete user.password);

    return users;
  }

  generateToken = (user: IUser): string => {
    const token = jwt.sign(
      user,
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' }
    );
    return token;
  };
}

export class HttpException extends Error {
  status: number; // propriedade

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
