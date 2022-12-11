import { IJwtUser } from './models/user/IUser';

export interface IData {
  data: string
  idData: number
}

export interface IDataUser {
  data: IData
  user: IJwtUser
}
