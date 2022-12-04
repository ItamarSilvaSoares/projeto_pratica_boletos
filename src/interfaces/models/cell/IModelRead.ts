import { ICellDbReturn } from '../../ICell';

export interface IModelRead {
  find: (idUser: number) => Promise<ICellDbReturn[]>
  findOne: (cellId: number) => Promise<ICellDbReturn | null>
}
