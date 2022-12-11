import prisma from './client';
import { IModel } from '../interfaces/models/IModel';
import { IEmailDbReturn } from '../interfaces/IEmail';

class EmailModel implements IModel<IEmailDbReturn> {
  async update(dataId: number, data: string): Promise<IEmailDbReturn> {
    const result = await prisma.email.update({
      where: { emailId: dataId }, data: { email: data }
    });
    return result;
  };

  async delete(dataId: number): Promise<void> {
    await prisma.email.delete({
      where: { emailId: dataId }
    });
  };

  async create(data: string, idUser: number): Promise<void> {
    await prisma.email.create({
      data: {
        email: data,
        idUser
      }
    });
  };

  async find(idUser: number): Promise<IEmailDbReturn[]> {
    const result = await prisma.email.findMany({ where: { idUser } });
    return result;
  }

  async findOne(datalId: number): Promise<IEmailDbReturn | null> {
    const data = await prisma.email.findUnique({ where: { emailId: datalId } });
    return data;
  }
}

export default new EmailModel();
