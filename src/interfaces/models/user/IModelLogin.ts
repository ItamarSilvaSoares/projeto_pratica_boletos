import { IUser } from './IUser';

export interface IModelLogin {
  login: (username: string) => Promise<IUser | null>
}
