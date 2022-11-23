import { ICellDbReturn } from '../../ICell';

export interface IModelRead {
  find: (idUser: number) => Promise<ICellDbReturn[]>
}
