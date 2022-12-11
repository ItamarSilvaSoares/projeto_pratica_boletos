import { Prisma } from '@prisma/client';

import dotenv from 'dotenv';
import { ICellUser } from '../interfaces/ICell';
import { IDataUser } from '../interfaces/IData';
import { IEmailUser } from '../interfaces/IEmail';

import { INewUserFull, IUser } from '../interfaces/models/user/IUser';
import { KeyOptional } from './constants';

dotenv.config();

class FuncUseful {
  excludePassword(users: IUser[]): IUser[] {
    users.forEach(user => delete user.password);

    return users;
  }

  changeKeyName(obj: ICellUser | IEmailUser): IDataUser {
    if (KeyOptional.Cell in obj) {
      const data = { data: obj.cell.cell, idData: obj.cell.idCell };
      const newObj = { data, user: obj.user };
      return newObj;
    }
    const data = { data: obj.email.email, idData: obj.email.idEmail };
    const newObj = { data, user: obj.user };
    return newObj;
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

export default new FuncUseful();
