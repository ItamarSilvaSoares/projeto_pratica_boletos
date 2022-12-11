import {UserService} from '../../../services/user.service';
import UserModel from '../../../models/User';

import {
  allUserMockNoPassword, allUserMock,
  newUserWithEmailCell, resultCreateNewUser,
  resultExpectCreateNewUser, newUserWithEmail,
  newUserWithCell, newUser,
  updateUsername,
  updatePassword
} from './mocks/user.service.mock';
import { prismaMock } from '../models/mocks/singleton';

const mockUserService = new UserService(UserModel);

describe('test the layer user service', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('O método getAllUser deve retornar todos os usuario sem o campo password ', async function () {
    jest.spyOn(UserModel, 'find').mockResolvedValue(allUserMock);

    const result = await mockUserService.getAllUser();

    expect(result).toEqual(allUserMockNoPassword);
  });

  it('O método createNewUser deve retornar um erro quando e passado um username já cadastrado ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(resultCreateNewUser);

    try {
      await mockUserService.createNewUser(newUserWithEmailCell);
    } catch (error: any) {
      expect(error.message).toEqual('username already exists');
      expect(error.status).toEqual(409);
    }
  });

  it('O método createNewUser deve um novo usuario cadastrado com sucesso, passando como para parâmetro o usuario, email e cell', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel, 'create').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUserWithEmailCell);

    expect(result).toEqual(resultExpectCreateNewUser);
  });

  it('O método createNewUser deve cadastra um novo usuario com sucesso, passando como para parâmetro o usuario e email ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel, 'create').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUserWithEmail);

    expect(result).toEqual(resultExpectCreateNewUser);
  });

  it('O método createNewUser deve cadastra um novo usuario com sucesso, passando como para parâmetro o usuario e cell ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel, 'create').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUserWithCell);

    expect(result).toEqual(resultExpectCreateNewUser);
  });

  it('O método createNewUser deve cadastra um novo usuario com sucesso, passando como para parâmetro somente o usuario ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel, 'create').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUser);

    expect(result).toEqual(resultExpectCreateNewUser);
  });

  it('O método search deve retorna os usuarios pesquisado', async function () {
    prismaMock.user.findMany.mockResolvedValue(allUserMock)

    const result = await mockUserService.search('userOne');

    expect(result).toEqual(allUserMockNoPassword)
  })

  it('O método findOne deve retorna um erro quando passado um username invalido', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null)

    try {
      await mockUserService.findOne('newUser');
    } catch (error: any) {
      expect(error.message).toEqual('User not found');
      expect(error.status).toEqual(404);
    }
  });

  it('O método findOne deve retorna um usuario quando passado um username valido', async function () {
    prismaMock.user.findUnique.mockResolvedValue(resultCreateNewUser)

    const result = await mockUserService.findOne('newUser');

    expect(result).toEqual(resultExpectCreateNewUser);
  });

  it('O método delete deve se chamado corretamente', async function () {
    prismaMock.user.delete.mockResolvedValue(resultCreateNewUser)

    await mockUserService.delete('newUser');

    expect(prismaMock.user.delete).toBeCalled();
  });

  it('O método update deve retorna um erro quando se tenta atualizar o username com o mesmo já cadastrado ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(resultCreateNewUser)

    try {
      await mockUserService.update('newUser', updateUsername);

    } catch (error: any) {
      expect(error.message).toEqual('username already exists');
      expect(error.status).toEqual(409);
    }
  });

  it('O método update deve retorna um erro quando se tenta atualizar o username com o mesmo já cadastrado ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(resultCreateNewUser)

    try {
      await mockUserService.update('newUser', updateUsername);

    } catch (error: any) {
      expect(error.message).toEqual('username already exists');
      expect(error.status).toEqual(409);
    }
  });

  it('O método update deve retorna um a usuario atualizado quando se tenta atualizar o usuario cadastrado ', async function () {
    prismaMock.user.update.mockResolvedValue(resultCreateNewUser)

    const result = await mockUserService.update('newUser', updatePassword);

    expect(result).toEqual(resultExpectCreateNewUser);
  });
});
