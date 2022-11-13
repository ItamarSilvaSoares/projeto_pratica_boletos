import UserService from '../../../services/user.service';
import UserController from '../../../controllers/user.controller';
import { createRequest, createResponse } from 'node-mocks-http';

import { allUserMockNoPassword } from './mocks/user.controller.mock';
import { newUser, resultExpectCreateNewUser } from '../services/mocks/user.service.mock';

const mockUserController = new UserController();

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
});
