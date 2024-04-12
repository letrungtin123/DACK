import { clsxm } from '@/utils'

interface INavigateBar {
  title: string
  url: string
  name: string
  icon?: React.ReactNode
  index: number
  className?: {
    classNameTitle?: string
    classNameGroup?: string
    classNameLink?: string
  }
  id: number
  handleClick: (index: number) => void
}

export const NavigateBar = ({ icon, name, title, className, index, id, handleClick }: INavigateBar) => {
  return (
    <div className='pb-10'>
      <h2 className={clsxm(`text-base font-medium`, className?.classNameTitle)}>{title}</h2>

      <div
        className={clsxm(
          `flex items-center gap-2 px-2 py-3 border-l-4 border-l-black-l1 rounded-tr-[5px] rounded-br-[5px]`,
          { 'bg-primary text-white': index === id },
          className?.classNameGroup
        )}
        onClick={() => handleClick(index)}
      >
        {icon && icon}
        <div className={clsxm(`block w-full`, className?.classNameLink)}>{name}</div>
      </div>
    </div>
  )
}
