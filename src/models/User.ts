import prisma from './client';

import { INewUserUpdate, IUser } from '../interfaces/IUser';
import { Prisma } from '@prisma/client';
import { IModelUser } from '../interfaces/models/IModelUser';

class UserModel implements IModelUser {
  async removeUser(username: string): Promise<void> {
    await prisma.user.delete({ where: { username } });
  };

  async updateUser(username: string, newData: INewUserUpdate): Promise<IUser> {
    const result = await prisma.user.update({
      where: { username },
      data: {
        ...newData
      }
    });

    return result;
  };

  async login(username: string, password: string): Promise<IUser | null> {
    const login = await prisma.user.findFirst({
      where: { username, password }
    });

    return login;
  };

  async getUserByUsername(username: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { username } });

    return user;
  }

  async getAllUser(): Promise<IUser[]> {
    const allUser = await prisma.user.findMany({
      include: {
        cell: true,
        email: true
      }
    });

    return allUser;
  };

  async createNewUser(newUserObj: Prisma.UserCreateInput): Promise<IUser> {
    const newUser = await prisma.user.create({
      data: newUserObj
    });

    return newUser;
  }
}

export default new UserModel();
