import { IDescriptionDbReturn } from '../interfaces/IDescription';
import prisma from './client';

class Description {
  async create(data: string): Promise<void> {
    await prisma.description.create({
      data: {
        description: data,
        createdAt: Date.now()
      }
    });
  };

  async update(data: string): Promise<IDescriptionDbReturn> {
    const description = await prisma.description.update({
      data: {
        description: data,
        createdAt: Date.now()
      }
    });

    return description;
  };
}

export default new Description();
