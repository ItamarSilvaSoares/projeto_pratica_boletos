import { IBilletDbReturn } from '../interfaces/IBillet';
import { IModel } from '../interfaces/models/IModel';
import prisma from './client';

class Billet implements IModel<IBilletDbReturn> {
  async delete(dataId: number): Promise<void> {
    await prisma.billet.delete({ where: { idLine: dataId } });
  };

  async find(idUser: number): Promise<IBilletDbReturn[]> {
    const result = await prisma.billet.findMany({ where: { idUser } });
    return result;
  };

  findOne: (dataId: number) => Promise<IBilletDbReturn | null>;
  create: (data: string, idUser: number) => Promise<void>;
  update: (dataId: number, data: string) => Promise<IBilletDbReturn>;
}

export default new Billet();
