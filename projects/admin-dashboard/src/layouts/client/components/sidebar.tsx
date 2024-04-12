import { IActiveDasboard, IDashboard } from '@/types'
import { SquareIcon, UserExcutive, UserSingleIcon } from '@/components'

import { DashboardList } from '.'
import { useState } from 'react'

const dashboardList: IDashboard[] = [
  {
    id: 1,
    title: 'Dashboard',
    icons: <SquareIcon />
  }
]

const adminList: IDashboard[] = [
  {
    id: 1,
    title: 'Admin',
    icons: <UserSingleIcon />
  }
]

const executiveList: IDashboard[] = [
  {
    id: 1,
    title: 'Executive',
    icons: <UserExcutive />
  }
]

export const SidebarLayout = () => {
  const [isActive, setIsActive] = useState<IActiveDasboard>({
    id: 1,
    title: 'Dashboard',
    isActive: true
  })

  return (
    <div className='w-[350px] flex-shrink-0 pl-10 my-5 pr-5 border-r border-r-gray-d1'>
      <div className='p-3 border border-black rounded-lg'>
        <DashboardList
          active={{
            isActive,
            setIsActive
          }}
          title='Main'
          data={dashboardList}
        />

        <DashboardList
          active={{
            isActive,
            setIsActive
          }}
          title='Admin'
          data={adminList}
        />

        <DashboardList
          active={{
            isActive,
            setIsActive
          }}
          title='Executive'
          data={executiveList}
        />
      </div>
    </div>
  )
}
