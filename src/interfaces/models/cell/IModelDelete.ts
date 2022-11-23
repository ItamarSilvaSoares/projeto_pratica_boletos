export interface IModelDelete {
  delete: (cellId: number) => Promise<void>
}
