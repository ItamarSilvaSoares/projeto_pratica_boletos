import { PrismaClient, User } from '@prisma/client'

import UserModel from '../models/User';


export default class UserService {
  private prisma = new PrismaClient()
  private userModel = new UserModel(this.prisma.user)
  // private userModel = new UserModel()

  getAllUsers = async () => {
    const result = await this.userModel.getAllUser()
    return result
  }
}
