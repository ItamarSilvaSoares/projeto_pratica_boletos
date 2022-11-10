import { PrismaClient } from '@prisma/client';

import { IUser } from '../interfaces/IUser';

export default class UserModel {
  private readonly prismaDb = new PrismaClient();

  login = async (username: string, password: string): Promise<IUser | null> => {
    const login = await this.prismaDb.user.findFirst({
      where: { username, password }
    });

    return login;
  };

  getAllUser = async (): Promise<IUser[]> => {
    const allUser = await this.prismaDb.user.findMany({
      include: {
        cell: true,
        email: true
      }
    });

    return allUser;
  };
}
