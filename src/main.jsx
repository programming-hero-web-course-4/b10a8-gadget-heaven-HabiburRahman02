import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import ProductProvider from './provider/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#F7F7F7] mx-2 md:px-0'>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </div>
  </StrictMode>,
)
