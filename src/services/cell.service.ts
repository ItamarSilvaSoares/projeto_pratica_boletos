import { ICellDbReturn, ICellUser } from '../interfaces/ICell';
import { IModelCell } from '../interfaces/models/cell/IModelCell';
import { IServiceCell } from '../interfaces/services/IServiceCell';
import { IJwtUser } from '../interfaces/models/user/IUser';
import { HttpException } from '../utils/httpException';
import { StatusCodes } from '../utils/constants';

export default class CellService implements IServiceCell {
  private readonly cellModel: IModelCell;

  constructor(cellModel: IModelCell) {
    this.cellModel = cellModel;
  }

  private async validateCell(idCell: number, user: IJwtUser): Promise<void> {
    const findCell = await this.cellModel.findOne(Number(idCell));
    if (findCell === null) {
      throw new HttpException(StatusCodes.NotFound, 'cell not found');
    }
    if (findCell.idUser !== user.userId) {
      throw new HttpException(StatusCodes.Unauthorized, 'cell is not your');
    }
  }

  async delete({ cell: { idCell }, user }: ICellUser): Promise<void> {
    await this.validateCell(Number(idCell), user);

    await this.cellModel.delete(Number((idCell)));
  }

  async update({ cell: { cell, idCell }, user }: ICellUser): Promise<void> {
    await this.validateCell(Number(idCell), user);

    await this.cellModel.update(Number(idCell), cell);
  }

  async newCell({ cell: { cell }, user }: ICellUser): Promise<void> {
    await this.cellModel.create(cell, Number(user.userId));
  }

  async getAllCellByUserId(user: IJwtUser): Promise<ICellDbReturn[]> {
    const result = await this.cellModel.find(Number(user.userId));
    return result;
  }
}
