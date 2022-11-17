import { INewUserUpdate, IUser } from '../IUser';

export interface IModelUser {
  login: (username: string, password: string) => Promise<IUser | null>
  getUserByUsername: (username: string) => Promise<IUser | null>
  getAllUser: () => Promise<IUser[]>
  createNewUser: (newUserObj: any) => Promise<IUser>
  removeUser: (username: string) => Promise<void>
  updateUser: (username: string, newData: INewUserUpdate) => Promise<IUser>
}
