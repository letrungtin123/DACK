import { Button, Title } from '@/components'

import { Link } from 'react-router-dom'
import { clsxm } from '@/utils'
import { initialData } from './init'

const DashboardPage = () => {
  return (
    <div>
      <Title title='Users' />

      <div className='grid grid-cols-3 gap-[30px] mt-4'>
        {initialData.map((data) => (
          <Link key={data.id} to={data.href}>
            <div className='bg-white border-red border rounded-[8px] p-2 select-none'>
              <div className='rounded-[5px] bg-gray-l1 shadow-md py-4 flex flex-col justify-center items-center gap-4'>
                <Button className='h-[50px] w-[50px] bg-red text-white flex justify-center items-center'>
                  {data.icon}
                </Button>

                <Button
                  className={clsxm(
                    'h-[20px] w-[20px] bg-gray-l11 text-white flex justify-center items-center text-sm',
                    { 'text-yellow bg-gray-l11': data.id === 1 },
                    { 'bg-blue text-black': data.id === 2 }
                  )}
                >
                  {data.number}
                </Button>

                <p className='border border-t-red w-fit'>{data.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
