import { Request, Response } from 'express';

import UserService from '../services/user.service';
import { StatusCodes } from '../utils/constants';

export default class UserController {
  private readonly userService = new UserService();

  getAllUser = async (_req: Request, res: Response): Promise<void> => {
    const result = await this.userService.getAllUser();

    res.status(StatusCodes.OK).json(result);
  };
}
