/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsxm } from '@/utils'
import { useController } from 'react-hook-form'

interface InputProps {
  type?: string
  placeholder?: string
  id?: string
  className?: string
  control?: any
  defaultValue?: string
}

export const Input = ({
  type = 'text',
  placeholder = '',
  id,
  className,
  control,
  defaultValue: defaultValueProp
}: InputProps) => {
  const { field } = useController({
    name: id || '',
    control,
    defaultValue: defaultValueProp ? defaultValueProp : ''
  })

  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      {...field}
      defaultValue={defaultValueProp}
      className={clsxm(`border border-gray-l2 rounded-md p-2 outline-none focus:border-gray-100`, className)}
    />
  )
}
