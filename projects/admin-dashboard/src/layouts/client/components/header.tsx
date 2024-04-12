import { ArrowIcon, Button, UserIconSolid } from '@/components'

import { EButtonVariant } from '@/types'
import Logo from '../../../../public/logo.svg'

export const HeaderLayout = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 border-b shadow-md border-b-black'>
      <img src={Logo} alt='' className='w-[250px] h-[78px]' />
      <Button className='w-fit rounded-[10px] px-2' variant={EButtonVariant.PRIMARY} icon={<UserIconSolid />}>
        User ABC
        <ArrowIcon />
      </Button>
    </div>
  )
}
