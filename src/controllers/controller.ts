import { Request, Response } from 'express';
import { IService } from '../interfaces/services/IService';
import { StatusCodes } from '../utils/constants';
import FuncUseful from '../utils/functions';

export default abstract class Controller<t> {
  private readonly service: IService<t>;
  private readonly emailOrCell: string;

  constructor(service: IService<t>, emailOrCell: string) {
    this.service = service;
    this.emailOrCell = emailOrCell;
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const data = FuncUseful.changeKeyName(req.body);
    await this.service.create(data);

    res.status(StatusCodes.Create)
      .json({ message: `new ${this.emailOrCell} add with success` });
  };

  find = async (req: Request, res: Response): Promise<void> => {
    const result = await this.service.find(req.body.user);

    res.status(StatusCodes.OK).json(result);
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const data = FuncUseful.changeKeyName(req.body);
    await this.service.update(data);

    res.status(StatusCodes.OK).json({
      message:
        `${this.emailOrCell} update with success`
    });
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const data = FuncUseful.changeKeyName(req.body);
    await this.service.delete(data);

    res.status(StatusCodes.OK).json({
      message:
        `${this.emailOrCell} delete with success`
    });
  };
}
