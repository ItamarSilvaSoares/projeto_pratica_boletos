import { prismaMock } from './mocks/singleton';
import CellModel from '../../../models/Cell'


describe('test da model Cell', () => {
  it('deve retornar os dados corretamente qunada se atualiza um cell', function() {
    prismaMock.cell.update.mockResolvedValue()
  })
})
