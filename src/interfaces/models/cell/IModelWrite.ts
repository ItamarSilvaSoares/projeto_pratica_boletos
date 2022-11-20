import { ICellDbReturn } from '../../ICell';

export interface IModelWrite {
  create: (cell: string, idUser: number) => Promise<void>
  update: (cellId: number, cell: string) => Promise<ICellDbReturn>
}
