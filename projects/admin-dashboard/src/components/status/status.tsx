import { clsxm } from '@/utils'

interface StatusProps {
  status: string
  className?: string
}

export const Status = ({ status, className }: StatusProps) => {
  return <div className={clsxm(className)}>{status}</div>
}
