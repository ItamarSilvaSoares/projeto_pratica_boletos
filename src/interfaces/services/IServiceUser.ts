import { INewUserFull, IUser } from '../IUser';

export interface IServiceUser {
  getAllUser: () => Promise<IUser[]>
  createNewUser: (newUserObj: INewUserFull) => Promise<IUser>

}
