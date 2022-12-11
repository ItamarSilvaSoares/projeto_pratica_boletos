import { IJwtUser } from './models/user/IUser';

export interface IEmailDbReturn {
  emailId: number
  idUser: number
  email: string
}

export interface IEmailBodyReq {
  email: string
  idEmail: number
}

export interface IEmailUser {
  email: IEmailBodyReq
  user: IJwtUser
}
