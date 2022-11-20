import { IModelDelete } from './IModelDelete';
import { IModelRead } from './IModelRead';
import { IModelWrite } from './IModelWrite';

export interface IModelCell extends IModelDelete, IModelWrite, IModelRead {
}
