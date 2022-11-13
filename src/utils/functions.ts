import { Prisma } from '@prisma/client';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { INewUserFull, IUser } from '../interfaces/IUser';
import { KeyOptional } from './constants';

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

  configNewUserObject(newUserObj: INewUserFull): Prisma.UserCreateInput {
    if (KeyOptional.Cell in newUserObj && KeyOptional.Email in newUserObj) {
      const { newUser, cell, email } = newUserObj;
      return {
        ...newUser,
        cell: {
          create: cell
        },
        email: {
          create: email
        }
      };
    }

    if (KeyOptional.Cell in newUserObj) {
      const { newUser, cell } = newUserObj;
      return {
        ...newUser,
        cell: {
          create: cell
        }
      };
    }

    if (KeyOptional.Email in newUserObj) {
      const { newUser, email } = newUserObj;
      return {
        ...newUser,
        email: {
          create: email
        }
      };
    }

    return newUserObj.newUser;
  }
}

export class HttpException extends Error {
  status: number; // propriedade

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
