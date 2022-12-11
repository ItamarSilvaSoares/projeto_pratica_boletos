import { IDataUser } from '../IData';
import { IJwtUser } from '../models/user/IUser';

export interface IService<t> {
  create: ({ data: { data }, user }: IDataUser) => Promise<void>
  find: (user: IJwtUser) => Promise<t[]>
  update: ({ data: { data, idData }, user }: IDataUser) => Promise<void>
  delete: ({ data: { idData }, user }: IDataUser) => Promise<void>
}
