import { EButtonVariant } from '@/types'
import { Link } from 'react-router-dom'
import { clsxm } from '@/utils'

interface IButtonProps {
  children: React.ReactNode
  className?: string
  variant?: EButtonVariant
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
}

export const Button = ({ children, className, variant, icon, href, onClick }: IButtonProps) => {
  if (href) {
    return (
      <Link
        to={href}
        className={clsxm(
          `w-full py-3 font-semibold rounded-md`,
          { 'bg-gray': variant === EButtonVariant.SECONDARY },
          { 'bg-red text-white': variant === EButtonVariant.PRIMARY },
          { 'flex items-center gap-2 justify-center': icon },
          { 'flex items-center justify-center': href },
          className
        )}
      >
        {icon ? icon : undefined} {children}
      </Link>
    )
  }

  return (
    <button
      className={clsxm(
        `w-full py-3 font-semibold rounded-md`,
        { 'bg-gray': variant === EButtonVariant.SECONDARY },
        { 'bg-red text-white': variant === EButtonVariant.PRIMARY },
        { 'flex items-center gap-2 justify-center': icon },
        className
      )}
      onClick={onClick && onClick}
    >
      {icon && icon} {children}
    </button>
  )
}
