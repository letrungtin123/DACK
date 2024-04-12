import { clsxm } from '@/utils'

interface ITitleProps {
  title: string
  className?: string
}

export const Title = ({ title, className }: ITitleProps) => {
  // return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
  return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
}
