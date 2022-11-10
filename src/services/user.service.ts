import UserModel from '../models/User';

import { IUser } from '../interfaces/IUser';
import { FuncUseful } from '../utils/functions';

export default class UserService {
  private readonly userModel = new UserModel();
  private readonly useful = new FuncUseful();

  getAllUser = async (): Promise<IUser[]> => {
    const allUser = await this.userModel.getAllUser();

    return this.useful.excludePassword(allUser);
  };
}
