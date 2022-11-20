import { IUser } from './IUser';

export interface IModelRead {
  findOne: (username: string) => Promise<IUser | null>
  find: () => Promise<IUser[]>
  search: (toSearch: string) => Promise<IUser[]>
}
