import { prismaMock } from '../models/mocks/singleton';
import CellService from '../../../services/cell.service';
import CellModel from '../../../models/Cell';

import { allCellReturnDb, cellReturnDb, findOneMock, findOneMockOther, mockCellInterface, userMock } from './mocks/cell.service.mock'

describe('test do service Cell', () => {
  const mockCellService = new CellService(CellModel)
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve executar a função delete corretamente', async function () {
    prismaMock.cell.delete.mockResolvedValue(cellReturnDb);
    prismaMock.cell.findUnique.mockResolvedValue(findOneMock);

    await mockCellService.delete(mockCellInterface);

    expect.assertions(2);
    expect(prismaMock.cell.delete).toBeCalled()
    expect(prismaMock.cell.delete).toBeCalledTimes(1)
  })

  it('deve dar um erro quando se tenta deletar um cell invalido', async function () {
    prismaMock.cell.delete.mockResolvedValue(cellReturnDb);
    prismaMock.cell.findUnique.mockResolvedValue(null);

    try {
      await mockCellService.delete(mockCellInterface);
    } catch (error: any) {
      expect.assertions(2);

      expect(error.message).toEqual('cell not found')
      expect(error.status).toEqual(404)
    }
  })

  it('deve dar um erro quando se tenta deletar um cell que não pertence ao usuario', async function () {
    prismaMock.cell.delete.mockResolvedValue(cellReturnDb);
    prismaMock.cell.findUnique.mockResolvedValue(findOneMockOther);

    try {
      await mockCellService.delete(mockCellInterface);
    } catch (error: any) {
      expect.assertions(2);

      expect(error.message).toEqual('cell is not your')
      expect(error.status).toEqual(401)
    }
  })

  it('deve executar a função update corretamente', async function () {
    prismaMock.cell.update.mockResolvedValue(cellReturnDb);
    prismaMock.cell.findUnique.mockResolvedValue(findOneMock);

    await mockCellService.update(mockCellInterface);

    expect.assertions(2);
    expect(prismaMock.cell.update).toBeCalled()
    expect(prismaMock.cell.update).toBeCalledTimes(1)
  })

  it('deve executar a função newCell corretamente', async function () {
    prismaMock.cell.create.mockResolvedValue(cellReturnDb);

    await mockCellService.newCell(mockCellInterface);

    expect.assertions(2);
    expect(prismaMock.cell.create).toBeCalled()
    expect(prismaMock.cell.create).toBeCalledTimes(1)
  })

  it('deve retornar todos os cell do usuario', async function () {
    prismaMock.cell.findMany.mockResolvedValue(allCellReturnDb);

    const result = await mockCellService.getAllCellByUserId(userMock);

    expect.assertions(2);
    expect(result).toEqual(allCellReturnDb);
    expect(result.length).toEqual(allCellReturnDb.length);
  })
})
