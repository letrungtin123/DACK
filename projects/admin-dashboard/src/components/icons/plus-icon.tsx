import { IconProps } from '@/types'
import { clsxm } from '@/utils'

export const PlusIcon = ({ className, height, width }: IconProps) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={clsxm(className?.classNameSvg)}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
        className={clsxm(className?.classNamePath)}
      />
    </svg>
  )
}
