import { INewUserFull, IUser } from '../interfaces/IUser';
import { FuncUseful, HttpException } from '../utils/functions';
import { StatusCodes } from '../utils/constants';
import { IModelUser } from '../interfaces/models/IModelUser';
import { IServiceUser } from '../interfaces/services/IServiceUser';

export default class UserService implements IServiceUser {
  private readonly useful = new FuncUseful();
  private readonly userModel: IModelUser;

  constructor(userModel: IModelUser) {
    this.userModel = userModel;
  }

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
