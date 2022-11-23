import { IUser } from './IUser';

export interface IModelLogin {
  login: (username: string, password: string) => Promise<IUser | null>
}
