import 'react-toastify/dist/ReactToastify.css'
import 'sweetalert2/src/sweetalert2.scss'

import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { routers } from './routes'

function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer />
    </>
  )
}

export default App
