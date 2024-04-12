import { IActiveDasboard, IDashboard } from '@/types'

import { clsxm } from '@/utils'
import { Link } from 'react-router-dom'

interface DashboardListProps {
  title: string
  data: IDashboard[]
  active: {
    isActive: IActiveDasboard
    setIsActive: (value: IActiveDasboard) => void
  }
}

export const DashboardList = ({ title, data, active }: DashboardListProps) => {
  return (
    <div className='mb-10'>
      <h2 className='pb-2 mb-2 text-base font-medium border-b border-b-gray-300'>{title}</h2>
      <div className='flex flex-col gap-1'>
        {data.map((dashboard) => (
          <Link
            to={`/${dashboard.title.toLowerCase()}`}
            key={dashboard.id}
            className={clsxm(
              `flex items-center gap-2 py-3 pl-3 border-l-4 rounded-tr-xl rounded-br-xl border-l-black cursor-pointer`,
              { 'border-l-4 border-l-gray-d2': dashboard.title !== active.isActive.title },
              { 'border-l-4 text-white bg-primary': dashboard.title === active.isActive.title }
            )}
            onClick={() => active.setIsActive({ ...dashboard, isActive: true })}
          >
            <span>{dashboard.icons}</span>
            <span>{dashboard.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
