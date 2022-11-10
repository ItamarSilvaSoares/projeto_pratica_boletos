import { Request, Response } from 'express';

import UserLogin from '../services/login.service';
import { StatusCodes } from '../utils/constants';

export default class UserLoginController {
  private readonly loginService = new UserLogin();

  login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const token = await this.loginService.login(username, password);

    res.status(StatusCodes.OK).json({ token });
  };
}
