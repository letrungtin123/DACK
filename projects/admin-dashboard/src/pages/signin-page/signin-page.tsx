import { Button, FormGroup, Input, PlusIcon } from '@/components'

import Logo from '../../../public/logo.svg'
import { EButtonVariant } from '@/types'

const SigninPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col w-[576px] gap-[50px]'>
        <img src={Logo} alt='' className='w-[250px] mx-auto' />

        <div className='rounded-tl-xl rounded-br-xl bg-gray-l1 py-[30px] w-full flex flex-col gap-10'>
          <div className='relative text-center'>
            <h2 className='w-full mx-auto text-xl font-semibold'>Welcome to Location Panel</h2>
          </div>

          <div className='w-[450px] mx-auto flex flex-col gap-10'>
            <div className='bg-red-l1 text-white text-sm font-medium text-center p-2.5 rounded-md'>
              Please login with your Username and Password
            </div>

            <form className='flex flex-col gap-10'>
              <FormGroup>
                <Input placeholder='Username' />
              </FormGroup>

              <FormGroup>
                <Input placeholder='Password' type='password' />
              </FormGroup>

              <Button
                variant={EButtonVariant.PRIMARY}
                className='max-w-[300px] mx-auto flex items-center justify-center'
              >
                Login
                <PlusIcon />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
