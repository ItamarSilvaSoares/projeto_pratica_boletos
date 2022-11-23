import { IJwtUser } from './models/user/IUser';

export interface ICellBodyReq {
  cell: string
}

export interface ICellUser {
  cell: ICellBodyReq
  user: IJwtUser
}

export interface ICellDbReturn {
  cellId: number
  idUser: number
  cell: string
}
