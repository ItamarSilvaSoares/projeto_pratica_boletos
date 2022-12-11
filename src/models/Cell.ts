import { ICellDbReturn } from '../interfaces/ICell';
import { IModel } from '../interfaces/models/IModel';
import prisma from './client';

class CellModel implements IModel<ICellDbReturn> {
  async update(cellId: number, cell: string): Promise<ICellDbReturn> {
    const result = await prisma.cell.update({
      where: { cellId }, data: { cell }
    });
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

  async findOne(cellId: number): Promise<ICellDbReturn | null> {
    const cell = await prisma.cell.findUnique({ where: { cellId } });
    return cell;
  }
}

export default new CellModel();
