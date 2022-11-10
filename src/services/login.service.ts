import UserModel from '../models/User';
import { StatusCodes } from '../utils/constants';
import { FuncUseful, HttpException } from '../utils/functions';

export default class UserLogin {
  private readonly userModel = new UserModel();
  private readonly useful = new FuncUseful();

  login = async (username: string, password: string): Promise<string> => {
    const login = await this.userModel.login(username, password);

    if (login === null) throw new HttpException(StatusCodes.Unauthorized, 'Username or password invalid');

    const [withoutPassword] = this.useful.excludePassword([login]);

    return this.useful.generateToken(withoutPassword);
  };
}
