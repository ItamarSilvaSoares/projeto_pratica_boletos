import { Request, Response } from 'express';

import UserService from '../services/user.service';

export default class UserController {
  private readonly userService = new UserService();

  getAllUser = async (_req: Request, res: Response): Promise<void> => {
    const result = await this.userService.getAllUser();

    res.status(200).json(result);
  };
}
