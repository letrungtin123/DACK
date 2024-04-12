import * as yup from 'yup'

export const userSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    mobileNumber: yup.string().required('Mobile number is required'),
    email: yup.string().email('Không đúng định dạng email').required('Email is required'),
    Password: yup.string().required('Password is required')
  })
  .required()
