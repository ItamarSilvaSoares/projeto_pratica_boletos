import prisma from './client';

import { IUserUpdate, IUser } from '../interfaces/models/user/IUser';
import { Prisma } from '@prisma/client';
import { IModelUser } from '../interfaces/models/IModelUser';

class UserModel implements IModelUser {
  async delete(username: string): Promise<void> {
    await prisma.user.delete({ where: { username } });
  };

  async search(toSearch: string): Promise<IUser[]> {
    const search = await prisma.user.findMany({
      where: {
        OR: [
          { username: { contains: toSearch } },
          { name: { contains: toSearch } },
          { lastname: { contains: toSearch } }
        ]
      }
    });

    return search;
  };

  async update(username: string, newData: IUserUpdate): Promise<IUser> {
    const result = await prisma.user.update({
      where: { username },
      data: { ...newData }
    });

    return result;
  };

  async login(username: string): Promise<IUser | null> {
    const login = await prisma.user.findFirst({
      where: { username }
    });

    return login;
  };

  async findOne(username: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { username } });

    return user;
  }

  async find(): Promise<IUser[]> {
    const allUser = await prisma.user.findMany({
      include: { cell: true, email: true }
    });

    return allUser;
  };

  async create(newUserObj: Prisma.UserCreateInput): Promise<IUser> {
    const newUser = await prisma.user.create({ data: newUserObj });

    return newUser;
  }
}

export default new UserModel();
