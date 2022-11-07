import { User as Users, PrismaClient } from '@prisma/client'

import { IUser } from '../interfaces/IUser'

export default class UserModel {
  constructor(private readonly prismaUser: PrismaClient['user']) { }

  private prism = new PrismaClient()

  async getAllUser(): Promise<Users[]> {
    // return this.prism.user.findMany()
    return this.prismaUser.findMany()
  }
};