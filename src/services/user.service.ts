import UserModel from '../models/User';

import { INewUserFull, IUser } from '../interfaces/IUser';
import { FuncUseful } from '../utils/functions';

export default class UserService {
  private readonly userModel = new UserModel();
  private readonly useful = new FuncUseful();

  async getAllUser(): Promise<IUser[]> {
    const allUser = await this.userModel.getAllUser();

    return this.useful.excludePassword(allUser);
  };

  async createNewUser(newUserObj: INewUserFull): Promise<IUser> {
    const newObj = this.useful.configNewUserObject(newUserObj);

    const newUser = await this.userModel.createNewUser(newObj);

    const [newUserNoPassword] = this.useful.excludePassword([newUser]);

    return newUserNoPassword;
  }
}
