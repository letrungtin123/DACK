import { Button, FormGroup, Label, Status, Title } from '@/components'

import { clsxm } from '@/utils'
import { useUserForm } from '@/hooks'

const EditUserPage = () => {
  const { register, handleChangeStatus, handleSubmit, onSubmit, status, userInfo, errors } = useUserForm()

  return (
    <div className='min-h-screen'>
      <Title title='Edit New User' />

      <div className='mt-[30px] pb-10'>
        <form className='w-[450px] flex flex-col gap-[30px]' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label className='capitalize' htmlFor='Name'>
              Name:
            </Label>
            <input
              type='text'
              placeholder='Name'
              id='Name'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('name')}
              defaultValue={userInfo?.name}
            />
            {errors.name && <p className='text-red'>{errors.name.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Mobile Number'>
              Mobile Number:
            </Label>
            <input
              type='text'
              placeholder='Mobile number'
              id='mobileNumber'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('mobileNumber')}
              defaultValue={userInfo?.mobileNumber}
            />
            {errors.mobileNumber && <p className='text-red'>{errors.mobileNumber.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='email'>
              email:
            </Label>
            <input
              type='text'
              placeholder='email'
              id='email'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('email')}
              defaultValue={userInfo?.email}
            />
            {errors.email && <p className='text-red'>{errors.email.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Password'>
              Password:
            </Label>
            <input
              type='text'
              placeholder='Password'
              id='Password'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('Password')}
              defaultValue={userInfo?.Password}
            />
            {errors.Password && <p className='text-red'>{errors.Password.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Active'>
              Status:
            </Label>
            <FormGroup className='flex-row gap-5'>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='Status'
                  className='w-6 h-6'
                  id='Active'
                  checked={status}
                  onChange={(event) => handleChangeStatus(event)}
                />
                <Label className='capitalize text-black-l1' htmlFor='Active'>
                  Active
                </Label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='Status'
                  className='w-6 h-6'
                  id='InActive'
                  checked={!status}
                  onChange={(event) => handleChangeStatus(event)}
                />
                <Label className='capitalize text-black-l1' htmlFor='InActive'>
                  InActive
                </Label>
              </div>
            </FormGroup>
          </FormGroup>
          <Status
            className={clsxm(
              'border w-fit p-2.5 rounded-lg',
              { 'border-blue-l1 text-blue-l1': status === true }, // status
              { 'border-red text-red': status === false } // !status
            )}
            status={status ? 'Active' : 'InActive'}
          />

          <Button className='text-white bg-red w-full max-w-[200px]'>Add User</Button>
        </form>
      </div>
    </div>
  )
}

export default EditUserPage
