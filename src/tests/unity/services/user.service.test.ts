import UserService from '../../../services/user.service';
import UserModel from '../../../models/User';

import {
  allUserMockNoPassword, allUserMock,
  newUserWithEmailCell, resultCreateNewUser,
  resultExpectCreateNewUser, calledWithFull,
  newUserWithEmail, calledWithEmail,
  newUserWithCell, calledWithCell,
  newUser, calledWithUser
} from './mocks/user.service.mock';
import { prismaMock } from '../models/mocks/singleton';

const mockUserService = new UserService();

describe('test the layer user service', function () {
  const mockUserModel = new UserModel();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('O método getAllUser deve retornar todos os usuario sem o campo password ', async function () {
    jest.spyOn(UserModel.prototype, 'getAllUser').mockResolvedValue(allUserMock);

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
    jest.spyOn(UserModel.prototype, 'createNewUser').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUserWithEmailCell);

    expect(result).toEqual(resultExpectCreateNewUser);
    expect(mockUserModel.createNewUser).toBeCalledWith(calledWithFull);
  });

  it('O método createNewUser deve um novo usuario cadastrado com sucesso, passando como para parâmetro o usuario e email ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel.prototype, 'createNewUser').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUserWithEmail);

    expect(result).toEqual(resultExpectCreateNewUser);
    expect(mockUserModel.createNewUser).toBeCalledWith(calledWithEmail);
  });

  it('O método createNewUser deve um novo usuario cadastrado com sucesso, passando como para parâmetro o usuario e cell ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel.prototype, 'createNewUser').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUserWithCell);

    expect(result).toEqual(resultExpectCreateNewUser);
    expect(mockUserModel.createNewUser).toBeCalledWith(calledWithCell);
  });

  it('O método createNewUser deve um novo usuario cadastrado com sucesso, passando como para parâmetro somente o usuario ', async function () {
    prismaMock.user.findUnique.mockResolvedValue(null);
    jest.spyOn(UserModel.prototype, 'createNewUser').mockResolvedValue(resultCreateNewUser);

    const result = await mockUserService.createNewUser(newUser);

    expect(result).toEqual(resultExpectCreateNewUser);
    expect(mockUserModel.createNewUser).toBeCalledWith(calledWithUser);
  });
});
