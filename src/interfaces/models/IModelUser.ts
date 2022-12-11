import { IUser, IUserUpdate } from './user/IUser';

export interface IModelUser {
  delete: (username: string) => Promise<void>
  login: (username: string) => Promise<IUser | null>
  findOne: (username: string) => Promise<IUser | null>
  find: () => Promise<IUser[]>
  search: (toSearch: string) => Promise<IUser[]>
  create: (newUserObj: any) => Promise<IUser>
  update: (username: string, newData: IUserUpdate) => Promise<IUser>
}
