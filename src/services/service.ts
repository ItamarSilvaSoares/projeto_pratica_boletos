import { IJwtUser } from '../interfaces/models/user/IUser';
import { HttpException } from '../utils/httpException';
import { StatusCodes } from '../utils/constants';
import { IModel } from '../interfaces/models/IModel';
import { IDataUser } from '../interfaces/IData';

export default abstract class Service<t> {
  private readonly model: IModel<t>;
  private readonly cellOrEmail: string;

  constructor(model: IModel<t>, cellOrEmail: string) {
    this.model = model;
    this.cellOrEmail = cellOrEmail;
  }

  private async validateData(idData: number, user: IJwtUser): Promise<void> {
    const data = await this.model.findOne(Number(idData)) as any;
    if (data === null) {
      throw new HttpException(StatusCodes.NotFound,
        `${this.cellOrEmail} not found`);
    }
    if (data.idUser !== user.userId) {
      throw new HttpException(StatusCodes.Unauthorized,
        `${this.cellOrEmail} is not your`);
    }
  }

  async delete({ data: { idData }, user }: IDataUser): Promise<void> {
    await this.validateData(Number(idData), user);

    await this.model.delete(Number((idData)));
  }

  async update({ data: { data, idData }, user }: IDataUser): Promise<void> {
    await this.validateData(Number(idData), user);

    await this.model.update(Number(idData), data);
  }

  async create({ data: { data }, user }: IDataUser): Promise<void> {
    await this.model.create(data, Number(user.userId));
  }

  async find(user: IJwtUser): Promise<t[]> {
    const result = await this.model.find(Number(user.userId));
    return result;
  }
}
