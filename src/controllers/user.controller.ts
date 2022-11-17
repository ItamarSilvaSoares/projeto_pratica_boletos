import { Request, Response } from 'express';
import { IServiceUser } from '../interfaces/services/IServiceUser';

import { StatusCodes } from '../utils/constants';

export default class UserController {
  private readonly userService: IServiceUser;

  constructor(userService: IServiceUser) {
    this.userService = userService;
  }

  getAllUser = async (_req: Request, res: Response): Promise<void> => {
    const result = await this.userService.getAllUser();

    res.status(StatusCodes.OK).json(result);
  };

  createNewUser = async (req: Request, res: Response): Promise<void> => {
    const result = await this.userService.createNewUser(req.body);

    res.status(StatusCodes.Create).json(result);
  };
}
