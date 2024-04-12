export interface IUserCreate {
  name: string
  mobileNumber: string
  email: string
  Password: string
}

export interface IUser {
  name: string
  mobileNumber: string
  email: string
  Password: string
  status: boolean
  id: number
  created_at: string
  updated_at: string
}
