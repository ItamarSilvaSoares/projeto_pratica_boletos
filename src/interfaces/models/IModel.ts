
export interface IModel<t> {
  delete: (dataId: number) => Promise<void>
  find: (idUser: number) => Promise<t[]>
  findOne: (dataId: number) => Promise<t | null>
  create: (data: string, idUser: number) => Promise<void>
  update: (dataId: number, data: string) => Promise<t>
}
