import { ICell } from './ICell';
import { IEmail } from './IEmail';

export interface IUser {
  user_id?: number
  name: string
  lastname: string
  username: string
  password?: string
}

export interface INewUser {
  name: string
  lastname: string
  username: string
  password: string
}

export interface INewUserFull {
  newUser: INewUser
  cell?: ICell
  email?: IEmail
}
