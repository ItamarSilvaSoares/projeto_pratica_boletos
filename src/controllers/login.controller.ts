import { Request, Response } from 'express';
import { IServiceLogin } from '../interfaces/services/IServiceLogin';

import { StatusCodes } from '../utils/constants';

import UserLogin from '../services/login.service';

class UserLoginController {
  private readonly loginService: IServiceLogin;

  constructor(loginService: IServiceLogin) {
    this.loginService = loginService;
  }

  login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const token = await this.loginService.login(username, password);

    res.status(StatusCodes.OK).json({ token });
  };
}

export default new UserLoginController(UserLogin);
export { UserLoginController };
