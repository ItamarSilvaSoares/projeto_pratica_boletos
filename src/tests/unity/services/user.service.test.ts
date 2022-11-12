import UserService from '../../../services/user.service';
import UserModel from '../../../models/User';

import { allUserMockNoPassword, allUserMock } from './mocks/user.service.mock';

const mockUserService = new UserService();

describe('test the layer user service', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('O método getAllUser deve retornar todos os usuario sem o campo password ', async function () {
    jest.spyOn(UserModel.prototype, 'getAllUser').mockResolvedValue(allUserMock);

    const result = await mockUserService.getAllUser();

    expect(result).toEqual(allUserMockNoPassword);
  });
});
