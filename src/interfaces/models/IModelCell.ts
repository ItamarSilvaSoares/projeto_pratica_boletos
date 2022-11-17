import { ICellDbReturn } from '../ICell';

export interface IModelCell {
  associateNewCellToUser: (cell: string, idUser: number) => Promise<void>
  getAllCellByUserId: (idUser: number) => Promise<ICellDbReturn[]>
  deleteCell: (cellId: number) => Promise<void>
}
