import prisma from './client';

import { IUser } from '../interfaces/IUser';
import { Prisma } from '@prisma/client';

export default class UserModel {
  async login(username: string, password: string): Promise<IUser | null> {
    const login = await prisma.user.findFirst({
      where: { username, password }
    });

    return login;
  };

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
