import UserService from '../../../services/user.service';
import UserController from '../../../controllers/user.controller';
import { createRequest, createResponse } from 'node-mocks-http';

import { allUserMockNoPassword } from './mocks/user.controller.mock';

const mockUserController = new UserController();

describe('test the layer user controller', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar o status 200 e todos os usuarios', async function () {
    jest.spyOn(UserService.prototype, 'getAllUser').mockResolvedValue(allUserMockNoPassword);
    const req = createRequest({ method: 'GET', url: '/user' });
    const res = createResponse();

    await mockUserController.getAllUser(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual(allUserMockNoPassword);
  });
});
