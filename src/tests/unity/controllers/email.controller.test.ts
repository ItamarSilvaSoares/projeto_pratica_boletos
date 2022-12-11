import { createRequest, createResponse } from 'node-mocks-http';
import emailController from '../../../controllers/email.controller';
import emailService from '../../../services/email.service';

import { bodyReqEmail } from './mocks/email.controller.mock';

import { allEmailReturnDb } from '../services/mocks/email.service.mock'


describe('test the layer email controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar o status 201 quando se cria um novo email', async function () {
    jest.spyOn(emailService, 'create').mockResolvedValue();
    const req = createRequest({ method: 'POST', url: '/user/email', body: bodyReqEmail });
    const res = createResponse();

    await emailController.create(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(201);
    expect(data).toEqual({ "message": "new email add with success" });
  });

  it('deve retornar o status 200 e todos os emails do usuario', async function () {
    jest.spyOn(emailService, 'find').mockResolvedValue(allEmailReturnDb);
    const req = createRequest({ method: 'GET', url: '/user/email' });
    const res = createResponse();

    await emailController.find(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(200);
    expect(data).toEqual(allEmailReturnDb);
  });

  it('deve retornar o status 200 quando se atualiza um email', async function () {
    jest.spyOn(emailService, 'update').mockResolvedValue();
    const req = createRequest({ method: 'PUT', url: '/user/cell', body: bodyReqEmail });
    const res = createResponse();

    await emailController.update(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(200);
    expect(data).toEqual({ "message": "email update with success" });
  });

  it('deve retornar o status 200 quando se deleta um email', async function () {
    jest.spyOn(emailService, 'delete').mockResolvedValue();
    const req = createRequest({ method: 'DELETE', url: '/user/cell', body: bodyReqEmail });
    const res = createResponse();

    await emailController.delete(req, res);

    const data = res._getJSONData();

    expect.assertions(2);
    expect(res.statusCode).toEqual(200);
    expect(data).toEqual({ "message": "email delete with success" });
  });
});