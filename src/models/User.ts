import { PrismaClient } from '@prisma/client';

import { IUser } from '../interfaces/IUser';

export default class UserModel {
  private readonly user = new PrismaClient();

  getAllUser = async (): Promise<IUser[]> => {
    const allUser = this.user.user.findMany();

    return await allUser;
  };
}
