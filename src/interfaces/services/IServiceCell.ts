import { ICellDbReturn, ICellUser } from '../ICell';
import { IJwtUser } from '../IUser';

export interface IServiceCell {
  newCell: ({ cell: { cell }, user }: ICellUser) => Promise<void>
  getAllCellByUserId: (user: IJwtUser) => Promise<ICellDbReturn[]>
}
