import { ICellDbReturn, ICellUser } from '../interfaces/ICell';
import { IModelCell } from '../interfaces/models/IModelCell';
import { IServiceCell } from '../interfaces/services/IServiceCell';
import { IJwtUser } from '../interfaces/IUser';

export default class CellService implements IServiceCell {
  private readonly cellModel: IModelCell;

  constructor(cellModel: IModelCell) {
    this.cellModel = cellModel;
  }

  async newCell({ cell: { cell }, user }: ICellUser): Promise<void> {
    await this.cellModel.associateNewCellToUser(cell, user.userId);
  }

  async getAllCellByUserId(user: IJwtUser): Promise<ICellDbReturn[]> {
    const result = await this.cellModel.getAllCellByUserId(user.userId);
    return result;
  }
}
