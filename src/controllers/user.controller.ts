import { Request, Response } from 'express';
import UserService from '../services/user.service';


export default class UserController {
  private userService = new UserService()

  getAllUser = async (req: Request, res: Response) => {
    const result = await this.userService.getAllUsers()

    res.status(200).json(result)
  }
}