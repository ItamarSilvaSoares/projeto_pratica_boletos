import { prismaMock } from '../models/mocks/singleton';
import EmailService from '../../../services/email.service';

import { allEmailReturnDb, emailReturnDb, findOneMockEmail, findOneMockOtherEmail, mockEmailInterface, userMockEmail } from './mocks/email.service.mock';

describe('teste do service Email', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve executar a função delete corretamente', async function () {
    prismaMock.email.delete.mockResolvedValue(emailReturnDb);
    prismaMock.email.findUnique.mockResolvedValue(findOneMockEmail);

    await EmailService.delete(mockEmailInterface);

    expect.assertions(2);
    expect(prismaMock.email.delete).toBeCalled()
    expect(prismaMock.email.delete).toBeCalledTimes(1)
  });

  it('deve dar um erro quando se tenta deletar um email invalido', async function () {
    prismaMock.email.delete.mockResolvedValue(emailReturnDb);
    prismaMock.email.findUnique.mockResolvedValue(null);
    try {
      await EmailService.delete(mockEmailInterface);
    } catch (error: any) {
      expect.assertions(2);

      expect(error.message).toEqual('email not found')
      expect(error.status).toEqual(404)
    }
  });

  it('deve dar um erro quando se tenta deletar um email que não pertence ao usuario', async function () {
    prismaMock.email.delete.mockResolvedValue(emailReturnDb);
    prismaMock.email.findUnique.mockResolvedValue(findOneMockOtherEmail);

    try {
      await EmailService.delete(mockEmailInterface);
    } catch (error: any) {
      expect.assertions(2);

      expect(error.message).toEqual('email is not your')
      expect(error.status).toEqual(401)
    }
  });

  it('deve executar a função update corretamente', async function () {
    prismaMock.email.update.mockResolvedValue(emailReturnDb);
    prismaMock.email.findUnique.mockResolvedValue(findOneMockEmail);

    await EmailService.update(mockEmailInterface);

    expect.assertions(2);
    expect(prismaMock.email.update).toBeCalled()
    expect(prismaMock.email.update).toBeCalledTimes(1)
  })

  it('deve executar a função create corretamente', async function () {
    prismaMock.email.create.mockResolvedValue(emailReturnDb);

    await EmailService.create(mockEmailInterface);

    expect.assertions(2);
    expect(prismaMock.email.create).toBeCalled()
    expect(prismaMock.email.create).toBeCalledTimes(1)
  })

  it('deve retornar todos os emails do usuario', async function () {
    prismaMock.email.findMany.mockResolvedValue(allEmailReturnDb);

    const result = await EmailService.find(userMockEmail);

    expect.assertions(2);
    expect(result).toEqual(allEmailReturnDb);
    expect(result.length).toEqual(2);
  })
})