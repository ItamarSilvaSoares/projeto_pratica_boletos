import { ICellDbReturn, ICellUser } from '../interfaces/ICell';
import { IModelCell } from '../interfaces/models/cell/IModelCell';
import { IServiceCell } from '../interfaces/services/IServiceCell';
import { IJwtUser } from '../interfaces/models/user/IUser';

export default class CellService implements IServiceCell {
  private readonly cellModel: IModelCell;

  constructor(cellModel: IModelCell) {
    this.cellModel = cellModel;
  }

  async newCell({ cell: { cell }, user }: ICellUser): Promise<void> {
    await this.cellModel.create(cell, user.userId);
  }

  async getAllCellByUserId(user: IJwtUser): Promise<ICellDbReturn[]> {
    const result = await this.cellModel.find(user.userId);
    return result;
  }
}
