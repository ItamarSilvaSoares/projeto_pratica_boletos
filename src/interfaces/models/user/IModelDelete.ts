export interface IModelDelete {
  delete: (username: string) => Promise<void>
}
