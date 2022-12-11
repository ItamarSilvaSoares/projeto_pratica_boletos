export interface IUser {
  user_id?: number
  name: string
  lastname: string
  username: string
  password?: string
}

export interface INewUser {
  name: string
  lastname: string
  username: string
  password: string
}

export interface IUserUpdate {
  name?: string
  lastname?: string
  username?: string
  password?: string
}

export interface INewUserFull {
  newUser: INewUser
  cell?: { cell: string }
  email?: { email: string }
}

export interface IJwtUser {
  userId: number
  name: string
  lastname: string
  username: string
}
