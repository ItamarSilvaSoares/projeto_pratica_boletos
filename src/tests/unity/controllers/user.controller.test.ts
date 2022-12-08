import UserService from '../../../services/user.service';
import UserController from '../../../controllers/user.controller';
import { createRequest, createResponse } from 'node-mocks-http';
import UserModel from '../../../models/User';

import { allUserMockNoPassword } from './mocks/user.controller.mock';
import { newUser, resultExpectCreateNewUser } from '../services/mocks/user.service.mock';
import { allUserMock } from '../models/mocks/user.model.mock';

const mockUserController = new UserController(new UserService(UserModel));

describe('test the layer user controller', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar o status 200 e todos os usuarios  ', async function () {
    jest.spyOn(UserService.prototype, 'getAllUser').mockResolvedValue(allUserMockNoPassword);
    const req = createRequest({ method: 'GET', url: '/user' });
    const res = createResponse();

    await mockUserController.getAllUser(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual(allUserMockNoPassword);
  });

  it('deve retornar o status 201 e o novo usuario criado', async function () {
    jest.spyOn(UserService.prototype, 'createNewUser').mockResolvedValue(resultExpectCreateNewUser);
    const req = createRequest({ method: 'POST', url: '/user', body: newUser });
    const res = createResponse();

    await mockUserController.createNewUser(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(201);

    expect(data).toEqual(resultExpectCreateNewUser);
  });

  it('deve retornar o status 200 e o usuario pesquisado', async function () {
    jest.spyOn(UserService.prototype, 'findOne').mockResolvedValue(resultExpectCreateNewUser);
    const req = createRequest({ method: 'GET', url: '/user', params: { username: 'newUser' } });
    const res = createResponse();

    await mockUserController.findOne(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual(resultExpectCreateNewUser);
  });

  it('deve retornar o status 200 e o usuario pesquisado por query', async function () {
    jest.spyOn(UserService.prototype, 'search').mockResolvedValue(allUserMock);
    const req = createRequest({ method: 'GET', url: '/user/search', params: { username: 'newUser' } });
    const res = createResponse();

    await mockUserController.search(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual(allUserMock);
  });

  it('deve retornar o status 200 quando se exclui o usuario', async function () {
    jest.spyOn(UserService.prototype, 'search').mockResolvedValue(allUserMock);
    const req = createRequest({ method: 'DELETE', url: '/user/me', body: { user: { username: 'newUser' } } });
    const res = createResponse();

    await mockUserController.delete(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual({ "message": "user deleted!" });
  });

  it('deve retornar o status 200 quando se atualiza o usuario', async function () {
    jest.spyOn(UserService.prototype, 'update').mockResolvedValue(resultExpectCreateNewUser);
    const req = createRequest({ method: 'PUT', url: '/user', body: { userUpdate: { name: 'esquilo' }, user: { username: 'arroz' } } });
    const res = createResponse();

    await mockUserController.update(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual(resultExpectCreateNewUser);
  });
});
