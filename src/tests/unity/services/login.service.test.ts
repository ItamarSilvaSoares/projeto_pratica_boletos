import UserModel from '../../../models/User';
import UserLogin from '../../../services/login.service';
import { Jwt } from '../../../utils/jwt';

import { oneUser, oneUserNoPassword } from './mocks/login.service.mock';

const mockUserLogin = new UserLogin(UserModel);

describe('test the layer login', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retorna uma erro quando o usuario é invalido', async function () {
    jest.spyOn(UserModel, 'login').mockResolvedValue(null);
    try {
      await mockUserLogin.login('não', 'não');
    } catch (error: any) {
      expect(error.message).toEqual('Username or password invalid');
      expect(error.status).toEqual(401);
    }
  });

  it('deve retorna um token quando o usuario esta correto', async function () {
    jest.spyOn(UserModel, 'login').mockResolvedValue(oneUser);
    const newToken = new Jwt();

    const token = newToken.generateToken(oneUserNoPassword);

    const UserToken = await mockUserLogin.login('userOne', '12345678');

    expect(UserToken).toEqual(token);
  });
});
