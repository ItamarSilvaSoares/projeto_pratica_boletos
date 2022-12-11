import { ICellDbReturn } from '../interfaces/ICell';
import { IModel } from '../interfaces/models/IModel';

import Service from './service';

import CellModel from '../models/Cell';

class CellService extends Service<ICellDbReturn> {
  constructor(cellModel: IModel<ICellDbReturn>) {
    super(cellModel, 'cell');
  }
}

export default new CellService(CellModel);
export { CellService };
