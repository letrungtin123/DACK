import { HeaderLayout, SidebarLayout } from './components'
import { Link, Outlet, useLocation } from 'react-router-dom'

const LayoutClient = () => {
  // lấy ra đường dẫn hiện tại
  // es6 destructuring
  const { pathname } = useLocation()

  const handlePathName = (pathname: string) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard'
      case '/admin':
        return 'Admin'
      case '/executive':
        return 'Executive'
      default:
        return 'Dashboard'
    }
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {/* header */}
      <HeaderLayout />

      <div className='flex h-screen gap-5 pr-5'>
        <SidebarLayout />

        <div className='flex flex-col w-full min-h-screen gap-5 py-5'>
          <div className='w-full p-3 border border-b rounded-md bg-gray-l1 border-gray-l9 border-b-gray-l9'>
            <Link to={`/`} className='text-base font-medium text-primary'>
              Home
            </Link>

            {' > '}
            {/* p có class là display: inline-block = span */}
            <span className='text-base font-medium text-primary'>{handlePathName(pathname)}</span>
          </div>

          <div className='w-full bg-gray-l9 h-[.0625rem]'></div>

          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayoutClient
