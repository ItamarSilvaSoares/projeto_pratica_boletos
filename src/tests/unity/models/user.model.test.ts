import UserModel from '../../../models/User';
import { allUserMock, oneUser } from './mocks/user.model.mock';
import { prismaMock } from './mocks/singleton';

describe('test the layer user model', function () {
  const testUserModel = new UserModel();

  it('deve retornar todos os usuarios cadastrados corretamente', async function () {
    prismaMock.user.findMany.mockResolvedValue(allUserMock);

    const result = await testUserModel.getAllUser();

    expect(result).toEqual(allUserMock);
  });

  it('deve um usuario cadastrado corretamente', async function () {
    prismaMock.user.findFirst.mockResolvedValue(oneUser);

    const result = await testUserModel.login('userOne', '12345678');

    expect(result).toEqual(oneUser);
  });
});
