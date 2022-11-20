import { INewUserFull, IUser, IUserUpdate } from '../models/user/IUser';

export interface IServiceUser {
  getAllUser: () => Promise<IUser[]>
  createNewUser: (newUserObj: INewUserFull) => Promise<IUser>
  findOne: (username: string) => Promise<IUser>
  delete: (username: string) => Promise<void>
  update: (username: string, newData: IUserUpdate) => Promise<IUser>
  search: (toSearch: string) => Promise<IUser[]>
}
