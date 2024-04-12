import { IUser, IUserCreate } from '@/types'
import { createUser, editUser, getOneUser } from '@/apis'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { userSchema } from '@/validators'
import { yupResolver } from '@hookform/resolvers/yup'

export const useUserForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // useState
  const [userInfo, setUserInfo] = useState<IUser | null>(null)
  const [status, setStatus] = useState<boolean>(true)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(userSchema)
  })

  // xử lý logic change status
  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.id === 'Active') // true or false
  }

  // sử lý logic submit form
  const onSubmit = async (data: IUserCreate | IUser) => {
    try {
      const userInfo = {
        ...data,
        status: status,
        created_at: new Date(),
        updated_at: new Date()
      }
      if (id) {
        // nếu mà có id thì sẽ gọi api edit user
        const editEditUser = { ...userInfo, updated_at: new Date() }
        await editUser(Number(id), editEditUser)
        toast.success('Edit user successfully')
      } else {
        // nếu không có id thì sẽ gọi api create user
        await createUser(userInfo)
        toast.success('Add user successfully')
      }
      navigate('/admin')
    } catch (error) {
      toast.error('Add user failed')
    }
  }

  // kiểm tra xem nếu id tồn tại thì fetch data từ api
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return
        const response = await getOneUser(Number(id))
        setUserInfo(response.data)
        setStatus(response.data.status)

        // field data vào form
        setValue('name', response.data.name)
        setValue('mobileNumber', response.data.mobileNumber)
        setValue('email', response.data.email)
        setValue('Password', response.data.Password)
      } catch (error) {
        toast.error('Get user failed')
      }
    }
    fetchData()
  }, [id, setValue])

  return {
    // react hook form
    register,
    handleSubmit,
    control,
    errors,
    setValue,

    // useState
    status,
    userInfo,

    // handle logic
    handleChangeStatus,
    onSubmit
  }
}
