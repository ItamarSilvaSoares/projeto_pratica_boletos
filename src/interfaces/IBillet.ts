import { IJwtUser } from './models/user/IUser';

export interface IBilletBodyReq {
  description: number
  status: number
  line: number
  validity: Date
  value: number
}

export interface IBilletUser {
  cell: IBilletBodyReq
  user: IJwtUser
}

export interface IBilletDbReturn {
  billetId: number
  idUser: number
  idDescription: number
  idStatus: number
  idLine: number
  validity: Date
  value: number
}
