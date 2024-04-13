import * as yup from 'yup'

export const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  message: yup.string().required('Message is required'),
})
