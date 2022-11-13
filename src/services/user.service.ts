import UserModel from '../models/User';

import { INewUserFull, IUser } from '../interfaces/IUser';
import { FuncUseful, HttpException } from '../utils/functions';
import { StatusCodes } from '../utils/constants';

export default class UserService {
  private readonly userModel = new UserModel();
  private readonly useful = new FuncUseful();

  async getAllUser(): Promise<IUser[]> {
    const allUser = await this.userModel.getAllUser();

    return this.useful.excludePassword(allUser);
  };

  async createNewUser(newUserObj: INewUserFull): Promise<IUser> {
    const user = await this.userModel.getUserByUsername(newUserObj.newUser.username);

    if (user !== null) throw new HttpException(StatusCodes.Conflict, 'username already exists');

    const newObj = this.useful.configNewUserObject(newUserObj);

    const newUser = await this.userModel.createNewUser(newObj);

    const [newUserNoPassword] = this.useful.excludePassword([newUser]);

    return newUserNoPassword;
  }
}
