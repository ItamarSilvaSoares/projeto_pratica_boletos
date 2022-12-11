import { createRequest, createResponse } from 'node-mocks-http';
import { CellService } from "../../../services/cell.service";
import CellModel from '../../../models/Cell';
import { CellController } from '../../../controllers/cell.controller';

import { allCellReturnDb } from '../services/mocks/cell.service.mock';
import { bodyReq } from './mocks/cell.controller.mock';

const mockCellController = new CellController(new CellService(CellModel))

describe('test the layer cell controller', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar o status 201 quando se cria um novo cell', async function () {
    jest.spyOn(CellService.prototype, 'create').mockResolvedValue();
    const req = createRequest({ method: 'POST', url: '/user/cell', body: bodyReq });
    const res = createResponse();

    await mockCellController.create(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(201);
    expect(data).toEqual({ "message": "new cell add with success" });
  });

  it('deve retornar o status 200 e todos os cell do usuario', async function () {
    jest.spyOn(CellService.prototype, 'find').mockResolvedValue(allCellReturnDb);
    const req = createRequest({ method: 'GET', url: '/user/cell' });
    const res = createResponse();

    await mockCellController.find(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(200);
    expect(data).toEqual(allCellReturnDb);
  });

  it('deve retornar o status 200 quando se atualiza um cell', async function () {
    jest.spyOn(CellService.prototype, 'update').mockResolvedValue();
    const req = createRequest({ method: 'PUT', url: '/user/cell', body: bodyReq });
    const res = createResponse();

    await mockCellController.update(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(200);
    expect(data).toEqual({ "message": "cell update with success" });
  });

  it('deve retornar o status 200 quando se deleta um cell', async function () {
    jest.spyOn(CellService.prototype, 'delete').mockResolvedValue();
    const req = createRequest({ method: 'DELETE', url: '/user/cell', body: bodyReq });
    const res = createResponse();

    await mockCellController.delete(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(200);
    expect(data).toEqual({ "message": "cell delete with success" });
  });
})