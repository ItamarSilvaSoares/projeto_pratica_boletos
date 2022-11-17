import { ICellDbReturn } from '../interfaces/ICell';
import { IModelCell } from '../interfaces/models/IModelCell';
import prisma from './client';

// import { ICell } from '../interfaces/ICell';

class CellModel implements IModelCell {
  async deleteCell(cellId: number): Promise<void> {
    await prisma.cell.delete({
      where: { cellId }
    });
  };

  async associateNewCellToUser(cell: string, idUser: number): Promise<void> {
    await prisma.cell.create({
      data: {
        cell,
        idUser
      }
    });
  };

  async getAllCellByUserId(idUser: number): Promise<ICellDbReturn[]> {
    const result = await prisma.cell.findMany({ where: { idUser } });
    return result;
  }
}

export default new CellModel();
