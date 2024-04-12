import { IUserCreate } from '@/types'
import { instance } from '.'

// tạo user
export const createUser = async (data: IUserCreate) => {
  return await instance.post('/users', data)
}

// lấy danh sách user
export const getUsers = async () => {
  return await instance.get('/users')
}

// xóa user
export const deleteUser = async (id: number) => {
  return await instance.delete(`/users/${id}`)
}

// edit user
export const editUser = async (id: number, data: IUserCreate) => {
  return await instance.put(`/users/${id}`, data)
}

// get one user
export const getOneUser = async (id: number) => {
  return await instance.get(`/users/${id}`)
}
