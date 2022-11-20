
import { IModelDelete } from './user/IModelDelete';
import { IModelLogin } from './user/IModelLogin';
import { IModelRead } from './user/IModelRead';
import { IModelWrite } from './user/IModelWrite';

export interface IModelUser extends IModelDelete, IModelLogin, IModelRead, IModelWrite {

}
