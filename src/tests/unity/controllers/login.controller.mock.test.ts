import { createRequest, createResponse } from 'node-mocks-http';

import UserLogin from '../../../services/login.service';
import UserLoginController from '../../../controllers/login.controller';
import UserModel from '../../../models/User';

import { token } from './mocks/login.controller.mock';

const mockUserLoginController = new UserLoginController(new UserLogin(UserModel));

describe('test the layer login controller', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar o status 200 e um token de validação', async function () {
    jest.spyOn(UserLogin.prototype, 'login').mockResolvedValue(token);
    const req = createRequest({
      method: 'POST',
      url: '/login',
      body: {
        username: 'userOnes',
        password: '12345678'
      }
    });
    const res = createResponse();

    await mockUserLoginController.login(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toEqual(200);

    expect(data).toEqual({ token });
  });
});
