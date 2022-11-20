import { Prisma } from '@prisma/client';

import dotenv from 'dotenv';

import { INewUserFull, IUser } from '../interfaces/models/user/IUser';
import { KeyOptional } from './constants';

dotenv.config();

export class FuncUseful {
  excludePassword(users: IUser[]): IUser[] {
    users.forEach(user => delete user.password);

    return users;
  }

  configNewUserObject(newUserObj: INewUserFull): Prisma.UserCreateInput {
    if (KeyOptional.Cell in newUserObj && KeyOptional.Email in newUserObj) {
      const { newUser, cell, email } = newUserObj;
      return {
        ...newUser,
        cell: { create: cell },
        email: { create: email }
      };
    }

    if (KeyOptional.Cell in newUserObj) {
      const { newUser, cell } = newUserObj;
      return { ...newUser, cell: { create: cell } };
    }

    if (KeyOptional.Email in newUserObj) {
      const { newUser, email } = newUserObj;
      return { ...newUser, email: { create: email } };
    }

    return newUserObj.newUser;
  }
}
