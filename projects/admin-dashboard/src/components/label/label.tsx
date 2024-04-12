import { clsxm } from '@/utils'

interface ILabelProps {
  children: React.ReactNode
  className?: string
  htmlFor?: string
}

export const Label = ({ children, className, htmlFor }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className={clsxm('text-xl font-medium text-red', className)}>
      {children}
    </label>
  )
}
