import UserModel from '../models/User';

import { IUser } from '../interfaces/IUser';

export default class UserService {
  private readonly userModel = new UserModel();

  getAllUser = async (): Promise<IUser[]> => {
    const allUser = await this.userModel.getAllUser();
    return allUser;
  };
}
