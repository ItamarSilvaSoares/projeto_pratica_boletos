import { IModelUser } from '../interfaces/models/IModelUser';
import { IServiceLogin } from '../interfaces/services/IServiceLogin';
import { StatusCodes } from '../utils/constants';
import { FuncUseful, HttpException, Jwt } from '../utils/functions';

export default class UserLogin implements IServiceLogin {
  private readonly useful = new FuncUseful();
  private readonly jwt = new Jwt();
  private readonly userModel: IModelUser;

  constructor(userModel: IModelUser) {
    this.userModel = userModel;
  }

  async login(username: string, password: string): Promise<string> {
    const login = await this.userModel.login(username, password);

    if (login === null) throw new HttpException(StatusCodes.Unauthorized, 'Username or password invalid');

    const [withoutPassword] = this.useful.excludePassword([login]);

    return this.jwt.generateToken(withoutPassword);
  };
}
