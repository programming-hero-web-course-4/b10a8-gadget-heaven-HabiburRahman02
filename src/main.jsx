import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import ProductProvider from './provider/ProductProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#F7F7F7] px-2 md:px-0'>
      <ProductProvider>
        <HelmetProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </HelmetProvider>
      </ProductProvider>
    </div>
  </StrictMode>,
)
