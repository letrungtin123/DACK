import { IconProps } from '@/types'
import { clsxm } from '@/utils'

export const UserIconSolid = ({ className, height, width }: IconProps) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={clsxm(className?.classNameSvg)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
        clipRule='evenodd'
        className={clsxm(className?.classNamePath)}
      />
    </svg>
  )
}

export const UserSingleIcon = ({ className, height, width }: IconProps) => {
  return (
    <svg
      className={clsxm(className?.classNameSvg)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      width={width || 24}
      height={height || 24}
    >
      <path
        fillRule='evenodd'
        d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
        clipRule='evenodd'
        className={clsxm(className?.classNamePath)}
      />
    </svg>
  )
}

export const UserExcutive = ({ className, height, width }: IconProps) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={clsxm(className?.classNameSvg)}
    >
      <path
        className={clsxm(className?.classNamePath)}
        d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'
      />
    </svg>
  )
}
