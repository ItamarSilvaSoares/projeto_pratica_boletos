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

  findOne = async (req: Request, res: Response): Promise<void> => {
    const { username } = req.params;

    const result = await this.userService.findOne(username);

    res.status(StatusCodes.OK).json(result);
  };

  search = async (req: Request, res: Response): Promise<void> => {
    const { q } = req.query;
    const result = await this.userService.search(q as string);

    res.status(StatusCodes.OK).json(result);
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { username } = req.body.user;
    await this.userService.delete(username);

    res.status(StatusCodes.OK).json({ message: 'user deleted!' });
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { userUpdate, user: { username } } = req.body;

    const result = await this.userService.update(username, userUpdate);

    res.status(StatusCodes.OK).json(result);
  };
}
