import { clsxm } from '@/utils'

interface FormGroupProps {
  children: React.ReactNode
  className?: string
}

export const FormGroup = ({ children, className }: FormGroupProps) => {
  return <div className={clsxm(`flex flex-col gap-2`, className)}>{children}</div>
}
