import { IJwtUser } from './IUser';

export interface ICell {
  cell: string
}

export interface ICellUser {
  cell: ICell
  user: IJwtUser
}

export interface ICellDbReturn {
  cellId: number
  idUser: number
  cell: string
}
