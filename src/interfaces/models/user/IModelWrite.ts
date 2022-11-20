import { IUserUpdate, IUser } from './IUser';

export interface IModelWrite {
  create: (newUserObj: any) => Promise<IUser>
  update: (username: string, newData: IUserUpdate) => Promise<IUser>
}
