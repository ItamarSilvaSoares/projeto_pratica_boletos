import { Request, Response } from 'express';

import { StatusCodes } from '../utils/constants';
import { IServiceCell } from '../interfaces/services/IServiceCell';

export default class CellController {
  private readonly cellService: IServiceCell;

  constructor(cellService: IServiceCell) {
    this.cellService = cellService;
  }

  newCell = async (req: Request, res: Response): Promise<void> => {
    await this.cellService.newCell(req.body);

    res.status(StatusCodes.Create)
      .json({ message: 'new cell add with success' });
  };

  getAllCellById = async (req: Request, res: Response): Promise<void> => {
    const result = await this.cellService.getAllCellByUserId(req.body.user);

    res.status(StatusCodes.OK).json(result);
  };

  update = async (req: Request, res: Response): Promise<void> => {
    await this.cellService.update(req.body);

    res.status(StatusCodes.OK).json({ message: 'complete update' });
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    await this.cellService.delete(req.body);

    res.status(StatusCodes.OK).json({ message: 'complete delete' });
  };
}
