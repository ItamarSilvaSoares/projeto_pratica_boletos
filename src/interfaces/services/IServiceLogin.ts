export interface IServiceLogin {
  login: (username: string, password: string) => Promise<string>
}
