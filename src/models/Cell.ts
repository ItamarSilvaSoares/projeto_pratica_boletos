import { ICellDbReturn } from '../interfaces/ICell';
import { IModelCell } from '../interfaces/models/cell/IModelCell';
import prisma from './client';

class CellModel implements IModelCell {
  async update(cellId: number, cell: string): Promise<ICellDbReturn> {
    const result = await prisma.cell.update({ where: { cellId }, data: { cell } });
    return result;
  };

  async delete(cellId: number): Promise<void> {
    await prisma.cell.delete({
      where: { cellId }
    });
  };

  async create(cell: string, idUser: number): Promise<void> {
    await prisma.cell.create({
      data: {
        cell,
        idUser
      }
    });
  };

  async find(idUser: number): Promise<ICellDbReturn[]> {
    const result = await prisma.cell.findMany({ where: { idUser } });
    return result;
  }
}

export default new CellModel();
