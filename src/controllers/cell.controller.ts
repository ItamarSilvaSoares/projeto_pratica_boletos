import { IService } from '../interfaces/services/IService';
import { ICellDbReturn } from '../interfaces/ICell';

import CellService from '../services/cell.service';
import Controller from './controller';

class CellController extends Controller<ICellDbReturn> {
  constructor(cellService: IService<ICellDbReturn>) {
    super(cellService, 'cell');
  }
}

export default new CellController(CellService);
export { CellController };
