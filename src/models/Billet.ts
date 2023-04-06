import { Prisma } from '@prisma/client';
import { IBilletBodyReq, IBilletDbReturn } from '../interfaces/IBillet';
import { IModel } from '../interfaces/models/IModel';
import prisma from './client';

class Billet {
  async delete(dataId: number): Promise<void> {
    await prisma.billet.delete({ where: { idLine: dataId } });
  }

  async find(idUser: number): Promise<IBilletDbReturn[]> {
    const billets = await prisma.billet.findMany({ where: { idUser } });
    return billets;
  }

  async findOne(dataId: number): Promise<IBilletDbReturn | null> {
    const billet = await prisma.billet
      .findUnique({ where: { billetId: dataId } });
    return billet;
  };

  async create(data: Prisma.BilletCreateInput, idUser: number): Promise<void> {

  };

  update: (dataId: number, data: string) => Promise<IBilletDbReturn>;
}

export default new Billet();
