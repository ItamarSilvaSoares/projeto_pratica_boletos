import UserModel from '../../../models/User';
import { allUserMock, calledWithUser, oneUser } from './mocks/user.model.mock';
import { prismaMock } from './mocks/singleton';

describe('test the layer user model', function () {
  const testUserModel = UserModel;

  it('deve retornar todos os usuarios cadastrados corretamente', async function () {
    prismaMock.user.findMany.mockResolvedValue(allUserMock);

    const result = await testUserModel.find();

    expect(result).toEqual(allUserMock);
  });

  it('deve ser cadastrado um usuario corretamente', async function () {
    prismaMock.user.findFirst.mockResolvedValue(oneUser);

    const result = await testUserModel.login('userOne');

    expect(result).toEqual(oneUser);
  });

  it('deve retornado um usuario quando pesquisado por um username valido ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(oneUser);

    const result = await testUserModel.findOne('userOne');

    expect(result).toEqual(oneUser);
  });

  it('deve retornado o novo usuario cadastrado quando se criar um ', async function () {
    prismaMock.user.create.mockResolvedValue(oneUser);

    const result = await testUserModel.create(calledWithUser);

    expect(result).toEqual(oneUser);
    expect(prismaMock.user.create).toBeCalled();
  });
});
