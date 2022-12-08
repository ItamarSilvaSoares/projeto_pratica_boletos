import {
  INewUserFull, IUser, IUserUpdate
} from '../interfaces/models/user/IUser';
import { FuncUseful } from '../utils/functions';
import { KeyOptional, StatusCodes } from '../utils/constants';
import { IModelUser } from '../interfaces/models/IModelUser';
import { IServiceUser } from '../interfaces/services/IServiceUser';
import { HttpException } from '../utils/httpException';
import bcryptjs from '../utils/bcryptjs';

export default class UserService implements IServiceUser {
  private readonly useful = new FuncUseful();
  private readonly userModel: IModelUser;

  constructor(userModel: IModelUser) {
    this.userModel = userModel;
  }

  async search(toSearch: string): Promise<IUser[]> {
    const search = await this.userModel.search(toSearch);

    const usersNoPassword = this.useful.excludePassword(search);

    return usersNoPassword;
  };

  async findOne(username: string): Promise<IUser> {
    const user = await this.userModel.findOne(username);

    if (user === null) {
      throw new HttpException(StatusCodes.NotFound, 'User not found');
    }

    const [newUserNoPassword] = this.useful.excludePassword([user]);

    return newUserNoPassword;
  };

  async delete(username: string): Promise<void> {
    await this.userModel.delete(username);
  };

  async update(username: string, newData: IUserUpdate): Promise<IUser> {
    if (KeyOptional.Username in newData) {
      const user = await this.userModel.findOne(newData.username as string);

      if (user !== null) {
        throw new HttpException(StatusCodes.Conflict,
          'username already exists');
      }
    }

    if (KeyOptional.Password in newData) {
      newData.password = bcryptjs.getHash(newData.password as string);
    }

    const user = await this.userModel.update(username, newData);

    const [newUserNoPassword] = this.useful.excludePassword([user]);

    return newUserNoPassword;
  };

  async getAllUser(): Promise<IUser[]> {
    const allUser = await this.userModel.find();

    return this.useful.excludePassword(allUser);
  };

  async createNewUser(newUserObj: INewUserFull): Promise<IUser> {
    const user = await this.userModel.findOne(newUserObj.newUser.username);

    if (user !== null) {
      throw new HttpException(StatusCodes.Conflict, 'username already exists');
    }

    newUserObj.newUser.password = bcryptjs.getHash(newUserObj.newUser.password);

    const newObj = this.useful.configNewUserObject(newUserObj);

    const newUser = await this.userModel.create(newObj);

    const [newUserNoPassword] = this.useful.excludePassword([newUser]);

    return newUserNoPassword;
  }
}
