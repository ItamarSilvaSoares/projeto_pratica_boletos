import { IModelUser } from '../interfaces/models/IModelUser';
import { IServiceLogin } from '../interfaces/services/IServiceLogin';
import { StatusCodes } from '../utils/constants';
import { FuncUseful } from '../utils/functions';
import { HttpException } from '../utils/httpException';
import { Jwt } from '../utils/jwt';
import bcryptjs from '../utils/bcryptjs';

export default class UserLogin implements IServiceLogin {
  private readonly useful = new FuncUseful();
  private readonly jwt = new Jwt();
  private readonly userModel: IModelUser;

  constructor(userModel: IModelUser) {
    this.userModel = userModel;
  }

  async login(username: string, password: string): Promise<string> {
    const login = await this.userModel.login(username);

    if (login === null || !(bcryptjs.compareHash(password,
      login.password as unknown as string))) {
      throw new HttpException(StatusCodes.Unauthorized,
        'Username or password invalid');
    }

    const [withoutPassword] = this.useful.excludePassword([login]);

    return this.jwt.generateToken(withoutPassword);
  };
}
